import Image from 'next/image';

type Partner = {
  name: string;
  logo: string;
  description: string;
  website: string;
};

// This will be replaced with actual partner data
const partners: Partner[] = [
  {
    name: "Partner 1",
    logo: "/images/partners/placeholder.png",
    description: "Description of partner 1 and their contribution to Zozalu.",
    website: "https://partner1.com"
  },
  // Add more partners as they join
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Partners
        </h2>
        
        {partners.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-item hover:scale-105 transition-transform"
              >
                <span className="sr-only">Visit {partner.name}'s website</span>
                <div className="relative w-full h-32 mb-4">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-muted">{partner.description}</p>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg text-muted">
              Partner announcements coming soon. Stay tuned!
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`partner-placeholder-${i}`}
                  className="aspect-w-16 aspect-h-9 bg-secondary/30 rounded-lg animate-pulse"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Partners; 