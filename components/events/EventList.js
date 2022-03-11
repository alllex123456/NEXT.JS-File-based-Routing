import React from 'react';
import EventItem from './EventItem';
import classes from './EventList.module.css';

export default function EventList(props) {
  return (
    <ul className={classes.list}>
      {props.events.map((featuredEvent) => (
        <EventItem
          key={featuredEvent.id}
          eventData={{
            id: featuredEvent.id,
            title: featuredEvent.title,
            location: featuredEvent.location,
            date: featuredEvent.date,
            image: `/${featuredEvent.image}`,
          }}
        />
      ))}
    </ul>
  );
}
