import { EventListing, type EventItem } from '../components/EventListing';

const projects: EventItem[] = [
  {
    id: 'salvation-army-project-2026',
    name: 'Salvation Army Project',
    category: 'Project',
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
  {
    id: 'test-community-project',
    name: 'Test Community Project',
    category: 'Project',
    date: 'July 2026',
    location: 'Test Location, New Jersey',
    images: [
      {
        src: '/photocarousel/ykb_c3-pres2.jpeg',
        alt: 'Young Khalsa Boys members at a community presentation',
      },
      {
        src: '/photocarousel/ykb_c1-basketball.png',
        alt: 'Young Khalsa Boys members gathered during an activity',
      },
    ],
    summary:
      'This test project is included to preview how multiple project cards stack on the page. It can be replaced once another real service project is ready to publish.',
    impact: 'Testing multi-project page layout',
  },
];

export default function Projects() {
  return (
    <EventListing
      eyebrow="Our Projects"
      title="Seva in Action"
      intro="See the service projects Young Khalsa Boys is building with local partners, families, and community members."
      items={projects}
    />
  );
}
