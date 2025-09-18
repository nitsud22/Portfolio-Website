import datasample from "../assets/dataframe_sample.png";
import logreg from "../assets/linvslog.jpg";
import stochasc from "../assets/StochAsc.png";
import results from "../assets/LogregOutput.png";
import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

function CollegeOutcome() {
  // 2. Create a ref to hold the container element
  const formulaContainerRef = useRef(null);
  const hypothesisfuncRef = useRef(null);
  const sigmoidfuncref = useRef(null);
  const loglikeref = useRef(null);

  useEffect(() => {
    document.title = "Predicting College Outcomes";

    if (formulaContainerRef.current) {
      const latexString =
        "h_{\\theta}(x) = g(\\theta^{T}x) = \\frac{1}{1+e^{-\\theta^{T}x}}";
      katex.render(latexString, formulaContainerRef.current, {
        throwOnError: false,
      });
    }

    if (hypothesisfuncRef.current) {
      const latexString = "h_{\\theta}(x) = \\theta^{T}x";
      katex.render(latexString, hypothesisfuncRef.current, {
        throwOnError: false,
      });
    }

    if (sigmoidfuncref.current) {
      const latexString = "g(z) = \\frac{1}{1+e^{-z}}";
      katex.render(latexString, sigmoidfuncref.current, {
        throwOnError: false,
      });
    }

    if (loglikeref.current) {
      const latexString =
        "\\sum_{i=0}^{m}y^{(i)}\\log{h}_{\\theta}(x^{(i)}) + (1-y^{(i)})\\log{(1-h_{\\theta}(x^{(i)}))}";
      katex.render(latexString, loglikeref.current, {
        throwOnError: false,
      });
    }

    // --- SCROLL-SPY SIDEBAR LOGIC ---
    const sections = Array.from(
      document.querySelectorAll("[data-observe-section]")
    );
    const navLinks = document.querySelectorAll("div.sidebar-nav ul a");

    if (!sections.length || !navLinks.length) return;

    const parentMap: { [key: string]: string } = {
      about: "dataset",
      wrangling: "dataset",
    };

    const updateActiveLink = () => {
      let currentSectionId = "";
      const triggerLine = window.innerHeight * 0.4;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const id = section.getAttribute("id");
        if (sectionTop < triggerLine && id) {
          currentSectionId = id;
        }
      });

      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      if (isAtBottom) {
        currentSectionId =
          sections[sections.length - 1].getAttribute("id") ?? "";
      }

      const parentId = parentMap[currentSectionId];

      navLinks.forEach((link) => {
        const linkId = link.getAttribute("href")?.substring(1);
        if (linkId === currentSectionId || linkId === parentId) {
          link.setAttribute("data-active", "true");
        } else {
          link.removeAttribute("data-active");
        }
      });
    };

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

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
          <img src={logreg} alt="datasample" className="py-2" />
          <h2
            id="overview"
            data-observe-section
            className="mt-10 scroll-m-20 lg:text-3xl md:text-2xl text-xl tracking-wide font-semibold transition-colors first:mt-0"
          >
            Overview
          </h2>

          <div id="context" data-observe-section className="mt-8 scroll-m-20">
            <h3 className="md:text-2xl text-xl font-semibold">Context</h3>
            <p>
              As part of my Machine Learning course at California State
              University, San Bernardino, for our final project we had the
              option of comparing different Machine Learning models or a code
              implementation of a Machine Learning algorithm. I chose to do a
              C++ implementation of Logistic Regression.
            </p>
          </div>

          <div id="goal" data-observe-section className="mt-8 scroll-m-20">
            <h3 className="md:text-2xl text-xl font-semibold">Goal</h3>
            <p>
              Use Logsitic Regression to predict whether a student would Dropout
              or Graduate. This could be especially useful for providing
              students who are predicted to Dropout with the tools and support
              necessary to succeed.
            </p>
          </div>
          <div className=" py-4"></div>
          <div>
            <h3 className="md:text-2xl text-xl font-semibold">
              Logistic Regression
            </h3>
            <p className="pb-4">
              Logistic Regression is a machine learning model used for binary
              classification. The model uses a set of predictors (either
              continuous or discrete) to estimate the probability of a given
              outcome. This is accomplished by modifying the Hypothesis Function
              <sub>1</sub> with the Sigmoid Function<sub>2</sub>, which maps any
              real-valued number to a value between 0 and 1, making it ideal for
              predicting probabilities of binary outcomes.
            </p>
            <p className="pb-4">
              To ensure the model's predictions are accurate, the weights
              (parameters) of this linear combination must be fitted to the
              training data. This is done by maximizing the log-likelihood
              function, which measures how well the model's predictions align
              with the actual outcomes. The maximization process is done through
              Stochastic Gradient Ascent.
            </p>
            <p className="pb-4">
              Once the weights are optimized, the model is capable of outputting
              the probability of a specific outcome given a new set of inputs.
            </p>

            <div className="py-4"></div>
            <div className="flex items-center justify-start  text-center">
              {/* Hypothesis Function Block */}
              <div>
                <h3 className="text-xl font-semibold">
                  Hypothesis Function<sub> 1</sub>
                </h3>
                <div
                  className="py-10 text-black text-lg"
                  ref={hypothesisfuncRef}
                ></div>
              </div>
              <div className="text-xl mx-4">o</div>

              {/* Sigmoid Function Block */}
              <div>
                <h3 className="text-xl font-semibold">
                  Sigmoid Function<sub> 2</sub>
                </h3>
                <div
                  className="py-10 text-black text-lg"
                  ref={sigmoidfuncref}
                ></div>
              </div>
              <div className="text-xl mx-4 ">=</div>
              <div>
                <h3 className="text-xl font-semibold">
                  Modified Hypothesis Function<sub> 3</sub>
                </h3>
                <div
                  className="py-10 text-black text-lg"
                  id="formula-container"
                  ref={formulaContainerRef}
                ></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Log-Likelihood Function<sub> 4</sub>
              </h3>
              <div className="py-10 text-2xl" ref={loglikeref}></div>
            </div>
            <div className="">
              <h3 className="text-xl font-semibold">
                Stochastic Gradient Ascent<sub> 5</sub>
              </h3>
              <img src={stochasc} className="w-2/3 py-10 "></img>
            </div>
          </div>

          <div id="dataset" data-observe-section className="mt-8 scroll-m-20">
            <h2 className="md:text-3xl text-xl font-semibold">Dataset</h2>
            <img src={datasample} alt="datasample" className="py-2 w-full" />
          </div>

          <div id="about" data-observe-section className="mt-4 scroll-m-20">
            <h3 className="font-semibold md:text-2xl text-xl ">About</h3>
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

          <div>
            <h3 className="font-semibold md:text-3xl text-2xl">
              {" "}
              Implementation
            </h3>
            <div className="py-2">
              <a
                href="https://github.com/nitsud22/Predicting-College-Outcomes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-green-800 dark:text-blue-800 hover:underline"
              >
                Github Repository
              </a>
            </div>

            <iframe
              className="hidden md:block w-full h-[100vh] "
              src="/Logistic_Regression_Implementation_CSE_5160.pdf"
            ></iframe>
          </div>
          <div className="py-2"></div>
          <div>
            <h3 className="font-semibold md:text-3xl text-2xl"> Results</h3>
            <img src={results} className=" py-10 "></img>
          </div>
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

              <li>
                <a
                  href="#results"
                  className="block text-lg text-gray-500 transition-colors hover:text-black data-[active=true]:font-semibold data-[active=true]:text-green-900"
                >
                  Results
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
