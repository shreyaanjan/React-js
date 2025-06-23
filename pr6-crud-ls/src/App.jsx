import { useEffect, useState } from "react"
import Form from "./components/Form"
import UserList from "./components/UserList"

const App = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);

    const addUsers = (user) => {
        setUsers([...users, user])
    }

    const getEditUser = (user) => {
        setEditUser(user);
    }

    const updateUser = (editUser) => {
        const updatedUsers = users.map((user) => {
            return user.id === editUser.id ? editUser : user;
        })
        setUsers(updatedUsers)
        setEditUser(null)
    }

    const deleteUser = (userId) => {
        const newUsers = users.filter((user) => {
            return user.id !== userId;
        })
        setUsers(newUsers);
    }

    useEffect(() => {
        let prevUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(prevUsers);
    }, [])

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users])

    console.log(users);

    return (
        <div>
            <Form addUsers={addUsers} editUser={editUser} updateUser={updateUser} />
            <UserList users={users} deleteUser={deleteUser} getEditUser={getEditUser} />
        </div>
    )
}

export default App