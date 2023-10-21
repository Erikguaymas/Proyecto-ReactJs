import { useContext, useState } from "react";
import Checkout from "./Checkout";
import { db } from "../firebase/config";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { Container } from "@mui/material";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const total = getTotalPrice();

  const [orderId, setOrderId] = useState(null);

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    let order = {
      buyer: userData,
      items: cart.map((element) => {
        const { id, title, price } = element;
        return { id, title, price };
      }),

      total: total,
    };
    let ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((element) => {
      updateDoc(doc(db, "products", element.id), {
        stock: element.stock - element.quantify,
      });
    });

    clearCart();
  };

  return (
    <Container>
      {orderId ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <h3 className="text-success">Su compra fue existosa!</h3>
          <p> el numero de comprobante es: {orderId}</p>
        </div>
      ) : (
        <Checkout handleSubmit={handleSubmit} handleChange={handleChange} />
      )}
    </Container>
  );
};

export default CheckoutContainer;
