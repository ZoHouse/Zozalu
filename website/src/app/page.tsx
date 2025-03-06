import Hero from '@/components/Hero';
import TLDR from '@/components/TLDR';
import EventDetails from '@/components/EventDetails';
import Infrastructure from '@/components/Infrastructure';
import Partners from '@/components/Partners';
import Mentors from '@/components/Mentors';
import Bounties from '@/components/Bounties';
import ProofOfVibes from '@/components/ProofOfVibes';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TLDR />
      <EventDetails />
      <Infrastructure />
      <Partners />
      <Mentors />
      <Bounties />
      <ProofOfVibes />
    </div>
  );
}
