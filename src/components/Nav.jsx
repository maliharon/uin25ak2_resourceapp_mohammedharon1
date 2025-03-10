import { Link, NavLink } from "react-router-dom";
import resources from "../assets/js/resusser";
import "../style/nav.scss"

export default function Nav() {
  return (
    <nav>
      <ul>
        {resources.map((res, index) => (
        <li key={index}>
            <Link to={`/${res.category}`}>{res.category}</Link>
        </li> 
        ))}
      </ul>
    </nav>


   
  );
}