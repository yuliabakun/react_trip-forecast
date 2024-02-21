import './ForecastAside.css';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../helpers/globalState/hooks';
import { getCurrentWeatherData, getIconUrl } from '../../helpers/api/fetchHelper';
import { WeatherData } from '../../helpers/types/Weather';
import { getWeekday } from '../../helpers/static/weekdays';
import Countdown from '../Countdown/Countdown';

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
      {selectedTrip ?
        weatherData && (
          <div className='aside__content'>
            <section className='aside__info'>
              <h3 className='info__weekday'>
                {getWeekday(weatherData.days[0].datetime)}
              </h3>

              <div className='info__temperature'>
                <img
                  className='info__temperature__image'
                  src={getIconUrl(weatherData.days[0].icon)}
                />
                <p className='info__temperature__degree'>
                  {`${Math.round(weatherData.days[0].temp)}`}
                </p>
              </div>
              <p className='info__location'>{weatherData.address}</p>
            </section>

            <Countdown targetDate={selectedTrip.startAt} />
          </div>
        ) : (
          <p className='aside__message'>
            Please, select a trip from the list
          </p>
        )}
    </aside>
  );
}