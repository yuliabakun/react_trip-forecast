import './SearchBar.css';
import cn from 'classnames';
import searchIcon from '../../assets/icons/icon-search-black.svg';
import { useAppDispatch, useAppSelector } from '../../helpers/globalState/hooks';
import { setSearchQuery } from '../../helpers/globalState/tripSlice';
import { useState } from 'react';

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const { searchQuery } = useAppSelector(state => state.trips);
  const [focus, setFocus] = useState(false);

  return (
    <div className='searchbar'>
      <span className={cn('search', { 'search--active': focus })}>
        <img src={searchIcon} className='search__icon' />

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
            onClick={() => dispatch(setSearchQuery(''))}
            className='search__clear'
          >
            Clear
          </button>
        )}
      </span>
    </div>
  );
}