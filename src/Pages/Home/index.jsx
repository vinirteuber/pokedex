import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

function Home() {
  const [list, setList] = useState([]);

  function nextPage() {
    axios.get(list.next).then((response) => setList(response.data));
  }

  function previousPage() {
    axios.get(list.previous).then((response) => setList(response.data));
  }

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => setList(response.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="title">
        <h1>Pokemon List:</h1>
        <div className="nextprev">
          {list.previous && <span onClick={previousPage}>prev </span>}
          <span onClick={nextPage}>next</span>
        </div>
      </div>
      <div className="cards-field">
        {list.results !== undefined &&
          list.results.map((item) => (
            <div className="card" key={item.name}>
              <span>{item.types}</span>
              <div className="interior">
                <Pokemon data={item} />
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
}

const Pokemon = ({ data }) => {
  const [details, setDetails] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios.get(data.url).then((response) => {
        setDetails(response.data);
        setImage(response.data.sprites.front_default);
        setLoading(false);
      });
    }, 1000);
  }, []);
  if (loading) {
    return <Loading />;
  }
  function handleMouseEnter() {
    setImage(details.sprites.back_default);
  }

  function handleMouseLeave() {
    setImage(details.sprites.front_default);
  }

  const { types } = details;

  // Defina as cores para cada tipo de Pokémon
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

  const cardStyle = {
    backgroundColor: typeColors[types[0].type.name],
    padding: "1rem",
    borderRadius: "0.5rem",
    color: "#FFF",
    textAlign: "center",
  };

  return (
    <>
      <div className="cardlink" key={details.id}></div>
      <Link
        to={`/details/${details.id}`}
        onMouseOver={handleMouseEnter}
        onMouseOut={handleMouseLeave}
      >
        <div className="types" style={cardStyle}>
          {details?.types &&
            details.types.map(({ type }) => type.name).join("/")}
        </div>
        <div className="image">
          <img src={image && image} alt="pokemons" />
        </div>
        <div className="name">
          <h1>{details.name}</h1>
        </div>
        <div className="experience">
          <h3>EXP {details.base_experience}</h3>
        </div>
      </Link>
    </>
  );
};
export default Home;
