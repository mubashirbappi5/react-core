import { useState } from "react";

function Count(){
    const [count, setcount]= useState(0)

    const handeler = () =>{
        const newCount = count +1;
        setcount(newCount)

    }
    const handeler2 = () =>{
        const newcount = count -1
        setcount(newcount)
    }
    return(
        <div>
            <h4>count: {count}</h4>
            <button onClick={handeler}>Up</button>
            <button onClick={handeler2}>Down</button>
        </div>
        )
}
export default Count;