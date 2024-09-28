export const warframes = [
  {
    imgWf:
      'https://www-static.warframe.com/images/warframes/thumbnails/baruuk.png',
    nombreWf: 'Baruuk',
    id: '1',
  },
  {
    imgWf:
      'https://www-static.warframe.com/images/warframes/thumbnails/ember.png',
    nombreWf: 'Ember',
    id: '2',
  },
  {
    imgWf:
      'https://www-static.warframe.com/images/warframes/thumbnails/ivara.png',
    nombreWf: 'Ivara',
    id: '3',
  },
  {
    imgWf:
      'https://www-static.warframe.com/images/warframes/thumbnails/gauss.png',
    nombreWf: 'Gauss',
    id: '4',
  },
];

function Cards({ searchText }) {
  let WfFiltrados = warframes.filter((w) =>
    w.nombreWf.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="flex items-center justify-center m-5 ">
        {WfFiltrados.map((wf) => (
          <CardWF key={wf.id} nombre={wf.nombreWf} img={wf.imgWf} />
        ))}
      </div>
    </>
  );
}

function CardWF({ nombre, img }) {
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

export { Cards };
