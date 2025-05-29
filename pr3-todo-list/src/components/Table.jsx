import { useEffect, useState } from "react"
const Table = ({ tasks, setTasks, filter }) => {
    const [filterTasks, setFilterTasks] = useState([]);
    const completedCount = filterTasks.filter(task => task.isCompleted).length;
    const pendingCount = filterTasks.length - completedCount;

    const updateStatus = (id) => {
        let updatedTask = tasks.map((task) => {
            return task.id === id ? { ...task, isCompleted: true } : task;
        })
        setTasks(updatedTask)
    }

    useEffect(() => {
        let filterTask = tasks.filter((task) => {
            return filter === "pending" ? !task.isCompleted : filter == "completed" ? task.isCompleted : true
        });
        setFilterTasks(filterTask)
    }, [tasks, filter])

    return (
        <>
            <div className="rounded-md mt-5 max-h-64 overflow-y-auto px-2 custom-scroll">
                <table className="w-full text-sm text-left text-white border-separate border-spacing-y-2">
                    {/* <thead className="text-xs text-white uppercase bg-rose-500">
                        <tr>
                            <th scope="col" className="px-4 py-3">Tasks List</th>
                            <th scope="col" className="px-4 py-3">Status</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {filterTasks.map((task) => {
                            return <tr key={task.id} className="bg-neutral-600 border border-white rounded-md">
                                <td className="px-4 py-3 text-white whitespace-nowrap font-normal">
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" checked={task.isCompleted}
                                            onChange={() => updateStatus(task.id)}
                                            className="accent-blue-600 w-4 h-4" />
                                        <span className={task.isCompleted ? 'line-through text-gray-400' : ''}>
                                            {task.taskName}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    {task.isCompleted ? (
                                        <span className="text-green-400">Completed</span>
                                    ) : (
                                        <span
                                            onClick={() => updateStatus(task.id)}
                                            className="cursor-pointer text-yellow-300">
                                            Pending
                                        </span>
                                    )}
                                </td>
                            </tr>
                        })}
                        <tr className="font-semibold">
                            <td className="px-2 py-3 text-white">Completed: {completedCount}</td>
                            <td className="px-2 py-3 text-white">Pending: {pendingCount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table