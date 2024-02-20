import './TripsList.css';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../helpers/globalState/hooks';
import { TripsListProps } from '../../helpers/types/PropsTypes';
import TripCard from '../TripCard/TripCard';
import { Trip } from '../../helpers/types/Trip';

export default function TripsList({ trips }: TripsListProps) {
  const { mockTrip, searchQuery } = useAppSelector(state => state.trips);
  const [filteredTrips, setFilteredTrips] = useState(trips);

  const filterTrips = () => {
    const filteredTrips = trips.filter(trip => {
      const title = trip.destination.toLowerCase();
      const query = searchQuery.toLowerCase();

      return title.includes(query);
    });

    filteredTrips.sort((a: Trip, b: Trip) => a.startAt.localeCompare(b.startAt));

    setFilteredTrips(filteredTrips);
  };

  useEffect(() => {
    filterTrips();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  return (
    <div className='tripslist'>
      <TripCard key={mockTrip.id} trip={mockTrip} />

      {filteredTrips.length > 0 && filteredTrips.map(trip =>
        <TripCard key={trip.id} trip={trip} />
      )}
    </div>
  )
}