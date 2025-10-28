import jungeun from "../assets/jungeun.jpeg";
import { SocialLinks } from "./Socials";

export function Introduction() {
  return (
    <div className="relative w-full z-10">
      <div className="relative lg:h-[50vh] md:h-[35vh] h-[25vh] bg-green-800">
        <div className="absolute inset-0 h-18 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />

        <div className="relative h-full max-w-5xl mx-auto">
          <div className="absolute left-0 -bottom-10 md:-bottom-30 lg:-bottom-35 lg:w-1/3 px-4 lg:px-4 flex flex-col items-start lg:items-center ">
            <img
              src={jungeun}
              alt="Profile"
              className="md:w-60 w-35 aspect-square rounded-full border-2 lg:border-3 border-white dark:border-black object-cover"
            />
            <div className="hidden md:flex md:flex-col lg:items-center">
              <h1 className="font-semibold md:text-2xl text-xl pt-2 lg:pt-4 text-left lg:text-center text-nowrap">
                OCHIN HIER Trainee
              </h1>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
