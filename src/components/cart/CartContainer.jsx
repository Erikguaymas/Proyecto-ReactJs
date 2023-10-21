import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const cartContainer = () => {
  const { cart, clearCart, removeItem, getTotalPrice } =
    useContext(CartContext);

  const total = getTotalPrice();
  const limpiar = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No , cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito limpio", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };
  return (
    <Container
      style={{
        marginTop: "80px ",
      }}
    >
      <>
        <List sx={{ width: "100%" }}>
          {cart.map((product) => {
            return (
              <ListItem
                key={product.id}
                sx={{
                  border: "1px solid",
                  borderRadius: "8px 8px",
                  marginBottom: "20px",
                  backgroundColor: "#d5e6e1",
                  boxShadow: "5px 10px 8px #888888 ",
                }}
                secondaryAction={
                  <Button
                    color="error"
                    variant="contained"
                    onClick={() => removeItem(product.id)}
                  >
                    Eliminar
                  </Button>
                }
              >
                <ListItemAvatar>
                  <Avatar alt={product.title} src={product.pictureUrl} />
                </ListItemAvatar>
                <ListItemText sx={{ width: "300px" }} primary={product.title} />
                <ListItemText primary={`Precio: ${product.price}`} />
                <ListItemText primary={`Cantidad: ${product.quantify} `} />
              </ListItem>
            );
          })}
        </List>
      </>
      <h2>El total del carrito es : {total}</h2>
      {cart.length > 0 ? (
        <Box>
          <Button onClick={limpiar} variant="contained">
            Limpiar carrito
          </Button>
          <Button
            color="success"
            component={Link}
            sx={{ textDecoration: "none" }}
            to="/checkout"
            variant="contained"
          >
            Finalizar compra
          </Button>
        </Box>
      ) : (
        <Button color="error" component={Link} to="/" variant="contained">
          Ir a inicio
        </Button>
      )}
    </Container>
  );
};

export default cartContainer;

/*
 
 */
