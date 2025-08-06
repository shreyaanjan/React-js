import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { app } from "../config/firebase"
import { useState } from "react"

const SignIn = () => {
    const [input, setInput] = useState({ email: '', password: '' })
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()

    const addUser = async () => {
        let res = await signInWithEmailAndPassword(auth, input.email, input.password)
        console.log(res);
    }

    const addUserGoogle = () => {
        signInWithPopup(auth, googleProvider).then((user) => {
            console.log(user);
        })
    }
    return (
        <>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} id="email" />
            </div>
            <br />
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} id="password" />
            </div>
            <br />
            <button onClick={addUser}>Sign In</button>
            <button onClick={addUserGoogle}>Sign In with Google</button>
        </>
    )
}

export default SignIn