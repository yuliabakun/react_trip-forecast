import './TripCard.css';
import { Trip } from '../../helpers/types/Trip';

export function TripCard({ trip }: { trip: Trip }) {
  return (
    <article className='card'>
      <div
        className='card__media'
      >
        <img
          className='card__img'
          src={trip.img}
          alt={trip.destination}
        />
      </div>

      <div className='card__info'>
        <h3 className='info__title roboto-regular'>{trip.destination}</h3>

        <p className='info__dates roboto-regular'>
          {`${trip.startAt} - ${trip.endAt}`}
        </p>
      </div>
    </article>
  );
}
