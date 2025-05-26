function Resume() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-background px-30">
      <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl p-8 space-y-6">
        <header className="grid grid-cols-3 items-center text-sm text-muted-foreground gap-2 py-4">
          {/* Left Stack: Location + LinkedIn */}
          <div className="flex flex-col justify-center items-start">
            <span>Yucaipa, CA</span>
            <a href="https://www.linkedin.com/in/dustinsantoso/">
              linkedin.com/dustinsantoso
            </a>
          </div>

          {/* Centered Name */}
          <div className="justify-self-center">
            <h1 className="text-3xl font-bold text-center text-black">
              Dustin Santoso
            </h1>
          </div>

          {/* Right Stack: Email + GitHub */}
          <div className="flex flex-col justify-center items-end text-right">
            <a href="mailto:dustin.santoso025@gmail.com">
              dustin.santoso025@gmail.com
            </a>
            <a href="https://github.com/nitsud22">github.com/nitsud22</a>
          </div>
        </header>

        <section className="text-left">
          <h2 className="text-xl font-semibold border-b text-left pb-1">
            Education
          </h2>
          <div className="flex justify-between pt-2">
            <h3 className="text-left">
              <b className="font-semibold">
                California State University, San Bernardino{" "}
              </b>
              - San Bernardino, CA
            </h3>
            <h3>Aug 2022 - May 2025</h3>
          </div>
          <div className="pl-4">
            <ul className="list-disc list-inside">
              <li> Bachelors of Science, Computer Science</li>
              <li>Minor: Data Science</li>
              <li>Summa Cum Laude | Cumulative GPA: 3.92</li>
              <li>
                {" "}
                Relevant Coursework: Database Systems, Into to Data Science,
                Intro to AI, Machine Learning, Statistics
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-2">
            <h3 className="text-left">
              <b className="font-semibold">Crafton Hills College </b> - Yucaipa,
              CA
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
          <h2 className="text-xl font-semibold border-b text-left pb-1">
            Employment
          </h2>
          <div className="flex justify-between pt-2">
            <h3 className="text-left">
              <b className="font-semibold">Tutor</b>- California State
              University, San Bernardino
            </h3>
            <h3>Jan 2024 - May 2025</h3>
          </div>
          <div className="pl-8">
            <ul className="list-disc list-outside">
              <li>
                Tutored undergraduate CSUSB students in computer science using
                various strategies to accommodate for differences in knowledge
                and learning methods
              </li>
              <li>
                Tutored courses such as: Intro to AI, Machine Learning,
                Operating Systems, Algorithm Analysis, etc.
              </li>
              <li>
                Assisted multiple students concurrently by concisely assessing
                each student’s academic foundation
              </li>
              <li>
                Fostered a welcoming and open environment for both students and
                faculty
              </li>
              <li>Continually honed interpersonal and communication skills</li>
            </ul>
          </div>
        </section>

        <section className="text-left">
          <h2 className="text-xl font-semibold border-b text-left pb-1">
            Experience
          </h2>
          <div className="flex justify-between pt-2">
            <h3 className="text-left">
              <b className="font-semibold">
                Undergraduate Data Science Researcher
              </b>
              - The Data Mine, Purdue University
            </h3>
            <h3>Aug 2024 - April 2025</h3>
          </div>
          <div className="pl-8">
            <ul className="list-disc list-outside">
              <li>
                Completed 25+ data science assignments related to data
                manipulation, extraction, visualization, and interpretation
              </li>
              <li>
                Collaborated in a team environment using the AGILE framework
              </li>
              <li>
                Completed a project which analyzed political polarization using
                a multimodal approach in partnership with ‘CCSE’
              </li>
              <li>
                Worked on data cleaning and labelling of 100+ C-SPAN data
                samples
              </li>
              <li>
                Developed a RNN using Tensorflow and Scikit-Learn to classify
                audio data in relation to political sentiment
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-2">
            <h3 className="text-left">
              <b className="font-semibold">Fellow</b>- Data Science Fellowship,
              University of California, Riverside
            </h3>
            <h3>Jun 2024 - Aug 2024</h3>
          </div>
          <div className="pl-8">
            <ul className="list-disc list-outside">
              <li>
                Developed a web-crawling dashboard provisioned by industry
                partner ‘CrawlBee’
              </li>
              <li>
                Participated 30+ workshops to reinforce topics related to:
                MySQL, R, Python, LLMs, NLP, and Deep Learning
              </li>
              <li>
                Attended Esri’s 2024 User Conference to witness data science’s
                real-world applications
              </li>
              <li>
                Showcased final poster at the Data Science Fellowship symposium
                to both experienced faculty and visiting guests
              </li>
            </ul>
          </div>
        </section>

        <section className="text-left">
          <h2 className="text-xl font-semibold border-b text-left pb-1">
            Projects
          </h2>
          <div className="flex justify-between pt-2">
            <h3 className="text-left">
              <b className="font-semibold">Crawl-Dashboard for CrawlBee</b>
            </h3>
          </div>
          <div className="pl-8">
            <ul className="list-disc list-outside ">
              <li>
                Developed an end-to-end solution for ‘CrawlBee’ to visualize
                crucial health metrics for web crawlers
              </li>
              <li>
                Collaborated with team members to design and implement a custom
                API to connect to CrawlBee’s data firehose
              </li>
              <li>
                Utilized MySQL to create an optimized database that factored in
                efficiency, stability, and data integrity
              </li>
              <li>
                Hosted database on an EC2 server and transported data to a
                custom dashboard built with Grafana
              </li>
              <li>
                Created data visualizations that displayed metrics such as: cpu
                usage, bandwidth usage, website status codes, crawl health, etc.
              </li>
            </ul>
          </div>
        </section>

        <section className="text-left">
          <h2 className="text-xl font-semibold border-b text-left pb-1">
            Skills
          </h2>
          <p className="text-sm text-muted-foreground pt-2">
            C++, Python, SQL, JavaScript, C#, R, HTML/CSS, React, ExpressJS,
            Excel
          </p>
        </section>
      </div>
    </div>
  );
}

export default Resume;
