import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";
import PageTitle from "./components/PageTitle";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<><PageTitle /><Resources /></>} />
        <Route path="/:category" element={<><PageTitle /><Resources /></>}/>
      </Routes>
    </Layout>
  );
}

export default App;