'use client';

import { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';

interface Message {
  content: string;
  isUser: boolean;
}

interface AIChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChatWindow({ isOpen, onClose }: AIChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    { content: '你好！我是 Mengjin 的 AI 数字分身 🤖 很高兴认识你！你可以问我关于学术研究、AI 编程的任何问题。', isUser: false }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (message: string) => {
    // 添加用户消息
    setMessages(prev => [...prev, { content: message, isUser: true }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/coze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          conversationId,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setMessages(prev => [...prev, { content: data.error, isUser: false }]);
      } else {
        setMessages(prev => [...prev, { content: data.reply, isUser: false }]);
        // 保存 conversation_id 以支持多轮对话
        if (data.conversationId) {
          setConversationId(data.conversationId);
        }
      }
    } catch (error) {
      setMessages(prev => [...prev, { content: '抱歉，服务暂时不可用，请稍后再试。', isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 w-96 h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-gray-200">
      {/* 标题栏 */}
      <div className="flex items-center justify-between px-4 py-3 bg-primary text-white">
        <div className="flex items-center gap-2">
          <span className="text-xl">🤖</span>
          <span className="font-medium">Ask Mengjin</span>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:bg-white/20 rounded w-8 h-8 flex items-center justify-center transition-colors"
          aria-label="关闭"
        >
          ×
        </button>
      </div>

      {/* 消息区域 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            content={message.content}
            isUser={message.isUser}
          />
        ))}
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* 输入区域 */}
      <div className="p-4 border-t border-gray-200">
        <ChatInput onSend={handleSend} disabled={isLoading} />
        <p className="text-xs text-gray-400 mt-2 text-center">
          提示：你可以问我关于学术、AI编程的任何问题！
        </p>
      </div>
    </div>
  );
}
