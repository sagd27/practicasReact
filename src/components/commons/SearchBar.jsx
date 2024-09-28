function SearchBar({
  searchText,
  handleSearchBarOnChange,
  placeholder,
  children,
}) {
  const onChangeHandler = (e) => {
    if (!handleSearchBarOnChange) return;
    handleSearchBarOnChange(e.target.value);
  };

  return (
    <div className="flex p-2 w-80 h-10 items-center m-5">
      <input
        className="h-9 w-64 p-2 m-2 border-red-400 border-2 shadow-black shadow-md"
        type="text"
        placeholder={placeholder ?? 'Search...'}
        value={searchText}
        onChange={onChangeHandler}
      />
      {children}
    </div>
  );
}

export default SearchBar;
