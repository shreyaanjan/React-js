import { useCallback, useState } from "react"
import Lists from "./components/Lists";

const App = () => {
    const [count, setCount] = useState(0);
    const [colors, setColors] = useState([
        { id: 1, name: "Red" },
        { id: 2, name: "White" },
        { id: 3, name: "Orange" },
    ])
    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleRemove = useCallback(
        (id) => {
            console.log(id);
            let newColor = colors.filter((user) => {
                return user.id !== id;
            })
            setColors(newColor)
        }, [colors])

    return (
        <div>
            <h2>Count : {count} </h2>
            <button onClick={handleAdd}>Click</button>

            <Lists colors={colors} handleRemove={handleRemove} />
        </div>
    )
}

export default App