import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <Link to="/">
          <div className="button-ftr">
            <div className="click">
              <i className="fa-solid fa-chevrons-left"></i>
            </div>
          </div>
        </Link>
      </footer>
    </>
  );
}

export default Footer;
