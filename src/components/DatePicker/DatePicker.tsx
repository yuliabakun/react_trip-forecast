import './DatePicker.css';
import { useState } from 'react';
import { Trip } from '../../helpers/types/Trip';
import { FormDataEvent } from '../../helpers/types/FormDataEvent';
import { getTodayDate } from '../../helpers/static/getDate';

export default function DatePicker(
  { formData, handleInputData }: { formData: Trip, handleInputData: (event: FormDataEvent) => void }
) {
  const [minDate] = useState(getTodayDate());
  const [prevDate, setPrevDate] = useState<null | string>(null);

  return (
    <>
      <div className='form__field'>
        <label htmlFor='input-start-date' className='form__label'>Start date</label>
        <input
          required
          name='startAt'
          type='date'
          id='input-start-date'
          placeholder='Select date'
          className='form__input form__datefield'
          min={minDate}
          value={formData.startAt}
          onChange={event => {
            handleInputData(event);
            setPrevDate(event.target.value);
          }}
        />
      </div>

      <div className='form__field'>
        <label htmlFor='input-end-date' className='form__label'>End date</label>
        <input
          required
          name='endAt'
          type='date'
          id='input-end-date'
          placeholder='Select date'
          className='form__input form__datefield'
          min={prevDate || minDate}
          value={formData.endAt}
          onChange={event => handleInputData(event)}
        />
      </div>
    </>
  );
}