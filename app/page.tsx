import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import AICodingPage from "@/components/AICodingPage";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="ai-coding" />
      <main className="w-full px-4 py-8 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="lg:w-[280px] lg:flex-shrink-0">
              <Sidebar />
            </div>
            <div className="flex-1 min-w-0">
              <AICodingPage />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
