import Item from "./Item";
import { Col } from "react-bootstrap";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((product) => {
        return (
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            key={product.id}
          >
            <Item product={product} />
          </Col>
        );
      })}
    </>
  );
};

export default ItemList;
