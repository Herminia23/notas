import { useState } from "react";

const App = ()=> {
  // hook  use...
  //state  useState

  const [state, setState] = useState ("")
  ;

  let valorPrueba = "TITULO DE LA NOTA"

  const handleInputChange = (event) => {
   setState(event.target.evalue);
  };

  return ( 
  <div className="App">
      <h3> hola  soy herminia, "bienvenidos"</h3>
      <label>
         input de prueba
      <input 
      id="puebaID" 
      name="prueba" 
      type="text" 
      onChange={handleInputChange} 
      value={state}
      />
      </label>
    </div>
  );
};

export default App;