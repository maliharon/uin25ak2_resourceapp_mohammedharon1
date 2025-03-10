import { useParams } from "react-router-dom";
import resources from "../assets/js/resusser"
import "../style/resources.scss"

export default function PageTitle(){
  const { category } = useParams()
  const filteredResources = resources.filter(resource => resource.category === category)

  return (
    <section>
      {filteredResources.map((res, index) => (
        <article key={index}>
          <ul>
            {res.sources.map((source, indx) => (
              <li key={indx}>
                <a href={source.url}>{source.title}</a>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}