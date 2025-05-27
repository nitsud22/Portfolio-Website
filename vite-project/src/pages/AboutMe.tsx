import winter from "../assets/winter.jpg";

function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center pt-8 px-8 md:px-30 md:gap-x-12">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-lg text-gray-700">
          Hi, I'm Dustin a recent Computer Science graduate with a passion for
          data engineering, systems design, and creating intuitive user
          experiences.
        </p>
        <p className="text-lg text-gray-700">
          I'm currently open to new opportunities in software or data
          engineering. Outside of work, I enjoy building games, exploring new
          tech, and learning from challenges.
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
  );
}

export default AboutMe;
