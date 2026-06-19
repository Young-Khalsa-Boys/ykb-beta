import { EventListing, type EventItem } from '../components/EventListing';

const fundraisers: EventItem[] = [
  {
    id: 'ykb-car-wash-2026',
    name: 'YKB Car Wash',
    category: 'Fundraiser',
    date: 'May 2026',
    location: 'Oakland Gurdwara, Oakland, NJ',
    image: '/photocarousel/ykb_c1-basketball.png',
    imageAlt: 'Young Khalsa Boys members gathered during a community activity',
    summary:
      'Young Khalsa Boys will host a community car wash fundraiser at the Oakland Gurdwara to support upcoming seva initiatives.',
    details:
      'Members will work together to welcome families, wash cars, collect donations, and build awareness for future Young Khalsa Boys projects. The fundraiser is designed as a hands-on leadership opportunity rooted in teamwork, humility, and service.',
    impact: 'Supporting future YKB service projects',
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
