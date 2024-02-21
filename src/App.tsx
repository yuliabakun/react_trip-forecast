import './index.css';
import { useState } from 'react';
import { useLocalStorage } from './helpers/hooks/useLocalStorage';
import { GoogleLogin } from '@react-oauth/google';
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
      <div className='app__title'>
        <h1>Weather <strong>Forecast</strong></h1>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>

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
