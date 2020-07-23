import React from "react"


export default function UserCard (props) {
    
    return (
        
<div>
      <h3> UserName: {props.data.username}</h3>
      <p>Email: {props.data.email}</p>
      <p>User ID: {props.data.id}</p>

</div>
)
}