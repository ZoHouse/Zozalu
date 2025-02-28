import Link from 'next/link';

interface BentoItemProps {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  id?: string;
}

const BentoItem = ({ title, description, link, linkText, id }: BentoItemProps) => (
  <Link 
    href={link || '#'} 
    id={id}
    className="bento-item block hover:no-underline"
    {...(link?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
  >
    <div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted mb-4">{description}</p>
      {linkText && (
        <span className="text-primary inline-flex items-center">
          {linkText}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
            title="Right arrow"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      )}
    </div>
  </Link>
);

const BentoSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bento-grid">
          <BentoItem
            id="litepaper"
            title="Litepaper"
            description="Learn about our vision for decentralized living and innovation through our comprehensive whitepaper."
            link="/litepaper"
            linkText="Download Whitepaper"
          />
          
          <BentoItem
            id="schedule"
            title="Event Schedule"
            description="Join us for 14 days of innovation, collaboration and community building. View our full schedule of activities and events."
            link="/schedule"
            linkText="View Schedule"
          />
          
          <BentoItem
            id="nodes"
            title="Nodes & Infrastructure"
            description="Discover how BLRxZo & WTFxZo function as beacon nodes and Zostels as lite nodes in our decentralized ecosystem."
            link="/nodes"
            linkText="Learn More"
          />
          
          <BentoItem
            id="get-involved"
            title="Get Involved"
            description="Be part of the Zozalu movement. Register for our next event or explore ways to contribute to our growing community."
            link="/get-involved"
            linkText="Register Now"
          />
        </div>
      </div>
    </section>
  );
};

export default BentoSection; 