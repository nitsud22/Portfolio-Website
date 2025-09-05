import background from "../assets/background.jpg";
import city from "../assets/city2.jpg";
import hanni from "../assets/hanni.jpg";

export function Introduction() {
  return (
    <div className="relative w-full lg:pb-20 md:pb-10 pb-5">
      {/* Background Image */}
      <div className="relative lg:h-[40vh] md:h-[25vh] h-[25vh] overflow-hidden bg-green-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
      </div>
      {/* Wrapper for max-width content */}
      <div className="absolute lg:-bottom-5 md:-bottom-2 -bottom-10 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-start px-4 md:px-8">
          {/* Profile Picture */}
          <img
            src={hanni}
            alt="Profile"
            className="lg:w-60 md:w-50 w-40 aspect-square rounded-full border-2 lg:border-3 border-white dark:border-black object-cover"
          />
          <div className=" ">
            <h1 className=" font-semibold md:text-2xl text-xl text-center md:text-left ">
              OCHIN EHR Trainee
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
