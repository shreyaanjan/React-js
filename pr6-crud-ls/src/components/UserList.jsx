const UserList = ({ users, deleteUser, getEditUser }) => {
    
    const handleEdit = (user) => {
        getEditUser(user)
    }

    const handleDelete = (userId) => {
        deleteUser(userId)
    }
    return (
        <div className="container mx-auto">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-white uppercase bg-blue-500">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Password
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return <tr key={user.id} className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {user.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.course == 1 ? "Full Stack Development" : user.course == 2 ? "User Interface(UI) & User Experience(UX)" : "Artificial Intelligence(AI) & Machine Learning(ML)" }
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.gender}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.password}
                                    </td>
                                    <td className="flex gap-2 px-6 py-4">
                                        <button onClick={()=>handleEdit(user)} className="font-medium text-green-600 hover:underline">Edit</button>
                                        <button onClick={()=>handleDelete(user.id)} className="font-medium text-red-600 hover:underline">Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList