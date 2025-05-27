import { FiMapPin, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { Footer } from "@/components/Footer";

function Resume() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-background lg:px-30">
      {/* Main container that holds resume and contact box */}
      <div className="w-full flex-grow flex gap-6 p-6 ">
        {/* PDF Viewer Section (75%) */}
        <div className="w-3/4 bg-white dark:bg-zinc-900 p-4 space-y-6">
          <iframe
            src="/Santoso_Dustin_Resume.pdf"
            title="Resume PDF"
            className="w-full h-[calc(100vh-10rem)] rounded-2xl"
          ></iframe>
        </div>

        {/* Contact Section (25%) */}
        <div className="w-1/4 bg-white dark:bg-zinc-900 p-4 h-fit space-y-6 text-left self-start rounded-2xl">
          <h2 className="mb-4 border-b pb-1 mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-left py-5">
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
