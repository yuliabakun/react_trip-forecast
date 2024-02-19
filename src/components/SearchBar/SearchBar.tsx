import './SearchBar.css';
import searchIcon from '../../assets/icons/icon-search-black.svg';

export default function SearchBar() {
  return (
    <div className='searchbar'>
      <span className='search'>
        <img src={searchIcon} className='search__icon' />

        <input
          className='search__input'
          type='search'
          placeholder='Search your trip'
        />
      </span>
    </div>
  );
}