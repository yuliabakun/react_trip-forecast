import './ForecastAside.css';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../helpers/globalState/hooks';
import { getCurrentWeatherData } from '../../helpers/api/fetchHelper';
import { WeatherData } from '../../helpers/types/Weather';

export default function ForecastAside() {
  const { selectedTrip } = useAppSelector(state => state.trips);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    if (selectedTrip) {
      const getData = async () => {
        const data = await getCurrentWeatherData(selectedTrip.destination);

        setWeatherData(data);
      };

      getData();
    }
  }, [selectedTrip]);

  return (
    <aside className='aside'>
      <h1>Forecast Aside</h1>

      {weatherData && (
        <img src={`src/assets/weather/${weatherData.days[0].icon}.svg`} />
      )}
    </aside>
  );
}