'use client';

import { useState } from 'react';
import AIChatWindow from './AIChatWindow';

export default function AIChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 浮动按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-primary-dark transition-all duration-300 z-40 ${isOpen ? 'scale-0' : 'scale-100 hover:scale-110'}`}
        aria-label={isOpen ? '关闭对话' : '打开对话'}
      >
        🤖
      </button>

      {/* 对话窗口 */}
      <AIChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
