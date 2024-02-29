import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");

  const handleSubmit = (event) => {event.preventDefault()
  }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Ingresa tu nombre:</label>
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <label>Ingresa tu animal favorito:</label>
        <input
          type="text"
          onChange={(event) => setAnimal(event.target.value)}
        />
        <button>Enviar</button>
      </form>
      <h4>
        {" "}
        {name} tu Animal Favorito es el {animal}
      </h4>
    </div>
  );
};

export default Form;
