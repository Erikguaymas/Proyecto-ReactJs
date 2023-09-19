import { Card, ListGroup } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = ({ productSelected }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantify: cantidad,
    };
    console.log(data);
  };
  return (
    <>
      {Object.keys(productSelected).length > 0 ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={productSelected.pictureUrl} />
          <Card.Body>
            <Card.Title>{productSelected.title}</Card.Title>
            <Card.Text>{productSelected.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Categoria: {productSelected.category}
            </ListGroup.Item>
            <ListGroup.Item>${productSelected.price}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <ItemCount
              stock={productSelected.stock}
              initial={1}
              onAdd={onAdd}
            />
          </Card.Body>
          <Card.Footer>
            <Card.Text href="#">Hay {productSelected.stock} en stock</Card.Text>
          </Card.Footer>
        </Card>
      ) : (
        <h2>Nada por aqui</h2>
      )}
    </>
  );
};

export default ItemDetail;
