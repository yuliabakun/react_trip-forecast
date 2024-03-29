import './TripsList.css';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../helpers/globalState/hooks';
import { TripsListProps } from '../../helpers/types/PropsTypes';
import { Trip } from '../../helpers/types/Trip';
import TripCard from '../TripCard/TripCard';

export default function TripsList({ trips }: TripsListProps) {
  const { mockTrip, searchQuery } = useAppSelector(state => state.trips);
  const [filteredTrips, setFilteredTrips] = useState(trips);
  const [noSearchResult, setNoSearchResut] = useState(false);

  const filterTrips = () => {
    let filteredTrips = trips;

    if (searchQuery) {
      filteredTrips = filteredTrips.filter(trip => {
        const titleNormalized = trip.destination.toLowerCase();
        const queryNormalized = searchQuery.toLowerCase();

        return titleNormalized.includes(queryNormalized);
      });
    }

    filteredTrips.sort((a: Trip, b: Trip) => a.startAt.localeCompare(b.startAt));

    setFilteredTrips(filteredTrips);
  };

  useEffect(() => {
    filterTrips();

    setNoSearchResut(filteredTrips.length === 0 && trips.length !== 0);
  }, [searchQuery, trips.length, filteredTrips.length])

  return (
    <div className='tripslist'>
      <TripCard key={mockTrip.id} trip={mockTrip} />

      {trips.length === 0 && !noSearchResult && (
        <p>Trips you added will appear here.</p>
      )}

      {noSearchResult && (
        <p>Sorry, there are no trips matching the current search query.</p>
      )}

      {!noSearchResult && filteredTrips.map(trip => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}