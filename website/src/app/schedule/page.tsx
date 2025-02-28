import DetailPageLayout from '@/components/DetailPageLayout';

interface EventItem {
  id: string;
  date: string;
  time: string;
  title: string;
  description: string;
  location: string;
}

const scheduleData: EventItem[] = [
  {
    id: "event-1",
    date: "Day 1",
    time: "10:00 AM - 12:00 PM",
    title: "Opening Ceremony",
    description: "Welcome address and introduction to Zozalu initiative.",
    location: "Main Hall"
  },
  {
    id: "event-2",
    date: "Day 1",
    time: "2:00 PM - 5:00 PM",
    title: "Network State Workshop",
    description: "Interactive session on building decentralized communities.",
    location: "Workshop Area"
  },
  {
    id: "event-3",
    date: "Day 2",
    time: "9:00 AM - 11:00 AM",
    title: "Beacon Node Tech Demo",
    description: "Technical demonstration of Beacon Node infrastructure.",
    location: "Tech Lab"
  },
  {
    id: "event-4",
    date: "Day 3",
    time: "All Day",
    title: "Hackathon Kickoff",
    description: "Start of the 3-day hackathon focused on decentralized living solutions.",
    location: "Collaboration Space"
  },
  {
    id: "event-5",
    date: "Day 5",
    time: "7:00 PM - 10:00 PM",
    title: "Community Dinner",
    description: "Networking dinner with all participants and special guests.",
    location: "Dining Hall"
  },
  {
    id: "event-6",
    date: "Day 7",
    time: "11:00 AM - 1:00 PM",
    title: "Midpoint Showcase",
    description: "Progress presentations from teams and individuals.",
    location: "Presentation Arena"
  },
  {
    id: "event-7",
    date: "Day 10",
    time: "2:00 PM - 6:00 PM",
    title: "Resource Sharing Workshop",
    description: "Practical session on implementing resource sharing in communities.",
    location: "Workshop Area"
  },
  {
    id: "event-8",
    date: "Day 14",
    time: "10:00 AM - 12:00 PM",
    title: "Closing Ceremony",
    description: "Final presentations, awards, and next steps announcement.",
    location: "Main Hall"
  }
];

export default function SchedulePage() {
  return (
    <DetailPageLayout title="Event Schedule">
      <div>
        <p className="text-xl mb-8 text-muted">
          Join us for 14 days of innovation, collaboration, and community building. Below is our full schedule of activities and events.
        </p>
        
        <div className="space-y-8">
          {scheduleData.map((event) => (
            <div key={event.id} className="bg-secondary border border-border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-primary">{event.date} • {event.time}</p>
                </div>
                <span className="px-3 py-1 bg-background rounded text-sm">{event.location}</span>
              </div>
              <p className="text-muted">{event.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted mb-4">
            Schedule is subject to minor changes. All participants will receive updates via email.
          </p>
          <button type="button" className="cta-button">
            Add to Calendar
          </button>
        </div>
      </div>
    </DetailPageLayout>
  );
} 