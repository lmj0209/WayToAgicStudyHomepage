"use client";

export default function AIAboutMe() {
  return (
    <section id="about" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
        🔥 不忘初心
      </h2>
      <hr className="border-border mb-6" />

      <div className="prose prose-slate max-w-none">
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          我学习这门课程的目标和最终目标：
        </p>

        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          <span className="font-bold text-primary">1️⃣ 掌握 AI 编程</span> <span className="text-yellow-500">⭐⭐⭐⭐⭐⭐</span>
        </p>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          如何使用 Claude，如何配合 MCP，如何调用智能体。掌握这些后，我希望我能够实现基于论文开源代码更加快速地实现我的论文 Idea。原始的方法 debug 真的太慢了。
        </p>

        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          <span className="font-bold text-primary">2️⃣ 开发科研工具</span> <span className="text-yellow-500">⭐⭐⭐</span>
        </p>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          开发一些在科研生活中的工具，提高我的效率。
        </p>

        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          <span className="font-bold text-primary">3️⃣ 副业探索</span> <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
        </p>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          2026 年希望在 AI 编程上做一些副业。
        </p>

        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          <span className="font-bold text-primary">4️⃣ 最终结</span> <span className="text-yellow-500">⭐⭐⭐⭐⭐⭐</span>
        </p>
        <ul className="text-sm text-text-secondary leading-relaxed mb-4 list-disc list-inside space-y-1">
          <li>我已经实现我最原始的目标了，现在我实现代码只需要不停地写不同版本的 PRD</li>
          <li>并且我把这门课安利给了实验室的同门师弟师妹们</li>
        </ul>

        <p className="text-sm text-text-secondary leading-relaxed mt-4">
          如果你也对 AI 编程感兴趣，欢迎通过侧边栏的联系方式和我交流！
        </p>
      </div>
    </section>
  );
}
