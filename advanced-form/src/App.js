import React,{useState, useEffect} from 'react';
import axios from "axios"
import * as yup from "yup"
import Form from "./components/Form"
import './App.css';

 const formInitialValue = {
  username: "",
  email: "",
  password: "",
  terms: ""
}



export default function App() {
  const [formValue, setFormValue] = useState(formInitialValue)

  const fromValueChanger = (name, value) => {
    setFormValue({...formValue, [name]: value})
  }

  return (
    <div className="App">
      
      <h1>sami's app</h1>
      <Form
        values={formValue}
        update={fromValueChanger}
       />
    </div>
  );
}


