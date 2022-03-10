import React from 'react';

import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';

import EventSummary from '../../components/events/EventSummary';
import EventContent from '../../components/events/EventContent';
import EventLogistics from '../../components/events/EventLogistics';

export default function EventDetailsPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <h1>No event found</h1>;
  }

  return (
    <React.Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </React.Fragment>
  );
}
