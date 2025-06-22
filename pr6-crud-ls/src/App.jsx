import { useEffect, useState } from "react"
import Form from "./components/Form"
import UserList from "./components/UserList"

const App = () => {
    const [users, setUsers] = useState([]);

    const addUsers = (user) => {
        setUsers([...users, user])
    }

    useEffect(() => {
        let prevUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(prevUsers);
    }, [])
    
    useEffect(() => {
        localStorage.setItem("users" , JSON.stringify(users));
    }, [users])

    console.log(users);

    return (
        <div>
            <Form addUsers={addUsers} />
            <UserList users={users} />
        </div>
    )
}

export default App