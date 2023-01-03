import { NavLink } from "react-router-dom";
import classes from "../components/Nav.module.css";

export default function Nav() {
  return (
    <div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/galery">Galery</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
