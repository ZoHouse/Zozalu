import Hero from '@/components/Hero';
import ScrollSections from '@/components/ScrollSections';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ScrollSections />
    </div>
  );
}
