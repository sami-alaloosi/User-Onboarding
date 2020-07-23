import React,{useState, useEffect} from 'react';
import axios from "axios"
import * as yup from "yup"
import Form from "./components/Form"
import './App.css';
import UserCard from './components/UsersCard';
import formSchema from "./validation/formSchema"

 const formInitialValue = {
  username: "",
  email: "",
  password: "",
  terms: ""
}
const initialFormErrors ={
  username: "",
  email: "",
  password: "",
  terms: ""
}
const initialUsers = []
const initialDisabled = true

export default function App() {
  const [formValue, setFormValue] = useState(formInitialValue)
  const [users, setUsers]= useState(initialUsers)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

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

  // validation

  const inputChange = (name, value) => {
    
    yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValue({
      ...formValue,
      [name]: value 
    })
  }
 
  useEffect(() => {
    // 🔥 STEP 10- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(formValue).then(valid => {
      setDisabled(!valid)
    })
  }, [formValue])


  return (
    <div className="App">
      
      <h1>sami's app</h1>
      <Form
        values={formValue}
        update={fromValueChanger}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
        inputChange={inputChange}
        
       />
      {
        users.map(user => <UserCard data={user}  key={user.id} /> )
      }

    </div>


  );
}


