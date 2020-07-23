import React,{useState, useEffect} from 'react';
import axios from "axios"
import * as yup from "yup"
import Form from "./components/Form"
import './App.css';
import UserCard from './components/UsersCard';

 const formInitialValue = {
  username: "",
  email: "",
  password: "",
  terms: ""
}

const initialUsers = []


export default function App() {
  const [formValue, setFormValue] = useState(formInitialValue)
  const [users, setUsers]= useState(initialUsers)

  const fromValueChanger = (name, value) => {
    setFormValue({...formValue, [name]: value})
  }

 

const postUsers = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(res=>{
    setFormValue(formInitialValue)
    setUsers([...users, res.data])
    
  })
  .catch(()=> console.log('axios.post err'))
}


  const submit = () => {
    const newUser ={
      username: formValue.username.trim(),
      email: formValue.email.trim(),
      password: formValue.password.trim(),
      terms: formValue.terms
    }
    //send this information to the function that post to axios
    postUsers(newUser)
  }

 
  return (
    <div className="App">
      
      <h1>sami's app</h1>
      <Form
        values={formValue}
        update={fromValueChanger}
        submit={submit}
       />
      {
        users.map(user => <UserCard data={user}  key={user.password} /> )
      }

    </div>


  );
}


