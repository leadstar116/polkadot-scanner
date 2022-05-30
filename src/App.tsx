import React, { useState } from "react";
import { Form } from "./components/Form";
import "./App.css";
import { IFormValues } from "./interfaces/form.interface";
import { defaultFormValues } from "./constants/constants";

function App() {
  const [formValues, setFormValues] = useState<IFormValues>(defaultFormValues);

  const handleSubmit = (values: IFormValues) => {
    setFormValues(values);
  };

  return (
    <div className="App">
      <h2>Polkadot Scanner</h2>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
