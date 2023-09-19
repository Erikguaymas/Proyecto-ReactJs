import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../products.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productosFiltrado = products.find(
      (producto) => producto.id === Number(id)
    );

    const getProduct = new Promise((resolve) => {
      resolve(productosFiltrado);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <ItemDetail productSelected={productSelected} />
    </div>
  );
};

export default ItemDetailContainer;
