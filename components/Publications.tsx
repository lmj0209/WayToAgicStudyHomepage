"use client";

const publications = {
  "2024": [
    {
      title: "Efficient Hardware Prefetching for Robotics Workloads",
      authors: ["Author A", "Author B", "Mengjin Li", "Author D"],
      venue: "International Symposium on Computer Architecture (ISCA), 2024",
      links: {
        pdf: "https://example.com/paper1.pdf",
        code: "https://github.com/example/paper1",
        slides: "https://example.com/slides1.pdf",
        bibtex: "https://example.com/bibtex1",
      },
    },
    {
      title: "Designing Energy-Efficient AI Accelerators for Edge Robotics",
      authors: ["Mengjin Li", "Author E", "Author F"],
      venue: "IEEE/ACM International Symposium on Microarchitecture (MICRO), 2024",
      links: {
        pdf: "https://example.com/paper2.pdf",
        code: "https://github.com/example/paper2",
      },
    },
  ],
  "2023": [
    {
      title: "Adaptive Memory Prefetching for Deep Learning Applications",
      authors: ["Author G", "Mengjin Li", "Author H"],
      venue: "Journal of Systems Architecture, 2023",
      links: {
        pdf: "https://example.com/paper3.pdf",
      },
    },
  ],
};

export default function Publications() {
  return (
    <section id="publications" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
        📚 Publications
      </h2>
      <hr className="border-border mb-6" />

      <div className="space-y-8">
        {Object.entries(publications).map(([year, papers]) => (
          <div key={year}>
            <h3 className="text-lg font-bold text-text-primary mb-3">{year}</h3>
            <hr className="border-border mb-4" />

            <div className="space-y-5">
              {papers.map((paper, idx) => (
                <div key={idx} className="pl-4">
                  <h4 className="text-base font-semibold text-primary-dark mb-1 hover:underline">
                    <a href={paper.links.pdf || "#"} target="_blank" rel="noopener noreferrer">
                      {paper.title}
                    </a>
                  </h4>

                  <p className="text-sm text-text-secondary mb-1">
                    {paper.authors.map((author, i) => (
                      <span key={i}>
                        {author === "Mengjin Li" ? (
                          <span className="font-bold text-primary">{author}</span>
                        ) : (
                          <span>{author}</span>
                        )}
                        {i < paper.authors.length - 1 && ", "}
                      </span>
                    ))}
                  </p>

                  <p className="text-sm text-text-secondary italic mb-2">
                    {paper.venue}
                  </p>

                  <div className="flex flex-wrap gap-3 text-xs">
                    {paper.links.pdf && (
                      <a
                        href={paper.links.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        [PDF]
                      </a>
                    )}
                    {paper.links.code && (
                      <a
                        href={paper.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        [Code]
                      </a>
                    )}
                    {paper.links.slides && (
                      <a
                        href={paper.links.slides}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        [Slides]
                      </a>
                    )}
                    {paper.links.bibtex && (
                      <a
                        href={paper.links.bibtex}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        [BibTeX]
                      </a>
                    )}
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
