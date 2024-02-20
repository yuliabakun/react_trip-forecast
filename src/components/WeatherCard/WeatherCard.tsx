import './WeatherCard.css';
import { getIconUrl } from '../../helpers/api/fetchHelper';
import { getWeekday } from '../../helpers/static/weekdays';
import { WeatherCardProps } from '../../helpers/types/PropsTypes';

export default function WeatherCard({ weatherInfo }: WeatherCardProps) {
  const getTemperatureData = () => {
    const min = Math.round(weatherInfo.tempmin);
    const max = Math.round(weatherInfo.tempmax);

    return `${min}°/${max}°`;
  }

  return (
    <article className='weatherCard'>
      <p className='weatherCard__weekday'>
        {getWeekday(weatherInfo.datetime)}
      </p>

      <img className='weatherCard__image' src={getIconUrl(weatherInfo.icon)} />

      <p>{getTemperatureData()}</p>
    </article>
  );
}