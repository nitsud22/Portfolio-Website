import winter from "../assets/winter.jpg";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

function AboutMe() {
  useEffect(() => {
    document.title = "About Me";
  }, []);
  return (
    <div className="flex flex-col px-4 lg:px-0 my-auto max-w-5xl mx-auto">
      {/* Main Content Section */}
      <div className="flex flex-col w-full md:flex-row items-center md:h-[88vh] lg:h-auto h-auto pb-4 lg:py-10 gap-4 md:gap-x-10">
        {/* Image Section */}
        <div className="order-1 md:order-2 overflow-hidden md:w-2/5 w-full">
          <img
            src={winter}
            alt="Dustin Santoso"
            className="2xl:h-auto lg:h-[75vh] h-auto aspect-auto w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="order-2 md:order-1 md:w-3/5 text-left">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className=" text-gray-700 mt-2">
            Hi, I'm Dustin! Currently, I am an HCAI Health Information &
            Electronic Records Learner for OCHIN. I love bridging the gap
            between technology and people, which I took one step further,
            landing me in healthcare. I hope to modernize healthcare not only
            through innovation but by meeting the healthcare industry where it
            is.
          </p>
        </div>
      </div>

      <div className="pt-4 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default AboutMe;
