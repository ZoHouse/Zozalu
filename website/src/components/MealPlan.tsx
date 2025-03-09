const MealPlan = () => {
  return (
    <section id="meal-plan" className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Food For Thought
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <a 
            href="https://blueprintai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bento-item block hover:scale-105 transition-transform"
          >
            <div className="flex flex-col items-center text-center p-8">
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Blueprint icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Blueprint AI Meal Plan</h3>
              <p className="text-muted">
                Access our optimized meal plans powered by Blueprint AI. A winning hackathon project by{' '}
                <a 
                  href="https://www.youtube.com/watch?v=34BXeCM75dU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Ayush Jha
                </a>
                , now integrated for your longevity journey.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MealPlan; 