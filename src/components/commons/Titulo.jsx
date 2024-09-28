export function Titulo({ title }) {
  return (
    <div className="w-40">
      <h1 className="text-4xl font-sans font-bold">{title ?? ''}</h1>
    </div>
  );
}
