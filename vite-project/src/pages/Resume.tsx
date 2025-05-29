import { useEffect, useState } from "react";
import { FiMapPin, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { Footer } from "@/components/Footer";

function Resume() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-background lg:px-30">
      <div className="w-full flex-grow flex flex-col md:flex-row lg:gap-6 lg:p-6">
        {/* PDF Viewer */}
        <div className="w-full md:w-3/4 bg-white dark:bg-zinc-900 p-0 md:p-4">
          {isClient && (
            <iframe
              src="/Santoso_Dustin_Resume.pdf"
              title="Resume PDF"
              className="w-full h-screen md:h-[calc(100vh-10rem)]"
            ></iframe>
          )}
        </div>

        {/* Contact Section (only on md+) */}
        <div className="hidden md:block md:w-1/3 lg:w-1/4 bg-white dark:bg-zinc-900 p-4 h-fit space-y-6 text-left self-start rounded-2xl">
          <h2 className="mb-4 border-b pb-1 mt-10 text-3xl font-semibold tracking-tight">
            Contact Me
          </h2>
          <div className="space-y-3 text-sm lg:text-base text-muted-foreground">
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
