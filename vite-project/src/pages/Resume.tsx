import { FiMapPin, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

function Resume() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-background">
      {/* Main container that holds resume and contact box */}
      <div className="w-full max-w-6xl flex gap-6 p-6">
        {/* Resume Section (75%) */}
        <div className="w-3/4 bg-white dark:bg-zinc-900 p-4 space-y-6">
          <section className="text-left">
            <h2 className="text-xl font-semibold border-b pb-1">Education</h2>
            <div className="flex justify-between pt-2">
              <h3>
                <b className="font-semibold">
                  California State University, San Bernardino
                </b>{" "}
                - San Bernardino, CA
              </h3>
              <h3>Aug 2022 - May 2025</h3>
            </div>
            <div className="pl-4">
              <ul className="list-disc list-inside">
                <li>Bachelors of Science, Computer Science</li>
                <li>Minor: Data Science</li>
                <li>Summa Cum Laude | GPA: 3.92</li>
                <li>
                  Relevant Coursework: Database Systems, Intro to Data Science,
                  Intro to AI, Machine Learning, Statistics
                </li>
              </ul>
            </div>

            <div className="flex justify-between pt-2">
              <h3>
                <b className="font-semibold">Crafton Hills College</b> -
                Yucaipa, CA
              </h3>
              <h3>Aug 2022 - May 2025</h3>
            </div>
            <div className="pl-4">
              <ul className="list-disc list-inside">
                <li>Associate for Transfer, Computer Science</li>
                <li>Transfer GPA: 3.87</li>
              </ul>
            </div>
          </section>

          <section className="text-left">
            <h2 className="text-xl font-semibold border-b pb-1">Employment</h2>
            <div className="flex justify-between pt-2">
              <h3>
                <b className="font-semibold">Tutor</b> - California State
                University, San Bernardino
              </h3>
              <h3>Jan 2024 - May 2025</h3>
            </div>
            <div className="pl-8">
              <ul className="list-disc list-outside">
                <li>
                  Tutored undergraduate CSUSB students in computer science using
                  various strategies
                </li>
                <li>
                  Tutored courses such as: Intro to AI, Machine Learning,
                  Operating Systems, Algorithm Analysis, etc.
                </li>
                <li>
                  Assisted multiple students concurrently by assessing academic
                  foundations
                </li>
                <li>Fostered a welcoming and open environment</li>
                <li>Honed interpersonal and communication skills</li>
              </ul>
            </div>
          </section>

          <section className="text-left">
            <h2 className="text-xl font-semibold border-b pb-1">Experience</h2>
            <div className="flex justify-between pt-2">
              <h3>
                <b className="font-semibold">
                  Undergraduate Data Science Researcher
                </b>{" "}
                - The Data Mine, Purdue University
              </h3>
              <h3>Aug 2024 - April 2025</h3>
            </div>
            <div className="pl-8">
              <ul className="list-disc list-outside">
                <li>Completed 25+ data science assignments</li>
                <li>Collaborated using the AGILE framework</li>
                <li>Analyzed political polarization using multimodal data</li>
                <li>Worked on cleaning and labeling C-SPAN data samples</li>
                <li>Developed an RNN for political sentiment classification</li>
              </ul>
            </div>

            <div className="flex justify-between pt-2">
              <h3>
                <b className="font-semibold">Fellow</b> - Data Science
                Fellowship, UC Riverside
              </h3>
              <h3>Jun 2024 - Aug 2024</h3>
            </div>
            <div className="pl-8">
              <ul className="list-disc list-outside">
                <li>Developed a web-crawling dashboard with CrawlBee</li>
                <li>Participated in 30+ workshops on MySQL, R, Python, LLMs</li>
                <li>Attended Esri’s 2024 User Conference</li>
                <li>Showcased final poster at fellowship symposium</li>
              </ul>
            </div>
          </section>

          <section className="text-left">
            <h2 className="text-xl font-semibold border-b pb-1">Projects</h2>
            <div className="flex justify-between pt-2">
              <h3>
                <b className="font-semibold">Crawl-Dashboard for CrawlBee</b>
              </h3>
            </div>
            <div className="pl-8">
              <ul className="list-disc list-outside">
                <li>Developed an end-to-end dashboard for CrawlBee</li>
                <li>Implemented a custom API for data ingestion</li>
                <li>Built an optimized MySQL database</li>
                <li>Hosted backend on EC2 and visualized with Grafana</li>
                <li>Displayed key metrics: CPU, bandwidth, health, etc.</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="w-1/4 bg-white dark:bg-zinc-900 p-4 h-fit space-y-6 text-left self-start rounded-2xl">
          <h2 className="text-xl font-semibold mb-4 border-b pb-1">Contact</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-2 ">
              <FiMapPin /> Yucaipa, CA
            </p>
            <p className="flex items-center gap-2">
              <FiMail />
              <a href="mailto:dustin.santoso025@gmail.com">
                dustin.santoso025@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FiLinkedin />
              <a href="https://www.linkedin.com/in/dustinsantoso/">
                linkedin.com/dustinsantoso
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FiGithub />
              <a href="https://github.com/nitsud22">github.com/nitsud22</a>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-1">Skills</h2>
            <p className="text-sm text-muted-foreground">
              C++, Python, SQL, JavaScript, C#, R, HTML/CSS, React, ExpressJS,
              Excel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
