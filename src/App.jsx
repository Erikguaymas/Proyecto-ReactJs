import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Proximamente abriremos una ferreteria" />
    </>
  );
}

export default App;
