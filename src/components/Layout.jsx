import Nav from "./Nav";
import "../style/layout.scss"

export default function Layout({children}) {
  return (
    <>
      <Nav /> 

      <main>
        {children}
      </main>
    </>
  );
}