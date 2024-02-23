import './SearchBar.css';
import searchIcon from '../../assets/icons/icon-search-black.svg';
import { useAppDispatch, useAppSelector } from '../../helpers/globalState/hooks';
import { setSearchQuery } from '../../helpers/globalState/tripSlice';
import { useState } from 'react';

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const [focus, setFocus] = useState(false);
  const { searchQuery } = useAppSelector(state => state.trips);

  return (
    <div className='searchbar'>
      <span className={`search ${ focus ? 'search--active' : ''}`}>
        <img
          src={searchIcon}
          alt='magnifying glass icon'
          className='search__icon'
        />

        <input
          id='search-trips'
          type='text'
          placeholder='Search your trip'
          className='search__input'
          value={searchQuery}
          onChange={(event) => dispatch(setSearchQuery(event.target.value))}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />

        {searchQuery && (
          <button
            type='button'
            className='search__clear'
            onClick={() => dispatch(setSearchQuery(''))}
          >
            Clear
          </button>
        )}
      </span>
    </div>
  );
}
