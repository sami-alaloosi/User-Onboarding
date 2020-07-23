import React from "react"




export default function Form ({values, update, submit, disabled, errors, inputChange}) {
    

    const onChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        let theType = e.target.type
        let valueChecked = e.target.checked
        
        theType === "checkbox" ? update(name, valueChecked) : update(name, value)
        theType === "checkbox" ? inputChange(name, valueChecked) : inputChange(name, value)
        
    }

       const onSubmit = (e) => {
           e.preventDefault()
           submit()
       }

    return (
        <form onSubmit={onSubmit}>
        <div>
                <label htmlFor="username"> 
                <div>Username</div>
                     
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
            <div> Email</div>
                
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
            <div> Password</div>
                 
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
                <span> Do you agree to the terms and conditions?</span>
                
                    <input
                        type="checkbox"
                        name="terms"
                        id="checkbox"
                        checked= {values.terms}
                        onChange={onChange}
                     />
                </label>
            </div>
            <button disabled={disabled}>Submit</button>

            <div className='errors'>
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
            
        </form>
    )
}