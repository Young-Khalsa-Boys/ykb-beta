import { EventListing, type EventItem } from '../components/EventListing';

const fundraisers: EventItem[] = [
  {
    id: 'ykb-car-wash-2026',
    name: 'YKB Car Wash',
    category: 'Fundraiser',
    date: 'May 2026',
    location: 'Oakland Gurdwara, Oakland, NJ',
    images: [
      {
        src: '/photocarousel/ykb_c1-basketball.png',
        alt: 'Young Khalsa Boys members gathered during a community activity',
      },
      {
        src: '/photocarousel/ykb_c2-pres1.jpeg',
        alt: 'Young Khalsa Boys members presenting during a community gathering',
      },
      {
        src: '/photocarousel/ykb_c3-pres2.jpeg',
        alt: 'Young Khalsa Boys members speaking together at an event',
      },
    ],
    summary:
      'Young Khalsa Boys will host a community car wash fundraiser at the Oakland Gurdwara to support upcoming seva initiatives. Members will welcome families, wash cars, collect donations, and build awareness for future projects through a hands-on day of teamwork and service.',
    impact: 'Supporting future YKB service projects',
  },
  {
    id: 'test-fundraiser-2026',
    name: 'Test Fundraiser',
    category: 'Fundraiser',
    date: 'August 2026',
    location: 'Test Location, New Jersey',
    images: [
      {
        src: '/photocarousel/ykb_c4-pres3.jpeg',
        alt: 'Young Khalsa Boys members gathered for a community presentation',
      },
      {
        src: '/photocarousel/ykb_c0-lunch.jpeg',
        alt: 'Young Khalsa Boys members serving food during a community service activity',
      },
    ],
    summary:
      'This test fundraiser is included to check how multiple fundraiser cards read on the page. It can be removed or replaced when the next real fundraiser is ready.',
    impact: 'Testing multi-fundraiser page layout',
  },
];

export default function Fundraisers() {
  return (
    <EventListing
      eyebrow="Our Fundraisers"
      title="Fundraising for Seva"
      intro="Our fundraisers help Young Khalsa Boys turn community generosity into hands-on service, mentorship, and impact."
      items={fundraisers}
    />
  );
}
