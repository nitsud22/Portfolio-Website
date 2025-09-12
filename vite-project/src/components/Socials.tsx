import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function SocialLinks() {
  return (
    <div className="flex space-x-4 text-xl text-gray-700">
      <a
        href="https://github.com/nitsud22"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-900"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/dustinsantoso"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-900"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:dustin.santoso025@gmail.com"
        className="hover:text-green-900"
      >
        <SiGmail />
      </a>
    </div>
  );
}
