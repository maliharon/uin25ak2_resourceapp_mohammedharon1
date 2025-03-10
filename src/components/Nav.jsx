import { Link, NavLink } from "react-router-dom";
import resources from "../assets/js/resusser";
import "../style/nav.scss"

export default function Nav() {
  return (
    <nav>
      <ul>
        {resources.map((res, index) => (
        <li key={index}>
            <NavLink to={`/${res.category}`} className="link">{res.category}</NavLink>
        </li> 
        ))}
      </ul>
    </nav>
  );
}