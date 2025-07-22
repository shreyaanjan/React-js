import { useEffect, useState } from "react"

const App = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const URL = "http://localhost:9000/users"

        const fetchUsers = async () => {
            const res = await fetch(URL)
            const data = await res.json()
            setUsers(data)
            console.log(data);
        }
        fetchUsers()
    }, [])
    return (
        <div>
            {
                users.map((user) => {
                    return <div key={user.id}>
                        <h2>{user.name}</h2>
                        <h3>{user.age}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default App