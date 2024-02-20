import { getIconUrl } from '../../helpers/api/fetchHelper';
import { getWeekday } from '../../helpers/static/weekdays';
import { WeatherDay } from '../../helpers/types/Weather';
import './WeatherCard.css';

export default function WeatherCard({ weatherInfo }: { weatherInfo: WeatherDay }) {
  const getTemperatureData = () => {
    const min = Math.round(weatherInfo.tempmin);
    const max = Math.round(weatherInfo.tempmax);

    return `${min}°/${max}°`;
  }

  return (
    <article className='weatherCard'>
      <p className='weatherCard__weekday'>{getWeekday(weatherInfo.datetime)}</p>

      <div>
        <img className='weatherCard__image' src={getIconUrl(weatherInfo.icon)} />
      </div>

      <p>{getTemperatureData()}</p>
    </article>
  );
}