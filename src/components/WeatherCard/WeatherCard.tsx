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
        <img src={`https://raw.githubusercontent.com/yuliabakun/react_trip-forecast/92737d8c47607ae5411852310e302f80e9dd6fa2/src/assets/weather/${weatherInfo.icon}.svg`} />
      </div>

      <p>{getTemperatureData()}</p>
    </article>
  );
}