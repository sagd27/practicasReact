import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { Input } from './Input';

function SearchBar({
  searchText,
  handleSearchBarOnChange,
  placeholder,
  // prefiero typescript, porque así podríamos especificar la estructura de este objeto, que es para hacerlo más costumizable
  classNames,
}) {
  return (
    <div
      className={`flex p-2 w-80 h-10 items-center m-5 ${classNames?.div ?? ''}`}
    >
      <Input
        className={classNames?.input ?? ''}
        type="text"
        placeholder={placeholder ?? 'Search...'}
        value={searchText}
        onChange={handleSearchBarOnChange}
      />
      <button className="shadow-black shadow-md">
        <HiMiniMagnifyingGlass className=" text-red-600 w-9 h-9" />
      </button>
    </div>
  );
}

export default SearchBar;
