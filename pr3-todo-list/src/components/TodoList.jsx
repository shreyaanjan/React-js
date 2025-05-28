import { useEffect, useRef, useState } from "react"
import Table from "./Table";

const TodoList = () => {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);
    const ipRef = useRef(null);
    const [filter, setFilter] = useState("all");
    const [filterTasks, setFilterTasks] = useState([]);

    const updateStatus = (id) => {
        let updatedTask = tasks.map((task) => {
            return task.id === id ? { ...task, isCompleted: true } : task;
        })
        setTasks(updatedTask)
    }

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

    useEffect(() => {
        let updatedTask = []

        if (filter == "all") {
            updatedTask = tasks;
        } else if (filter == "pending") {
            updatedTask = tasks.filter((item) => !item.isCompleted)
            console.log(updatedTask);
        } else {
            updatedTask = tasks.filter((item) => item.isCompleted)
        }
        setFilterTasks(updatedTask)
    }, [tasks, filter])

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
                    <div className="flex justify-center">
                        <div className="inline-flex rounded-md shadow-xs mt-5" role="group">
                            <button onClick={() => { setFilter("all") }} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                All
                            </button>
                            <button onClick={() => { setFilter("pending") }} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                Pending
                            </button>
                            <button onClick={() => { setFilter("completed") }} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                Completed
                            </button>
                        </div>
                    </div>

                    <Table tasks={filterTasks} updateStatus={updateStatus} />
                </div>
            </div>
        </>
    )
}

export default TodoList