import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import fundo from "../../assets/fundoscreen.jpg";

function Details() {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(({ data }) => {
      const pokemon = {
        name: data.name,
        imagefront: data.sprites.front_default,
        imageback: data.sprites.back_default,
        xp: data.base_experience,
        weight: data.weight,
        height: data.height,
        abilities: data.abilities,
        types: data.types,
        stats: data.stats,
      };
      setImage(pokemon.imagefront);
      setPokemon(pokemon);
      console.log(pokemon);
    });
  }, [id]);

  function handleMouseEnter() {
    setImage(pokemon.imageback);
  }

  function handleMouseLeave() {
    setImage(pokemon.imagefront);
  }
  const { types } = pokemon;

  const typeColors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };
  const statsStyle = {
    color: Object.keys(pokemon).length > 0 && typeColors[types[0].type.name],
  };
  const cardStyle = {
    backgroundColor:
      Object.keys(pokemon).length > 0 && typeColors[types[0].type.name],
    color: "#FFF",
    textAlign: "center",
  };

  return (
    <>
      <Navbar />
      <div className="title">
        <h1>Pokemon Details:</h1>
      </div>
      <div className="all">
        <div className="container">
          <div className="pokemon" style={cardStyle}>
            <div className="fundo">
              <img src={fundo} alt="screen" />
            </div>
            <div className="img-pk">
              <img
                src={image && image}
                alt={pokemon.name}
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseLeave}
              />
            </div>
            <h1>{pokemon.name}</h1>
          </div>
          <div className="right">
            <div className="fisic">
              <h2 style={statsStyle}>Fisic:</h2>

              <span>{pokemon.xp} EXP</span>
              <span>{pokemon.weight} KG</span>
              <span>{pokemon.height * 100} CM</span>
            </div>
            <div className="ability">
              <h2 style={statsStyle}>Abillity:</h2>
              {pokemon.abilities !== undefined &&
                pokemon.abilities.map((ability) => (
                  <span>{ability.ability.name}</span>
                ))}
            </div>
            <div className="type" style={cardStyle}>
              <h2>Type</h2>
              {pokemon.types !== undefined &&
                pokemon.types.map((type) => <span>{type.type.name}</span>)}
            </div>
            <div className="stats">
              <h2 style={statsStyle}>Stats</h2>
              {pokemon.stats !== undefined &&
                pokemon.stats.map((stat) => (
                  <div className="alinhar">
                    <span style={statsStyle}>{stat.base_stat}</span>
                    <span> - {stat.stat.name}</span>
                  </div>
                ))}
              <div className="desc"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
