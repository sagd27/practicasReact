export function CardWF({ nombre, img }) {
  return (
    <div className="shadow-black shadow-lg m-4 bg-gradient-to-b from-black to-white object-cover">
      <div className="flex flex-col m-4">
        <img src={img} alt="baruuk" />
      </div>

      <div className="w-1/2">
        <h1 className="m-2 font-bold text-xl font-mono">{nombre}</h1>
      </div>
    </div>
  );
}
