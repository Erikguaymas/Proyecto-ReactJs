import { useState } from "react";
import { useCount } from "./useCount";
import { useNavigate } from "react-router-dom";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);
  const [isAdd, setIdAdd] = useState(false);
  const navigate = useNavigate("/carrito");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {!isAdd && (
          <>
            <button
              disabled={count == stock ? true : false}
              style={{
                width: "50px",
                backgroundColor: "greenyellow",
                height: "50px",
                borderRadius: "30%",
              }}
              onClick={increment}
            >
              +
            </button>
            <span
              style={{
                width: "100px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {count}
            </span>
            <button
              disabled={count == 0 ? true : false}
              style={{
                width: "50px",
                backgroundColor: "greenyellow",
                borderRadius: "30%",
              }}
              onClick={decrement}
            >
              -
            </button>
          </>
        )}
      </div>
      <div>
        {isAdd ? (
          <div>
            <button
              style={{
                border: "2px solid ",
                backgroundColor: "brown",
                marginTop: "15px",
                borderRadius: "10px 10px",
              }}
              onClick={() => {
                navigate("/carrito");
              }}
            >
              Ir al carrito
            </button>
          </div>
        ) : (
          <div>
            <button
              disabled={count == 0 ? true : false}
              style={{
                border: "1px solid   ",
                backgroundColor: "brown",
                marginTop: "15px",
                borderRadius: "10px 10px",
              }}
              onClick={() => {
                onAdd(count);
                setIdAdd(true);
              }}
            >
              Agregar al carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemCount;
