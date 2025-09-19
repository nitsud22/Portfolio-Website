import crawldash from "@/assets/crawl-dash.png";
import { ScrollSpySidebar } from "@/components/ScrollSpySidebar";

const navItems = [{ id: "overview", title: "Overview", level: 1 as const }];

function CrawlDashboard() {
  return (
    <div className="sm:px-4 md:px-0 max-w-5xl mx-auto">
      <div className="py-4">
        <h1 className="text-3xl sm:text-4xl text-left">
          A Full-Stack Visualization Dashboard for Real-Time Webcrawler Health
          and Performance Monitoring
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <main className="w-full text-left">
          <img
            src={crawldash}
            alt="Linear vs Logistic Regression"
            className="py-2 "
          />
          <section id="overview" className="scroll-m-[10vh]">
            <h2 className="mt-10 text-2xl font-semibold tracking-tight md:text-3xl">
              Overview
            </h2>
          </section>
        </main>

        <aside className="hidden lg:block w-[25vh]">
          <ScrollSpySidebar items={navItems} />
        </aside>
      </div>
    </div>
  );
}

export default CrawlDashboard;
