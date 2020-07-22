import React from "react"
import * as yup from "yup"



export default function Form (props) {

    const onChange = (e) => {
        let theValue = e.target.value
        let theName = e.target.name
        let theType = e.target.type
        let theChecked = e.target.checked
        
        e.target.type === "checkbox" ? console.log(theChecked) : console.log( theName, theType, theValue, )
    // set state the value
    }

       const onSubmit = (e) => {
           e.preventDefault()
           // setState
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
                        // value ={?}
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
                    // value ={?}
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
                    // value={?}
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
                        // checked= true or falss
                        onChange={onChange}
                     />
                </label>
            </div>
            <button>Submit</button>
        </form>
    )
}