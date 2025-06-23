import background from "../assets/background.jpg";
import city from "../assets/city2.jpg";
import hanni from "../assets/hanni.jpg";

export function Introduction() {
  return (
    <div className="relative w-full lg:pb-20 md:pb-10 pb-5">
      {/* Background Image */}
      <div className="relative lg:h-[30vh] h-[15vh] overflow-hidden">
        <img
          src={city}
          alt="rancho night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Wrapper for max-width content */}
      <div className="absolute lg:-bottom-1 md:-botton-2 -bottom-3 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto md:flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-6 px-4">
          {/* Profile Picture */}
          <img
            src={hanni}
            alt="Profile"
            className="lg:w-60 md:w-50 w-30 aspect-square rounded-full border-2 lg:border-3 border-white dark:border-black object-cover"
          />

          {/* Intro Text */}
          {/* Add your intro content here */}
        </div>
      </div>
    </div>
  );
}
