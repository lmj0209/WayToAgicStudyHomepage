"use client";

const notesByCategory = {
  Claude: [
    {
      title: "Claude Code 完全指南：使用方式、技巧与最佳实践",
      url: "https://www.cnblogs.com/knqiufan/p/19449849",
      date: "2024-01-15",
      tags: ["Claude", "PromptEngineering"],
    },
    {
      title: "skill很厉害的笔记",
      url: "https://www.cnblogs.com/knqiufan/p/19530852",
      date: "2024-02-10",
      tags: ["Claude", "Advanced"],
    },
  ],
};

export default function LearningNotes() {
  return (
    <section id="notes" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
        📚 学习笔记
      </h2>
      <hr className="border-border mb-6" />

      <div className="space-y-6">
        {Object.entries(notesByCategory).map(([category, notes]) => (
          <div key={category}>
            <h3 className="text-lg font-bold text-text-primary mb-3">{category}</h3>
            <hr className="border-border mb-3" />

            <div className="space-y-3">
              {notes.map((note, idx) => (
                <div key={idx} className="pl-4">
                  <a
                    href={note.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-dark hover:underline font-medium"
                  >
                    • {note.title}
                  </a>
                  <div className="flex items-center gap-3 mt-1 ml-4 text-xs text-text-secondary">
                    <span>{note.date}</span>
                    <span className="flex gap-2">
                      {note.tags.map((tag) => (
                        <span key={tag} className="text-primary">
                          #{tag}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
