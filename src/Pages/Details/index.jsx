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
            <div className="top">
              <h2>Fisic:</h2>
              <div className="fisic">
                <ul>
                  <li>{pokemon.xp} - EXP</li>
                  <li>{pokemon.weight} KG</li>
                  <li>{pokemon.height * 100} CM</li>
                </ul>
              </div>
              <h2>Abillity:</h2>
              <div className="ability">
                {pokemon.abilities !== undefined &&
                  pokemon.abilities.map((ability) => (
                    <ul>
                      <li>{ability.ability.name}</li>
                    </ul>
                  ))}
              </div>
            </div>
            <div className="bottom">
              <div className="type">
                {pokemon.types !== undefined &&
                  pokemon.types.map((type) => <li>{type.type.name}</li>)}
              </div>

              <div className="stats">
                {pokemon.stats !== undefined &&
                  pokemon.stats.map((stat) => (
                    <ul>
                      <li>
                        {stat.base_stat} - {stat.stat.name}
                      </li>
                    </ul>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
