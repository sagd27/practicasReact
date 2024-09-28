import { CardWF } from './CardWF';
import { warframes } from '../../assets/warframes';

function Cards({ searchText }) {
  let WfFiltrados = warframes.filter((w) =>
    w.nombreWf.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="flex items-center justify-center m-5 ">
      {WfFiltrados.map((wf) => (
        <CardWF key={wf.id} nombre={wf.nombreWf} img={wf.imgWf} />
      ))}
    </div>
  );
}

export { Cards };
