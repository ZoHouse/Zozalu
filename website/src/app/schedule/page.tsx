import DetailPageLayout from '@/components/DetailPageLayout';

export default function SchedulePage() {
  return (
    <DetailPageLayout title="Event Schedule">
      <div className="prose prose-invert max-w-none">
        <div className="bg-secondary p-6 rounded-lg border border-primary mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-primary">14 Days of Innovation & Collaboration</h2>
          <p className="mb-0">
            Join us for a meticulously curated two-week program designed to inspire and facilitate interdisciplinary breakthroughs. 
            Our schedule features a balanced mix of academic events, cultural experiences, workshops, mentorship opportunities, 
            and collaborative sessions across multiple thematic tracks.
          </p>
        </div>

        <div className="grid gap-12 mb-10">
          {/* Days 1-2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-neon-blue">
              Days 1-2: Mind & Body Wellness
              <span className="block text-base font-normal text-muted mt-1">Meditation, Longevity, Biohacking</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg border border-neon-blue">
                <h3 className="text-xl font-semibold mb-4">Day 1</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neon-blue">Academic Event</h4>
                    <p className="text-lg mb-1">Exploring the Science of Longevity and Biohacking</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-blue">Cultural Event</h4>
                    <p className="text-lg mb-1">Guided Meditation and Sound Healing</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg border border-neon-blue">
                <h3 className="text-xl font-semibold mb-4">Day 2</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neon-blue">Academic Event</h4>
                    <p className="text-lg mb-1">Mindfulness and Neuroplasticity in a Decentralized World</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-blue">Cultural Event</h4>
                    <p className="text-lg mb-1">Holistic Yoga and Breathwork Session</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Days 3-4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-neon-purple">
              Days 3-4: Decentralized Science & Technology
              <span className="block text-base font-normal text-muted mt-1">DeSci, AI, Cryptography, Research Funding Models</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg border border-neon-purple">
                <h3 className="text-xl font-semibold mb-4">Day 3</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neon-purple">Academic Event</h4>
                    <p className="text-lg mb-1">AI and Decentralization – Ethics and Implementation</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-purple">Cultural Event</h4>
                    <p className="text-lg mb-1">AI-Generated Art Exhibition and Interactive Experience</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg border border-neon-purple">
                <h3 className="text-xl font-semibold mb-4">Day 4</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neon-purple">Academic Event</h4>
                    <p className="text-lg mb-1">The Future of DeSci: How DAOs are Transforming Research</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-purple">Cultural Event</h4>
                    <p className="text-lg mb-1">Science Fiction Storytelling and AI Narratives</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Days 5-6 */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-primary">
              Days 5-6: Governance & Network States
              <span className="block text-base font-normal text-muted mt-1">DAOs, Voting Mechanisms, Digital Identity</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg border border-primary">
                <h3 className="text-xl font-semibold mb-4">Day 5</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary">Academic Event</h4>
                    <p className="text-lg mb-1">DAOs and the Future of Governance</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary">Cultural Event</h4>
                    <p className="text-lg mb-1">Open Debate and Town Hall on Digital Identity</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg border border-primary">
                <h3 className="text-xl font-semibold mb-4">Day 6</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary">Academic Event</h4>
                    <p className="text-lg mb-1">Quadratic Voting and Participatory Decision-Making</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary">Cultural Event</h4>
                    <p className="text-lg mb-1">Governance Role-Playing Game</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Days 7-8 */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-neon-pink">
              Days 7-8: Innovation & Entrepreneurship
              <span className="block text-base font-normal text-muted mt-1">Startups, Funding Models, Impact Investment</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg border border-neon-pink">
                <h3 className="text-xl font-semibold mb-4">Day 7</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neon-pink">Academic Event</h4>
                    <p className="text-lg mb-1">Decentralized Funding Models and Startup Acceleration</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-pink">Cultural Event</h4>
                    <p className="text-lg mb-1">Pitch Night – Founders Present to a Decentralized Panel</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg border border-neon-pink">
                <h3 className="text-xl font-semibold mb-4">Day 8</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neon-pink">Academic Event</h4>
                    <p className="text-lg mb-1">Web3 Business Models and Scaling Decentralized Startups</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-pink">Cultural Event</h4>
                    <p className="text-lg mb-1">Fireside Chat with Impact Investors</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Days 9-10 */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-neon-blue">
              Days 9-10: Decentralized Infrastructure (DePin)
              <span className="block text-base font-normal text-muted mt-1">Physical Infrastructure, Sustainability, Regenerative Systems</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg border border-neon-blue">
                <h3 className="text-xl font-semibold mb-4">Day 9</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neon-blue">Academic Event</h4>
                    <p className="text-lg mb-1">Building Resilient Cities through DePin</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-blue">Cultural Event</h4>
                    <p className="text-lg mb-1">Sustainable Urban Design and Decentralized Architecture Walkthrough</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg border border-neon-blue">
                <h3 className="text-xl font-semibold mb-4">Day 10</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neon-blue">Academic Event</h4>
                    <p className="text-lg mb-1">The Future of Energy – Decentralized Power Grids</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-blue">Cultural Event</h4>
                    <p className="text-lg mb-1">Interactive Sustainable Farming and Regenerative Living Workshop</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Days 11-12 */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-neon-purple">
              Days 11-12: Physical Goods & Web3 Art
              <span className="block text-base font-normal text-muted mt-1">NFTs, Generative Art, Decentralized Media</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg border border-neon-purple">
                <h3 className="text-xl font-semibold mb-4">Day 11</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neon-purple">Academic Event</h4>
                    <p className="text-lg mb-1">NFTs Beyond Speculation – Use Cases for Physical and Digital Ownership</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-purple">Cultural Event</h4>
                    <p className="text-lg mb-1">Web3 Fashion and Digital Wearables Showcase</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg border border-neon-purple">
                <h3 className="text-xl font-semibold mb-4">Day 12</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neon-purple">Academic Event</h4>
                    <p className="text-lg mb-1">The Creator Economy and Web3 Media Distribution</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neon-purple">Cultural Event</h4>
                    <p className="text-lg mb-1">Live Music and Digital Art Collaboration</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Days 13-14 */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-primary">
              Days 13-14: Future Societies & Cultural Evolution
              <span className="block text-base font-normal text-muted mt-1">Experimental Governance, Utopian Communities, Storytelling</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg border border-primary">
                <h3 className="text-xl font-semibold mb-4">Day 13</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary">Academic Event</h4>
                    <p className="text-lg mb-1">Designing Utopian Communities and Future Cities</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary">Cultural Event</h4>
                    <p className="text-lg mb-1">Immersive Storytelling – Writing the Future of Civilization</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg border border-primary">
                <h3 className="text-xl font-semibold mb-4">Day 14</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary">Academic Event</h4>
                    <p className="text-lg mb-1">The Philosophy of Decentralization – Where Do We Go From Here?</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary">Cultural Event</h4>
                    <p className="text-lg mb-1">Closing Ceremony – Celebration of the Future We Built</p>
                    <div className="text-sm text-muted">
                      <p className="mb-1">Time: TBD</p>
                      <p className="mb-1">Space: TBD</p>
                      <p className="mb-1">Culture: TBD</p>
                      <p>Trip Host: TBD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <p className="text-center text-muted italic mb-8">
          This schedule is designed to bridge academic knowledge and cultural experiences, ensuring that Zozalu fosters both intellectual growth and community bonding.
          Further refinements will be made based on community feedback and participatory governance decisions.
        </p>
      </div>
    </DetailPageLayout>
  );
} 