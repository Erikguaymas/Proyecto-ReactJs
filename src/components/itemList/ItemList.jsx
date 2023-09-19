import Item from "./Item";
import { Col } from "react-bootstrap";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((product) => {
        return (
          <Col
            key={product.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Item product={product} />
          </Col>
        );
      })}
    </>
  );
};

export default ItemList;
