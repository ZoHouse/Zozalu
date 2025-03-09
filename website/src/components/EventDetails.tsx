'use client';

import React from 'react';

interface Event {
  time: string;
  space: string;
  culture: string;
  tripHost: string;
  title: string;
  type: 'academic' | 'cultural';
}

interface DaySchedule {
  day: string;
  theme: string;
  events: Event[];
}

const EventDetails = () => {
  const [currentDay, setCurrentDay] = React.useState(1);

  const scheduleData: DaySchedule[] = [
    {
      day: "1-2",
      theme: "Bio Hack",
      events: [
        {
          title: "Guided Meditation and Sound Healing",
          time: "7AM - 9AM",
          space: "BLRxZo",
          culture: "Bio-hack",
          tripHost: "TBD",
          type: "cultural"
        },
        {
          title: "Learn the Science of Longevity",
          time: "5PM - 7PM",
          space: "BLRxZo",
          culture: "Bio-hack",
          tripHost: "TBD",
          type: "academic"
        },
        {
          title: "Yoga and Breathwork Session",
          time: "7AM - 9AM",
          space: "WTFxZo",
          culture: "Bio-hack",
          tripHost: "TBD",
          type: "cultural"
        },
        {
          title: "Drurgevs Desci meetup",
          time: "5PM - 7PM",
          space: "WTFxZo",
          culture: "Bio-hack",
          tripHost: "TBD",
          type: "academic"
        }
      ]
    },
    {
      day: "3-4",
      theme: "Governance & Network States",
      events: [
        {
          title: "DAOs and the Future of Governance",
          time: "11AM - 1PM",
          space: "BLRxZo",
          culture: "DAO",
          tripHost: "TBD",
          type: "academic"
        },
        {
          title: "Open Debate and Town Hall on Digital Identity",
          time: "5PM - 7PM",
          space: "BLRxZo",
          culture: "",
          tripHost: "TBD",
          type: "cultural"
        },
        {
          title: "What are network states?",
          time: "TBD",
          space: "WTFxZo",
          culture: "",
          tripHost: "TBD",
          type: "academic"
        },
        {
          title: "Governance Role-Playing Game : Mafia",
          time: "TBD",
          space: "WTFxZo",
          culture: "",
          tripHost: "TBD",
          type: "cultural"
        }
      ]
    },
    {
      day: "5-6",
      theme: "Decentralized Infrastructure (DePin)",
      events: [
        {
          title: "Sustainable Urban Design Challenge",
          time: "5PM - 7PM",
          space: "WTFxZo",
          culture: "",
          tripHost: "TBD",
          type: "academic"
        },
        {
          title: "Futsal",
          time: "8AM - 11AM",
          space: "WTFxZo",
          culture: "Football",
          tripHost: "TBD",
          type: "cultural"
        },
        {
          title: "Duh Hackathon - 1 day hardware hackathon",
          time: "11:11AM - 4:20PM",
          space: "WTFxZo",
          culture: "Hardware",
          tripHost: "TBD",
          type: "academic"
        }
      ]
    },
    {
      day: "7",
      theme: "AI",
      events: [
        {
          title: "AI and the Future of Work",
          time: "11AM - 1PM",
          space: "BLRxZo",
          culture: "AI",
          tripHost: "TBD",
          type: "academic"
        },
        {
          title: "AI Ethics Debate Night",
          time: "7PM - 9PM",
          space: "BLRxZo",
          culture: "AI",
          tripHost: "TBD",
          type: "cultural"
        }
      ]
    },
    {
      day: "8-9",
      theme: "Public Goods & IP",
      events: [
        {
          title: "How to get funded for Public Goods with Crypto",
          time: "11AM - 1PM",
          space: "BLRxZo",
          culture: "",
          tripHost: "TBD",
          type: "academic"
        },
        {
          title: "Anime Night",
          time: "7PM - 9PM",
          space: "BLRxZo",
          culture: "",
          tripHost: "TBD",
          type: "cultural"
        },
        {
          title: "Decentralized Media and IP",
          time: "TBD",
          space: "WTFxZo",
          culture: "",
          tripHost: "TBD",
          type: "academic"
        },
        {
          title: "Pickle Ball",
          time: "10AM - 6PM",
          space: "WTFxZo",
          culture: "",
          tripHost: "TBD",
          type: "cultural"
        }
      ]
    },
    {
      day: "10",
      theme: "Future Societies & Cultural Evolution",
      events: [
        {
          title: "The Role of Technology in Cultural Evolution",
          time: "TBD",
          space: "BLRxZo",
          culture: "",
          tripHost: "TBD",
          type: "academic"
        },
        {
          title: "Art Jam",
          time: "5PM - 7PM",
          space: "BLRxZo",
          culture: "",
          tripHost: "TBD",
          type: "cultural"
        }
      ]
    },
    {
      day: "11-12",
      theme: "Innovation & Entrepreneurship",
      events: [
        {
          title: "Conscious entrepreneurship",
          time: "TBD",
          space: "BLRxZo",
          culture: "",
          tripHost: "TBD",
          type: "academic"
        },
        {
          title: "Pitch Roast",
          time: "TBD",
          space: "BLRxZo",
          culture: "",
          tripHost: "TBD",
          type: "cultural"
        },
        {
          title: "Demo Day",
          time: "TBD",
          space: "BLRxZo",
          culture: "",
          tripHost: "TBD",
          type: "academic"
        },
        {
          title: "Poker Night",
          time: "TBD",
          space: "BLRxZo",
          culture: "",
          tripHost: "TBD",
          type: "cultural"
        }
      ]
    }
  ];

  const nextDay = () => {
    setCurrentDay((prev) => (prev === scheduleData.length ? 1 : prev + 1));
  };

  const prevDay = () => {
    setCurrentDay((prev) => (prev === 1 ? scheduleData.length : prev - 1));
  };

  const renderEventCard = (event: Event) => (
    <div className="border-l-4 border-primary pl-4 mb-6">
      <div className="flex justify-between items-start mb-2">
        <h5 className="text-xl font-bold">{event.title}</h5>
        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
          event.type === 'cultural' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
        }`}>
          {event.type}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>
          <span className="font-medium">Time:</span> {event.time}
        </div>
        <div>
          <span className="font-medium">Space:</span> {event.space}
        </div>
        {event.culture && (
          <div>
            <span className="font-medium">Culture:</span> {event.culture}
          </div>
        )}
        <div>
          <span className="font-medium">Trip Host:</span> {event.tripHost}
        </div>
      </div>
    </div>
  );

  const renderDayEvents = () => {
    const currentSchedule = scheduleData[currentDay - 1];
    
    // If it's a multi-day schedule (like "1-2" or "3-4")
    if (currentSchedule.day.includes('-')) {
      const [firstDay, secondDay] = currentSchedule.day.split('-');
      const firstDayEvents = currentSchedule.events.slice(0, currentSchedule.events.length / 2);
      const secondDayEvents = currentSchedule.events.slice(currentSchedule.events.length / 2);

      return (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-primary mb-4">Day {firstDay}</h4>
            <div className="space-y-6">
              {firstDayEvents.map((event, index) => (
                <div key={`${event.title}-${index}`}>
                  {renderEventCard(event)}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-primary mb-4">Day {secondDay}</h4>
            <div className="space-y-6">
              {secondDayEvents.map((event, index) => (
                <div key={`${event.title}-${index}`}>
                  {renderEventCard(event)}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // For single day schedules
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        {currentSchedule.events.map((event, index) => (
          <div key={`${event.title}-${index}`}>
            {renderEventCard(event)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="event-details" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Event Details
        </h2>
        
        {/* Main Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bento-item">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-primary flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <title>Calendar icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 className="text-xl font-bold">When</h3>
                <p className="text-lg">TBD</p>
              </div>
            </div>
          </div>
          
          <div className="bento-item">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-primary flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <title>Location icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h3 className="text-xl font-bold">Where</h3>
                <p className="text-lg">Bangalore, India</p>
              </div>
            </div>
          </div>

          <div className="bento-item">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-primary flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <title>Event type icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <div>
                <h3 className="text-xl font-bold">What</h3>
                <p className="text-lg">2 Week Accelerated Lifestyle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Carousel Section */}
        <div className="bento-item">
          <h3 className="text-2xl font-bold mb-6 text-center">Schedule Overview</h3>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-primary">Days {scheduleData[currentDay - 1].day}</h4>
                <p className="text-lg text-primary">{scheduleData[currentDay - 1].theme}</p>
              </div>
              <div className="transition-all duration-300 ease-in-out">
                <div className="p-6 bg-background rounded-lg">
                  {renderDayEvents()}
                </div>
              </div>
            </div>

            {/* Overlay Navigation Buttons */}
            <button 
              onClick={prevDay}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-r-lg bg-background/80 hover:bg-background backdrop-blur-sm border border-l-0 border-border transition-colors"
              type="button"
              aria-label="Previous day"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <title>Previous day</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextDay}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-l-lg bg-background/80 hover:bg-background backdrop-blur-sm border border-r-0 border-border transition-colors"
              type="button"
              aria-label="Next day"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <title>Next day</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex justify-center space-x-2 mt-6">
              {scheduleData.map((day, index) => (
                <button
                  key={`day-${day.day}`}
                  type="button"
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentDay === index + 1 ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  onClick={() => setCurrentDay(index + 1)}
                  aria-label={`Go to days ${day.day}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails; 