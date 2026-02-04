"use client";

const interests = [
  "Computer Architecture",
  "Hardware Prefetching",
  "Robotics Chips",
  "AI Hardware Accelerators",
  "Memory Systems",
  "Edge Computing",
];

export default function ResearchInterests() {
  return (
    <section id="research" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
        🔬 Research Interests
      </h2>
      <hr className="border-border mb-6" />

      <div className="flex flex-wrap gap-3">
        {interests.map((interest) => (
          <span
            key={interest}
            className="px-4 py-2 bg-card-bg text-text-primary rounded-lg font-medium hover:shadow-md transition-shadow cursor-default"
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
}
