import { NavLink } from "react-router-dom";
import classes from "../components/Nav.module.css";
import Pdf from "../assets/resume.pdf";

const onResumeClick = () => {
  window.open(Pdf);
};

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
            <NavLink to="/contact">Contact</NavLink>
            <NavLink className={classes.resume_button}>
              <a onClick={onResumeClick}>Resume</a>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
