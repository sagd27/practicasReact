import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { Titulo } from './Titulo';
import SearchBar from './SearchBar';
import Cabezera from './Cabecera';

export function Header({ searchText, handleSearchBarOnChange }) {
  return (
    <div className="flex justify-around m-3">
      <div>
        <Cabezera label="Warframes" />
        <Titulo title="Discover Warframe" />
      </div>

      <SearchBar
        searchText={searchText}
        handleSearchBarOnChange={handleSearchBarOnChange}
        placeholder="Search..."
      >
        <button className="shadow-black shadow-md">
          <HiMiniMagnifyingGlass className=" text-red-600 w-9 h-9" />
        </button>
      </SearchBar>
    </div>
  );
}
