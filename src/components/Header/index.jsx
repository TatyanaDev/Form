import { Link } from "react-router-dom";
import logo from "common/image/logo.png";
import style from "./header.module.scss";

const Header = () => (
  <header className={style.header}>
    <Link className={style.logoContainer} to="/">
      <img src={logo} alt="Squadhelp" />
    </Link>

    {window.location.pathname === "/" ? (
      <Link to="/sign-up" className={style.signBtn}>
        Signup
      </Link>
    ) : (
      <Link to="/" className={style.signBtn}>
        Login
      </Link>
    )}
  </header>
);

export default Header;
