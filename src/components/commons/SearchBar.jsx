import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { Input } from './Input';

// Así es mejor porque Input es un componente que se puede usar en cualquier otro lado de la app y lo utilizas acá y le das los estilos específicos para el SearchBar reutilizable
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
      {/* esto realmente no está haciendo nada, podría ser un span */}
      <button className="shadow-black shadow-md" type="button">
        {/* le puse type button, ya que por defecto es submit y si por alguna razón lo usas dentro de un form, haría el submit */}
        <HiMiniMagnifyingGlass className=" text-red-600 w-9 h-9" />
      </button>
    </div>
  );
}

export default SearchBar;
