import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter">
        Zozalu
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
            className="ml-2 text-primary hover:underline"
          >
            Grant Link
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Hero; 