import night from "../assets/night.jpg";
import hanni from "../assets/hanni.jpg";
export function Introduction() {
  return (
    <div className="relative w-full pb-20 sm:justify-items-center">
      {/* Background Image */}
      <div className="h-[40vh] w-full overflow-hidden">
        <img
          src={night}
          alt="rancho night"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile + Intro - grouped and positioned at the bottom */}
      <div
        className="absolute lg:bottom-2 md:bottom-1 -bottom-10 lg:left-1/5 md:left-5 md:flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6 z-10
      justify-items-center"
      >
        {/* Profile Picture */}
        <img
          src={hanni}
          alt="Profile"
          className="w-60 aspect-square rounded-full border-4 border-white object-cover"
        />

        {/* Intro Text */}
        <div className="text-b text-black text-center md:text-left">
          <h1 className="lg:text-3xl font-bold md:text-2xl">Dustin Santoso</h1>
          <p className="lg:ext-lg md:text-m">
            Aspiring Data Engineer | Recent CS Graduate | ETL Enthusiast
          </p>
        </div>
      </div>
    </div>
  );
}
