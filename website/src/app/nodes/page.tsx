import DetailPageLayout from '@/components/DetailPageLayout';
import Link from 'next/link';

export default function NodesPage() {
  return (
    <DetailPageLayout title="Nodes & Infrastructure">
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
            <div className="bg-secondary p-6 rounded-lg border border-neon-blue">
              <h3 className="text-xl font-semibold mb-3 text-neon-blue">BLRxZo</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Accommodation</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>8 Dorm Beds</li>
                    <li>4 Private Rooms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Facilities</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Co-working spaces for deep work</li>
                    <li>Event areas for workshops</li>
                    <li>Collaborative zones</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Connect</h4>
                  <div className="flex space-x-4 mt-2">
                    <Link href="https://twitter.com/BLRxZo" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">
                      Twitter
                    </Link>
                    <Link href="https://t.me/BLRxZo" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">
                      Telegram
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg border border-neon-purple">
              <h3 className="text-xl font-semibold mb-3 text-neon-purple">WTFxZo</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Accommodation</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>16 Dorm Beds</li>
                    <li>2 Private Rooms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Facilities</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>24/7 café & breakout zones</li>
                    <li>Podcast studio</li>
                    <li>Collaborative work areas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Connect</h4>
                  <div className="flex space-x-4 mt-2">
                    <Link href="https://twitter.com/WTFxZo" target="_blank" rel="noopener noreferrer" className="text-neon-purple hover:underline">
                      Twitter
                    </Link>
                    <Link href="https://t.me/WTFxZo" target="_blank" rel="noopener noreferrer" className="text-neon-purple hover:underline">
                      Telegram
                    </Link>
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
            <h3 className="text-xl font-semibold mb-4">Zotel Infrastructure</h3>
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
              <h3 className="text-xl font-semibold mb-3">Governance</h3>
              <p className="text-sm">
                Nodes serve as testing grounds for decentralized governance models, with participants actively shaping policies and resource allocation via quadratic voting and other experimental mechanisms.
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