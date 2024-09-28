export function Input({ className, onChange, ...rest }) {
  // Normalmente en el handler pones lógica adicional, en este caso lo uso nada más para validar qué pasa si no me pasan el handler por props y así evitamos un error
  const onChangeHandler = (e) => {
    if (!onChange) return;
    onChange(e.target.value);
  };

  return (
    <input
      className={`h-9 w-64 p-2 m-2 border-red-400 border-2 shadow-black shadow-md ${
        className ?? ''
      }`}
      onChange={onChangeHandler}
      {...rest}
    />
  );
}
