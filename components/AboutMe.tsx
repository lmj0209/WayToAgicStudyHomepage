"use client";

export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-20">
      <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
        👋 About Me
      </h2>
      <hr className="border-border mb-6" />

      <div className="prose prose-slate max-w-none">
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          I am a Ph.D. student at the College of Computer Science, National University
          of Defense Technology (NUDT), advised by{" "}
          <a
            href="https://example.com"
            className="text-primary font-medium hover:underline"
          >
            Prof. John Smith
          </a>
          .
        </p>

        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          My research focuses on{" "}
          <span className="font-bold text-primary">Computer Architecture</span>,{" "}
          <span className="font-bold text-primary">Hardware Prefetching</span>, and{" "}
          <span className="font-bold text-primary">Robotics Chips</span>. I am particularly
          interested in designing efficient hardware architectures for emerging
          applications such as robotics and artificial intelligence.
        </p>

        <p className="text-sm text-text-secondary leading-relaxed">
          Previously, I received my B.S. degree from the School of Computer Science,
          National University of Defense Technology in 2022.
        </p>
      </div>
    </section>
  );
}
