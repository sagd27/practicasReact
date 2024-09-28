import { Header } from './Header';
import { Cards } from './Cards';
import { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState('');

  function handleSearchBarOnChange(newValue) {
    setSearchText(newValue);
  }

  return (
    <div className="flex flex-col   w-screen h-screen ">
      <header>
        <Header
          searchText={searchText}
          handleSearchBarOnChange={handleSearchBarOnChange}
        ></Header>
      </header>

      <Cards searchText={searchText}></Cards>
    </div>
  );
}

export default App;
