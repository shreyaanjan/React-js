import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { app } from "../config/firebase"
import { useState } from "react"

const SignUp = () => {
    const [input, setInput] = useState({email:'', password:''})
    const auth = getAuth(app)

    const addUser = async () => {
        let res = await createUserWithEmailAndPassword(auth, input.email, input.password)
        console.log(res);
    }

    return (
        <>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" onChange={(e) => setInput({...input, [e.target.id] : e.target.value})} id="email" />
            </div>
            <br />
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" onChange={(e) => setInput({...input, [e.target.id] : e.target.value})} id="password" />
            </div>
            <br />
            <button onClick={addUser}>Sign Up</button>
        </>

    )
}

export default SignUp