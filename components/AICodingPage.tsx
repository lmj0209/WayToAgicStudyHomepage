import AIAboutMe from "./AIAboutMe";
import QuickStart from "./QuickStart";
import LearningNotes from "./LearningNotes";
import ToolsRecommendations from "./ToolsRecommendations";

export default function AICodingPage() {
  return (
    <div className="space-y-12">
      <AIAboutMe />
      <QuickStart />
      <LearningNotes />
      <ToolsRecommendations />
    </div>
  );
}
