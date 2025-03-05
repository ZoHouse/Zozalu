import Link from 'next/link';
import Image from 'next/image';

// Custom arrow SVG component
const ArrowRight = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className || "w-4 h-4"} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
    aria-hidden="true"
  >
    <title>Arrow right</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

interface BentoItemType {
  title: string;
  description: string;
  href: string;
  linkText?: string;
  className?: string;
}

const BentoItem = ({ title, description, href, linkText, className }: BentoItemType) => {
  return (
    <Link
      href={href}
      className={`bento-item block hover:no-underline flex flex-col justify-center items-center text-center h-full ${className || ''}`}
      {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-muted mb-4 px-4 max-w-xs whitespace-pre-line">{description}</p>
        {linkText && (
          <div className="mt-auto flex items-center gap-2 font-medium">
            <span>{linkText}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        )}
      </div>
    </Link>
  );
};

// Static Bento Item for partnership section
const StaticBentoItem = ({ title, description, className }: Omit<BentoItemType, "href" | "linkText">) => {
  return (
    <div className={`bento-item flex flex-col justify-center items-center text-center h-full ${className}`}>
      <div className="flex flex-col items-center justify-center w-full">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-base font-medium whitespace-pre-line px-4 max-w-xs">{description}</p>
      </div>
    </div>
  );
};

const BentoSection = () => {
  return (
    <section className="w-full px-4 py-12 md:py-24 space-y-6">
      <div className="flex flex-col items-center justify-center mb-8 text-center">
        <div className="relative w-full max-w-[300px] md:max-w-[500px] h-[90px] md:h-[150px] mb-4">
          <Image 
            src="/images/zo zo zo 2.png" 
            alt="Zo Zo Zo" 
            fill
            style={{ objectFit: 'contain' }}
            priority
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-7xl">
        <BentoItem
          title="Litepaper"
          description="A Pop Up City Initiative for Founder Members of Zo World."
          href="/litepaper"
        />
        <BentoItem
          title="Schedule"
          description="A glimpse into a well balanced lifestyle"
          href="/schedule"
        />
        <BentoItem
          title="Nodes & Infrastructure"
          description="Why we chose Bangalore"
          href="/nodes"
        />
        <BentoItem
          title="Get Involved"
          description="Be a part of the SHIFT"
          href="/get-involved"
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 text-center mt-16">
        <h2 className="text-4xl font-bold mb-10 text-center">
          ABOUT <span className="text-primary">Zo</span>
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-7xl p-4 bg-secondary border border-border rounded-lg">
        <StaticBentoItem
          title="200K+ CITIZENS"
          description="VERIFIED ONCHAIN USERS
120K+ VISITING IRL NODES
EXPANDING GLOBALLY"
          className="bg-green-700"
        />
        <StaticBentoItem
          title="500+ ZO WORLD FOUNDERS"
          description="FOUNDERS, DEVS, DEGENS, ARTISTS
1.3 ETH FLOOR PRICE"
          className="bg-stone-300 text-black"
        />
        <StaticBentoItem
          title="ZO NODES ACROSS THE GLOBE"
          description="PHYSICAL ZO LOCATIONS IN MAJOR CITIES, CONNECTING VERIFIED TRAVELERS THROUGHOUT ASIA"
          className="bg-yellow-500 text-black"
        />
        <StaticBentoItem
          title="COMMUNITY OF CRYPTO BUILDERS"
          description="DIRECT ENGAGEMENT WITH HIGH-IMPACT WEB3 FOUNDERS & BUILDERS"
          className="bg-purple-500"
        />
      </div>
    </section>
  );
};

export default BentoSection; 