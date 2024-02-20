import './Forecast.css';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../helpers/globalState/hooks';
import { getWeatherDataBetweenDates } from '../../helpers/api/fetchHelper';
import { WeatherData, WeatherDay } from '../../helpers/types/Weather';
import WeatherCard from '../WeatherCard/WeatherCard';

export default function Forecast() {
  const { selectedTrip } = useAppSelector(state => state.trips);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    if (selectedTrip) {
      const getData = async () => {
        const data = await getWeatherDataBetweenDates(
          selectedTrip.destination,
          selectedTrip.startAt,
          selectedTrip.endAt);

        setWeatherData(data);
      }

      getData();
    }
  }, [selectedTrip]);

  if (!selectedTrip) return null;

  return (
    <div className='forecast'>
      <h3 className='forecast__title'>Week</h3>

      <div className='forecast__info'>
        {weatherData && weatherData.days.map((day: WeatherDay) => (
          <WeatherCard key={day.datetimeEpoch} weatherInfo={day} />
        ))}
      </div>
    </div>
  );
}