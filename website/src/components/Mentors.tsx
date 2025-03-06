import Image from 'next/image';

type Mentor = {
  name: string;
  title: string;
  expertise: string[];
  bio: string;
  image: string;
  socials?: {
    x?: string;
    linkedin?: string;
    website?: string;
  };
};

// This will be replaced with actual mentor data
const mentors: Mentor[] = [
  {
    name: "Mentor Name",
    title: "Founder & CEO",
    expertise: ["Web3", "DeFi", "Community Building"],
    bio: "Brief bio highlighting expertise and relevance to Zozalu.",
    image: "/images/mentors/placeholder.png",
    socials: {
      x: "https://x.com/mentor",
      linkedin: "https://linkedin.com/in/mentor"
    }
  },
  // Add more mentors
];

const MentorCard = ({ mentor }: { mentor: Mentor }) => (
  <div className="bento-item">
    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
      <Image
        src={mentor.image}
        alt={mentor.name}
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
    <div className="text-center mb-4">
      <h3 className="text-xl font-bold">{mentor.name}</h3>
      <p className="text-primary">{mentor.title}</p>
    </div>
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-semibold text-muted mb-2">Expertise</h4>
        <div className="flex flex-wrap gap-2">
          {mentor.expertise.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs rounded-full bg-secondary text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <p className="text-sm text-muted">{mentor.bio}</p>
      {mentor.socials && (
        <div className="flex justify-center space-x-4">
          {mentor.socials.x && (
            <a
              href={mentor.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">Follow {mentor.name} on X (Twitter)</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          )}
          {mentor.socials.linkedin && (
            <a
              href={mentor.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">Connect with {mentor.name} on LinkedIn</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  </div>
);

const Mentors = () => {
  return (
    <section id="mentors" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Mentors
        </h2>
        
        {mentors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <MentorCard key={mentor.name} mentor={mentor} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg text-muted">
              Mentor announcements coming soon. Stay tuned!
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={`mentor-placeholder-${num}`}
                  className="aspect-square bg-secondary/30 rounded-lg animate-pulse"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Mentors; 