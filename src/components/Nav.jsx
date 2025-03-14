import { Link, NavLink } from "react-router-dom";
import resources from "../assets/js/resources";
import "../style/nav.scss"

export default function Nav() /*Definerer og eksporterer en React-komponent kalt nav*/{
  return (/*Returenerer <nav>-tag som omslutter navigasjonsmenyen*/
    
    
    <nav>
      <ul>
        {resources.map((res, index) => /*Bruker vi map()-funksjonen
       til å løpe resources-listen og lag en <li> for hver kategori*/  (
        <li key={index} /*Opretter en <li> listeelement for hver kategori*/>
          
            <NavLink to={`/${res.category  /*Viser kategori navnet inne i NavnLink,
               så brukeren ser teksten på lenken*/}`} className="link">{res.category}</NavLink>
            
        </li> 
        ))}
      </ul>
    </nav>


  );
}