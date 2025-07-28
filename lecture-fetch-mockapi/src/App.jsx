import { useEffect, useRef, useState } from "react"

const App = () => {
    const [input, setInput] = useState({ name: "", age: "" })
    const [users, setUsers] = useState([])
   
    const idRef = useRef(null);

    const URL = "http://localhost:9000/users"

    const fetchUsers = async () => {
        const res = await fetch(URL)
        const data = await res.json()
        setUsers(data)
        console.log(data);
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (idRef.current) {
            await fetch(`${URL}/${idRef.current}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(input),
            })
            fetchUsers()
            setInput({})
            idRef.current = null;
            return;
        }
        const res = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(input),
        });
        setInput({ name: "", age: "" })
        fetchUsers()
    }

    const handleDelete = async (id) => {
        await fetch(`${URL}/${id}`, {
            method: "DELETE",
        });
        fetchUsers()
    }

    const handleEdit = async (id) => {
        let res = await fetch(`${URL}/${id}`)
        let data = await res.json()
        setInput(data)
        idRef.current = id
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" value={input.name} onChange={handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="age">Age: </label>
                    <input type="number" id="age" value={input.age} onChange={handleChange} />
                </div>
                <br />
                <div>
                    <button>Submit</button>
                </div>
            </form>
            {
                users.map((user) => {
                    return <div key={user.id}>
                        <h2>{user.name} - {user.age}</h2>
                        <div>
                            <button onClick={() => handleDelete(user.id)}>Delete</button>
                            <button onClick={() => handleEdit(user.id)}>Edit</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default App