import './Countdown.css';
import { useEffect, useState } from 'react';

type TimeLeft = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
};

export default function Countdown({ targetDate }: { targetDate: string }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes:0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className='countdown'>
      {seconds > 0 ? (
        <>
          <div className='countdown__section'>
            <p className='countdown__time'>{days}</p>
            <p className='countdown__text'>days</p>
          </div>

          <div className='countdown__section'>
            <p className='countdown__time'>{hours}</p>
            <p className='countdown__text'>hours</p>
          </div>

          <div className='countdown__section'>
            <p className='countdown__time'>{minutes}</p>
            <p className='countdown__text'>minutes</p>
          </div>

          <div className='countdown__section'>
            <p className='countdown__time'>{seconds}</p>
            <p className='countdown__text'>seconds</p>
          </div>
        </>
      ) : (
        <h2 className='countdown__message'>Enjoy your trip!</h2>
      )}
    </div>
  );
}
