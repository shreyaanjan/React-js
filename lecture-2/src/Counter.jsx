import { useState } from "react";

const Counter = ()=>{
    const [count, setCount] = useState(1);
    return(
        <div className="text-center">
            <h2>{count}</h2>
            <button className="btn btn-danger" 
            onClick={()=>{
                setCount(count + 1)
            }}
            >Click Here</button>
        </div>
    )
}

export default Counter;