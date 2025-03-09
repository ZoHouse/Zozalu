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
    className="bento-item block hover:border-primary transition-colors"
  >
    <h3 className="text-2xl font-bold mb-4">{name}</h3>
    <div className="relative w-full h-48 mb-4">
      <Image
        src={imagePath}
        alt={`${name} location`}
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
    <div className="space-y-4">
      <p className="text-muted">{description}</p>
      <div>
        <h4 className="text-lg font-semibold mb-2 text-primary">Accommodation</h4>
        <ul className="space-y-2 text-muted">
          <li>{accommodation?.dorms} Dorm Beds</li>
          <li>{accommodation?.privateRooms} Private Rooms</li>
          <li>10 Co-working Slots</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2 text-primary">Starting Price</h4>
        <p className="text-xl font-bold">₹1599</p>
      </div>
      <div className="inline-flex items-center text-primary">
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
    <section id="infrastructure" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Infrastructure & Nodes
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

        <h3 className="text-3xl font-bold mb-8 text-center">Lite Nodes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <a 
            href="https://www.zostel.com/zostel/bangalore/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bento-item block hover:border-primary transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4">Zostel Koramangala</h3>
            <div className="space-y-4">
              <p className="text-muted">Experience the happening scene of Bangalore right at the hub with Zostel Bangalore (Koramangala). Our multiple common areas, dedicated workspace, and spacious dorms make it among the best hostels in Bangalore.</p>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-primary">Starting Price</h4>
                <p className="text-xl font-bold">₹599</p>
              </div>
              <div className="inline-flex items-center text-primary">
                View Details
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>View details arrow</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>

          <a 
            href="https://www.zostel.com/zostel/bangalore/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bento-item block hover:border-primary transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4">Zostel Indiranagar</h3>
            <div className="space-y-4">
              <p className="text-muted">Zostel Bangalore (Indiranagar) offers you a convenient, social stay in Bangalore's party hub of Indiranagar. It features indoor and outdoor common areas, a quaint cafe for homely meals, and well-equipped workstations.</p>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-primary">Starting Price</h4>
                <p className="text-xl font-bold">₹599</p>
              </div>
              <div className="inline-flex items-center text-primary">
                View Details
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>View details arrow</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure; 