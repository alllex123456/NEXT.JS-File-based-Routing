import React from 'react';

import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';

import EventSummary from '../../components/events/EventSummary';
import EventContent from '../../components/events/EventContent';
import EventLogistics from '../../components/events/EventLogistics';
import ErrorAlert from '../../components/events/error-alert';
import Button from '../../components/UI/Button';

export default function EventDetailsPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <div className="centered">
          <p>No event found</p>
          <Button link="/events">Show all events</Button>
        </div>
      </ErrorAlert>
    );
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
