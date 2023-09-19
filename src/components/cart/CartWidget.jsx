import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/Bs";

const CartWidget = () => {
  return (
    <div className="position-relative">
      <BsCart4 />
      <Badge
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
        bg="secondary"
      >
        0
      </Badge>
    </div>
  );
};

export default CartWidget;
