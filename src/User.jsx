import { useEffect, useState } from "react";
import List from "./list";

function User(){
    const [user,setuser]= useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setuser(data))
    },[])
    return(
        <div>
            <h1>user effect:{user.length}</h1>
            {
                user.map(friend => <List friend ={friend}></List>)
            }
          
        </div>
    )
}
export default User;