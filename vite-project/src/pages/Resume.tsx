import { FiMapPin, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { Footer } from "@/components/Footer";

function Resume() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-betwee bg-background lg:px-30">
      {/* Main container that holds resume and contact box */}
      <div className="w-full flex-grow flex flex-col md:flex-row gap-4 lg:p-6">
        {/* PDF Viewer Section (75%) */}
        <div className="w-full bg-white dark:bg-zinc-900 p-4 space-y-6">
          <iframe
            className="hidden md:block w-full h-[100vh] "
            src="/Santoso_Dustin_Resume.pdf"
          ></iframe>

          <a
            href="/Santoso_Dustin_Resume.pdf"
            className="block md:hidden text-blue-600 underline text-center mt-4"
            target="_blank"
          >
            Open Resume
          </a>
        </div>

        {/* Contact Section (25%) */}
        <div className="md:w-1/3 lg:w-1/3 w-full bg-white dark:bg-zinc-900 pt-4 h-fit space-y-6 text-left self-start rounded-2xl">
          <h2 className="mb-4 border-b pb-1 mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-left">
            Contact Me
          </h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <FiMapPin /> Yucaipa, CA
            </p>
            <p className="flex items-center gap-2">
              <FiMail />
              <a href="mailto:dustin.santoso025@gmail.com">
                dustin.santoso025@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FiLinkedin />
              <a href="https://www.linkedin.com/in/dustinsantoso/">
                linkedin.com/dustinsantoso
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FiGithub />
              <a href="https://github.com/nitsud22">github.com/nitsud22</a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Resume;
