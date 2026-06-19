import { EventListing, type EventItem } from "../components/EventListing";

const projects: EventItem[] = [
  {
    id: "test-community-project",
    name: "Test Community Project",
    category: "Project",
    date: "July 2026",
    location: "Test Location, New Jersey",
    images: [
      {
        src: "/photocarousel/ykb_c3-pres2.jpeg",
        alt: "Young Khalsa Boys members at a community presentation",
      },
      {
        src: "/photocarousel/ykb_c1-basketball.png",
        alt: "Young Khalsa Boys members gathered during an activity",
      },
    ],
    summary:
      "This test project is included to preview how multiple project cards stack on the page. It can be replaced once another real service project is ready to publish.",
    impact: "Testing multi-project page layout",
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
