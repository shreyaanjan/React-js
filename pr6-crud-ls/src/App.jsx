import { useEffect, useState } from "react"
import Form from "./components/Form"
import UserList from "./components/UserList"

const App = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);
    const [showUserList, setShowUserList] = useState(false);

    const addUsers = (user) => {
        setUsers([...users, user])
        setShowUserList(true)
    }

    const getEditUser = (user) => {
        setEditUser(user);
        setShowUserList(false);
    }

    const updateUser = (editUser) => {
        const updatedUsers = users.map((user) => {
            return user.id === editUser.id ? editUser : user;
        })
        setUsers(updatedUsers)
        setEditUser(null)
        setShowUserList(true)
    }

    const deleteUser = (userId) => {
        const newUsers = users.filter((user) => {
            return user.id !== userId;
        })
        setUsers(newUsers);
        setShowUserList(true)
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
            {!showUserList ? (
                <Form addUsers={addUsers} editUser={editUser} updateUser={updateUser} />
            ) : (
                <UserList users={users} deleteUser={deleteUser} getEditUser={getEditUser} goBackToForm={()=>setShowUserList(false)} />
            )}
        </div>
    )
}

export default App