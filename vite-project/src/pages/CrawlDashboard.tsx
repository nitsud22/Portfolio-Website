import crawldash from "@/assets/crawl-dash.png";
import crawler from "@/assets/CrawlER.png";
import poster from "@/assets/Team_5_Poster.jpg";
import { useEffect } from "react";
import { Footer } from "@/components/Footer";

function CrawlDashboard() {
  useEffect(() => {
    document.title = "Crawl Dashboard";
  }, []);

  return (
    // This max-width container is a great practice for readability.
    <div className="mx-auto max-w-5xl px-4 md:px-0">
      <div className="py-4">
        {/* REFACTORED: H1 now uses clamp() for fluid font sizing instead of stepped breakpoints. */}
        <h1 className="text-[clamp(1.5rem,4vw,1.875rem)] text-left">
          <span className="md:hidden">
            Web-Crawler Health Monitoring Dashboard
          </span>
          <span className="hidden md:inline">
            A Full-Stack Visualization Dashboard for Real-Time Webcrawler Health
            and Performance Monitoring
          </span>
        </h1>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* REFACTORED: Main content width is now a flexible fraction of its parent, not a rigid viewport width. */}
        <main className="md:w-3/4 w-full text-left">
          <img
            src={crawldash}
            alt="Webcrawler Dashboard"
            className="w-full rounded-lg py-2"
          />

          {/* All sections below use clamp() for fluid typography on headings. */}
          <section id="overview" className="scroll-m-[10vh] pt-10">
            <h2 className="text-[clamp(1.5rem,4vw,1.875rem)] font-semibold tracking-tight">
              Overview
            </h2>
            <div id="about" className="mt-8 space-y-2">
              <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-semibold">
                About
              </h3>
              <p className="text-[clamp(1rem,1.5vw,1.125rem)]">
                In 2024 I was fortunate enough to participate in the UCR Data
                Science Fellowship. A NSF funded 8 week program which covered
                all aspects of the data science proces from data wrangling to
                data modeling. In addition our cohort was split into teams that
                would work with a mentor on a data science project. My team was
                partnered with the start-up CrawlBee, a real-estate data seller
                which used web-crawlers to scrape the information from sites
                like Zillow.
              </p>
            </div>
            <div id="goal" className="mt-8 space-y-2">
              <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-semibold">
                Goal
              </h3>
              <p className="text-[clamp(1rem,1.5vw,1.125rem)]">
                Develop a Health-Monitoring Dashboard solution for the
                web-crawlers CrawlBee uses to scrape data. Ensuring easy
                monitoring of key metrics.
              </p>
            </div>
            <div id="team" className="mt-8 space-y-2">
              <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-semibold">
                Team
              </h3>
              <p className="text-[clamp(1rem,1.5vw,1.125rem)]">
                My team consisted of 4 members including myself. Our work was
                distributed in sections as follows: API Development & Testing,
                Database Management (MySQL), and Front-end (Grafana). I was in
                charge of of the Database management as well as some aspects of
                leadership, although it was more of a equal team.
              </p>
            </div>
          </section>

          <section id="database" className="mt-8 scroll-m-[10vh]">
            <h2 className="text-[clamp(1.5rem,4vw,1.875rem)] font-semibold">
              Database
            </h2>
            <img
              src={crawler}
              alt="Entity Relationship Diagram"
              className="w-full rounded-lg py-2"
            />
            <div className="mt-4 space-y-4 text-[clamp(1rem,1.5vw,1.125rem)]">
              <p>
                MySQL was chosen as the Database Management System due to
                straightforward nature of the data that would be ingested. We
                were given samples of the data which contained a lot of
                information pertaining to their Web-Crawlers, such as Crawl_ID,
                what node was used to host these crawlers and more. Thus we as a
                team chose to include the information that would be best for
                analyzing the health of these Web-Crawlers. I was in charge of
                designing the database from scratch, ensuring that all
                relationships made logical sense and were easy to query.
              </p>
              <p>
                An Amazon EC2 Server was used to host the database on. Which is
                where the database ingested temporary data and connected to our
                Grafana front end.
              </p>
            </div>
          </section>

          <section id="result" className="mt-8 scroll-m-[10vh] space-y-4">
            <h2 className="text-[clamp(1.5rem,4vw,1.875rem)] font-semibold">
              Result
            </h2>
            <div className="py-2">
              <a
                href="https://github.com/cullm001/CrawlSense"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[clamp(1.125rem,2.5vw,1.25rem)] text-black underline hover:underline dark:text-blue-800"
              >
                Github Repository
              </a>
            </div>
            <img
              src={crawldash}
              alt="Webcrawler Dashboard"
              className="w-full rounded-lg py-2"
            />
            <img src={poster} alt="poster" className="w-full rounded-lg py-2" />
            <p className="text-[clamp(1rem,1.5vw,1.125rem)]">
              The poster was presented to guests at the 2024 UCR Data Science
              Symposium to friends and family, as well as working professionals
              and professors.
            </p>
          </section>

          <section id="reflection" className="mt-8 scroll-m-[10vh]">
            <h2 className="text-[clamp(1.5rem,4vw,1.875rem)] font-semibold">
              Reflection
            </h2>
            <div className="mt-2 space-y-4 text-[clamp(1rem,1.5vw,1.125rem)]">
              <p>
                I learned a lot, not only technically but also soft-skill wise.
                I had an idea of what it would look like to work with a real
                client, however actually being put in the position really shook
                things up. Constant and clear communication was key as well as
                living up to the standarsds placed upon me. Our partners would
                tell us what they wanted and needed, and I had to do it. Even if
                I did not know how or what to do, I had to figure it out because
                the trust was place upon me to deliver a product that would
                satisfy the client. Thank you for reading!
              </p>
            </div>
          </section>
        </main>
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
}

export default CrawlDashboard;
