import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function SocialLinks() {
  return (
    <div className="flex space-x-4 text-2xl text-gray-700">
      <a
        href="https://github.com/nitsud22"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-400"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/dustinsantoso"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:dustin.santoso025@gmail.com"
        className="hover:text-red-500"
      >
        <SiGmail />
      </a>
    </div>
  );
}
