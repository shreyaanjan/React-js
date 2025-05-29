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
            <div className="rounded-md mt-5 max-h-64 overflow-x-auto px-2 custom-scroll">
                <table className="w-full text-base text-left text-white border-separate border-spacing-y-2">
                    <tbody>
                        {filterTasks.map((task) => {
                            return <tr key={task.id} className="w-full">
                                <td className="text-white whitespace-nowrap font-normal ">
                                    <div className="border flex items-center justify-between p-3 border-white w-full">
                                        <div className="flex">
                                            <span className={task.isCompleted ? 'line-through text-gray-400' : ''}>&#x2022; {task.taskName}</span>
                                        </div>
                                        <div >
                                            {task.isCompleted ? (
                                                <span className="text-green-400">Completed</span>
                                            ) : (
                                                <span
                                                    onClick={() => updateStatus(task.id)}
                                                    className="cursor-pointer text-yellow-300">
                                                    Pending
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <div className="flex justify-between">
                    <div className="px-2 py-3 text-white">Completed: {completedCount}</div>
                    <div className="px-2 py-3 text-white">Pending: {pendingCount}</div>
                </div>
            </div>
        </>
    )
}

export default Table