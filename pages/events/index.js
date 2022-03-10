import React from 'react';
import { Fragment } from 'react';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../dummy-data';

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList events={events} />
    </Fragment>
  );
}
