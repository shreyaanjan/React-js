import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { app } from "./config/firebase";

const auth = getAuth(app);

const App = () => {

    const signUp = async () => {
        try {
            let res = await createUserWithEmailAndPassword(auth, "shreyaanjan@mail.com", "shreyaanjan")
            console.log(res);
        } catch(err){
            console.log(err);
            alert("Email already exists")
        }
        
    }
    return (
        <div>
            <button onClick={signUp}>Sign Up</button>
        </div>
    )
}

export default App