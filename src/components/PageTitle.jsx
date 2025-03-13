import { useParams } from "react-router-dom";
import resources from "../assets/js/resources"
import "../style/pageTitle.scss"

export default function PageTitle() /*Lager en React-komponent som kalt Pagetitle.*/{
  const { category } = useParams(); /*Henter category fra URL-en*/
  const filteredResources = resources.filter(resource => resource.category === category)
  /*Filtrerer resources og finner de som matcher category*/
  return (
    /*Starter returen av JSX (HTML-lignenede kode i react)*/
    <>
      {filteredResources.map((res, index) => ( 
      /*Går gjennom de filtrerte ressursene èn etter en*/
        <article key={index} /*Lager en <article> for hver ressurs*/>
          <h1>{res.category}</h1>
          <p>{res.text}</p>
        </article>
        /*Viser kategoriens navn som en overskrift*/
        /*Viser en beskrvelse av kategorien*/
        /*Lukker <article> og .map()*/
      ))}
    </>
  );
}
