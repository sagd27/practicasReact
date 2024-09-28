import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function SearchBar({ searchText, handleSearchBarOnChange }) {
  return (
    <div className="flex p-2 w-80 h-10 items-center m-5">
      <input
        className="h-9 w-64 p-2 m-2 border-red-400 border-2 shadow-black shadow-md"
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => handleSearchBarOnChange(e.target.value)}
      />
      <button className="shadow-black shadow-md">
        <HiMiniMagnifyingGlass className=" text-red-600 w-9 h-9" />
      </button>
    </div>
  );
}

export default SearchBar;