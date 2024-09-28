import SearchBar from "./SearchBar";

function Header({ searchText, handleSearchBarOnChange }) {
  return (
    <div className="flex justify-around m-3">
      <div>
        <Cabezera />
        <Titulo />
      </div>
     
      <SearchBar searchText={searchText} handleSearchBarOnChange={handleSearchBarOnChange} />
    </div>
  );
}

function Cabezera() {
  return (
    <h1 className="text-red-500 font-bold">Warframes</h1>
  );
}

function Titulo() {
  return (
    <div className="w-40">
      <h1 className="text-4xl font-sans font-bold">Discover Warframe</h1>
    </div>
  );
}

export { Header };