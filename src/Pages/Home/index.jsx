import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "axios";

import { useEffect, useState } from "react";

function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => setList(response.data.results));
  }, []);
  return (
    <>
      <Navbar />
      <div className="title">
        <h1>Pokemon List:</h1>
      </div>
      <div className="cards-field">
        {list.map((item) => (
          <div className="card">
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

  useEffect(() => {
    axios.get(data.url).then((response) => setDetails(response.data));
  }, []);
  if (details === null) {
    return <div> - </div>;
  }

  return (
    <>
      <div className="cardlink" key={details.id}></div>
      <Link to={`/details/${details.id}`}>
        <div className="image">
          <img src={details.sprites.front_default} alt="pokemons" />
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
