const Table = ({ tasks ,updateStatus }) => {
    
    return (
        <>
            <div className="relative overflow-x-auto mt-5">
                <table className="w-full border border-black text-sm text-left rtl:text-right text-gray-500">
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
                            return <tr key={task.id} className="bg-white border-b border-gray-200">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {task.taskName}
                                </th>
                                {task.isCompleted ? <td className="px-6 py-4">
                                    Task Completed
                                </td> : <td className="px-6 py-4" onClick={() => {
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