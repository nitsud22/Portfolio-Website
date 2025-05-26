import night from "../assets/night.jpg";
import hanni from "../assets/hanni.jpg";
export function Introduction() {
  return (
    <div className="relative w-full pb-20 sm:justify-center">
      {/* Background Image */}
      <div className="lg:h-[60vh] w-full overflow-hidden">
        <img
          src={night}
          alt="rancho night"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile + Intro - grouped and positioned at the bottom */}
      <div
        className="absolute lg:bottom-3 md:bottom-1 -bottom-4 lg:left-5 md:left-5 md:flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6 z-10
      absolute left-1/2 transform -translate-x-1/2 md:transform md:-translate-x-0"
      >
        {/* Profile Picture */}
        <img
          src={hanni}
          alt="Profile"
          className="lg:w-80 w-60 aspect-square rounded-full border-4 border-white dark:border-black object-cover"
        />

        {/* Intro Text */}
       
      </div>
    </div>
  );
}
