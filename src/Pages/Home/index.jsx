import Pokedex from "../../assets/Daco_4582111.png";
import Background from "../../assets/fundoscreen.jpg";
import Logo from "../../assets/logopoke.png";

function Home() {
  return (
    <>
      <div className="all">
        <div className="pokedex">
          <img src={Pokedex} alt="pokedex" />
          <div className="screen">
            <div className="background">
              <img src={Background} alt="background" />
            </div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/4.gif"
              alt=""
            />
          </div>
          <div className="screen-info">dsjahjkdsahkjhdsk</div>
          <div className="button-l"></div>
          <div className="button-r"></div>
          <div className="button-details"></div>
        </div>
        <div className="moreinfos">
          <img src={Logo} alt="logo pokemon" />
          <div className="name">
            <div className="infos">
              <h1>Charmander</h1>
              <h2>LVL - 123</h2>
              <div className="buttonSM">
                <button>See More</button>
              </div>
              <div className="btns">
                <div className="skip">
                  <button>
                    {" "}
                    <i className="fa-solid fa-arrow-left"></i>{" "}
                  </button>
                </div>
                <div className="return">
                  <button>
                    <i className="fa-solid fa-arrow-right"></i>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
