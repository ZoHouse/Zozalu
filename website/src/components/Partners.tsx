import Image from 'next/image';

type Partner = {
  name: string;
  logo: string;
  website: string;
};

const partners: Partner[] = [
  {
    name: "VitaDAO",
    logo: "/Partners/vita dao.webp",
    website: "https://www.vitadao.com/"
  },
  {
    name: "Zuzalu",
    logo: "/Partners/zuzalu.png",
    website: "https://zuzalu.city"
  }
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Partners
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-item flex flex-col items-center justify-center p-8 hover:scale-105 transition-transform"
            >
              <div className="relative w-full h-32 flex items-center justify-center mb-4">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={160}
                  style={{ 
                    width: 'auto',
                    height: '100%',
                    maxHeight: '120px',
                    objectFit: 'contain'
                  }}
                  priority
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-semibold text-center">{partner.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 