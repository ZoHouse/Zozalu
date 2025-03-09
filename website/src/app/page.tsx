import Hero from '@/components/Hero';
import BentoSection from '@/components/BentoSection';
import TLDR from '@/components/TLDR';
import EventDetails from '@/components/EventDetails';
import Infrastructure from '@/components/Infrastructure';
import Mentors from '@/components/Mentors';
import Partners from '@/components/Partners';

export default function Home() {
  return (
    <main>
      <Hero />
      <BentoSection />
      <TLDR />
      <EventDetails />
      <Infrastructure />
      <Mentors />
      <Partners />
    </main>
  );
}
