import './TripCard.css';
import cn from 'classnames';
import { Trip } from '../../helpers/types/Trip';
import { useAppDispatch, useAppSelector } from '../../helpers/globalState/hooks';
import { setSelectedTrip } from '../../helpers/globalState/tripSlice';
import { getCityImage } from '../../helpers/api/fetchHelper';
import { getTripDates } from '../../helpers/static/getDate';

export default function TripCard({ trip }: { trip: Trip }) {
  const dispatch = useAppDispatch();
  const { selectedTrip } = useAppSelector(state => state.trips);
  const isSelected = selectedTrip?.id === trip.id;

  return (
    <article
      className={cn('card', { 'card--active': isSelected })}
      onClick={() => dispatch(setSelectedTrip(trip))}
    >
      <div className='card__media'>
        <img
          className='card__img'
          src={getCityImage(trip.destination)}
          alt={trip.destination}
        />
      </div>

      <div className='card__info'>
        <h3 className='info__title'>{trip.destination}</h3>

        <p className='info__dates'>
          {getTripDates(trip.startAt, trip.endAt)}
        </p>
      </div>
    </article>
  );
}
