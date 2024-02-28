import React, { useState } from "react";
const Final =()=>{
    const [count,setcount]=useState(0);
     
    const increment =()=>{
        setcount(count+1);
    }

    const decrement=()=>{
        setcount(count-1);
    }

    const reset=()=>{
        setcount(0);
    }
    return (
        <div>
            <h2>Count is :{count}</h2>
            <div>
            <button onClick={increment}>increment count</button>
            <button onClick={decrement}>decrement count</button> 
            <button onClick={reset} >reset count</button>
            </div>

        </div>
    );
};
export default Final;