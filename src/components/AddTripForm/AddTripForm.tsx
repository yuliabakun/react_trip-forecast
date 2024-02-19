import './AddTripForm.css';
import { citiesList } from '../../helpers/static/citiesList';
import { FormDataEvent } from '../../helpers/types/FormDataEvent';

export default function AddTripForm({ setData }: { setData: (event: FormDataEvent) => void }) {
  return (
    <form className='form' id='add-trip-form'>
      <div className='form__field'>
        <label htmlFor='city-select' className='form__label'>City</label>

        <select
          required
          defaultValue='city'
          name='destination'
          className='form__input form__select'
          onChange={event => setData(event)}
        >
          <option value='city' disabled>Please select a city</option>
          {citiesList.map(city => (
            <option key={city.id} value={city.location}>
              {city.location}
            </option>
          ))}
        </select>
      </div>

      <div className='form__field'>
        <label htmlFor='input-start-date' className='form__label'>Start date</label>
        <input
          onChange={event => setData(event)}
          name='input-start-date'
          type='date'
          placeholder='Select date'
          className='form__input form__datefield'
        />
      </div>

      <div className='form__field'>
        <label htmlFor='input-end-date' className='form__label'>End date</label>
        <input
          name='input-end-date'
          type='date'
          placeholder='Select date'
          className='form__input form__datefield'
        />
      </div>
    </form>
  );
}