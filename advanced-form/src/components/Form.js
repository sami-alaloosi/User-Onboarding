import React from "react"
import * as yup from "yup"



export default function Form ({values, update, submit}) {
    

    const onChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        let theType = e.target.type
        let valueChecked = e.target.checked
        
        theType === "checkbox" ? update(name, valueChecked) : update(name, value)
    }

       const onSubmit = (e) => {
           e.preventDefault()
           submit()
       }



    return (
        <form onSubmit={onSubmit}>
        <div>
                <label htmlFor="username"> 
                    Username:
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter Your Username"
                        value ={values.username}
                        onChange={onChange}
                    />
                </label>
            </div>

            <div>
            <label htmlFor="email" >
                Email:
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    id="email"
                    value ={values.email}
                    onChange={onChange}
                 />
            </label>
            </div>
            <div>
            <label htmlFor="password" >
                Password:
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    id="password"
                    value={values.password}
                    onChange={onChange}
                 />
            </label>
            </div>

            <div>
                <label htmlFor="checkbox">
                Do you agree to the terms and conditions?
                    <input
                        type="checkbox"
                        name="terms"
                        id="checkbox"
                        checked= {values.terms}
                        onChange={onChange}
                     />
                </label>
            </div>
            <button>Submit</button>
        </form>
    )
}