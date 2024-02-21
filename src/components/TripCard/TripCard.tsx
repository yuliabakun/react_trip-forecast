import './TripCard.css';
import cn from 'classnames';
import { Trip } from '../../helpers/types/Trip';
import { useAppDispatch, useAppSelector } from '../../helpers/globalState/hooks';
import { setSelectedTrip } from '../../helpers/globalState/tripSlice';
import { getCityImage } from '../../helpers/api/fetchHelper';

export default function TripCard({ trip }: { trip: Trip }) {
  const dispatch = useAppDispatch();
  const { selectedTrip } = useAppSelector(state => state.trips);
  const isSelected = selectedTrip?.id === trip.id;

  const getTripDates = () => {
    let start = trip.startAt;
    let end = trip.endAt;

    start = start.split('-').reverse().join('.');
    end = end.split('-').reverse().join('.');

    return `${start} - ${end}`;
  };

  return (
    <article
      className={cn('card', { 'card--active': isSelected })}
      onClick={() => dispatch(setSelectedTrip(trip))}
    >
      <div
        className='card__media'
      >
        <img
          className='card__img'
          src={getCityImage(trip.destination)}
          alt={trip.destination}
        />
      </div>

      <div className='card__info'>
        <h3 className='info__title'>{trip.destination}</h3>

        <p className='info__dates'>{getTripDates()}</p>
      </div>
    </article>
  );
}
