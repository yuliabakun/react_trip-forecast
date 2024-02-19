import './index.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ForecastAside from './components/ForecastAside/ForecastAside';
import TripsList from './components/TripsList/TripsList';
import AddButton from './components/AddButton/AddButton';
import Forecast from './components/Forecast/Forecast';
import CreateTripModal from './components/Modal/Modal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  }

  return (
    <main className='app'>
      <h1 className='app__title'>Weather <strong>Forecast</strong></h1>

      <SearchBar />

      <ForecastAside />

      <TripsList />

      <AddButton onClick={handleModalOpen} />

      <Forecast />

      <CreateTripModal open={isModalOpen} onClose={handleModalClose} />
    </main>
  );
}
