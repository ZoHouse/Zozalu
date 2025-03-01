import DetailPageLayout from '@/components/DetailPageLayout';
import Link from 'next/link';

export default function LitepaperPage() {
  return (
    <DetailPageLayout title="Litepaper">
      <div className="prose prose-invert max-w-none">
        <div className="bg-secondary p-6 rounded-lg border border-primary mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-primary">TLDR</h2>
          <p className="mb-4">
            Zozalu is a groundbreaking two-week pop-up city, serving as a living laboratory for innovation, governance, and cultural transformation. It is an experiment in decentralized community building, designed not as a temporary initiative but as a lasting movement with ongoing engagement through Zo Houses and associated nodes.
          </p>
          <p className="mb-4">
            Unlike conventional conferences or short-lived summits, Zozalu creates a scaffold for long-term collaboration, ensuring that every project, relationship, and initiative formed within its ecosystem can persist beyond its initial duration. By leveraging the physical infrastructure of BLRxZo and WTFxZo as beacon nodes and two Zostels as lite nodes, Zozalu ensures that its principles of self-organized governance, experimentation, and innovation remain active year-round.
          </p>
          <p className="mb-4">
            This meticulously curated initiative features a packed schedule of events, workshops, mentorship opportunities, and collaborative sessions designed to inspire and facilitate interdisciplinary breakthroughs. With over 512+ Founder members and 250,000 citizens in the Zo World network, this initiative taps into a vibrant, global community of innovators and change-makers.
          </p>
          <p>
            More than just an event, Zozalu is a prototype for decentralized communal living, embodying a vision where temporary innovation hubs evolve into sustained networks of knowledge exchange and co-creation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-secondary p-6 rounded-lg border border-neon-blue">
            <h3 className="text-xl font-semibold mb-3 text-neon-blue">Event Details</h3>
            <ul className="space-y-2">
              <li><strong>Dates:</strong> April 1st to 15th</li>
              <li><strong>Location:</strong> Bangalore</li>
              <li><strong>Trip Host:</strong> Zo World</li>
            </ul>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg border border-neon-purple">
            <h3 className="text-xl font-semibold mb-3 text-neon-purple">Nodes</h3>
            <div className="mb-4">
              <h4 className="font-semibold">Beacon Nodes</h4>
              <div className="mb-3">
                <p className="text-sm text-muted mb-1">
                  <strong>BLRxZo</strong>: <Link href="https://x.com/BLRxZo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BLRxZo</Link>
                </p>
                <p className="text-sm text-muted">Accommodation: 8 Dorm Beds, 4 Private rooms</p>
              </div>
              <div className="mb-3">
                <p className="text-sm text-muted mb-1">
                  <strong>WTFxZo</strong>: <Link href="https://x.com/WTFxZo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WTFxZo</Link>
                </p>
                <p className="text-sm text-muted">Accommodation: 16 Dorm Beds, 2 Private rooms</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Lite Nodes</h4>
              <div>
                <p className="text-sm text-muted mb-1">
                  <strong>Zostel</strong>: <Link href="https://www.zostel.com/zostel/bangalore/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Zostel Bangalore</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introduction</h2>
          
          <h3 className="text-xl font-semibold mb-3">1.1 Background</h3>
          <p className="mb-4">
            Modern innovation and governance ecosystems are often fragmented, bureaucratic, and constrained by geographical and institutional barriers. While digital spaces have allowed global collaboration, physical co-presence remains essential for deep work, trust-building, and rapid iteration.
          </p>
          <p className="mb-6">
            The success of experiments like Zuzalu and Forma's Argentina pop-up demonstrates the power of temporary urban environments to accelerate social and technological progress. However, where these projects have largely functioned as transient testbeds, Zozalu goes a step further by embedding its ethos into permanent community nodes—ensuring long-term impact and continuity.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">1.2 Purpose</h3>
          <p className="mb-4">
            Zozalu exists to pioneer decentralized, self-organizing communities where innovation and governance experiments can unfold in real-world conditions. Its mission is to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Inspire and institutionalize decentralized culture, transitioning from a temporary pop-up into a sustained, year-round network.
            </li>
            <li>
              Foster interdisciplinary breakthroughs, bridging Web3, biotech, governance, and cultural innovation through structured programming.
            </li>
            <li>
              Establish Zo Houses and Zostels as long-term centers of collaboration, ensuring that participants continue building beyond the event.
            </li>
          </ul>
          <p className="mb-6">
            With a strong foundation in physical infrastructure, Zozalu is not just an event—it is a movement designed to last.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-neon-blue">2. Why Zozalu?</h2>
          
          <h3 className="text-xl font-semibold mb-3">2.1 The Problem</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Fragmented Innovation:</strong> Existing communities lack integrated hubs where builders from different fields can co-live, co-work, and iterate in real time.
            </li>
            <li>
              <strong>Lack of Real-World Testing Grounds:</strong> Many decentralized technologies, governance models, and biotech advancements struggle to transition from theory to practice due to a lack of structured, real-world experimentation environments.
            </li>
            <li>
              <strong>Ephemeral Nature of Conferences & Summits:</strong> While traditional tech and governance events bring together great minds, they fail to sustain collaboration beyond their duration.
            </li>
            <li>
              <strong>No Long-Term Governance Evolution:</strong> Experimenting with governance requires ongoing, real-world iteration, not just short-lived thought exercises.
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">2.2 The Solution</h3>
          <p className="mb-4">
            Zozalu solves these challenges by:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Embedding Long-Term Network Nodes:</strong> BLRxZo and WTFxZo serve as permanent incubators for innovation, while Zostels extend the network through global accessibility.
            </li>
            <li>
              <strong>Creating a Self-Governing Community:</strong> Unlike traditional summits, Zozalu's participants actively shape policies and resource allocation via decentralized governance tools.
            </li>
            <li>
              <strong>Providing a Multi-Thematic Testbed:</strong> Thematic tracks in Web3, biotech, governance, and cultural innovation provide structured experimentation opportunities.
            </li>
            <li>
              <strong>Ensuring Long-Term Continuity:</strong> Through digital and physical infrastructure, Zozalu enables projects to extend beyond the pop-up timeframe, ensuring sustainable impact.
            </li>
          </ul>
          <p className="mb-6">
            By merging temporary activation with permanent infrastructure, Zozalu achieves what no other decentralized pop-up has done before: ensuring the ethos sticks around through year-round, active nodes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-neon-purple">3. How Zozalu Works</h2>
          
          <h3 className="text-xl font-semibold mb-3">3.1 Pop-Up City Framework</h3>
          <p className="mb-4">
            Zozalu functions as a self-organizing, temporary city, operating under decentralized principles. It integrates into Zo World's existing node framework, ensuring that projects and relationships persist beyond the event.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              BLRxZo & WTFxZo serve as core beacon nodes, acting as launchpads for residency programs, events, and governance experiments.
            </li>
            <li>
              Zostels act as lite nodes, providing accessibility to a broader range of participants while expanding the reach of the community.
            </li>
            <li>
              Founder Members, Citizens of Zo World, and Guardians collectively shape policy, infrastructure, and long-term governance.
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">3.2 Thematic Tracks</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Web3 & Decentralization:</strong> DAOs, smart contracts, and blockchain privacy tools.
            </li>
            <li>
              <strong>Biotech & Longevity:</strong> Decentralized science (DeSci), regenerative medicine, and longevity-focused R&D.
            </li>
            <li>
              <strong>Experimental Governance:</strong> Quadratic voting, liquid democracy, and innovative governance simulations.
            </li>
            <li>
              <strong>Network States & Communal Living:</strong> Prototyping decentralized urbanism and economic self-sufficiency.
            </li>
            <li>
              <strong>Innovation & Cultural Exchange:</strong> Bridging tech and art through immersive, creative collaborations.
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">3.3 Community Participation Model</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Token-Gated Access:</strong> Blockchain-based governance and participation models.
            </li>
            <li>
              <strong>Participatory Governance:</strong> Participants actively vote on infrastructure, event planning, and decision-making.
            </li>
            <li>
              <strong>Project Incubation:</strong> A built-in framework for supporting high-impact initiatives beyond the event through grants, mentorship, and continued node-based development.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-neon-pink">4. Operational Framework</h2>
          
          <h3 className="text-xl font-semibold mb-3">4.1 Venue & Infrastructure</h3>
          <p className="mb-4">
            Zozalu is embedded within the vibrant ecosystem of Bangalore, a city renowned for its technological advancements, diverse talent pool, and innovative spirit. The event maximizes Bangalore's existing infrastructure while utilizing its own beacon nodes and lite nodes as the backbone of operations:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>BLRxZo & WTFxZo as Core Beacon Nodes:</strong> These Zo Houses serve as the central hubs for co-living, co-working, and experimental governance. They provide high-quality accommodation, workspaces, and facilities that sustain long-term innovation beyond the pop-up duration.
            </li>
            <li>
              <strong>Zostels as Lite Nodes:</strong> Acting as decentralized access points, Zostels ensure greater inclusivity and flexibility for participants who may not be stationed in core locations but still wish to contribute to the Zozalu ecosystem.
            </li>
            <li>
              <strong>Integration with Bangalore's Innovation Landscape:</strong> Zozalu leverages Bangalore's strong startup ecosystem, high-speed connectivity, and state-of-the-art facilities to enhance productivity and collaboration.
            </li>
            <li>
              <strong>Sustainable Urban Design:</strong> The infrastructure of Zozalu is optimized for sustainability, incorporating eco-friendly building principles, renewable energy sources, and decentralized utilities where possible.
            </li>
          </ul>

          <div className="bg-secondary p-6 rounded-lg border border-border mb-8">
            <h3 className="text-xl font-semibold mb-4">Infrastructure Includes:</h3>
            <ul className="list-disc pl-6 mb-0 space-y-2">
              <li>Co-working spaces equipped for deep work sessions</li>
              <li>On-site residential quarters for participants</li>
              <li>Event areas for workshops and hackathons</li>
              <li>A 24/7 café & breakout zones to encourage networking</li>
              <li>A podcast studio to document and share knowledge</li>
            </ul>
          </div>

          <div className="text-center mb-8">
            <Link 
              href="https://submitanode.typeform.com/submitazonode" 
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-block"
            >
              Register your node now
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Event Schedule Highlights</h2>
          
          <div className="space-y-8">
            <div className="bg-secondary p-6 rounded-lg border border-neon-blue">
              <h3 className="text-xl font-semibold mb-3 text-neon-blue">Days 1-2: Mind & Body Wellness</h3>
              <p className="text-muted mb-2">Meditation, Longevity, Biohacking</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Day 1:</h4>
                  <p className="text-sm">• Academic Event: Exploring the Science of Longevity and Biohacking</p>
                  <p className="text-sm">• Cultural Event: Guided Meditation and Sound Healing</p>
                </div>
                <div>
                  <h4 className="font-semibold">Day 2:</h4>
                  <p className="text-sm">• Academic Event: Mindfulness and Neuroplasticity in a Decentralized World</p>
                  <p className="text-sm">• Cultural Event: Holistic Yoga and Breathwork Session</p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg border border-neon-purple">
              <h3 className="text-xl font-semibold mb-3 text-neon-purple">Days 3-4: Decentralized Science & Technology</h3>
              <p className="text-muted mb-2">DeSci, AI, Cryptography, Research Funding Models</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Day 3:</h4>
                  <p className="text-sm">• Academic Event: AI and Decentralization – Ethics and Implementation</p>
                  <p className="text-sm">• Cultural Event: AI-Generated Art Exhibition and Interactive Experience</p>
                </div>
                <div>
                  <h4 className="font-semibold">Day 4:</h4>
                  <p className="text-sm">• Academic Event: The Future of DeSci: How DAOs are Transforming Research</p>
                  <p className="text-sm">• Cultural Event: Science Fiction Storytelling and AI Narratives</p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg border border-primary">
              <h3 className="text-xl font-semibold mb-3 text-primary">Days 5-6: Governance & Network States</h3>
              <p className="text-muted mb-2">DAOs, Voting Mechanisms, Digital Identity</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Day 5:</h4>
                  <p className="text-sm">• Academic Event: DAOs and the Future of Governance</p>
                  <p className="text-sm">• Cultural Event: Open Debate and Town Hall on Digital Identity</p>
                </div>
                <div>
                  <h4 className="font-semibold">Day 6:</h4>
                  <p className="text-sm">• Academic Event: Quadratic Voting and Participatory Decision-Making</p>
                  <p className="text-sm">• Cultural Event: Governance Role-Playing Game</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/schedule" className="text-neon-blue hover:underline inline-flex items-center">
              View full 14-day schedule
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
        </section>
      </div>
    </DetailPageLayout>
  );
} 