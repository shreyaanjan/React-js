import React, { useRef, useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0);
    let render = useRef(1);
    const [name, setName] = useState("");
    let ipRef = useRef(null);

    return (
        <div className='m-2'>
            <h1>{count}</h1>
            <h2>Render Count : {render.current} </h2>
            <button className='btn btn-primary' onClick={()=>{
                render.current++;
                setCount(count + 1)
            }}>Click</button><br /><br />
            <input type="text" ref={ipRef} className='form-control w-25' placeholder='Type Anything' onChange={(e)=>{
                setName(e.target.value);
            }}/>
            <p>{name}</p>
            <button className='btn btn-danger' onClick={()=>{
                ipRef.current.value = "";
                setName("");
            }}>Clear Input</button>
        </div>
    )
}

export default App