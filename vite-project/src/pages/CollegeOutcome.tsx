import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

import { Footer } from "@/components/Footer";
import { ScrollSpySidebar } from "@/components/ScrollSpySidebar"; // 1. Import the reusable component
import datasample from "../assets/dataframe_sample.png";
import logreg from "../assets/linvslog.jpg";
import stochasc from "../assets/StochAsc.png";
import results from "../assets/LogregOutput.png";

// 2. Define the navigation structure in a data array
const navItems = [
  { id: "overview", title: "Overview", level: 1 as const },
  { id: "dataset", title: "Dataset", level: 1 as const },
  { id: "implementation", title: "Implementation", level: 1 as const },
  { id: "results", title: "Results", level: 1 as const },
  { id: "reflection", title: "Reflection", level: 1 as const },
];

function CollegeOutcome() {
  const formulaContainerRef = useRef(null);
  const hypothesisfuncRef = useRef(null);
  const sigmoidfuncref = useRef(null);
  const loglikeref = useRef(null);

  useEffect(() => {
    document.title = "Predicting College Outcomes";

    // --- KaTeX Rendering ---
    if (formulaContainerRef.current) {
      const latexString = " \\frac{1}{1+e^{-\\theta^{T}x}}";
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
      katex.render(latexString, loglikeref.current, { throwOnError: false });
    }
    // 3. Old scroll-spy logic has been removed from this hook.
  }, []);

  return (
    <div className="px-4 md:px-0 max-w-5xl mx-auto pt-4">
      <div className="py-4">
        <h1 className="text-3xl sm:text-4xl text-left">
          Predicting College Outcomes Using Logistic Regression: A C++
          Implementation
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <main className="w-full text-left">
          <img
            src={logreg}
            alt="Linear vs Logistic Regression"
            className="py-2 "
          />

          {/* 4. Sections now have IDs that match the navItems array */}
          <section id="overview" className="scroll-m-[10vh]">
            <h2 className="mt-10 text-2xl md:text-3xl font-semibold tracking-tight">
              Overview
            </h2>
            <div id="context" className="mt-8">
              <h3 className="text-xl md:text-2xl font-semibold">Context</h3>
              <p className="text-base md:text-lg mt-2">
                As part of my Machine Learning course at California State
                University, San Bernardino, for our final project we had the
                option of comparing different Machine Learning models or a code
                implementation of a Machine Learning algorithm. I chose to do a
                C++ implementation of Logistic Regression.
              </p>
            </div>
            <div id="goal" className="mt-8">
              <h3 className="text-xl md:text-2xl font-semibold">Goal</h3>
              <p className="text-base md:text-lg mt-2">
                Use Logsitic Regression to predict whether a student would
                Dropout or Graduate. This could be especially useful for
                providing students who are predicted to Dropout with the tools
                and support necessary to succeed.
              </p>
            </div>
          </section>

          <div className="py-4">
            <h3 className="text-xl md:text-2xl font-semibold">
              Logistic Regression
            </h3>
            <p className="text-base md:text-lg mt-2 pb-4">
              Logistic Regression is a machine learning model used for binary
              classification. The model uses a set of predictors (either
              continuous or discrete) to estimate the probability of a given
              outcome. This is accomplished by modifying the Hypothesis Function
              <sub>1</sub> with the Sigmoid Function<sub>2</sub>, which maps any
              real-valued number to a value between 0 and 1, making it ideal for
              predicting probabilities of binary outcomes.
            </p>
            <p className="text-base md:text-lg pb-4">
              To ensure the model's predictions are accurate, the weights
              (parameters) of this linear combination must be fitted to the
              training data. This is done by maximizing the log-likelihood
              function, which measures how well the model's predictions align
              with the actual outcomes. The maximization process is done through
              Stochastic Gradient Ascent.
            </p>
            <p className="text-base md:text-lg pb-4">
              Once the weights are optimized, the model is capable of outputting
              the probability of a specific outcome given a new set of inputs.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-y-8 md:gap-x-15 text-center text-2xl">
              <div className="flex flex-col gap-5">
                <h2 className="font-semibold text-xl">
                  Hypothesis Function<sub>1</sub>
                </h2>
                <div ref={hypothesisfuncRef}></div>
              </div>
              <div> o </div>
              <div className="flex flex-col gap-5">
                <h2 className="font-semibold text-xl">
                  Sigmoid Function<sub>2</sub>
                </h2>
                <div ref={sigmoidfuncref}></div>
              </div>

              <div> = </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-xl">
                  Logistic Function<sub>3</sub>
                </h2>
                <div ref={formulaContainerRef}></div>
              </div>
            </div>
          </div>

          <section id="dataset" className="scroll-m-[10vh] mt-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Dataset</h2>
            <img
              src={datasample}
              alt="datasample"
              className="py-2 w-full rounded-lg"
            />
            <div id="about" className="mt-4">
              <h3 className="font-semibold text-xl md:text-2xl">About</h3>
              <p className="text-base md:text-lg mt-2">
                The dataset used to train the model was obtained from the UCI
                Machine Learning Repository. The data was sourced from a higher
                education institution in Portugal, containing 4426 records, 36
                attributes, and 3 outputs. Information was collected from
                students enrolled in undergraduate degrees ranging from
                Education to Technology.
              </p>
            </div>
            <div id="wrangling" className="mt-8">
              <h3 className="font-semibold text-xl md:text-2xl">Wrangling</h3>
              <p className="text-base md:text-lg mt-2">
                The data was already pre-cleaned so little work additional work
                was needed. I did use python to drop target values classified as
                "Enrolled", as well as mapped "Graduate" to '1' and "Dropout" to
                '0'. I made use of libraries such as pandas for dropping missing
                & null records, Seaborn for visualizations, Sci-Kit Learn for
                data splitting, and more. I ended up using a 70 / 30
                training-testing split.
              </p>
            </div>
          </section>

          <section id="implementation" className="scroll-m-[10vh] mt-8">
            <h3 className="font-semibold text-2xl md:text-3xl">
              Implementation
            </h3>
            <div className="py-2">
              <a
                href="https://github.com/nitsud22/Predicting-College-Outcomes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl text-green-800 dark:text-blue-800 hover:underline"
              >
                Github Repository
              </a>
            </div>
            <a
              href="/Logistic_Regression_Implementation_CSE_5160.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden text-lg text-green-800 dark:text-blue-800 hover:underline"
            >
              View Research Paper
            </a>
            <iframe
              className="hidden md:block w-full h-[100vh] mt-4"
              src="/Logistic_Regression_Implementation_CSE_5160.pdf"
              title="Logistic Regression PDF"
            ></iframe>
          </section>

          <section id="results" className="scroll-m-[10vh] mt-8">
            <h3 className="font-semibold text-2xl md:text-3xl">Results</h3>
            <img src={results} className="py-6 w-full" alt="Model Results" />
          </section>

          <section id="reflection" className="scroll-m-[10vh] mt-8">
            <h3 className="font-semibold text-2xl md:text-3xl">Reflection</h3>
            <div className="text-base md:text-lg mt-2">
              <p>
                After revisiting this project for this article, I came across a
                few issues that needed fixing from my original attempt.
              </p>
              <h4 className="font-semibold mt-4">What Did Not Work:</h4>
              <ul className="list-decimal list-inside text-base md:text-lg pl-5 md:pl-10 space-y-1">
                <li>Did not use python to wrangle the data.</li>
                <li>IOStream code was very strictly coded</li>
                <li>Accuracy, Precision, Recall were calculated incorrectly</li>
              </ul>
              <h4 className="font-semibold mt-4">What Did Work:</h4>
              <ul className="list-decimal list-inside text-base md:text-lg pl-5 md:pl-10 space-y-1">
                <li>
                  Code implementation of Logistic Regression worked as intended
                </li>
              </ul>
            </div>
          </section>
        </main>

        {/* 5. Render the reusable sidebar component */}
        <aside className="hidden lg:block  ">
          <ScrollSpySidebar items={navItems} />
        </aside>
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
}

export default CollegeOutcome;
