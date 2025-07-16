import { useReducer } from "react"

const initialState = {
    users: [
        { id: 1, name: "Shreya" },
        { id: 2, name: "Janvi" },
        { id: 3, name: "Jinal" },
    ]
}

const reducer = (state, action) => {
    switch(action.type){
        case "CLEAR" :
            let id = action.payload.id
            let newUser = state.users.filter((user)=>{
                return user.id !== id;
            })
        return {
            users : newUser
        } 

        case "CLEAR_ALL" :
            return {users : []}
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const handleRemove = (id) => {
        dispatch({type: "CLEAR", payload:{id}})
    }

    const handleClear = () => {
        dispatch({type: "CLEAR_ALL"})
    }
    return (
        <div>
            {
                state.users.map((user) => {
                    return <div key={user.id}>
                        <p>{user.name}</p>
                        <button onClick={()=>handleRemove(user.id)}>Remove</button>

                        <br /><br /><br />
                        <button onClick={handleClear}>Clear All</button>
                    </div>

                })
            }
        </div>
    )
}

export default App