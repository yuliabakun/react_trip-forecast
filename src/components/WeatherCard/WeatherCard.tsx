import { weekdays } from '../../helpers/static/weekdays';
import { WeatherDay } from '../../helpers/types/Weather';
import './WeatherCard.css';

export default function WeatherCard({ weatherInfo }: { weatherInfo: WeatherDay }) {
  const day = new Date(weatherInfo.datetime);

  const getTemperatureData = () => {
    const min = Math.round(weatherInfo.tempmin);
    const max = Math.round(weatherInfo.tempmax);

    return `${min}°/${max}°`;
  }

  return (
    <article className='weatherCard'>
      <p className='weatherCard__weekday'>{weekdays[day.getDay()]}</p>

      <div>
        <img src={`src/assets/weather/${weatherInfo.icon}.svg`} />
      </div>

      <p>{getTemperatureData()}</p>
    </article>
  );
}