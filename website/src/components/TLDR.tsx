const TLDR = () => {
  return (
    <section id="abstract" className="py-8 bg-secondary relative overflow-hidden">
      {/* Background gradient blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          TLDR
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Text */}
          <div className="space-y-8">
            <p className="text-lg leading-relaxed animate-fadeIn">
              For humans to evolve, we need to form a collective consciousness. This cognitive unity is achieved through shared context, which is built by experiencing adventures together.
            </p>
            <p className="text-lg leading-relaxed animate-fadeIn animation-delay-300">
              Zozalu is a two-week pop-up initiative designed to accelerate innovation and catalyze a radical shift in the lifestyle of a Zo World Citizen, beginning in Bangalore. Zozalu aims for sustained impact by leveraging permanent Zo House nodes and lite nodes, fostering continuous collaboration and project growth throughout the year.
            </p>
            <p className="text-lg leading-relaxed animate-fadeIn animation-delay-300">
              Through our physical nodes and verified community, we're establishing safe spaces for collaboration, learning, and growth within the community come join the network and register your node to accelerate humanity.
            </p>
          </div>

          {/* Right Column - Key Features */}
          <div className="bg-zinc-900/90 backdrop-blur-sm rounded-xl p-8 border border-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-6 text-primary">Key Features</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 animate-fadeIn group">
                <svg className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>Schedule feature icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg text-white group-hover:text-primary transition-colors">2-Week Curated Schedule</span>
              </li>
              <li className="flex items-center space-x-3 animate-fadeIn animation-delay-300 group">
                <svg className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>Network feature icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg text-white group-hover:text-primary transition-colors">Cracked Founders Network</span>
              </li>
              <li className="flex items-center space-x-3 animate-fadeIn animation-delay-300 group">
                <svg className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>Events feature icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg text-white group-hover:text-primary transition-colors">12 Events – 42 Participants per Event</span>
              </li>
              <li className="flex items-center space-x-3 animate-fadeIn animation-delay-300 group">
                <svg className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>Lifestyle feature icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg text-white group-hover:text-primary transition-colors">Accelerated Lifestyle to Follow Your Heart</span>
              </li>
              <li className="flex items-center space-x-3 animate-fadeIn animation-delay-300 group">
                <svg className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>Celebration feature icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg text-white group-hover:text-primary transition-colors">Each Moment Celebrated On-Chain</span>
              </li>
              <li className="flex items-center space-x-3 animate-fadeIn animation-delay-300 group">
                <svg className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>Nodes feature icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg text-white group-hover:text-primary transition-colors">Permanent Nodes and Friendships Established</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TLDR; 