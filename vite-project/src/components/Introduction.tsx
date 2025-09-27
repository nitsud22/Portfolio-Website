import jungeun from "../assets/jungeun.jpeg";

import { SocialLinks } from "./Socials";

export function Introduction() {
  return (
    <div className="relative w-full lg:pb-20 md:pb-10 pb-5">
      {/* Background Image */}
      <div className="relative 2xl:h-[45vh] xl:h-[60vh] md:h-[35vh] h-[25vh] overflow-hidden bg-orange-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
      </div>
      {/* Wrapper for max-width content */}
      <div className="absolute lg:-bottom-5 -bottom-12 left-0 right-0 z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-start px-4 md:px-8">
          {/* Profile Picture */}
          <div className="flex flex-col items-center">
            <img
              src={jungeun}
              alt="Profile"
              className="lg:w-70 md:w-50 w-35 aspect-square rounded-full border-2 lg:border-3 border-white dark:border-black object-cover"
            />

            <h1 className=" font-semibold md:text-2xl text-xl  ">
              EHR Trainee
            </h1>
            <SocialLinks></SocialLinks>
          </div>
        </div>
      </div>
    </div>
  );
}
