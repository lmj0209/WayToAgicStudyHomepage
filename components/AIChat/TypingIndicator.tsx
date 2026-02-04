'use client';

export default function TypingIndicator() {
  return (
    <div className="flex items-center mb-4 text-sm text-gray-500">
      <span className="mr-2">🤖</span>
      <span>Mengjin 正在输入</span>
      <span className="ml-1 flex gap-1">
        <span className="animate-bounce">.</span>
        <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>.</span>
        <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
      </span>
    </div>
  );
}
