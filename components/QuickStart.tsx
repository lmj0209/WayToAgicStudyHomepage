"use client";

import { useState } from "react";

const learningStages = [
  {
    id: 1,
    title: "环境配置篇",
    links: [
      { title: "Claude Code 官方文档", url: "https://docs.anthropic.com" },
      { title: "环境配置快速指南", url: "https://example.com/setup" },
    ],
  },
  {
    id: 2,
    title: "熟悉实践使用实战",
    links: [
      { title: "Claude Code 基础教程", url: "https://example.com/basics" },
      { title: "实战案例分析", url: "https://example.com/cases" },
    ],
  },
  {
    id: 3,
    title: "Skill 熟悉使用",
    links: [
      { title: "自定义 Skill 开发", url: "https://example.com/skills" },
      { title: "Skill 最佳实践", url: "https://example.com/skill-best" },
    ],
  },
  {
    id: 4,
    title: "MCP 协议深度应用",
    links: [
      { title: "MCP 协议介绍", url: "https://example.com/mcp-intro" },
      { title: "MCP 服务器开发", url: "https://example.com/mcp-server" },
    ],
  },
  {
    id: 5,
    title: "理论学习资源",
    links: [
      { title: "大模型原理综述", url: "https://example.com/llm-theory" },
      { title: "提示工程指南", url: "https://example.com/prompt-eng" },
    ],
  },
];

export default function QuickStart() {
  const [expandedStages, setExpandedStages] = useState<Set<number>>(new Set([1, 2]));

  const toggleStage = (id: number) => {
    const newExpanded = new Set(expandedStages);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedStages(newExpanded);
  };

  return (
    <section id="quickstart" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
        🚀 快速学习推荐
      </h2>
      <hr className="border-border mb-6" />

      <div className="space-y-3">
        {learningStages.map((stage) => (
          <div key={stage.id} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleStage(stage.id)}
              className="w-full px-4 py-3 flex items-center justify-between bg-background-alt hover:bg-card-bg transition-colors"
            >
              <span className="font-medium text-text-primary">
                {stage.id}. {stage.title}
              </span>
              <span className="text-text-secondary">
                {expandedStages.has(stage.id) ? "▼" : "▶"}
              </span>
            </button>

            {expandedStages.has(stage.id) && (
              <div className="px-4 py-3 bg-background border-t border-border">
                <ul className="space-y-2">
                  {stage.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        <span className="mr-2">•</span>
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
