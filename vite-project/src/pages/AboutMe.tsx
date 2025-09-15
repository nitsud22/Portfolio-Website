import { CarouselSize } from "@/components/Carousel";
import winter from "../assets/winter.jpg";
import { Footer } from "@/components/Footer";
import { Carousel } from "@/components/ui/carousel";
function AboutMe() {
  return (
    <div className="flex flex-col px-4 lg:px-0 max-w-5xl mx-auto">
      {/* Main Content Section */}
      <div className="flex flex-col w-full lg:flex-row items-center h-[calc(92vh-4rem)] md:gap-x-12 gap-4">
        {/* Image Section */}
        <div className="order-1 lg:order-2 overflow-hidden lg:w-1/3 w-full">
          <img
            src={winter}
            alt="Dustin Santoso"
            className="lg:h-[75vh] h-[50vh] w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="order-2 lg:order-1 lg:w-2/3 text-left">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className=" text-gray-700 mt-2">
            Hi I'm Dustin! Currently I am a HCAI Health Information & Electronic
            Records Learner for OCHIN. I love bridging the gap between
            technology and people, which I took one step further landing me in
            healthcarec. I hope to modernize healthcare not only through
            innovation but by meeting the healthcare industry where it's at.
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
