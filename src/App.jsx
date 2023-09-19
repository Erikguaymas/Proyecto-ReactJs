import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/itemList/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContainer from "./components/cart/CartContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<CartContainer />} />
          </Route>
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
