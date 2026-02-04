import AboutMe from "./AboutMe";
import ResearchInterests from "./ResearchInterests";
import Publications from "./Publications";
import Education from "./Education";

export default function AcademicPage() {
  return (
    <div className="space-y-12">
      <AboutMe />
      <ResearchInterests />
      <Publications />
      <Education />
    </div>
  );
}
