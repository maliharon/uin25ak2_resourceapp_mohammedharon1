import { useParams } from "react-router-dom";
import resources from "../assets/js/resusser"
import "../style/pageTitle.scss"

export default function PageTitle() {
  const { category } = useParams(); 
  const filteredResources = resources.filter(resource => resource.category === category)

  return (
    
    <>
      {filteredResources.map((res, index) => (
        <article key={index}>
          <h1>{res.category}</h1>
          <p>{res.text}</p>
        </article>
      ))}
    </>
  );
}
