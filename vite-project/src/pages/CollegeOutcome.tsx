import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

import { Footer } from "@/components/Footer";
import { ScrollSpySidebar } from "@/components/ScrollSpySidebar";
import datasample from "../assets/dataframe_sample.png";
import logreg from "../assets/linvslog.jpg";
import results from "../assets/LogregOutput.png";
import stochasc from "../assets/StochAsc.png";

// Navigation structure for the scroll-spy sidebar
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

    // --- KaTeX Rendering for LaTeX formulas ---
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
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 pt-4 md:px-0">
      <div className="py-4">
        <h1 className="text-3xl text-left sm:text-4xl">
          Predicting College Outcomes Using Logistic Regression: A C++
          Implementation
        </h1>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row">
        <main className="w-full text-left">
          <img
            src={logreg}
            alt="Linear vs Logistic Regression"
            className="py-2"
          />

          <section id="overview" className="scroll-m-[10vh]">
            <h2 className="mt-10 text-2xl font-semibold tracking-tight md:text-3xl">
              Overview
            </h2>
            <div id="context" className="mt-8">
              <h3 className="text-xl font-semibold md:text-2xl">Context</h3>
              <p className="mt-2 text-base md:text-lg">
                As part of my Machine Learning course at California State
                University, San Bernardino, for our final project we had the
                option of comparing different Machine Learning models or a code
                implementation of a Machine Learning algorithm. I chose to do a
                C++ implementation of Logistic Regression.
              </p>
            </div>
            <div id="goal" className="mt-8">
              <h3 className="text-xl font-semibold md:text-2xl">Goal</h3>
              <p className="mt-2 text-base md:text-lg">
                Use Logsitic Regression to predict whether a student would
                Dropout or Graduate. This could be especially useful for
                providing students who are predicted to Dropout with the tools
                and support necessary to succeed.
              </p>
            </div>
          </section>

          <div className="py-4">
            <h3 className="text-xl font-semibold md:text-2xl">
              Logistic Regression
            </h3>
            <p className="mt-2 pb-4 text-base md:text-lg">
              Logistic Regression is a machine learning model used for binary
              classification. The model uses a set of predictors (either
              continuous or discrete) to estimate the probability of a given
              outcome. This is accomplished by modifying the Hypothesis Function
              <sub>1</sub> with the Sigmoid Function<sub>2</sub>, which maps any
              real-valued number to a value between 0 and 1, making it ideal for
              predicting probabilities of binary outcomes.
            </p>
            <p className="pb-4 text-base md:text-lg">
              To ensure the model's predictions are accurate, the weights
              (parameters) of this linear combination must be fitted to the
              training data. This is done by maximizing the log-likelihood
              function, which measures how well the model's predictions align
              with the actual outcomes. The maximization process is done through
              Stochastic Gradient Ascent.
            </p>
            <p className="pb-4 text-base md:text-lg">
              Once the weights are optimized, the model is capable of outputting
              the probability of a specific outcome given a new set of inputs.
            </p>
            <div className="flex flex-col items-center justify-center gap-y-8 text-center text-2xl md:flex-row md:gap-x-15">
              <div className="flex flex-col gap-5">
                <h2 className="text-xl font-semibold">
                  Hypothesis Function<sub>1</sub>
                </h2>
                <div ref={hypothesisfuncRef}></div>
              </div>
              <div> o </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-xl font-semibold">
                  Sigmoid Function<sub>2</sub>
                </h2>
                <div ref={sigmoidfuncref}></div>
              </div>

              <div> = </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">
                  Logistic Function<sub>3</sub>
                </h2>
                <div ref={formulaContainerRef}></div>
              </div>
            </div>
          </div>

          <section id="dataset" className="mt-8 scroll-m-[10vh]">
            <h2 className="text-2xl font-semibold md:text-3xl">Dataset</h2>
            <img
              src={datasample}
              alt="datasample"
              className="w-full rounded-lg py-2"
            />
            <div id="about" className="mt-4">
              <h3 className="text-xl font-semibold md:text-2xl">About</h3>
              <p className="mt-2 text-base md:text-lg">
                The dataset used to train the model was obtained from the UCI
                Machine Learning Repository. The data was sourced from a higher
                education institution in Portugal, containing 4426 records, 36
                attributes, and 3 outputs. Information was collected from
                students enrolled in undergraduate degrees ranging from
                Education to Technology.
              </p>
            </div>
            <div id="wrangling" className="mt-8">
              <h3 className="text-xl font-semibold md:text-2xl">Wrangling</h3>
              <p className="mt-2 text-base md:text-lg">
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

          <section id="implementation" className="mt-8 scroll-m-[10vh]">
            <h3 className="text-2xl font-semibold md:text-3xl">
              Implementation
            </h3>
            <div className="py-2">
              <a
                href="https://github.com/nitsud22/Predicting-College-Outcomes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-green-800 hover:underline dark:text-blue-800 md:text-xl"
              >
                Github Repository
              </a>
            </div>
            <a
              href="/Logistic_Regression_Implementation_CSE_5160.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-green-800 hover:underline dark:text-blue-800 md:hidden"
            >
              View Research Paper
            </a>
            <iframe
              className="mt-4 hidden h-[100vh] w-full md:block"
              src="/Logistic_Regression_Implementation_CSE_5160.pdf"
              title="Logistic Regression PDF"
            ></iframe>
          </section>

          <section id="results" className="mt-8 scroll-m-[10vh]">
            <h2 className="text-2xl font-semibold md:text-3xl">Results</h2>
            <img src={results} className="w-full py-6" alt="Model Results" />
            <h3 className="text-xl font-semibold md:text-2xl">Accuracy</h3>
            <p className="py-4">
              Out of all the model's predictions how many of them were correct
              predictions.
            </p>
            <p className="pb-4"> Accuracy: 91.1%</p>

            <h3 className="text-xl font-semibold md:text-2xl">Precision</h3>
            <p className="py-4">
              How often did the model correctly predict if a student would
              'Graduate' out of all the 'Graduate' predicitions
            </p>
            <p className="pb-4"> Precision: 96.3%</p>

            <h3 className="text-xl font-semibold md:text-2xl">Recall</h3>
            <p className="py-4">
              How often did the model correctly predict if a student would
              'Graduate' out of all the students in data set who did 'Graduate'.
            </p>
            <p className="pb-4"> Recall: 80.2%</p>
            <h3 className="text-xl font-semibold md:text-2xl">Meaning</h3>
            <p className="py-4">
              The model is very cautious when predicting if a student will
              Graduate in comparison to the amount of students who actually
              graduate, being shown through the Recall being only 80%. However,
              the caution allows the model to be highly precise when it does
              predict "Graduate". Overall this means the model is more willing
              to predict "Dropout" and be incorrect about it than predict
              "Graduate" and be incorrect. This is perfect for our scenario,
              when it comes to provding support and tools for student success.
              It is better to support a student who is going to graduate but is
              predicted to "Dropout" than it is to potentially not give support
              to a student who is going dropout, but is predicted to "Graduate".
            </p>
          </section>

          <section id="reflection" className="mt-8 scroll-m-[10vh]">
            <h3 className="text-2xl font-semibold md:text-3xl">Reflection</h3>
            <div className="mt-2 text-base md:text-lg">
              <p>
                After revisiting this project for this article, I came across a
                few issues that needed fixing from my original attempt.
              </p>
              <h4 className="mt-4 font-semibold">What Did Not Work:</h4>
              <ul className="list-inside list-decimal space-y-1 pl-5 text-base md:pl-10 md:text-lg">
                <li>Did not use python to wrangle the data.</li>
                <li>IOStream code was very strictly coded</li>
                <li>Accuracy, Precision, Recall were calculated incorrectly</li>
              </ul>
              <h4 className="mt-4 font-semibold">What Did Work:</h4>
              <ul className="list-inside list-decimal space-y-1 pl-5 text-base md:pl-10 md:text-lg">
                <li>
                  Code implementation of Logistic Regression worked as intended
                </li>
              </ul>
              <p className="mt-2">
                This project was one of the more challenging projects I have had
                to do, especially since I was only a 3rd Year in University when
                I took the course. Every aspect from data wrangling to
                translating the math to code was something I had to spend time
                understanding. It definitely made me gain some grit and a sense
                of awe for the people the people who pushed the limits of
                computer science. Thank you for reading!
              </p>
            </div>
          </section>
        </main>

        <aside className="hidden lg:block">
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
