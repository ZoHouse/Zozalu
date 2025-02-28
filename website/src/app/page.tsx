import Hero from '@/components/Hero';
import BentoSection from '@/components/BentoSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <BentoSection />
      </main>
      <Footer />
    </div>
  );
}
