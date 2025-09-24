import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function SocialLinks() {
  return (
    <div className="flex space-x-4 text-xl text-gray-700">
      <a
        href="https://github.com/nitsud22"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-orange-500"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/dustinsantoso"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-orange-500"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:dustin.santoso025@gmail.com"
        className="transition-colors duration-300 hover:text-orange-500"
      >
        <SiGmail />
      </a>
    </div>
  );
}
