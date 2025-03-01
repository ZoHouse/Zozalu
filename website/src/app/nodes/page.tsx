import DetailPageLayout from '@/components/DetailPageLayout';
import Link from 'next/link';

export default function NodesPage() {
  return (
    <DetailPageLayout title="Nodes">
      <div className="prose prose-invert max-w-none">
        <div className="bg-secondary p-6 rounded-lg border border-primary mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Decentralized Network Architecture</h2>
          <p className="mb-0">
            Zozalu operates through a system of physical infrastructure nodes that enable the community to function as a 
            distributed, yet cohesive ecosystem. By leveraging beacon nodes and lite nodes, we've created a scaffold for 
            long-term collaboration that persists beyond the initial two-week pop-up event.
          </p>
        </div>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">
            <Link href="https://blrxzo.zo.xyz" className="text-white hover:text-neon-blue hover:underline">
              BLRxZo
            </Link>
          </h2>
          <p className="text-xl mb-2">Socials: X, Telegram</p>
          <p className="text-xl mb-8">Accommodation: 8 Dorm Beds, 4 Private rooms</p>
          
          <h2 className="text-3xl font-semibold mb-6">
            <Link href="https://wtfxzo.zo.xyz" className="text-white hover:text-neon-purple hover:underline">
              WTFxZo
            </Link>
          </h2>
          <p className="text-xl mb-2">Socials: X, Telegram</p>
          <p className="text-xl mb-8">Accommodation: 16 Dorm Beds, 2 Private rooms</p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-neon-pink">Lite Nodes</h2>
          <p className="mb-6">
            Zostels act as decentralized access points, ensuring greater inclusivity and flexibility for participants 
            who may not be stationed in core locations but still wish to contribute to the Zozalu ecosystem.
          </p>
          
          <div className="bg-secondary p-6 rounded-lg border border-neon-pink mb-8">
            <h3 className="text-xl font-semibold mb-4">
              <Link href="https://zostel.com/zostel/bangalore" className="text-neon-pink hover:underline">Zostel Bangalore</Link>
            </h3>
            <div className="space-y-4">
              <p>
                Our network of Zostels functions as lite nodes providing additional accommodation and meeting points throughout the city.
                These nodes expand the reach of our community and allow for a more distributed experience.
              </p>
              <div>
                <h4 className="font-semibold">Features:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Flexible accommodation options</li>
                  <li>Satellite event spaces</li>
                  <li>Community integration points</li>
                  <li>Global accessibility network</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Node Functionality</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-secondary p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Co-Creation</h3>
              <p className="text-sm">
                Nodes that enable co-living through shared living experiences, fostering community connections, collaborative projects, and meaningful interactions between diverse participants.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-sm">
                Each node functions as an incubator for projects spanning Web3, biotech, governance, and cultural innovation, providing structured experimentation opportunities.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Continuity</h3>
              <p className="text-sm">
                Beyond the pop-up event, nodes ensure ongoing collaboration through residency programs, regular events, and maintained digital and physical infrastructure.
              </p>
            </div>
          </div>
        </section>
        
        <div className="text-center mb-10">
          <Link 
            href="https://submitanode.typeform.com/submitazonode" 
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-block"
          >
            Register Your Node
          </Link>
          <p className="text-sm text-muted mt-4">
            Become part of the Zozalu network by registering your space as a node.
          </p>
        </div>
      </div>
    </DetailPageLayout>
  );
} 