import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

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
        <div>
          {list.previous && <span onClick={previousPage}>prev </span>}
          <span onClick={nextPage}>next</span>
        </div>
      </div>
      <div className="cards-field">
        {list.results !== undefined &&
          list.results.map((item) => (
            <div className="card" key={item.name}>
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
