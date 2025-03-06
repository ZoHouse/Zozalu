import Hero from '@/components/Hero';
import BentoSection from '@/components/BentoSection';
import TLDR from '@/components/TLDR';
import EventDetails from '@/components/EventDetails';
import Infrastructure from '@/components/Infrastructure';
import ProofOfVibes from '@/components/ProofOfVibes';
import Mentors from '@/components/Mentors';
import Partners from '@/components/Partners';
import Bounties from '@/components/Bounties';

export default function Home() {
  return (
    <main>
      <Hero />
      <BentoSection />
      <TLDR />
      <EventDetails />
      <Infrastructure />
      <ProofOfVibes />
      <Mentors />
      <Partners />
      <Bounties />
    </main>
  );
}
