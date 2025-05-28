import { CarouselSize } from "@/components/Carousel";
import winter from "../assets/winter.jpg";
import { Footer } from "@/components/Footer";
import { Carousel } from "@/components/ui/carousel";
function AboutMe() {
  return (
    <div className="flex flex-col items-center md:px-30">
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center pt-8 md:gap-x-12">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-lg text-gray-700">
            Hi, I'm Dustin a recent Computer Science graduate with a passion for
            data engineering, systems design, and creating intuitive user
            experiences. My career trajectory has always been evolving with each
            new experience. Initially a med-school prospect turned to a comp-sci
            student turned to aspiring data engineer. I am excited to see where
            this path may lead me.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Outside of work, I love obsessing over hobbies whether it be
            competitive video games, skincare, or designing my room. If it is
            something that peaks my interest, then I am diving head first.
          </p>
        </div>

        {/* Image Section */}
        <div className="h-[75vh] overflow-hidden rounded-2xl shadow-lg">
          <img
            src={winter}
            alt="Dustin Santoso"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="py-10 "></div>
      <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-left py-5 border-t w-full">
        Hobby Highlights
      </h2>
      <div className="w-full pb-20">
        <CarouselSize></CarouselSize>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default AboutMe;
