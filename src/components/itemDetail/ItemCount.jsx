import { useCount } from "./useCount";

const ItemCount = ({ stock, initial, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <button style={{ width: "50px" }} onClick={increment}>
          +
        </button>
        <span style={{ width: "100px", textAlign: "center" }}>{count}</span>
        <button style={{ width: "50px" }} onClick={decrement}>
          -
        </button>

        <div style={{ marginLeft: "5px" }}>
          <button
            style={{ border: "2px solid  #52a8e7 " }}
            onClick={() => {
              onAdd(count);
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
