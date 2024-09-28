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
      />
    </div>
  );
}
