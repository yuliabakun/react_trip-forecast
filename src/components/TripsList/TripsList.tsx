import './TripsList.css';
import TripCard from '../TripCard/TripCard';
import { tripsList } from '../../helpers/static/tripsList';

export default function TripsList() {
  return (
    <div className='tripslist'>
      {tripsList.map(trip => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  )
}