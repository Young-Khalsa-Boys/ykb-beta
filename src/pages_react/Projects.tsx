import { EventListing } from '../components/EventListing';

export default function Projects() {
  return (
    <EventListing
      eyebrow="Our Projects"
      title="Seva in Action"
      intro="We believe in putting our faith into practice. Explore some of our recent community service initiatives where our members took the lead in making a tangible difference."
      items={[]}
      emptyMessage="PROJECTS COMING SOON!!!"
    />
  );
}
