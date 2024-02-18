import { tripsList } from '../../helpers/static/tripsList';
import { TripCard } from '../TripCard';
import './TripsList.css';

export function TripsList() {
  return (
    <div className='tripslist'>
      {tripsList.map(trip => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  )
}