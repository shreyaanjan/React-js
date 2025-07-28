import axios from "axios";
import { useEffect, useRef, useState } from "react";

const App = () => {
    const [input, setInput] = useState({
        name: "", age: ""
    })
    const [users, setUsers] = useState([]);

    const idRef = useRef(null);

    const URL = "http://localhost:9000/users";

    const fetchUsers = async () => {
        let data = await axios.get(URL)
        setUsers(data.data)
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!idRef.current) {
            // add data
            await axios.post(`${URL}`, input)
            setInput({ name: "", age: "" })
            fetchUsers()
        } else {
            // edit data
            let newData = await axios.put(`${URL}/${idRef.current}`, input)
            console.log(newData);
            idRef.current = null;
            fetchUsers()
        }
    }

    const handleDelete = async (id) => {
        await axios.delete(`${URL}/${id}`)
        fetchUsers()
    }

    const handleEdit = async (id) => {
        let editData = await axios.get(`${URL}/${id}`)
        setInput(editData.data)
        idRef.current = id;
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
                    <label htmlFor="age">Age : </label>
                    <input type="number" id="age" value={input.age} onChange={handleChange} />
                </div>
                <br />
                <div>
                    <button>Submit</button>
                </div>
            </form>
            {
                users.map((item) => {
                    return <div key={item.id}>
                        <h3>{item.name} - {item.age}</h3>
                        <div>
                            <button onClick={() => handleEdit(item.id)}>Edit</button>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default App