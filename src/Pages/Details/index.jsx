import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function Details() {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(({ data }) => {
      const pokemon = {
        name: data.name,
        image: data.sprites.front_default,
        xp: data.base_experience,
        weight: data.weight,
        height: data.height,
        abilities: data.abilities,
        types: data.types,
        stats: data.stats,
      };

      setPokemon(pokemon);
      console.log(pokemon);
    });
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="title">
        <h1>Pokemon Details:</h1>
      </div>
      <div className="all">
        <div className="container">
          <div className="pokemon">
            <img src={pokemon.image} alt="" />
            <h1>{pokemon.name}</h1>
          </div>
          <div className="right">
            <div className="fisic">
              <h2>Fisic:</h2>

              <span>{pokemon.xp} EXP</span>
              <span>{pokemon.weight} KG</span>
              <span>{pokemon.height * 100} CM</span>
            </div>
            <div className="ability">
              <h2>Abillity:</h2>
              {pokemon.abilities !== undefined &&
                pokemon.abilities.map((ability) => (
                  <span>{ability.ability.name}</span>
                ))}
            </div>
            <div className="type">
              <h2>Type</h2>
              {pokemon.types !== undefined &&
                pokemon.types.map((type) => <span>{type.type.name}</span>)}
            </div>
            <div className="stats">
              <h2>Stats</h2>
              {pokemon.stats !== undefined &&
                pokemon.stats.map((stat) => (
                  <span>
                    {stat.base_stat} {stat.stat.name}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
