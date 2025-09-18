import crawldash from "@/assets/crawl-dash.png";

function CrawlDashboard() {
  return (
    <div className="sm:px-4 md:px-0 max-w-5xl mx-auto">
      <div className="py-4">
        <h1 className="text-3xl sm:text-4xl text-left">
          A Full-Stack Visualization Dashboard for Real-Time Webcrawler Health
          and Performance Monitoring
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <main className="w-full text-left">
          <img
            src={crawldash}
            alt="Linear vs Logistic Regression"
            className="py-2 "
          />
        </main>
        <div className="w-[35vh]"></div>
      </div>
    </div>
  );
}

export default CrawlDashboard;
