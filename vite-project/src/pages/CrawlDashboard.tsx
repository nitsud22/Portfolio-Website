function CrawlDashboard() {
  return (
    <div className="mpx-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-3/4 w-full">
          <h2 className="mt-10 scroll-m-20 lg:text-3xl md:text-2xl text-xl  tracking-wide font-semibold transition-colors first:mt-0 text-left py-5">
            Content
          </h2>
        </div>
        {/* Right column: On this page sidebar */}
        <div className="hidden lg:block lg:w-1/4 w-full items-start text-left">
          <h2 className="mt-10 scroll-m-20 text-2xl font-semibold  transition-colors first:mt-0 py-5">
            On This Page
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CrawlDashboard;
