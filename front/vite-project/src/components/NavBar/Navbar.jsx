import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo1 from "./logo1.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import { UlNavBar } from "../UlNavBar/UlNavBar";
import DropdownMenu from "../DropdownMenu/DropdwonMenu";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const userLoggedState = useSelector((state) => state.user.user);

  useEffect(() => {
    if (userLoggedState) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [userLoggedState]);

  return (
    <div className={styles.navContainer}>
      <div>
        <Link to="/">
          <img src={logo1} className={styles.logo} alt="Logo" />
        </Link>
      </div>
      <div className={styles.containerUl}>
        {isMobile ? <DropdownMenu /> : <UlNavBar />}
      </div>
      {isMobile ? null :
      <div>
        <Link className="btn btn-primary button-agendar-turno">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-calendar-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
          </svg>{" "}
          Agendar turno
        </Link>
      </div>
}
    </div>
  );
};
export default Navbar;
