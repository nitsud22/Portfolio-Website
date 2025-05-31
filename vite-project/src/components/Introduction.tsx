import background from "../assets/background.jpg";
import hanni from "../assets/hanni.jpg";

export function Introduction() {
  return (
    <div className="relative w-full pb-20">
      {/* Background Image */}
      <div className="lg:h-[30vh] h-[12vh] overflow-hidden">
        <img
          src={background}
          alt="rancho night"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile + Intro - grouped and positioned at the bottom */}
      <div
        className="absolute lg:-bottom-1 md:bottom-1 -bottom-4 lg:left-30 md:left-5 left-4 md:flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-6 z-10
      md:transform md:-translate-x-0"
      >
        {/* Profile Picture */}
        <img
          src={hanni}
          alt="Profile"
          className="lg:w-60 md:w-50 w-40 aspect-square rounded-full border-4 border-white dark:border-black object-cover"
        />

        {/* Intro Text */}
      </div>
    </div>
  );
}
