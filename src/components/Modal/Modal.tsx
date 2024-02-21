import './Modal.css';
import ReactDom from 'react-dom';
import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Trip } from '../../helpers/types/Trip';
import { FormDataEvent } from '../../helpers/types/FormDataEvent';
import { ModalProps } from '../../helpers/types/PropsTypes';
import { citiesList } from '../../helpers/static/citiesList';
import DatePicker from '../DatePicker/DatePicker';
import closeIcon from '../../assets/icons/icon-plus-gray.svg';

export default function Modal({ open, onClose, trips, addTrip }: ModalProps) {
  const modalRoot = document.getElementById('modal') as HTMLElement;
  const [formData, setFormData] = useState<Trip>({
    id: '',
    destination: '',
    startAt: '',
    endAt: '',
  });

  const handleInputData = (event: FormDataEvent) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!formData.destination || !formData.startAt || !formData.endAt) {
      alert('Please fill in all required fields.');
      return;
    }

    const start = formData.startAt;
    const end = formData.endAt;

    if (new Date(start) > new Date(end)) {
      alert('End date cannot be earlier than Start date.');
      return;
    }

    formData.id = uuidv4();

    const newTrips = [...trips, formData];

    addTrip(newTrips);
    handleClearForm();
    onClose(false);
  };

  const handleClearForm = () => {
    setFormData({
      id: '',
      destination: '',
      startAt: '',
      endAt: '',
    });
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className='overlay' />

      <div className='modal'>
        <div className='modal__topbar'>
          <h3 className='topbar__title'>Create trip</h3>
          <button
            className='topbar__button'
            onClick={() => {
              handleClearForm()
              onClose(false)
            }}
          >
            <img
              src={closeIcon}
              alt='close icon'
              className='topbar__button__icon'
            />
          </button>
        </div>

        <form id='add-trip-form' className='form'>
          <div className='form__field'>
            <label htmlFor='select-city' className='form__label'>City</label>

            <select
              required
              name='destination'
              id='select-city'
              className='form__input form__select'
              value={formData.destination}
              onChange={event => handleInputData(event)}
            >
              <option value='' disabled>Please select a city</option>

              {citiesList.map(city => (
                <option key={city.id} value={city.location}>
                  {city.location}
                </option>
              ))}
            </select>
          </div>

          <DatePicker
            formData={formData}
            handleInputData={handleInputData}
          />
        </form>

        <div className='modal__controls'>
          <button className='control__cancel' onClick={handleClearForm}>
            Cancel
          </button>

          <button
            type='submit'
            form='add-trip-form'
            className='control__submit'
            onClick={(event) => handleSubmit(event)}
          >
            Save
          </button>
        </div>
      </div>
    </>,
    modalRoot
  );
}
