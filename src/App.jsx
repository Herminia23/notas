import { useState } from "react";

function App() {
  const [inputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
    limpiar: "",
  });

  const handleResetClick = (v) =>{
    setInputState({titulo: "",
    fecha: "",
    nota: "",
    limpiar: "", });
  };

  const handleInputChange = (event) => {
    //console.log(event.target);
    setInputState({ ...inputState, [event.target.name]: event.target.value, });
    console.log(event.target);
  };
  
  return (
    <div className="App m-4">
      <h3>hola soy herminia , bienvenidos a mis notas</h3>
      <label htmlFor="titulo" className="pe-4">
        Titulo{" "}
      </label>
      <input
        id="titulo"
        name="titulo"
        type="text"
        onChange={handleInputChange}
        value={inputState.titulo}
      />
      <br />
      <br />
      <label htmlFor="fecha" className="pe-4">
        Fecha{" "}
      </label>
      <input
        id="fecha"
        name="fecha"
        type="text"
        onChange={handleInputChange}
        value={inputState.fecha}
      />
      <br />
      <br />
      <label htmlFor="nota" className="pe-4">
        Nota
      </label>
      <input
        id="nota"
        name="nota"
        type="text"
        onChange={handleInputChange}
        value={inputState.nota}
      />
      <br />
      <br />
      <center>
      <button className="btn btn-primary me-2" onClick={handleResetClick}>Reset</button>
      </center>
      <br />
      <center>
      </center>
    </div>
  );
}
export default App;