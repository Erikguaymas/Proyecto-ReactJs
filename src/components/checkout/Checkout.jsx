import { TextField } from "@mui/material";

const Checkout = ({ handleChange, handleSubmit }) => {
  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <h2>Completar formulario para realizar el envio de sus productos</h2>

      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "grid",
            placeItems: "center",
            marginTop: "40px",
          }}
        >
          <TextField
            variant="standard"
            type="text"
            label="Nombre"
            name="name"
            onChange={handleChange}
            pattern="[A-Za-z]{2,}"
            title="Ingrese correctamente"
            required
          />
          <TextField
            variant="standard"
            type="text"
            label="Teléfono"
            name="phone"
            onChange={handleChange}
            pattern="[0-9]{5,}"
            required
          />
          <TextField
            variant="standard"
            type="email"
            label="Email"
            name="email"
            onChange={handleChange}
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            title="Email invalido"
            required
          />
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
