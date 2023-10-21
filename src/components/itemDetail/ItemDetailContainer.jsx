import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { PulseLoader } from "react-spinners";
import { db } from "../firebase/config";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { addItem, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cant = getTotalQuantityById(id);

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantify: cantidad,
    };
    addItem(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El producto se agrego exitosamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  useEffect(() => {
    let itemCollection = collection(db, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setProductSelected({ id: id, ...res.data() });
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!productSelected.id) {
    return (
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
    );
  }
  return (
    <div
      style={{
        display: "flex",

        background: "linear-gradient(180deg, #416393, #A7C2D0)",
        paddingTop: "80px",
        paddingBottom: "50px",

        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <ItemDetail cant={cant} productSelected={productSelected} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
