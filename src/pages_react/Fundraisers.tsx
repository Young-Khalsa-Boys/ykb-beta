import { EventListing, type EventItem } from "../components/EventListing";

const fundraisers: EventItem[] = [
  {
    id: "test-fundraiser-2026",
    name: "Test Fundraiser",
    category: "Fundraiser",
    date: "August 2026",
    location: "Test Location, New Jersey",
    impact: "Testing multi-fundraiser page layout",
    images: [
      {
        src: "/photocarousel/ykb_c4-pres3.jpeg",
        alt: "Young Khalsa Boys members gathered for a community presentation",
      },
      {
        src: "/photocarousel/ykb_c0-lunch.jpeg",
        alt: "Young Khalsa Boys members serving food during a community service activity",
      },
    ],
    summary:
      "This test fundraiser is included to check how multiple fundraiser cards read on the page. It can be removed or replaced when the next real fundraiser is ready.",
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
