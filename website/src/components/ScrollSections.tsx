import Link from 'next/link';
import Image from 'next/image';

// Section component for standardized section styling
const Section = ({ 
  id, 
  title, 
  children, 
  bgColor = 'bg-background',
  textColor = 'text-foreground'
}: { 
  id: string; 
  title?: string | React.ReactNode; 
  children: React.ReactNode; 
  bgColor?: string;
  textColor?: string;
}) => (
  <section 
    id={id} 
    className={`w-full py-20 px-4 md:py-24 ${bgColor} ${textColor}`}
  >
    <div className="max-w-6xl mx-auto">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

// Information card for consistent styling
const InfoCard = ({ 
  title, 
  description, 
  bgColor = 'bg-secondary', 
  textColor = 'text-foreground'
}: { 
  title: string; 
  description: string; 
  bgColor?: string;
  textColor?: string;
}) => (
  <div className={`${bgColor} ${textColor} p-8 rounded-lg shadow-md`}>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-base whitespace-pre-line">{description}</p>
  </div>
);

// Arrow icon with proper accessibility
const ArrowIcon = ({ className = "w-4 h-4 ml-2" }: { className?: string }) => (
  <svg 
    className={`${className} transition-transform group-hover:translate-x-1`} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
    aria-hidden="true"
  >
    <title>Arrow right</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const ScrollSections = () => {
  return (
    <>
      {/* About Zo Section */}
      <Section id="about" title={<>ABOUT <span className="text-primary">Zo</span></>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-lg">
              Zo is building a new generation of travel and community experiences across the globe. With our physical nodes and verified community, we're creating safe spaces for travelers and digital nomads worldwide.
            </p>
            <p className="text-lg">
              Our members gain access to exclusive spaces, events, and communities in top global destinations.
            </p>
          </div>
          <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
            <Image 
              src="/images/zo zo zo 2.png" 
              alt="Zo Community" 
              fill
              style={{ objectFit: 'contain' }} 
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section id="stats" bgColor="bg-secondary" title="Zo in Numbers">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard 
            title="200K+ CITIZENS"
            description="VERIFIED ONCHAIN USERS
120K+ VISITING IRL NODES
EXPANDING GLOBALLY"
            bgColor="bg-green-700"
            textColor="text-white"
          />
          <InfoCard 
            title="500+ ZO WORLD FOUNDERS"
            description="FOUNDERS, DEVS, DEGENS, ARTISTS
1.3 ETH FLOOR PRICE"
            bgColor="bg-stone-300"
            textColor="text-black"
          />
          <InfoCard 
            title="ZO NODES ACROSS THE GLOBE"
            description="PHYSICAL ZO LOCATIONS IN MAJOR CITIES, CONNECTING VERIFIED TRAVELERS THROUGHOUT ASIA"
            bgColor="bg-yellow-500"
            textColor="text-black"
          />
          <InfoCard 
            title="COMMUNITY OF CRYPTO BUILDERS"
            description="DIRECT ENGAGEMENT WITH HIGH-IMPACT WEB3 FOUNDERS & BUILDERS"
            bgColor="bg-purple-500"
            textColor="text-white"
          />
        </div>
      </Section>

      {/* What We Offer Section */}
      <Section id="offerings" title="What We Offer">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/litepaper" className="group">
            <div className="border border-border rounded-lg p-6 h-full transition-all duration-300 hover:border-primary hover:shadow-md">
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Litepaper</h3>
              <p className="text-muted mb-4">A Pop Up City Initiative for Founder Members of Zo World.</p>
              <div className="flex items-center font-medium text-primary">
                <span>Learn more</span>
                <ArrowIcon />
              </div>
            </div>
          </Link>
          
          <Link href="/schedule" className="group">
            <div className="border border-border rounded-lg p-6 h-full transition-all duration-300 hover:border-primary hover:shadow-md">
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Schedule</h3>
              <p className="text-muted mb-4">A glimpse into a well balanced lifestyle</p>
              <div className="flex items-center font-medium text-primary">
                <span>View schedule</span>
                <ArrowIcon />
              </div>
            </div>
          </Link>
          
          <Link href="/nodes" className="group">
            <div className="border border-border rounded-lg p-6 h-full transition-all duration-300 hover:border-primary hover:shadow-md">
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Nodes & Infrastructure</h3>
              <p className="text-muted mb-4">Why we chose Bangalore</p>
              <div className="flex items-center font-medium text-primary">
                <span>Explore nodes</span>
                <ArrowIcon />
              </div>
            </div>
          </Link>
          
          <Link href="/get-involved" className="group">
            <div className="border border-border rounded-lg p-6 h-full transition-all duration-300 hover:border-primary hover:shadow-md">
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Get Involved</h3>
              <p className="text-muted mb-4">Be a part of the SHIFT</p>
              <div className="flex items-center font-medium text-primary">
                <span>Join us</span>
                <ArrowIcon />
              </div>
            </div>
          </Link>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" bgColor="bg-primary/10" title="Join the Community">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg mb-8">
            Ready to be part of the Zo community? Join us today and connect with like-minded travelers and builders around the world.
          </p>
          <Link href="/get-involved" className="inline-block bg-primary text-black font-medium px-8 py-3 rounded-md hover:bg-primary-hover transition-colors">
            Register Now
          </Link>
        </div>
      </Section>
    </>
  );
};

export default ScrollSections; 