import React from "react"
import * as yup from "yup"



export default function Form () {
    return (
        <form>
        <div>
                <label htmlFor="username"> 
                    Username:
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter Your Username"
                        // value ={?}
                        // onChange={callBack}
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
                    // onChange={callback}
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
                    // onChange={?}
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
                        // onChange={?}
                     />
                </label>
            </div>
            <button>Submit</button>
        </form>
    )
}