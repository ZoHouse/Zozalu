import DetailPageLayout from '@/components/DetailPageLayout';
import Link from 'next/link';
import Image from 'next/image';

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
          <h2 className="text-2xl font-semibold mb-6 text-neon-blue">Beacon Nodes</h2>
          <p className="mb-6">
            Our beacon nodes serve as central hubs for co-living, co-working, and experimental governance. They provide high-quality 
            accommodation, workspaces, and facilities that sustain long-term innovation beyond the pop-up duration.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-secondary p-8 rounded-lg border border-neon-blue relative overflow-hidden">
              <h3 className="text-xl font-semibold mb-4 text-neon-blue">
                <Link href="https://blrxzo.zo.xyz" className="text-neon-blue hover:underline">BLRxZo</Link>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                <div className="md:col-span-3 space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Accommodation</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>8 Dorm Beds</li>
                      <li>4 Private Rooms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Facilities</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Co-working spaces for deep work</li>
                      <li>Event areas for workshops</li>
                      <li>Collaborative zones</li>
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-2 h-64 md:h-auto relative">
                  <div className="absolute inset-0 md:inset-x-0 md:inset-y-2 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-full">
                      <Image 
                        src="/images/nodes/blrxzo.png" 
                        alt="BLRxZo Beacon Node" 
                        fill
                        style={{ objectFit: 'contain' }}
                        className="hover:scale-105 transition-transform duration-300"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary p-8 rounded-lg border border-neon-purple relative overflow-hidden">
              <h3 className="text-xl font-semibold mb-4 text-neon-purple">
                <Link href="https://wtfxzo.zo.xyz" className="text-neon-purple hover:underline">WTFxZo</Link>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                <div className="md:col-span-3 space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Accommodation</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>16 Dorm Beds</li>
                      <li>2 Private Rooms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Facilities</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>24/7 café & breakout zones</li>
                      <li>Podcast studio</li>
                      <li>Collaborative work areas</li>
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-2 h-64 md:h-auto relative">
                  <div className="absolute inset-0 md:inset-x-0 md:inset-y-2 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-full">
                      <Image 
                        src="/images/nodes/wtfxzo.png" 
                        alt="WTFxZo Beacon Node" 
                        fill
                        style={{ objectFit: 'contain' }}
                        className="hover:scale-105 transition-transform duration-300"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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