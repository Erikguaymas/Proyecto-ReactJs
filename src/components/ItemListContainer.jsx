const ItemListContainer = ({ greeting }) => {
  console.log(greeting);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{greeting}</h1>
      <img
        src="../src/components/img/herramienta.png"
        alt="herramienta"
        width={"200px"}
      />
    </div>
  );
};

export default ItemListContainer;
