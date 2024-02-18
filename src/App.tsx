import AddButton from './components/AddButton/AddButton';
import { Forecast } from './components/Forecast';
import { ForecastAside } from './components/ForecastAside';
import { SearchBar } from './components/SearchBar';
import { TripsList } from './components/TripsList';
import './index.css';

export default function App() {
  return (
    <main className='app'>
      <h1 className='app__title roboto-medium'>Weather Forecast</h1>

      <SearchBar />

      <ForecastAside />

      <TripsList />

      <AddButton />

      <Forecast />
    </main>
  );
}
