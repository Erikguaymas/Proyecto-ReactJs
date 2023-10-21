import { useContext } from "react";
import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/Bs";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();
  return (
    <div className="position-relative">
      <BsCart4 />
      <Badge
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
        bg="secondary"
      >
        {totalItems}
      </Badge>
    </div>
  );
};

export default CartWidget;
