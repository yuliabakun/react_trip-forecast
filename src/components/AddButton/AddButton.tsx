import './AddButton.css';
import plusIcon from '../../assets/icons/icon-plus-gray.svg';

export default function AddButton({ onClick }: { onClick: () => void }) {
  return (
    <button className='button' onClick={onClick}>
      <div className='button__content'>
        <img className='button__icon' src={plusIcon} alt='plus icon' />

        <span>Add trip</span>
      </div>
    </button>
  );
}