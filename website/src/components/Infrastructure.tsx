'use client';

import Image from 'next/image';

const NodeCard = ({
  name,
  description,
  accommodation,
  url,
  imagePath,
}: {
  name: string;
  description: string;
  accommodation?: { dorms: number; privateRooms: number };
  url: string;
  imagePath: string;
}) => (
  <a 
    href={url}
    target="_blank" 
    rel="noopener noreferrer"
    className="block bg-white/80 backdrop-blur-md rounded-xl p-8 border border-zinc-200 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
  >
    <h3 className="text-2xl font-bold mb-4 text-zinc-800 group-hover:text-primary transition-colors">{name}</h3>
    <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
      <Image
        src={imagePath}
        alt={`${name} location`}
        fill
        style={{ objectFit: 'contain' }}
        priority
        className="transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="space-y-6">
      <p className="text-zinc-600">{description}</p>
      <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-100">
        <h4 className="text-lg font-semibold mb-3 text-primary">Accommodation</h4>
        <ul className="space-y-2 text-zinc-700">
          <li className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <title>Dorm beds checkmark</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{accommodation?.dorms} Dorm Beds</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <title>Private rooms checkmark</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{accommodation?.privateRooms} Private Rooms</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <title>Co-working slots checkmark</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>10 Co-working Slots</span>
          </li>
        </ul>
      </div>
      <div className="inline-flex items-center text-primary group-hover:translate-x-1 transition-transform">
        View Details
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <title>View details arrow</title>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </a>
);

const LiteNodeCard = ({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) => (
  <a 
    href={url}
    target="_blank" 
    rel="noopener noreferrer"
    className="block bg-white/80 backdrop-blur-md rounded-xl p-8 border border-zinc-200 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
  >
    <h3 className="text-2xl font-bold mb-4 text-zinc-800 group-hover:text-primary transition-colors">{name}</h3>
    <div className="space-y-4">
      <p className="text-zinc-600">{description}</p>
      <div className="inline-flex items-center text-primary group-hover:translate-x-1 transition-transform">
        View Details
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <title>View details arrow</title>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </a>
);

const Infrastructure = () => {
  return (
    <section id="infrastructure" className="relative py-12 bg-white overflow-hidden">
      {/* Background Map Image */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <Image
          src="/images/nodes/Map.png"
          alt="Network map background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-zinc-800">
          Network of Nodes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <NodeCard
            name="BLRxZo"
            description="Experience the vibrant tech scene of Bangalore at BLRxZo. Our space features dedicated workstations, comfortable accommodation, and collaborative areas perfect for innovation and community building."
            url="https://x.com/blrxzo"
            imagePath="/BLRxZo_Isometric_Render.png"
            accommodation={{
              dorms: 8,
              privateRooms: 4
            }}
          />
          <NodeCard
            name="WTFxZo"
            description="A luxury villa in Whitefield's tech hub offering serene co-living with garden spaces, common areas, and modern co-working facilities. Perfect for those seeking a peaceful yet collaborative environment."
            url="https://x.com/wtfxzo"
            imagePath="/Zo House Isometric latest.png"
            accommodation={{
              dorms: 16,
              privateRooms: 2
            }}
          />
        </div>

        <h3 className="text-3xl font-bold mb-8 text-center text-zinc-800">Lite Nodes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <LiteNodeCard 
            name="Zostel Koramangala"
            description="Experience the happening scene of Bangalore right at the hub with Zostel Bangalore (Koramangala). Our multiple common areas, dedicated workspace, and spacious dorms make it among the best hostels in Bangalore."
            url="https://www.zostel.com/zostel/bangalore/"
          />
          <LiteNodeCard 
            name="Zostel Indiranagar"
            description="Zostel Bangalore (Indiranagar) offers you a convenient, social stay in Bangalore's party hub of Indiranagar. It features indoor and outdoor common areas, a quaint cafe for homely meals, and well-equipped workstations."
            url="https://www.zostel.com/zostel/bangalore/"
          />
        </div>
      </div>
    </section>
  );
};

export default Infrastructure; 