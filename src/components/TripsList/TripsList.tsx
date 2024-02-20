import './TripsList.css';
import TripCard from '../TripCard/TripCard';
import { useAppSelector } from '../../helpers/globalState/hooks';

export default function TripsList() {
  const { allTrips } = useAppSelector(state => state.trips);

  return (
    <div className='tripslist'>
      {allTrips.map(trip => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  )
}