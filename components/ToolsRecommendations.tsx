"use client";

const toolsByCategory = {
  "文献阅读": [
    {
      icon: "📚",
      name: "Zotero",
      description: "文献管理工具",
      url: "https://www.zotero.org",
    },
    {
      icon: "📖",
      name: "Obsidian",
      description: "知识管理",
      url: "https://obsidian.md",
    },
    {
      icon: "✨",
      name: "Notion",
      description: "笔记与协作",
      url: "https://www.notion.so",
    },
  ],
  "学术搜索": [
    {
      icon: "🔍",
      name: "Connected Papers",
      description: "学术文献",
      url: "https://www.connectedpapers.com",
    },
    {
      icon: "🎓",
      name: "Google Scholar",
      description: "学术搜索",
      url: "https://scholar.google.com",
    },
    {
      icon: "📄",
      name: "arXiv",
      description: "预印本",
      url: "https://arxiv.org",
    },
  ],
};

export default function ToolsRecommendations() {
  return (
    <section id="tools" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
        🤖 工具推荐
      </h2>
      <hr className="border-border mb-6" />

      <div className="space-y-8">
        {Object.entries(toolsByCategory).map(([category, tools]) => (
          <div key={category}>
            <h3 className="text-lg font-bold text-text-primary mb-4">{category}</h3>
            <hr className="border-border mb-4" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card-bg rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <h4 className="font-semibold text-text-primary mb-1">{tool.name}</h4>
                  <p className="text-sm text-text-secondary mb-3">{tool.description}</p>
                  <span className="text-xs text-primary font-medium">[访问工具]</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
