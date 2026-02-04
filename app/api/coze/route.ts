import { NextRequest, NextResponse } from 'next/server';

const COZE_API_URL = 'https://api.coze.cn/v3/chat';
const BOT_ID = process.env.NEXT_PUBLIC_COZE_BOT_ID;
const API_TOKEN = process.env.COZE_API_TOKEN;

// 辅助函数：等待指定毫秒
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Step 2: 轮询对话状态直到完成
async function pollChatStatus(conversationId: string, chatId: string): Promise<boolean> {
  const maxAttempts = 30; // 最多轮询 30 次
  const pollInterval = 1000; // 每次间隔 1 秒

  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(
        `${COZE_API_URL}/retrieve?conversation_id=${conversationId}&chat_id=${chatId}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${API_TOKEN}`,
          },
        }
      );

      const data = await response.json();

      if (data.code === 0 && data.data?.status === 'completed') {
        return true;
      }

      await sleep(pollInterval);
    } catch (error) {
      console.error('Poll error:', error);
      await sleep(pollInterval);
    }
  }

  return false; // 超时
}

// Step 3: 获取对话消息
async function getChatMessages(conversationId: string, chatId: string): Promise<string> {
  try {
    const response = await fetch(
      `${COZE_API_URL}/message/list?conversation_id=${conversationId}&chat_id=${chatId}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    if (data.code === 0 && data.data) {
      // 找到 type="answer" 的消息
      const answerMessage = data.data.find((msg: any) => msg.type === 'answer');
      return answerMessage?.content || '抱歉，我暂时无法回答这个问题。';
    }

    return '抱歉，我暂时无法回答这个问题。';
  } catch (error) {
    console.error('Get messages error:', error);
    return '抱歉，获取回复时出现错误。';
  }
}

export async function POST(request: NextRequest) {
  try {
    const { message, conversationId } = await request.json();

    if (!BOT_ID || !API_TOKEN) {
      return NextResponse.json(
        { error: '服务配置错误，请联系管理员。' },
        { status: 500 }
      );
    }

    // Step 1: 发起对话
    const chatResponse = await fetch(COZE_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bot_id: BOT_ID,
        user_id: 'web_visitor_' + Math.random().toString(36).substr(2, 9),
        stream: false,
        auto_save_history: true,
        additional_messages: [
          {
            role: 'user',
            content: message,
            content_type: 'text',
          },
        ],
        // 如果有 conversation_id，则继续之前会话
        ...(conversationId && { conversation_id: conversationId }),
      }),
    });

    const chatData = await chatResponse.json();

    if (chatData.code !== 0) {
      throw new Error(chatData.msg || '发起对话失败');
    }

    const { id: chatId, conversation_id: newConversationId } = chatData.data;

    // Step 2: 轮询直到对话完成
    const isCompleted = await pollChatStatus(newConversationId, chatId);

    if (!isCompleted) {
      return NextResponse.json({
        error: '对话超时，请稍后再试。',
      }, { status: 408 });
    }

    // Step 3: 获取回复内容
    const reply = await getChatMessages(newConversationId, chatId);

    return NextResponse.json({
      reply,
      conversationId: newConversationId,
    });
  } catch (error) {
    console.error('Coze API error:', error);
    return NextResponse.json(
      { error: '抱歉，服务暂时不可用，请稍后再试。' },
      { status: 500 }
    );
  }
}
