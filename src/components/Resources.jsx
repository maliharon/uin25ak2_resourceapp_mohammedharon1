import { useParams } from "react-router-dom"; 
import resources from "../assets/js/resources"
import "../style/resources.scss"

export default function PageTitle(){ /*Her oppretter en React komponent som kalt pageTitle
  skal vise innhold baser på URL */
  const { category } = useParams() /*Denne delen henter category fra URL-en,
   slik at vi vet hvilken kategori brukeren har valgt.*/
  const filteredResources = resources.filter(resource => resource.category === category)
  /*Filtrerer resources
   skal finne elementer som tilhører den valgte kategorien fra URL.*/

  return ( /*I returen JSX som skal vises på nettsiden, starter med en section.*/
    <section>
      {filteredResources.map((res, index) => ( /*I dette delen går gjennom de
       filtterte ressursene og lager et artiicle for hver.*/
        <article key={index} /*Lager en <article> en <ul>-lister
         for å vise ressurser inne i den*/> 
          <ul>
            {res.sources.map((source, indx) => (/*Det går gjennom listen sources 
            inne i hver  ressurs for å lage lenker*/
              <li key={indx}>
                <a href={source.url}>{source.title}</a>
              </li> /*Lager en <li> med en <a> lenke som peker til ressursens nettside.*/
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}