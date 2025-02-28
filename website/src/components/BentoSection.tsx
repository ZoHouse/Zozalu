import Link from 'next/link';

interface BentoItemProps {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  id?: string;
}

const BentoItem = ({ title, description, link, linkText, id }: BentoItemProps) => (
  <div id={id} className="bento-item">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted mb-4">{description}</p>
    {link && linkText && (
      <Link href={link} className="text-primary hover:underline">
        {linkText}
      </Link>
    )}
  </div>
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
            link="/litepaper.pdf"
            linkText="Download Whitepaper →"
          />
          
          <BentoItem
            id="schedule"
            title="Event Schedule"
            description="Join us for 14 days of innovation, collaboration and community building. View our full schedule of activities and events."
            link="#schedule"
            linkText="View Schedule →"
          />
          
          <BentoItem
            id="nodes"
            title="Nodes & Infrastructure"
            description="Discover how BLRxZo & WTFxZo function as beacon nodes and Zostels as lite nodes in our decentralized ecosystem."
            link="#nodes"
            linkText="Learn More →"
          />
          
          <BentoItem
            id="get-involved"
            title="Get Involved"
            description="Be part of the Zozalu movement. Register for our next event or explore ways to contribute to our growing community."
            link="https://forms.zo.xyz/register"
            linkText="Register Now →"
          />
        </div>
      </div>
    </section>
  );
};

export default BentoSection; 