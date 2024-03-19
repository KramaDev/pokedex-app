import { useEffect, useState } from "react";

type PokemonInfoType = {
  id: number;
  name: string;
  sprite: string;
};

type PokedexProps = {
  nextClickCount: number;
};

const Pokedex = ({ nextClickCount }: PokedexProps) => {
  const [pokemonData, setPokemonData] = useState<PokemonInfoType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${nextClickCount + 1}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const pokemonData = await response.json();
        setPokemonData({
          id: pokemonData.id,
          name: pokemonData.name,
          sprite: pokemonData.sprites.front_default,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [nextClickCount]);

  return (
    <div>
      {pokemonData && (
        <div className="pokedex">
          <img
            className="pokedex__photo"
            src={pokemonData.sprite}
            alt={pokemonData.name}
          />
          <h1 className="pokedex__name">{pokemonData.name}</h1>
          <h2 className="pokedex__id">ID: {pokemonData.id}</h2>
        </div>
      )}
    </div>
  );
};

export default Pokedex;
