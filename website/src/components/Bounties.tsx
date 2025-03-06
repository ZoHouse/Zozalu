type Bounty = {
  title: string;
  description: string;
  reward: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  sponsor?: string;
};

// This will be replaced with actual bounty data
const bounties: Bounty[] = [
  {
    title: "Example Bounty",
    description: "Description of the bounty challenge and requirements.",
    reward: "1000 USDC",
    category: "DeFi",
    difficulty: "Intermediate",
    sponsor: "Sponsor Name"
  },
  // Add more bounties
];

const difficultyColors = {
  Beginner: 'text-green-500',
  Intermediate: 'text-yellow-500',
  Advanced: 'text-red-500'
};

const BountyCard = ({ bounty }: { bounty: Bounty }) => (
  <div className="bento-item">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold">{bounty.title}</h3>
      <span className={`text-sm font-medium ${difficultyColors[bounty.difficulty]}`}>
        {bounty.difficulty}
      </span>
    </div>
    <div className="space-y-4">
      <p className="text-muted">{bounty.description}</p>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
          {bounty.category}
        </span>
        <span className="px-3 py-1 text-sm rounded-full bg-secondary text-foreground">
          {bounty.reward}
        </span>
      </div>
      {bounty.sponsor && (
        <div className="text-sm text-muted">
          Sponsored by <span className="font-medium text-foreground">{bounty.sponsor}</span>
        </div>
      )}
    </div>
  </div>
);

const Bounties = () => {
  return (
    <section id="bounties" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Bounties
        </h2>

        {bounties.length > 0 ? (
          <>
            <div className="text-center mb-12">
              <p className="text-lg max-w-2xl mx-auto">
                Join our hackathon and build innovative solutions. Win exciting rewards and showcase your skills.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bounties.map((bounty) => (
                <BountyCard key={bounty.title} bounty={bounty} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-lg text-muted">
              Bounty announcements coming soon. Stay tuned!
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={`bounty-placeholder-${num}`}
                  className="bento-item h-48 animate-pulse"
                >
                  <div className="h-6 w-2/3 bg-secondary/30 rounded mb-4" />
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-secondary/30 rounded" />
                    <div className="h-4 w-5/6 bg-secondary/30 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Bounties; 