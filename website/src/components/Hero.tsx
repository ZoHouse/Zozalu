import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[50vh] py-16 text-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter relative">
        <span className="relative inline-block">
          Zozalu
          <span className="absolute inset-0 blur-md opacity-30 bg-primary rounded-full" style={{ filter: 'blur(25px)' }} />
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-muted mb-8 max-w-2xl">
        A pop up initiative by Founders of Zo World
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="#get-involved" 
          className="cta-button"
        >
          Register Now
        </Link>
        
        <p className="flex items-center text-muted">
          Powered by:{" "}
          <Link 
            href="https://grants.zo.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-2 text-primary hover:underline relative group"
          >
            <span className="relative z-10">Grant Link</span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Hero; 