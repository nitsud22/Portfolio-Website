import { FiMapPin, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

import { Footer } from "@/components/Footer";

function Resume() {
  return (
    <div className=" max-h-7xl flex flex-col justify-betwee bg-background px-4 md:px-8 max-w-5xl mx-auto">
      {/* Main container that holds resume and contact box */}
      <div className="w-full flex-grow flex flex-col md:flex-row gap-4 pt-8">
        {/* PDF Viewer Section (75%) */}
        <div className="w-full bg-white dark:bg-zinc-900 space-y-6">
          <iframe
            className="hidden md:block w-full h-[75vh] "
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
        <div className="md:w-1/4 w-full bg-white dark:bg-zinc-900 h-fit space-y-6 text-left self-start rounded-2xl">
          <h2 className="mb-4 pb-1 mt-10 scroll-m-20 text-2xl font-semibold tracking-tight transition-colors first:mt-0 text-left">
            Contacts
          </h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <FiMapPin /> Yucaipa, California
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
