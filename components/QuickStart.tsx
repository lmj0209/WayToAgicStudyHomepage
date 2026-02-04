"use client";

import { useState } from "react";

const learningStages = [
  {
    id: 1,
    title: "环境配置篇",
    links: [
      { title: "环境配置快速指南", url: "https://vcnt4783we8d.feishu.cn/wiki/Clpbwts1GiuxgQkSdGKcuNO4ncb?from=from_copylink" },
      { title: "如何在claude配置切换多个模型", url: "https://www.cnblogs.com/knqiufan/p/19449849" },
    ],
  },
  {
    id: 2,
    title: "熟悉实践使用实战",
    links: [
      { title: "Claude常用命令", url: "https://vcnt4783we8d.feishu.cn/wiki/HfNqwUbPXiYFEUkrMAXcQMopnQb?from=from_copylink" },
      { title: "基础入门实战1", url: "https://www.yuque.com/yuqueyonghuwzzvqh/itc0en/qhf6wo9w100dyu2q?singleDoc# 《2早读神器制作》" },
      { title: "基础入门实战2", url: "https://www.yuque.com/yuqueyonghuwzzvqh/itc0en/tt9g9u2w9kkyukka?singleDoc# 《3.上课点名神器》" },
    ],
  },
  {
    id: 3,
    title: "Skill 熟悉使用",
    links: [
      { title: "skill理解|使用|实战|资源", url: "https://vcnt4783we8d.feishu.cn/wiki/E6txwnqXviGcnnkDqGacOT3gnvc?from=from_copylink" },
      { title: "高级实战|开发使用skill", url: "https://vcnt4783we8d.feishu.cn/wiki/UOSXwQH9CiBax1k2wXec50eknke?from=from_copylink" },
    ],
  },
  {
    id: 4,
    title: "理论其他学习资源",
    links: [
      { title: "AI编程学习资源", url: "https://vcnt4783we8d.feishu.cn/wiki/Gqm0wlmsBivwx3kM8QEct02Xn9b?from=from_copylink" },
      { title: "github和claude的配置使用", url: "https://vcnt4783we8d.feishu.cn/wiki/Kxwjw7GQpiin43k6og9cRyGsnjf?from=from_copylink" },
      { title: "代码没达到预期要怎么提问", url: "https://vcnt4783we8d.feishu.cn/wiki/TopEwQjFWiclsKkrQC2cGi6pnqg?from=from_copylink" },
    ],
  },
  {
    id: 5,
    title: "WayTOAgic作业",
    links: [
      { title: "第1次作业", url: "https://vcnt4783we8d.feishu.cn/wiki/WO9ywgxfiiwyLEkeEAWcjLxQnEb?from=from_copylink" },
      { title: "第2次作业", url: "https://vcnt4783we8d.feishu.cn/wiki/QkfSwPTsqiquCIk34RDcTik0nbe?from=from_copylink" },
      { title: "第3次作业", url: "https://vcnt4783we8d.feishu.cn/wiki/UOSXwQH9CiBax1k2wXec50eknke?from=from_copylink" },
      { title: "第4次作业", url: "https://vcnt4783we8d.feishu.cn/wiki/E6txwnqXviGcnnkDqGacOT3gnvc?from=from_copylink" },
      { title: "第5次作业", url: "https://vcnt4783we8d.feishu.cn/wiki/ILjlwn9LTiG0ESkjEKQcFPdxnyf?from=from_copylink" },
      { title: "第6次作业", url: "https://vcnt4783we8d.feishu.cn/wiki/FUo5w61oziRSMjk1UmQcoMtYnne?from=from_copylink" },
      { title: "第7次作业", url: "https://vcnt4783we8d.feishu.cn/wiki/EpZ0w3HTYiMzX1kLi05c5QEsnKw?from=from_copylink" },
      { title: "第8次作业", url: "https://vcnt4783we8d.feishu.cn/wiki/Vti0wQGgHi4rPdklH3WccUTRnOh?from=from_copylink" },
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
