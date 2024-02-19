import './Modal.css';
import ReactDom from 'react-dom';
import AddTripForm from '../AddTripForm/AddTripForm';
import { useState } from 'react';
import { Trip } from '../../helpers/types/Trip';
import { FormDataEvent } from '../../helpers/types/FormDataEvent';

export default function CreateTripModal(
  { open, onClose }: { open: boolean, onClose: () => void }) {
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

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className='overlay' />

      <div className='modal'>
        <div className='modal__topbar'>
          <h3 className='topbar__title'>Create trip</h3>
          <button className='topbar__button' onClick={onClose} />
        </div>

        <AddTripForm setData={handleInputData} />

        <div className='modal__controls'>
          <button className='control__cancel'>Cancel</button>
          <button className='control__submit'>Save</button>
        </div>
      </div>
    </>,
    modalRoot
  );
}
