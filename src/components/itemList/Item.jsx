import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <Card.Img
        variant="top"
        src={product.pictureUrl}
        style={{ height: "300px" }}
      />
      <Card.Body
        className="text-center"
        style={{
          backgroundColor: "lightcoral",
          height: "115px",
        }}
      >
        <Card.Title style={{ fontSize: "1rem" }}>{product.title}</Card.Title>
        <Card.Text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          ${product.price}
        </Card.Text>
      </Card.Body>
      <div className="text-center p-2">
        {" "}
        <Button
          as={Link}
          to={`/item/${product.id}`}
          style={{ lineHeight: "15px" }}
          variant="primary"
        >
          Ver detalles
        </Button>
      </div>
    </Card>
  );
};

export default Item;
