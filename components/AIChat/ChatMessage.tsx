'use client';

interface ChatMessageProps {
  content: string;
  isUser: boolean;
}

export default function ChatMessage({ content, isUser }: ChatMessageProps) {
  return (
    <div className={`flex w-full mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <span className="mr-2 text-2xl flex-shrink-0">🤖</span>
      )}
      <div
        className={`max-w-[75%] px-4 py-2 ${
          isUser
            ? 'bg-primary text-white rounded-2xl rounded-br-sm'
            : 'bg-gray-100 text-gray-800 rounded-2xl rounded-bl-sm'
        }`}
      >
        <p className="text-sm whitespace-pre-wrap break-words">{content}</p>
      </div>
    </div>
  );
}
