import DetailPageLayout from '@/components/DetailPageLayout';
import Link from 'next/link';

export default function GetInvolvedPage() {
  return (
    <DetailPageLayout title="Get Involved">
      <div className="prose prose-invert max-w-none">
        <div className="bg-secondary p-6 rounded-lg border border-primary mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Join the Zozalu Movement</h2>
          <p className="mb-0">
            Be part of the Zozalu community and contribute to our vision of decentralized living, innovation, and cultural transformation. 
            There are multiple ways to engage with our ecosystem, from attending the pop-up city to hosting your own node or contributing your expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-neon-blue">Register for the Event</h2>
            <p className="mb-6">
              Join us for 14 days of innovation, collaboration, and community building in Bangalore from April 1st to 15th. 
              Experience a meticulously curated program of events, workshops, mentorship opportunities, and collaborative sessions.
            </p>
            
            <div className="bg-secondary p-6 rounded-lg border border-neon-blue mb-6">
              <h3 className="text-xl font-semibold mb-3">Event Highlights</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Daily academic and cultural events across multiple thematic tracks</li>
                <li>Networking with over 512+ Founder members and innovators</li>
                <li>Collaborative workshops and hackathons</li>
                <li>Accommodation at beacon and lite nodes</li>
                <li>Participate in experimental governance decisions</li>
              </ul>
            </div>
            
            <div className="text-center">
              <Link 
                href="https://form.typeform.com/to/register-zozalu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button inline-block"
              >
                Register Now
              </Link>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-neon-purple">Submit a Node</h2>
            <p className="mb-6">
              Expand the Zozalu network by registering your space as a node. Whether you have a co-living space, 
              co-working hub, or community center, you can become an integral part of our decentralized ecosystem.
            </p>
            
            <div className="bg-secondary p-6 rounded-lg border border-neon-purple mb-6">
              <h3 className="text-xl font-semibold mb-3">Node Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Physical space for accommodation, events, or co-working</li>
                <li>Community-oriented values aligned with Zozalu's vision</li>
                <li>Willingness to participate in decentralized governance</li>
                <li>Capacity to host events and gatherings</li>
                <li>Internet connectivity and basic infrastructure</li>
              </ul>
            </div>
            
            <div className="text-center">
              <Link 
                href="https://submitanode.typeform.com/submitazonode" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-6 py-3 bg-neon-purple text-black font-semibold rounded-md shadow-neon-purple hover:bg-opacity-90 transition-all"
              >
                Submit Your Node
              </Link>
            </div>
          </section>
        </div>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-neon-pink">Community Participation Models</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-secondary p-6 rounded-lg border border-neon-pink">
              <h3 className="text-xl font-semibold mb-3">Token-Gated Access</h3>
              <p className="text-sm mb-4">
                Engage with blockchain-based governance and participation models that provide members with special access and voting rights.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Access to exclusive events</li>
                <li>Voting rights on key decisions</li>
                <li>Resource allocation input</li>
              </ul>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg border border-neon-pink">
              <h3 className="text-xl font-semibold mb-3">Participatory Governance</h3>
              <p className="text-sm mb-4">
                Actively shape the future of Zozalu by participating in our experimental governance systems and decision-making processes.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Quadratic voting experiments</li>
                <li>Policy development</li>
                <li>Resource management input</li>
                <li>Community moderation</li>
              </ul>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg border border-neon-pink">
              <h3 className="text-xl font-semibold mb-3">Project Incubation</h3>
              <p className="text-sm mb-4">
                Develop your ideas within our supportive ecosystem and access resources to turn your vision into reality.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Mentorship opportunities</li>
                <li>Access to grants and funding</li>
                <li>Collaborative workspace</li>
                <li>Community feedback</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Thematic Contribution Areas</h2>
          
          <div className="space-y-4 mb-8">
            <div className="bg-secondary p-4 rounded-lg border-l-4 border-primary">
              <h3 className="font-semibold">Web3 & Decentralization</h3>
              <p className="text-sm text-muted">Contribute to DAOs, smart contracts, blockchain privacy tools, and decentralized applications.</p>
            </div>
            
            <div className="bg-secondary p-4 rounded-lg border-l-4 border-neon-blue">
              <h3 className="font-semibold">Biotech & Longevity</h3>
              <p className="text-sm text-muted">Explore decentralized science (DeSci), regenerative medicine, and longevity-focused R&D.</p>
            </div>
            
            <div className="bg-secondary p-4 rounded-lg border-l-4 border-neon-purple">
              <h3 className="font-semibold">Experimental Governance</h3>
              <p className="text-sm text-muted">Develop and test quadratic voting, liquid democracy, and innovative governance simulations.</p>
            </div>
            
            <div className="bg-secondary p-4 rounded-lg border-l-4 border-neon-pink">
              <h3 className="font-semibold">Network States & Communal Living</h3>
              <p className="text-sm text-muted">Prototype decentralized urbanism and economic self-sufficiency models for communities.</p>
            </div>
            
            <div className="bg-secondary p-4 rounded-lg border-l-4 border-primary">
              <h3 className="font-semibold">Innovation & Cultural Exchange</h3>
              <p className="text-sm text-muted">Bridge tech and art through immersive, creative collaborations and cultural initiatives.</p>
            </div>
          </div>
        </section>
        
        <div className="text-center mb-10">
          <Link 
            href="mailto:contact@zozalu.xyz" 
            className="text-neon-blue hover:underline inline-flex items-center"
          >
            Have questions? Contact us
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </DetailPageLayout>
  );
} 