import crawldash from "@/assets/crawl-dash.png";
import crawler from "@/assets/CrawlER.png";
import poster from "@/assets/Team_5_Poster.jpg";
import { Footer } from "@/components/Footer";
import { ScrollSpySidebar } from "@/components/ScrollSpySidebar";

const navItems = [
  { id: "overview", title: "Overview", level: 1 as const },
  { id: "database", title: "Database", level: 1 as const },
  { id: "result", title: "Result", level: 1 as const },
  { id: "reflection", title: "Reflection", level: 1 as const },
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
                which used web-crawlers to scrape the information from sites
                like Zillow.
              </p>
              <div className="py-2"></div>
              <h3 className="text-xl font-semibold md:text-2xl">Goal</h3>
              <p className="mt-2 text-base md:text-lg ">
                {" "}
                Develop a Health-Monitoring Dashboard solution for the
                web-crawlers CrawlBee uses to scrape data. Ensuring easy
                monitoring of key metrics.{" "}
              </p>
              <div className="py-2"></div>
              <h3 className="text-xl font-semibold md:text-2xl">Team</h3>
              <p className="mt-2 text-base md:text-lg ">
                My team consisted of 4 members including myself. Our work was
                distributed in sections as follows: API Development & Testing,
                Database Management (MySQL), and Front-end (Grafana). I was in
                charge of of the Database management as well as some aspects of
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
            <p className="mt-2">
              {" "}
              MySQL was chosen as the Database Management System due to
              straightforward nature of the data that would be ingested. We were
              given samples of the data which contained a lot of information
              pertaining to their Web-Crawlers, such as Crawl_ID, what node was
              used to host these crawlers and more. Thus we as a team chose to
              include the information that would be best for analyzing the
              health of these Web-Crawlers. I was in charge of designing the
              database from scratch, ensuring that all relationships made
              logical sense and were easy to query.
            </p>
            <p className="mt-2">
              {" "}
              An Amazon EC2 Server was used to host the database on. Which is
              where the database ingested temporary data and connected to our
              Grafana front end.
            </p>
          </section>
          <section id="result" className="scroll-m-[10vh]">
            <h2 className="mt-10 text-2xl font-semibold tracking-tight md:text-3xl">
              Result
            </h2>
            <div className="py-2">
              <a
                href="https://github.com/cullm001/CrawlSense"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-green-800 hover:underline dark:text-blue-800 md:text-xl"
              >
                Github Repository
              </a>
            </div>
            <img
              src={crawldash}
              alt="Linear vs Logistic Regression"
              className="py-2 "
            />
            <img src={poster} alt="poster" className="py-2 " />
            <p className="mt-2">
              {" "}
              The poster was presented to guests at the 2024 UCR Data Science
              Symposium to friends and family, as well as working professionals
              and professors.
            </p>
          </section>
          <section id="reflection" className="scroll-m-[10vh]">
            <h2 className="mt-10 text-2xl font-semibold tracking-tight md:text-3xl">
              Reflection
            </h2>

            <p className="mt-2">
              {" "}
              I learned a lot, not only technically but also soft-skill wise. I
              had an idea of what it would look like to work with a real client,
              however actually being put in the position really shook things up.
              Constant and clear communication was key as well as living up to
              the standarsds placed upon me. Our partners would tell us what
              they wanted and needed, and I had to do it. Even if I did not know
              how or what to do, I had to figure it out because the trust was
              place upon me to deliver a product that would satisfy the client.
              Thank you for reading!
            </p>
          </section>
        </main>

        <aside className="hidden lg:block ">
          <ScrollSpySidebar items={navItems} />
        </aside>
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
}

export default CrawlDashboard;
