import './TripCard.css';
import { Trip } from '../../helpers/types/Trip';
import { useAppDispatch } from '../../helpers/globalState/hooks';
import { setSelectedTrip } from '../../helpers/globalState/tripSlice';

export default function TripCard({ trip }: { trip: Trip }) {
  const dispatch = useAppDispatch();

  return (
    <article
      className='card'
      onClick={() => dispatch(setSelectedTrip(trip))}
    >
      <div
        className='card__media'
      >
        <img
          className='card__img'
          src={`https://raw.githubusercontent.com/yuliabakun/react_trip-forecast/main/src/assets/cities/${trip.destination.toLowerCase()}.jpg`}
          alt={trip.destination}
        />
      </div>

      <div className='card__info'>
        <h3 className='info__title'>{trip.destination}</h3>

        <p className='info__dates'>
          {`${trip.startAt} - ${trip.endAt}`}
        </p>
      </div>
    </article>
  );
}
