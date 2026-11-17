import pfp from "../assets/PFP.jpg";
import { SocialLinks } from "./Socials";

export function Introduction() {
  return (
    <div className="relative w-full z-10">
      <div className="relative  md:h-[35vh] h-[15vh] bg-[#1F3B69]">
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />

        <div className="relative h-full max-w-5xl mx-auto">
          <div className="absolute left-0 -bottom-10 md:-bottom-30 lg:-bottom-25 lg:w-1/3 px-4 lg:px-4 flex flex-col items-start lg:items-center ">
            <img
              src={pfp}
              alt="Profile"
              className="md:w-60 w-35 aspect-square rounded-full border-2 lg:border-3 border-[#FAF9F6] dark:border-black object-cover"
            />
            <div className="hidden md:flex md:flex-col lg:items-center py-2">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
