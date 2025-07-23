import { CarouselSize } from "@/components/Carousel";
import winter from "../assets/winter.jpg";
import { Footer } from "@/components/Footer";
import { Carousel } from "@/components/ui/carousel";
function AboutMe() {
  return (
    <div className="flex flex-col items-center px-4 md:px-8 max-w-7xl mx-auto">
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center p-4 lg:pt-8 md:gap-x-12 gap-4">
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
            Hi I'm Dustin, a recent Computer Science graduate with a passion for
            data engineering, systems design, and creating intuitive user
            experiences. My career trajectory has always been evolving with each
            new experience: from someone once set on med school, to a computer
            science student, to an aspiring healthcare data engineer. I’m
            excited to see where this path will lead me.
          </p>
          <p className=" text-gray-700 mt-4"></p>
        </div>
      </div>

      <div className="md:py-5"></div>
      <div className="w-full p-4 items-center">
        <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-left py-5 border-t w-full">
          Hobby Highlights
        </h2>
        <div className="w-full lg:w-full pb-2 px-10">
          <CarouselSize></CarouselSize>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default AboutMe;
