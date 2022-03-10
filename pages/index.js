import React from 'react';
import EventList from '../components/events/EventList';

import { getFeaturedEvents } from '../dummy-data';

export default function HomePage() {
  const events = getFeaturedEvents();

  return (
    <div>
      <h1>Featured Events</h1>
      <EventList events={events} />
    </div>
  );
}
