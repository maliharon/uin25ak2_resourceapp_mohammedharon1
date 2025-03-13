import Nav from "./Nav";
import "../style/layout.scss"

export default function Layout({children}) {/*Definerer og eksporterer en React-komponent kalt Layout
  children er et spesialprop i React som gjør at Layout kan omslutte annet innhold.*/
  return (/*bruker en tom <>...</> Reaxt fragment for å unngå eksta div-element i DOM-en*/
    <>
    
      <Nav /*Viser Nav-komponeneten øverst, slik at navigasjonen alltid er tilgjengelig*//> 
      
      <main>
        {children /*Lager en <main>-tag for hovedinnholdet
        <children> plasserer innholdet som sendes inn i Layout-komponenten*/}
      </main>
    </>
  );
}