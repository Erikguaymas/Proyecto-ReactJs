import { Container, Row } from "react-bootstrap";

import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../products.json";

const ItemListContainer = () => {
  const [productSelected, setProductSelected] = useState([]);
  //console.log(products);

  const { id } = useParams();

  useEffect(() => {
    let productosFiltrado = products.filter(
      (product) => product.category === id
    );

    const getProduct = new Promise((resolve) => {
      resolve(id ? productosFiltrado : products);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container>
      <Row className="row-cols-1 row-cols-md-3 g-2 ">
        <ItemList productos={productSelected} />
      </Row>
    </Container>
  );
};

export default ItemListContainer;
