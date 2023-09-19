import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Card
      style={{
        width: "8rem",
        height: "320px",
        display: "flex",
      }}
    >
      <Card.Img
        variant="top"
        src={product.pictureUrl}
        style={{ height: "128px" }}
      />
      <Card.Body>
        <Card.Title className="text-center" style={{ fontSize: "1rem" }}>
          {product.title}
        </Card.Title>
        <Card.Text className="text-center">${product.price}</Card.Text>
      </Card.Body>
      <Card.Body style={{ margin: "auto", display: "flex", alignItems: "end" }}>
        <Button
          as={Link}
          to={`/item/${product.id}`}
          style={{ lineHeight: "15px" }}
          variant="primary"
        >
          Ver detalles
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
