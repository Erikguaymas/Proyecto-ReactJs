import { Container, Row } from "react-bootstrap";

import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PulseLoader } from "react-spinners";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    let itemsCollection = collection(db, "products");
    let consulta;

    if (!id) {
      consulta = itemsCollection;
    } else {
      consulta = query(itemsCollection, where("category", "==", id));
    }
    getDocs(consulta)
      .then((res) => {
        let productos = res.docs.map((elemento) => {
          return {
            id: elemento.id,
            ...elemento.data(),
          };
        });
        setItem(productos);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return item.length > 0 ? (
    <div
      style={{
        background: "linear-gradient(180deg, #416393, #A7C2D0)",
        paddingTop: "80px",
        paddingBottom: "50px",
      }}
    >
      <Container>
        <Row className="row-cols-1 row-cols-md-3 g-2 ">
          <ItemList productos={item} />
        </Row>
      </Container>
    </div>
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
  );
};

export default ItemListContainer;
