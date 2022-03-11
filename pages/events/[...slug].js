import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/events/error-alert';
import Button from '../../components/UI/Button';

export default function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p>Loading...</p>;
  }

  const year = filterData[0];
  const month = filterData[1];

  const numYear = +year;
  const numMonth = +month;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numMonth > 12) {
    return (
      <ErrorAlert>
        <div className="centered">
          <p>Please enter valid values to search for</p>
          <Button link="/events">Show all events</Button>
        </div>
      </ErrorAlert>
    );
  }

  const events = getFilteredEvents({ year: numYear, month: numMonth });

  if (!events || events.length === 0) {
    return (
      <ErrorAlert>
        <div className="centered">
          <p>No events found for the searched values</p>
          <Button link="/events">Show all events</Button>
        </div>
      </ErrorAlert>
    );
  }

  const date = new Date(numYear, numMonth + 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={events} />
    </Fragment>
  );
}
