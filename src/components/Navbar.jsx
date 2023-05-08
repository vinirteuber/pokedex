import { Link } from "react-router-dom";
import Logo from "../assets/logopoke.png";

function Navbar() {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </Link>
    </header>
  );
}

export default Navbar;
