import crawldash from "@/assets/crawl-dash.png";
import crawler from "@/assets/CrawlER.png";
import { ScrollSpySidebar } from "@/components/ScrollSpySidebar";

const navItems = [
  { id: "overview", title: "Overview", level: 1 as const },
  { id: "database", title: "Database", level: 1 as const },
];

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
            <div id="about" className="mt-8">
              <h3 className="text-xl font-semibold md:text-2xl">About</h3>
              <p className="mt-2 text-base md:text-lg">
                In 2024 I was fortunate enough to participate in the UCR Data
                Science Fellowship. A NSF funded 8 week program which covered
                all aspects of the data science proces from data wrangling to
                data modeling. In addition our cohort was split into teams that
                would work with a mentor on a data science project. My team was
                partnered with the start-up CrawlBee, a real-estate data seller
                to develop a web-crawler health monitoring dashboard.
              </p>
              <div className="py-2"></div>
              <h3 className="text-xl font-semibold md:text-2xl">Goal</h3>
              <p className="mt-2 text-base md:text-lg ">
                {" "}
                Develop a health-monitoring dashboard solution for web-crawlers,
                allowing easy monitoring of key metrics.{" "}
              </p>
              <div className="py-2"></div>
              <h3 className="text-xl font-semibold md:text-2xl">Team</h3>
              <p className="mt-2 text-base md:text-lg ">
                My team consisted of 4 members including myself. Our work was
                distributed in sections as follows: Data Loading (API), Database
                Management (MySQL), and Front-end (Grafana). I was in charge of
                of the Database management as well as some aspects of
                leadership, although it was more of a equal team.
              </p>
            </div>
          </section>
          <section id="database" className="scroll-m-[10vh]">
            <h2 className="mt-10 text-2xl font-semibold tracking-tight md:text-3xl">
              Database
            </h2>
            <img
              src={crawler}
              alt="Linear vs Logistic Regression"
              className="py-2 "
            />
            <div></div>
          </section>
        </main>

        <aside className="hidden lg:block ">
          <ScrollSpySidebar items={navItems} />
        </aside>
      </div>
    </div>
  );
}

export default CrawlDashboard;
