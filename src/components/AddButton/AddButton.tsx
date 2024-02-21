import './AddButton.css';
import plusIcon from '../../assets/icons/icon-plus-gray.svg';
import { AddButtonProps } from '../../helpers/types/PropsTypes';

export default function AddButton({ onClick }: AddButtonProps) {
  return (
    <button className='button' onClick={() => onClick(true)}>
      <div className='button__content'>
        <img className='button__icon' src={plusIcon} alt='plus icon' />

        <span className='button__text'>Add trip</span>
      </div>
    </button>
  );
}