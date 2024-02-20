import './index.css';
import { useState } from 'react';
import { useLocalStorage } from './helpers/hooks/useLocalStorage';
import { Trip } from './helpers/types/Trip';
import SearchBar from './components/SearchBar/SearchBar';
import ForecastAside from './components/ForecastAside/ForecastAside';
import TripsList from './components/TripsList/TripsList';
import AddButton from './components/AddButton/AddButton';
import Forecast from './components/Forecast/Forecast';
import Modal from './components/Modal/Modal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trips, setTrips] = useLocalStorage<Trip[]>('trips', []);

  return (
    <main className='app'>
      <h1 className='app__title'>
        Weather <strong>Forecast</strong>
      </h1>

      <SearchBar />

      <ForecastAside />

      <TripsList trips={trips} />

      <AddButton onClick={setIsModalOpen} />

      <Forecast />

      <Modal
        open={isModalOpen}
        onClose={setIsModalOpen}
        trips={trips}
        addTrip={setTrips}
      />
    </main>
  );
}
