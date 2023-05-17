import { NavLink, Outlet } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import css from "./Header.module.css";
import HomeMaine from "../HomeMain/HomeMain";

const Header = () => {
  return (
    <header>
      <HomeMaine />
      <div className={css.mainHeader}>
        <nav className={css.headerNav}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          <NavLink className={css.link} to="Projects">
            Projects
          </NavLink>
          <img className={css.logo} src={reactLogo} alt="React logo" />
          <NavLink className={css.link} to="About">
            About
          </NavLink>
          <NavLink className={css.link} to="Contact">
            Contact
          </NavLink>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </header>
  );
};
export default Header;
