import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

import { Footer } from "@/components/Footer";
import datasample from "../assets/dataframe_sample.png";
import logreg from "../assets/linvslog.jpg";
import results from "../assets/LogregOutput.png";

function CollegeOutcome() {
  const formulaContainerRef = useRef(null);
  const hypothesisfuncRef = useRef(null);
  const sigmoidfuncref = useRef(null);
  const loglikeref = useRef(null);

  useEffect(() => {
    document.title = "Predicting College Outcomes";

    // --- KaTeX Rendering for LaTeX formulas (no changes needed here) ---
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
    // This max-width container is a great practice for readability.
    <div className="mx-auto max-w-5xl px-4 md:px-0">
      <div className="py-4">
        {/* REFACTORED: H1 now uses clamp() for fluid font sizing instead of stepped breakpoints. */}
        <h1 className="text-[clamp(1.875rem,5vw,2.25rem)] font-bold text-left">
          Predicting College Outcomes Using Logistic Regression: A C++
          Implementation
        </h1>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* REFACTORED: Main content width is now a flexible fraction of its parent, not a rigid viewport width. */}
        <main className="w-full text-left mx-auto">
          <img
            src={logreg}
            alt="Linear vs Logistic Regression"
            className="py-2"
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
                As part of my Machine Learning course at California State
                University, San Bernardino, for our final project, we had the
                option of comparing different Machine Learning models or a code
                implementation of a Machine Learning algorithm. I chose to do a
                C++ implementation of Logistic Regression.
              </p>
            </div>
            <div id="goal" className="mt-8 space-y-2">
              <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-semibold">
                Goal
              </h3>
              <p className="text-[clamp(1rem,1.5vw,1.125rem)]">
                Use Logistic Regression to predict whether a student will
                Dropout or Graduate. This could be especially useful for
                providing students who are predicted to Dropout with the tools
                and support necessary to succeed.
              </p>
            </div>
          </section>

          <div className="py-4 mt-8">
            <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-semibold">
              Logistic Regression
            </h3>
            <div className="mt-2 space-y-4 text-[clamp(1rem,1.5vw,1.125rem)]">
              <p>
                Logistic Regression is a machine learning model used for binary
                classification. The model uses a set of predictors (either
                continuous or discrete) to estimate the probability of a given
                outcome. This is accomplished by modifying the Hypothesis
                Function
                <sub>1</sub> with the Sigmoid Function<sub>2</sub>, which maps
                any real-valued number to a value between 0 and 1, making it
                ideal for predicting probabilities of binary outcomes.
              </p>
              <p>
                To ensure the model's predictions are accurate, the weights
                (parameters) of this linear combination must be fitted to the
                training data. This is done by maximizing the log-likelihood
                function, which measures how well the model's predictions align
                with the actual outcomes. The maximization process is done
                through Stochastic Gradient Ascent.
              </p>
              <p>
                Once the weights are optimized, the model is capable of
                outputting the probability of a specific outcome given a new set
                of inputs.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-y-8 text-center text-2xl md:flex-row md:gap-x-16">
              <div className="flex flex-col gap-5">
                <h4 className="text-[clamp(1.125rem,2.5vw,1.25rem)] font-semibold">
                  Hypothesis Function<sub>1</sub>
                </h4>
                <div ref={hypothesisfuncRef}></div>
              </div>
              <div> o </div>
              <div className="flex flex-col gap-5">
                <h4 className="text-[clamp(1.125rem,2.5vw,1.25rem)] font-semibold">
                  Sigmoid Function<sub>2</sub>
                </h4>
                <div ref={sigmoidfuncref}></div>
              </div>

              <div> = </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[clamp(1.125rem,2.5vw,1.25rem)] font-semibold">
                  Logistic Function<sub>3</sub>
                </h4>
                <div ref={formulaContainerRef}></div>
              </div>
            </div>
          </div>

          <section id="dataset" className="mt-8 scroll-m-[10vh]">
            <h2 className="text-[clamp(1.5rem,4vw,1.875rem)] font-semibold">
              Dataset
            </h2>
            <img
              src={datasample}
              alt="datasample"
              className="w-full rounded-lg py-2"
            />
            <div
              id="about"
              className="mt-4 space-y-2 text-[clamp(1rem,1.5vw,1.125rem)]"
            >
              <p>
                The dataset used to train the model was obtained from the UCI
                Machine Learning Repository. The data was sourced from a higher
                education institution in Portugal, containing 4,426 records, 36
                attributes, and 3 outputs. Information was collected from
                students enrolled in undergraduate degrees ranging from
                Education to Technology.
              </p>
            </div>
            <div id="wrangling" className="mt-8 space-y-2">
              <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-semibold">
                Wrangling
              </h3>
              <p className="text-[clamp(1rem,1.5vw,1.125rem)]">
                The data was already pre-cleaned, so little additional work was
                needed. I used Python to drop target values classified as
                "Enrolled" and mapped "Graduate" to '1' and "Dropout" to '0'. I
                made use of libraries such as Pandas for dropping missing and
                null records, Seaborn for visualizations, and Scikit-learn for
                data splitting, among others. I ended up using a 70/30
                training-testing split.
              </p>
            </div>
          </section>

          <section id="implementation" className="mt-8 scroll-m-[10vh]">
            <h2 className="text-[clamp(1.5rem,4vw,1.875rem)] font-semibold">
              Implementation
            </h2>
            <div className="py-2">
              <a
                href="https://github.com/nitsud22/Predicting-College-Outcomes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[clamp(1.125rem,2.5vw,1.25rem)] text-black hover:underline dark:text-blue-800"
              >
                GitHub Repository
              </a>
            </div>
            <a
              href="/Logistic_Regression_Implementation_CSE_5160.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[clamp(1.125rem,2.5vw,1.25rem)] text-green-800 hover:underline dark:text-blue-800 md:hidden"
            >
              View Research Paper
            </a>
            <iframe
              className="mt-4 hidden h-[100vh] w-full md:block"
              src="/Logistic_Regression_Implementation_CSE_5160.pdf"
              title="Logistic Regression PDF"
            ></iframe>
          </section>

          <section id="results" className="mt-8 scroll-m-[10vh] space-y-4">
            <h2 className="text-[clamp(1.5rem,4vw,1.875rem)] font-semibold">
              Results
            </h2>
            <img src={results} className="w-full py-6" alt="Model Results" />
            <div className="space-y-2">
              <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-semibold">
                Accuracy: 91.1%
              </h3>
              <p className="text-[clamp(1rem,1.5vw,1.125rem)]">
                Out of all the model's predictions, this measures how many were
                correct.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-semibold">
                Precision: 96.3%
              </h3>
              <p className="text-[clamp(1rem,1.5vw,1.125rem)]">
                How often the model correctly predicted 'Graduate' out of all
                'Graduate' predictions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-semibold">
                Recall: 80.2%
              </h3>
              <p className="text-[clamp(1rem,1.5vw,1.125rem)]">
                How often the model correctly predicted 'Graduate' out of all
                the students in the dataset who did 'Graduate'.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-semibold">
                Meaning
              </h3>
              <p className="text-[clamp(1rem,1.5vw,1.125rem)]">
                The model is very cautious when predicting if a student will
                graduate in comparison to the number of students who actually
                graduate, which is shown by the recall score of only 80%.
                However, this caution allows the model to be highly precise when
                it does predict "Graduate." Overall, this means the model is
                more willing to incorrectly predict "Dropout" than to
                incorrectly predict "Graduate." This is perfect for our scenario
                when it comes to providing support and tools for student
                success. It is better to support a student who is going to
                graduate but is predicted to "Dropout" than it is to potentially
                withhold support from a student who is going to drop out but is
                predicted to "Graduate."
              </p>
            </div>
          </section>

          <section id="reflection" className="mt-8 scroll-m-[10vh]">
            <h2 className="text-[clamp(1.5rem,4vw,1.875rem)] font-semibold">
              Reflection
            </h2>
            <div className="mt-2 space-y-4 text-[clamp(1rem,1.5vw,1.125rem)]">
              <p>
                After revisiting this project for this article, I came across a
                few issues that needed fixing from my original attempt.
              </p>
              <div>
                <h4 className="font-semibold">What Did Not Work:</h4>
                <ul className="list-inside list-decimal space-y-1 pl-5">
                  <li>Did not use Python to wrangle the data.</li>
                  <li>The IOStream code was very rigidly coded.</li>
                  <li>
                    Accuracy, Precision, and Recall were calculated incorrectly.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">What Did Work:</h4>
                <ul className="list-inside list-decimal space-y-1 pl-5">
                  <li>
                    The code implementation of Logistic Regression worked as
                    intended.
                  </li>
                </ul>
              </div>
              <p>
                This project was one of the more challenging projects I have had
                to do, especially since I was only a third-year in university
                when I took the course. Every aspect from data wrangling to
                translating the math to code was something I had to spend a
                decent chunk of time understanding. It definitely made me gain
                some grit and a sense of awe for the people who pushed the
                limits of computer science. Thank you for reading!
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

export default CollegeOutcome;
