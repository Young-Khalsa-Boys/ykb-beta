import { EventListing, type EventItem } from '../components/EventListing';

const events: EventItem[] = [
  {
    id: 'salvation-army-project-2026',
    name: 'Salvation Army Project',
    category: 'Event',
    date: 'June 2026',
    location: 'Salvation Army, Passaic, NJ',
    images: [
      {
        src: '/photocarousel/ykb_c0-lunch.jpeg',
        alt: 'Young Khalsa Boys members serving meals during a community service activity',
      },
      {
        src: '/photocarousel/ykb_c4-pres3.jpeg',
        alt: 'Young Khalsa Boys members gathered for a presentation',
      },
      {
        src: '/photocarousel/ykb_c2-pres1.jpeg',
        alt: 'Young Khalsa Boys members preparing for a community project',
      },
    ],
    summary:
      'Young Khalsa Boys will support the Salvation Army in Passaic through a service project focused on helping local families and neighbors. As planning continues, this page can grow with volunteer roles, schedule details, donation needs, and a recap of the seva completed.',
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
