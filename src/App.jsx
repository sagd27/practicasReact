import { Header } from './components/commons/Header';
import { Cards } from './components/cards/Cards';
import { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState('');

  function handleSearchBarOnChange(newValue) {
    setSearchText(newValue);
  }

  return (
    <div className="flex flex-col   w-screen h-screen ">
      <header>
        {/* No hay necesidad de declarar una etiqueta que abre y cierra un componente si este no recibe "children" por props */}
        <Header
          searchText={searchText}
          handleSearchBarOnChange={handleSearchBarOnChange}
        />
      </header>
      {/* same */}
      <Cards searchText={searchText} />
    </div>
  );
}

export default App;
