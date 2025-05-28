import { useRef, useState } from "react"
import Table from "./Table";

const TodoList = () => {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);
    const ipRef = useRef(null);

    const addTask = () => {
        if (text.trim() === "") return;

        const newTask = {
            id: Date.now(),
            taskName: text,
            isCompleted: false,
        }

        setTasks([...tasks, newTask]);
        ipRef.current.value = "";
        setText("")
    }

    return (
        <>
            <h1 className="text-center mt-3 text-3xl font-semibold">Todo List</h1>
            <div className="container mx-auto">
                <div className="w-6/12 mx-auto">
                    <form className="flex items-center max-w-lg mx-auto">
                        <div className="flex mt-4 w-full">
                            <input ref={ipRef} type="text" onChange={(e) => {
                                setText(e.target.value);
                            }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-8/12 p-2.5" placeholder="Enter Your Tasks" required />
                            <button type="button" onClick={addTask}
                                className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Add Task
                            </button>
                        </div>
                    </form>
                    <Table tasks={tasks} setTasks={setTasks} />
                </div>
            </div>
        </>
    )
}

export default TodoList