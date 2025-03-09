import Image from 'next/image';

const BentoSection = () => {
  return (
    <section className="w-full px-4 py-2">
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-[250px] md:max-w-[400px] h-[70px] md:h-[100px]">
          <Image 
            src="/images/zo zo zo 2.png" 
            alt="Zo Zo Zo" 
            fill
            style={{ objectFit: 'contain' }}
            priority
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default BentoSection; 