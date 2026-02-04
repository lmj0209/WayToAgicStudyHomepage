"use client";

export default function AIAboutMe() {
  return (
    <section id="about" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-text-primary mb-6 flex items-center">
        🔥 不忘初心
      </h2>
      <hr className="border-border mb-8" />

      <div className="space-y-8">
        {/* 引言 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-base font-bold text-primary mb-3">🔥 不忘初心回顾系列</h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            我学习这门课程的目标和最终目标：
          </p>
        </div>

        {/* 目标卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 目标 1 */}
          <div className="bg-white rounded-xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-base font-bold text-primary">1️⃣ 掌握 AI 编程</h3>
              <span className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              如何使用 Claude，如何配合 MCP，如何调用智能体。掌握这些后，我希望能够更加快速地实现我的论文 Idea —— 原始的方法 debug 真的太慢了。
            </p>
          </div>

          {/* 目标 2 */}
          <div className="bg-white rounded-xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-base font-bold text-primary">2️⃣ 开发科研工具</h3>
              <span className="text-yellow-500 text-sm">⭐⭐⭐</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              开发一些在科研生活中的工具，提高我的效率。
            </p>
          </div>

          {/* 目标 3 */}
          <div className="bg-white rounded-xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-base font-bold text-primary">3️⃣ 副业探索</h3>
              <span className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              2026 年希望在 AI 编程上做一些副业。
            </p>
          </div>

          {/* 目标 4 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-base font-bold text-green-600">4️⃣ 最终结</h3>
              <span className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐⭐</span>
            </div>
            <ul className="text-sm text-text-secondary leading-relaxed space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>已经实现最原始的目标了</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>实现代码只需要不停地写不同版本的 PRD</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>把这门课安利给了实验室的同门师弟师妹</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 联系方式 */}
        <div className="text-center py-4">
          <p className="text-sm text-text-secondary">
            如果你也对 AI 编程感兴趣，欢迎通过侧边栏的联系方式和我交流！
          </p>
        </div>
      </div>
    </section>
  );
}
