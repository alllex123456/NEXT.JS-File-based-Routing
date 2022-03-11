import React from 'react';
import EventList from '../components/events/EventList';

import { getFeaturedEvents } from '../dummy-data';

export default function HomePage() {
  const events = getFeaturedEvents();

  return (
    <div>
      <EventList events={events} />
    </div>
  );
}
