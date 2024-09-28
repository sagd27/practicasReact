export default function Cabezera({ label }) {
  return <h1 className="text-red-500 font-bold">{label ?? ''}</h1>;
}
