import './SearchBar.css';

export function SearchBar() {
  return (
    <div className='searchbar'>
      <input
        className='searchbar__input'
        type='search'
        placeholder='type text'
      />
    </div>
  );
}