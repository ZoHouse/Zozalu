import DetailPageLayout from '@/components/DetailPageLayout';

export default function GetInvolvedPage() {
  return (
    <DetailPageLayout title="Get Involved">
      <div className="space-y-12">
        <section>
          <p className="text-xl mb-8 text-muted">
            Be part of the Zozalu movement. Register for our next event or explore ways to contribute to our growing community.
          </p>
          
          <div className="bg-secondary border border-primary rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Register for Our Next Event</h2>
            <p className="mb-6">
              Our next 14-day pop-up event is scheduled for June 15-29, 2023. Join us for innovation, collaboration, and community building.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border border-border p-5 rounded-lg bg-background">
                <h3 className="font-semibold mb-2">Basic Pass</h3>
                <p className="text-primary text-2xl font-bold mb-2">Free</p>
                <ul className="text-sm space-y-2 mb-6 text-muted">
                  <li>• Access to public events</li>
                  <li>• Community discussions</li>
                  <li>• Online resources</li>
                </ul>
              </div>
              
              <div className="border border-primary p-5 rounded-lg bg-background relative">
                <span className="absolute -top-3 right-3 bg-primary text-black px-3 py-1 text-xs font-bold rounded">POPULAR</span>
                <h3 className="font-semibold mb-2">Builder Pass</h3>
                <p className="text-primary text-2xl font-bold mb-2">$299</p>
                <ul className="text-sm space-y-2 mb-6 text-muted">
                  <li>• All Basic features</li>
                  <li>• Workshop participation</li>
                  <li>• Hackathon entry</li>
                  <li>• Accommodation (shared)</li>
                  <li>• Meals included</li>
                </ul>
              </div>
              
              <div className="border border-border p-5 rounded-lg bg-background">
                <h3 className="font-semibold mb-2">Pioneer Pass</h3>
                <p className="text-primary text-2xl font-bold mb-2">$599</p>
                <ul className="text-sm space-y-2 mb-6 text-muted">
                  <li>• All Builder features</li>
                  <li>• Private accommodation</li>
                  <li>• Exclusive dinners</li>
                  <li>• 1-on-1 mentoring</li>
                  <li>• Early access to future events</li>
                </ul>
              </div>
            </div>
            
            <a 
              href="https://forms.zo.xyz/register" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button block w-full text-center py-4"
            >
              Register Now
            </a>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Other Ways to Contribute</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Become a Volunteer</h3>
              <p className="text-muted mb-4">
                Help organize and run our events. We need assistance with logistics, technical support, content creation, and more.
              </p>
              <a href="mailto:volunteers@zo.xyz" className="text-primary hover:underline">Contact our volunteer coordinator →</a>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Sponsor the Initiative</h3>
              <p className="text-muted mb-4">
                Support Zozalu financially or through in-kind contributions. Sponsorship opportunities are available at various levels.
              </p>
              <a href="mailto:sponsors@zo.xyz" className="text-primary hover:underline">Request sponsorship info →</a>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Share Your Expertise</h3>
              <p className="text-muted mb-4">
                Become a speaker, workshop facilitator, or mentor. Share your knowledge and skills with our community.
              </p>
              <a href="mailto:speakers@zo.xyz" className="text-primary hover:underline">Apply as a speaker/mentor →</a>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Offer Your Space</h3>
              <p className="text-muted mb-4">
                Have a location that could serve as a node in our network? We're always looking to expand our physical presence.
              </p>
              <a href="mailto:spaces@zo.xyz" className="text-primary hover:underline">Discuss your space →</a>
            </div>
          </div>
        </section>
        
        <section className="bg-secondary p-8 rounded-lg border border-border">
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="mb-6">
            Connect with like-minded individuals interested in decentralized living and innovation.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://discord.gg/zoworld" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-background rounded-lg border border-border hover:border-primary transition-colors"
            >
              Discord Community
            </a>
            <a 
              href="https://t.me/zoworldxyz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-background rounded-lg border border-border hover:border-primary transition-colors"
            >
              Telegram Group
            </a>
            <a 
              href="https://twitter.com/zoworldxyz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-background rounded-lg border border-border hover:border-primary transition-colors"
            >
              Twitter
            </a>
          </div>
        </section>
      </div>
    </DetailPageLayout>
  );
} 