import { useRef, useState } from "react"
import Table from "./Table";

const TodoList = () => {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);
    const ipRef = useRef(null);
    const [filter, setFilter] = useState("all");

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
            <div className="pt-10 max-w-md mx-auto p-6">
                <div className="text-white box p-6 rounded-2xl shadow-xl border-2 border-blue-500">
                    <h1 className="text-2xl font-bold uppercase text-center mb-2">Todo List</h1>
                    <div className="">
                        <form className="flex items-center max-w-lg mx-auto">
                            <div className="flex mt-4 w-full">
                                <input ref={ipRef} type="text" onChange={(e) => {
                                    setText(e.target.value);
                                }} className="rounded-md px-2 text-black focus:outline-none max-w-xs mr-2" placeholder="Enter Your Tasks" required />
                                <button type="button" onClick={addTask}
                                    className="bg-teal-500 hover:bg-teal-700 px-4 py-2 rounded-md font-semibold text-xs uppercase">
                                    Add Task
                                </button>
                            </div>
                        </form>
                        <div className="flex justify-center">
                            <div className="inline-flex mt-6 shadow-xs rounded-full overflow-hidden" role="group">
                                <button onClick={() => { setFilter("all") }} type="button" className="bg-amber-300 hover:bg-amber-500 hover:text-white text-gray-800 font-semibold px-4 py-2 border border-amber-600 text-xs uppercase ">
                                    All
                                </button>
                                <button onClick={() => { setFilter("pending") }} type="button" className="bg-amber-300 hover:bg-amber-600 hover:text-white text-gray-800 font-semibold px-4 py-2 border border-amber-600 text-xs uppercase ">
                                    Pending
                                </button>
                                <button onClick={() => { setFilter("completed") }} type="button" className="bg-amber-300 hover:bg-amber-600 hover:text-white text-gray-800 font-semibold px-4 py-2 border border-amber-600 text-xs uppercase ">
                                    Completed
                                </button>
                            </div>
                        </div>
                        <Table tasks={tasks} setTasks={setTasks} filter={filter} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList