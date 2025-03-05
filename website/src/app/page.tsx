import Hero from '@/components/Hero';
import BentoSection from '@/components/BentoSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <BentoSection />
    </div>
  );
}
