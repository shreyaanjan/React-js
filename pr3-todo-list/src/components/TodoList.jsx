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
            <div className="pt-10 max-w-xl mx-auto p-6">
                <div className="text-white box p-6 rounded-2xl shadow-xl border-blue-600 border-2">
                    <h1 className="text-2xl font-bold uppercase text-center mb-2">Todo List</h1>
                    <div>
                        <form className=" w-full mx-auto">
                            <div className="flex mt-4 gap-2 items-center">
                                <div className="w-full ">
                                    <input ref={ipRef} type="text" onChange={(e) => {
                                        setText(e.target.value);
                                    }} className="rounded-md px-2 py-3  text-black focus:outline-none w-full h-full text-base" placeholder="Enter Your Tasks" required />
                                </div>
                                <div>
                                <button type="button" onClick={addTask}
                                    className="bg-teal-500 hover:bg-teal-700 px-4 py-2.5 rounded-md font-semibold text-base uppercase">
                                    Add
                                </button>
                                </div>
                            </div>
                        </form>
                        <div className="flex justify-center">
                            <div className="inline-flex mt-6 shadow-xs rounded-full overflow-hidden" role="group">
                                <button onClick={() => { setFilter("all") }} type="button" className="bg-amber-300 hover:bg-amber-500 hover:text-white text-gray-800  font-semibold px-4 py-2 border border-amber-600 text-xs uppercase ">
                                    All
                                </button>
                                <button onClick={() => { setFilter("pending") }} type="button" className="bg-amber-300 hover:bg-amber-600 hover:text-white text-gray-800 font-bold px-4 py-2 border border-amber-600 text-xs uppercase ">
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