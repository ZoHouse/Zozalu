'use client';

import { useState } from 'react';
import Image from 'next/image';

type Event = {
  title: string;
  date: string;
  description: string;
  images: string[];
};

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  image?: string;
};

// This will be replaced with actual data
const events: Event[] = [
  {
    title: "Past Event",
    date: "January 2024",
    description: "Description of the past event and its impact.",
    images: ["/images/events/placeholder1.jpg", "/images/events/placeholder2.jpg"]
  },
  // Add more events
];

const testimonials: Testimonial[] = [
  {
    quote: "Example testimonial about the amazing experience at Zozalu.",
    author: "John Doe",
    role: "Founder",
    image: "/images/testimonials/placeholder.jpg"
  },
  // Add more testimonials
];

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative aspect-video">
      <div className="absolute inset-0">
        <Image
          src={images[currentIndex]}
          alt="Event photo"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

const ProofOfVibes = () => {
  return (
    <section id="proof-of-vibes" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Proof of Vibes
        </h2>

        {events.length > 0 || testimonials.length > 0 ? (
          <div className="space-y-16">
            {/* Past Events */}
            {events.length > 0 && (
              <div className="space-y-12">
                <h3 className="text-3xl font-bold text-center mb-8">Past Events</h3>
                <div className="grid grid-cols-1 gap-12">
                  {events.map((event) => (
                    <div key={event.title} className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <ImageCarousel images={event.images} />
                        </div>
                        <div className="md:w-1/2 space-y-4">
                          <h4 className="text-2xl font-bold">{event.title}</h4>
                          <p className="text-primary">{event.date}</p>
                          <p className="text-muted">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonials */}
            {testimonials.length > 0 && (
              <div className="space-y-12">
                <h3 className="text-3xl font-bold text-center mb-8">What People Say</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.author} className="bento-item">
                      <div className="flex items-start space-x-4">
                        {testimonial.image && (
                          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                        )}
                        <div>
                          <blockquote className="text-lg mb-4">{testimonial.quote}</blockquote>
                          <cite className="not-italic">
                            <div className="font-bold">{testimonial.author}</div>
                            <div className="text-primary text-sm">{testimonial.role}</div>
                          </cite>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg text-muted">
              Past event highlights coming soon. Stay tuned!
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((num) => (
                <div
                  key={`event-placeholder-${num}`}
                  className="aspect-video bg-secondary/30 rounded-lg animate-pulse"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProofOfVibes; 