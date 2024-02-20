import './SearchBar.css';
import cn from 'classnames';
import searchIcon from '../../assets/icons/icon-search-black.svg';
import { useAppDispatch } from '../../helpers/globalState/hooks';
import { setSearchQuery } from '../../helpers/globalState/tripSlice';
import { useState } from 'react';

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const [focus, setFocus] = useState(false);

  return (
    <div className='searchbar'>
      <span className={cn('search', { 'search--active': focus })}>
        <img src={searchIcon} className='search__icon' />

        <input
          id='search-trips'
          type='search'
          placeholder='Search your trip'
          className='search__input'
          onChange={(event) => dispatch(setSearchQuery(event.target.value))}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </span>
    </div>
  );
}