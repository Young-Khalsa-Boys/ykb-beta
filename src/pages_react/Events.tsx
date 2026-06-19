import { EventListing, type EventItem } from '../components/EventListing';

const events: EventItem[] = [
  {
    id: 'salvation-army-project-2026',
    name: 'Salvation Army Project',
    category: 'Event',
    date: 'June 2026',
    location: 'Salvation Army, Passaic, NJ',
    image: '/photocarousel/ykb_c0-lunch.jpeg',
    imageAlt: 'Young Khalsa Boys members serving meals during a community service activity',
    summary:
      'Young Khalsa Boys will support the Salvation Army in Passaic through a service project focused on helping local families and neighbors.',
    details:
      'This template event page highlights the project name, date, location, image, and expandable event story. As planning continues, this section can be updated with volunteer roles, schedule details, donation needs, and a recap of the seva completed.',
    impact: 'Serving neighbors in Passaic',
  },
];

export default function Events() {
  return (
    <EventListing
      eyebrow="Upcoming Events"
      title="Community Events"
      intro="Follow upcoming Young Khalsa Boys events, service days, and community efforts as our members put seva into action."
      items={events}
    />
  );
}
