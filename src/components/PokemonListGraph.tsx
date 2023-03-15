/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useRef, useCallback, useState } from "react";
import { ForceGraph3D } from "react-force-graph";
import SpriteText from "three-spritetext";

interface IDataPokeCustom {
  name: string;
  type: string;
  weight: number;
  id: number;
  image: string;
}

const PokemonListGraph = ({ pokemonsCustomData }: any ) => {
  const [isPostionCorrect, setIsPostionCorrect] = useState(false);
  const [profileSelected, setProfileSelected] = useState();

  const dataGraph = {
    nodes: pokemonsCustomData.map((el: any) => ({
      id: el.name,
    })),
    links: pokemonsCustomData.map((el: any, index: number) => ({
      source: el.name,
      target:
        pokemonsCustomData.map((el: any) => el.name)[index + 1] ||
        pokemonsCustomData.map((el: any) => el.name)[0],
    })),
  };

  const fgRef = useRef<any>(null);

  const handleClick = useCallback(
    (node: any) => {
      const distance = 200;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        3000 // ms transition duration
      );
      setIsPostionCorrect(true);
      setProfileSelected(node.id);
    },
    [fgRef]
  );

  const pokemonCustomData = pokemonsCustomData.filter(
    (el: any) => el.name === profileSelected
  );
  const dataPokemon : IDataPokeCustom = pokemonCustomData[0];
 
  return (
    <>
      <ForceGraph3D
        graphData={dataGraph}
        linkSource="source"
        backgroundColor="#000"
        showNavInfo={false}
        nodeRelSize={2}
        linkWidth={1}
        ref={fgRef}
        nodeLabel="id"
        onNodeClick={handleClick}
        nodeThreeObject={(node: { id: string | undefined; color: string }) => {
          const sprite = new SpriteText(node.id);
          sprite.textHeight = 8;
          return sprite;
        }}
      />

      {isPostionCorrect && (
        <div
          className={`absolute m-4 p-5 bottom-0 right-0 ${dataPokemon?.type} w-[200px] h-[300px] rounded-xl border`}
        >
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <p># {dataPokemon?.id}</p>
              <p className="font-medium capitalize">{dataPokemon.name}</p>
            </div>
            <img
              src={dataPokemon.image}
              alt={dataPokemon?.name}
              width={150}
              height={150}
              className="m-auto"
            />
            <p className="capitalize">Tipo: {dataPokemon?.type}</p>
            <p>Peso: {dataPokemon?.weight} </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonListGraph;
