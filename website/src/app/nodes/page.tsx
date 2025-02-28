import DetailPageLayout from '@/components/DetailPageLayout';
import Image from 'next/image';

export default function NodesPage() {
  return (
    <DetailPageLayout title="Nodes & Infrastructure">
      <div className="space-y-10">
        <section>
          <p className="text-xl mb-8 text-muted">
            Discover how BLRxZo & WTFxZo function as beacon nodes and Zostels as lite nodes in our decentralized ecosystem.
          </p>
          
          <div className="bg-secondary border border-border rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Network Architecture</h2>
            <p className="mb-6">
              The Zozalu network operates on a two-tier architecture of Beacon and Lite nodes, creating a resilient and expandable infrastructure for decentralized living.
            </p>
            
            <div className="h-64 bg-background rounded-lg flex items-center justify-center mb-6 border border-border">
              <p className="text-muted">Network Diagram Placeholder</p>
            </div>
            
            <p className="text-muted text-sm">
              Our infrastructure combines physical spaces with digital coordination tools to create a seamless ecosystem.
            </p>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Beacon Nodes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold mb-3">BLRxZo</h3>
              <p className="text-muted mb-4">
                Located in Bangalore, BLRxZo serves as our primary innovation hub and coordination center for technological development.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>R&D Laboratory</li>
                <li>Tech Talent Hub</li>
                <li>Infrastructure Development</li>
                <li>Governance Council Headquarters</li>
              </ul>
            </div>
            
            <div className="bg-secondary rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold mb-3">WTFxZo</h3>
              <p className="text-muted mb-4">
                Located in Delhi, WTFxZo focuses on community building, cultural development, and social infrastructure.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Community Gathering Space</li>
                <li>Cultural Programming</li>
                <li>Onboarding Center</li>
                <li>Educational Resources</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Lite Nodes</h2>
          
          <p className="mb-6">
            Zostels serve as our lite node network, providing accommodations and gathering spaces throughout India, creating a distributed network of community hubs.
          </p>
          
          <div className="bg-secondary rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold mb-4">Zostel Network</h3>
            <p className="text-muted mb-4">
              Our partnership with Zostel hostels allows us to maintain a presence in key locations, each offering:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-background p-4 rounded text-center">
                <p className="font-bold mb-1">Accommodation</p>
                <p className="text-sm text-muted">For members</p>
              </div>
              <div className="bg-background p-4 rounded text-center">
                <p className="font-bold mb-1">Workspaces</p>
                <p className="text-sm text-muted">Productive environments</p>
              </div>
              <div className="bg-background p-4 rounded text-center">
                <p className="font-bold mb-1">Events</p>
                <p className="text-sm text-muted">Community gatherings</p>
              </div>
              <div className="bg-background p-4 rounded text-center">
                <p className="font-bold mb-1">Resources</p>
                <p className="text-sm text-muted">Shared tools</p>
              </div>
            </div>
            
            <p className="text-primary font-medium">
              Current locations: Bangalore, Delhi, Mumbai, Goa, Manali, Rishikesh, and expanding
            </p>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Join Our Network</h2>
          <p className="text-muted mb-6">
            We're always looking for new locations and partners to expand the Zozalu network. If you have a space that could serve as a node, get in touch.
          </p>
          <a href="/get-involved" className="cta-button inline-block">Become a Node</a>
        </section>
      </div>
    </DetailPageLayout>
  );
} 