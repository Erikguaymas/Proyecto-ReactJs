import { Card, ListGroup } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = ({ productSelected, cant, onAdd }) => {
  return (
    <>
      {Object.keys(productSelected).length > 0 ? (
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={productSelected.pictureUrl} />
            <Card.Body>
              <Card.Title style={{ fontSize: "1.5rem" }}>
                {productSelected.title}
              </Card.Title>
              <Card.Text style={{ fontSize: "0.8rem" }}>
                {productSelected.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                Categoria: {productSelected.category}
              </ListGroup.Item>
              <ListGroup.Item
                style={{ fontSize: "1.2rem", fontWeight: "bold" }}
              >
                ${productSelected.price}
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <Card style={{ height: "10rem" }}>
            <Card.Header as="h5">
              Hay {productSelected.stock} en stock
            </Card.Header>
            <Card.Body style={{ display: "grid", placeItems: "center" }}>
              <ItemCount
                stock={productSelected.stock}
                initial={cant}
                onAdd={onAdd}
              />
            </Card.Body>
          </Card>
        </>
      ) : (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PulseLoader color="#36d7b7" />
        </div>
      )}
    </>
  );
};

export default ItemDetail;
