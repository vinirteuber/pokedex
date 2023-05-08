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
      };

      setPokemon(pokemon);
      console.log(pokemon);
    });
  }, [id]);

  return (
    <>
      <Navbar />
      <img src={pokemon.image} alt="" />
      <h1>{pokemon.name}</h1>
      <h2>{pokemon.xp}</h2>
      <Footer />
    </>
  );
}

export default Details;
