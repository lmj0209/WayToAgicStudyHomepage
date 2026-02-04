"use client";

const education = [
  {
    period: "2022 - Present",
    degree: "Ph.D.",
    school: "National University of Defense Technology",
    department: "College of Computer Science",
  },
  {
    period: "2018 - 2022",
    degree: "B.S.",
    school: "National University of Defense Technology",
    department: "School of Computer Science",
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
        🎓 Education
      </h2>
      <hr className="border-border mb-6" />

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border" />

        {/* Education Items */}
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className="relative pl-8">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background-alt" />

              {/* Content */}
              <div className="bg-card-bg rounded-lg p-4 ml-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-text-secondary w-28">
                    {edu.period}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary">{edu.degree}</h4>
                    <p className="text-sm text-text-secondary">{edu.school}</p>
                    <p className="text-xs text-text-secondary">{edu.department}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
