import React from 'react';
import { Fragment } from 'react';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../dummy-data';
import { useRouter } from 'next/router';

export default function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  const findSearchEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findSearchEvents} />
      <EventList events={events} />
    </Fragment>
  );
}
