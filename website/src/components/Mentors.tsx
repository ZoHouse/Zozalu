import Image from 'next/image';

type Mentor = {
  name: string;
  role: string;
  image: string;
};

const mentors: Mentor[] = [
  {
    name: "Big Brain 1",
    role: "Coming Soon",
    image: "/mentors/placeholder.jpg"
  },
  {
    name: "Big Brain 2",
    role: "Coming Soon",
    image: "/mentors/placeholder.jpg"
  }
];

const Mentors = () => {
  return (
    <section id="mentors" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Big Brains
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {mentors.map((mentor) => (
            <div 
              key={mentor.name}
              className="group relative flex flex-col items-center"
            >
              <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-lg bg-zinc-900">
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-multiply" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-1">{mentor.name}</h3>
              <p className="text-sm text-muted text-center">{mentor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors; 