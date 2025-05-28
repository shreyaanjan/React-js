const Table = ({ tasks, setTasks }) => {
    const updateStatus = (id)=>{
        let updatedTask = tasks.map((task)=>{
            return task.id === id ? {...task, isCompleted:true} : task;
        })
        setTasks(updatedTask)
    }
    return (
        <>
            <div className="relative overflow-x-auto mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-white uppercase bg-blue-600">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tasks List
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => {
                            return <tr key={task.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {task.taskName}
                                </th>
                                {task.isCompleted ? <td className="px-6 py-4">
                                    Task Completed
                                </td> : <td className="px-6 py-4" onClick={()=>{
                                    updateStatus(task.id);
                                }}>
                                    Pending
                                </td>}
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table