import datasample from "../assets/dataframe_sample.png";
import newj from "../assets/newjeans.png";
import { useEffect } from "react";

function CollegeOutcome() {
  useEffect(() => {
    document.title = "Predicting College Outcomes";

    // --- SCROLL-SPY SIDEBAR LOGIC ---

    const sections = Array.from(
      document.querySelectorAll("[data-observe-section]")
    );
    const navLinks = document.querySelectorAll("div.sidebar-nav ul a");

    if (!sections.length || !navLinks.length) return;

    // This map tells the sidebar which parent item to keep active
    // when a child item is visible.
    const parentMap: { [key: string]: string } = {
      about: "dataset",
      wrangling: "dataset",
    };

    const updateActiveLink = () => {
      let currentSectionId = "";
      const triggerLine = window.innerHeight * 0.4; // Activate when section is 40% up the screen

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const id = section.getAttribute("id");
        if (sectionTop < triggerLine && id) {
          currentSectionId = id;
        }
      });

      // Handle being at the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      if (isAtBottom) {
        currentSectionId =
          sections[sections.length - 1].getAttribute("id") ?? "";
      }

      const parentId = parentMap[currentSectionId];

      navLinks.forEach((link) => {
        const linkId = link.getAttribute("href")?.substring(1);

        // Set link to active if it's the current section OR its child is the current section
        if (linkId === currentSectionId || linkId === parentId) {
          link.setAttribute("data-active", "true");
        } else {
          link.removeAttribute("data-active");
        }
      });
    };

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink(); // Run once on load

    // Cleanup function to remove the listener
    return () => {
      window.removeEventListener("scroll", updateActiveLink);
    };
  }, []); // Empty array ensures this runs only once

  return (
    <div className="px-4 md:px-0 max-w-5xl mx-auto pt-4">
      <div className="py-4">
        <h1 className="text-4xl  text-left ">
          Predicting College Outcomes Using Logistic Regression: A C++
          Implementation
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left column: Main Content */}
        <div className="w-full text-left">
          <img src={newj} alt="datasample" className="py-2" />
          <h2
            id="overview"
            data-observe-section
            className="mt-10 scroll-m-20 lg:text-3xl md:text-2xl text-xl tracking-wide font-semibold transition-colors first:mt-0"
          >
            Overview
          </h2>

          <div id="context" data-observe-section className="mt-8 scroll-m-20">
            <h3 className="text-xl font-semibold">Context</h3>
            <p>
              As part of my Machine Learning course at California State
              University, San Bernardino, for our final project we had the
              option of comparing different Machine Learning models or a code
              implementation of a Machine Learning algorithm. I chose to do a
              C++ implementation of Logistic Regression.
            </p>
          </div>

          <div id="goal" data-observe-section className="mt-8 scroll-m-20">
            <h3 className="text-xl font-semibold">Goal</h3>
            <p>
              Use Logsitic Regression, a supervised learning model, to predict
              outcomes of College students.
            </p>
          </div>
          <div className="py-[35vh]"></div>
          <div id="dataset" data-observe-section className="mt-8 scroll-m-20">
            <h2 className="text-2xl font-semibold">Dataset</h2>
            <img src={datasample} alt="datasample" className="py-2" />
          </div>

          <div id="about" data-observe-section className="mt-4 scroll-m-20">
            <h3 className="font-semibold text-lg">About</h3>
            <p>
              The dataset used to train the model was obtained from the UCI
              Machine Learning Repository. The data was sourced from a higher
              education institution in Portugal, containing 4426 records, 36
              attributes, and 3 outputs. Information was collected from students
              enrolled in undergraduate degrees ranging from Education to
              Technology.
            </p>
          </div>

          <div id="wrangling" data-observe-section className="mt-8 scroll-m-20">
            <h3 className="font-semibold text-lg">Wrangling</h3>
            <p>
              The data was already pre-cleaned so little work additional work
              was needed. I did use python to drop target values classified as
              "Enrolled", as well as mapped "Graduate" to '1' and "Dropout" to
              '0'. I made use of libraries such as pandas for dropping missing &
              null records, Seaborn for visualizations, Sci-Kit Learn for data
              splitting, and more. I ended up using a 70 / 30 training-testing
              split.
            </p>
          </div>
          <div className="py-2"></div>
        </div>

        {/* Right column: On this page sidebar */}
        <div className="hidden lg:block self-start sticky top-8 whitespace-nowrap list-outside text-left w-[35vh]">
          <h2 className="sscroll-m-20 text-2xl font-semibold transition-colors first:mt-0 pb-2 py-4 ">
            On This Page
          </h2>
          <div>
            <ul className="text-lg space-y-2 pl-1">
              <li>
                <a
                  href="#overview"
                  className="block text-lg text-gray-500 transition-colors hover:text-black data-[active=true]:font-semibold data-[active=true]:text-green-900"
                >
                  Overview
                </a>
              </li>

              <li>
                <a
                  href="#dataset"
                  className="block text-lg text-gray-500 transition-colors hover:text-black data-[active=true]:font-semibold data-[active=true]:text-green-900"
                >
                  Dataset
                </a>
              </li>

              <li>
                <a
                  href="#implemntation"
                  className="block text-lg text-gray-500 transition-colors hover:text-black data-[active=true]:font-semibold data-[active=true]:text-green-900"
                >
                  Implementation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeOutcome;
