"use client";

export default function AIAboutMe() {
  return (
    <section id="about" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
        👋 About Me
      </h2>
      <hr className="border-border mb-6" />

      <div className="prose prose-slate max-w-none">
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          我是一名专注于 AI 辅助编程的学习者和实践者。作为国防科技大学计算机学院的博士生，
          我深感 AI 工具对提升编程效率的巨大帮助。
        </p>

        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          <span className="font-bold text-primary">我的 AI 编程之旅</span>
        </p>

        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          从 2023 年开始，我深入使用了多种 AI 编程工具，包括{" "}
          <span className="font-semibold text-primary">Claude Code</span>、
          <span className="font-semibold text-primary"> GitHub Copilot</span>、
          <span className="font-semibold text-primary"> Cursor</span> 等。
          在日常科研和开发工作中，这些工具帮助我：
        </p>

        <ul className="text-sm text-text-secondary leading-relaxed mb-4 list-disc list-inside space-y-1">
          <li>快速实现原型想法</li>
          <li>理解和维护遗留代码</li>
          <li>学习新的编程语言和框架</li>
          <li>自动化重复性任务</li>
        </ul>

        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          <span className="font-bold text-primary">学习心得</span>
        </p>

        <p className="text-sm text-text-secondary leading-relaxed">
          我认为 AI 编程不是要取代程序员，而是要成为程序员的"超级助手"。
          关键是学会如何与 AI 有效沟通，清晰地表达需求。
        </p>

        <p className="text-sm text-text-secondary leading-relaxed mt-4">
          如果你也对 AI 编程感兴趣，欢迎通过侧边栏的联系方式和我交流！
        </p>
      </div>
    </section>
  );
}
