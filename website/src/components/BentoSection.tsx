import Link from 'next/link';

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
        <p className="text-muted mb-4 px-4 max-w-xs">{description}</p>
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
    <section className="w-full px-4 py-12 md:py-24 space-y-8">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Explore <span className="text-primary">Zozalu</span>
        </h2>
        <p className="max-w-[900px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Discover the key components of the Zozalu event framework
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-7xl">
        <BentoItem
          title="Litepaper"
          description="Zozalu is a concentrated academic sprint with a focus on problem-solving, collaboration, and knowledge sharing. Join us in Bangalore from April 1st to 15th, 2024."
          href="/litepaper"
          linkText="Read More"
        />
        <BentoItem
          title="Schedule"
          description="A 14-day residency-style event with a focus on problem-solving, collaboration, and knowledge sharing."
          href="/schedule"
          linkText="View Schedule"
        />
        <BentoItem
          title="Nodes & Infrastructure"
          description="Why we chose BLR?

2 Beacon Nodes - BLRxZo, WTFxZo 
2 Lite Nodes - Zostels 
100+ members"
          href="/nodes"
        />
        <BentoItem
          title="Get Involved"
          description="be a part of the shift"
          href="/get-involved"
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 text-center mt-16">
        <h2 className="text-4xl font-bold mb-10 text-center">
          ABOUT <span className="text-primary">ZO</span>
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
          description="ACTIVE ZO CLUBHOUSES IN TOP GLOBAL CITIES, REACH KYC'D TRAVELLER COMMUNITY IN ASIA"
          className="bg-yellow-500 text-black"
        />
        <StaticBentoItem
          title="COMMUNITY OF CRYPTO BUILDERS"
          description="DIRECT ENGAGEMENT WITH HIGH-IMPACT WEB3 FOUNDERS & BUILDERS"
          className="bg-purple-500"
        />
        <StaticBentoItem
          title="SHAPE THE FUTURE"
          description="LEAD THE DECENTRALIZED CULTURAL MOVEMENT SHAPING THE FUTURE OF COMMUNITIES."
          className="bg-blue-500"
        />
      </div>
    </section>
  );
};

export default BentoSection; 