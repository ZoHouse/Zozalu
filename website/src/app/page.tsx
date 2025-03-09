import Hero from '@/components/Hero';
import TLDR from '@/components/TLDR';
import EventDetails from '@/components/EventDetails';
import MealPlan from '@/components/MealPlan';
import Infrastructure from '@/components/Infrastructure';
import Mentors from '@/components/Mentors';
import Partners from '@/components/Partners';
import ApplyNow from '@/components/ApplyNow';

export default function Home() {
  return (
    <main>
      <Hero />
      <TLDR />
      <EventDetails />
      <MealPlan />
      <Infrastructure />
      <ApplyNow />
      <Mentors />
      <Partners />
    </main>
  );
}
