/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MainLayout } from "../components/layouts/MainLayout";
import clientAxios from "@/api";
import { type IPokemonByName } from "@/interfaces/Response";
import React, { Suspense, useState, useEffect } from "react";
import Loading from "@/components/Loading";
import { type GetStaticProps } from "next";

const PokemonListGraph = React.lazy(
    async () =>   await import("@/components/PokemonListGraph")
);

export default function Home({ pokemonsCustomData }: any) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  });

  return (
    <>
      <MainLayout>
        {isLoaded && (
          <Suspense fallback={<Loading />}>
            <div className="container_graph3d">
              <PokemonListGraph pokemonsCustomData={pokemonsCustomData} />
            </div>
          </Suspense>
        )}
      </MainLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const getPokemon = async (pokemon: number) :  Promise<IPokemonByName>  => {
    const response = await clientAxios.get<IPokemonByName>(`/${pokemon}`);
    const data = response.data;
    return data;
  };

  const pokemons = [];
  for (let i = 1; i <= 151; i++) {
    const data = await getPokemon(i);
    pokemons.push(data);
  }

  const pokemonsCustomData = pokemons.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      type: pokemon.types[0].type.name,
      weight: pokemon.weight,
    };
  });

  return {
    props: {
      pokemonsCustomData,
    },
  };
};
