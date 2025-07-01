import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, reset } from './redux/action';

const App = () => {
    const count = useSelector((state)=>{
        return state;
    })
    const dispatch = useDispatch()
    return (
        <div>
            <h2>COUNT : {count}</h2>
            <button onClick={()=>{dispatch(increament())}}>INCREAMENT</button>
            <button onClick={()=>{dispatch(decreament())}}>DECREAMENT</button>
            <button onClick={()=>{dispatch(reset())}}>RESET</button>
        </div>
    )
}

export default App