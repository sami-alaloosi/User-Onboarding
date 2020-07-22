import React,{useState, useEffect} from 'react';
import axios from "axios"
import * as yup from "yup"
import Form from "./components/Form"
import './App.css';





export default function App() {
  return (
    <div className="App">
      
      <h1>sami's app</h1>
      <Form />
    </div>
  );
}


