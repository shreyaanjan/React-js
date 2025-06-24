const UserList = ({ users, deleteUser, getEditUser, goBackToForm }) => {
    const handleDelete = (userId) => {
        deleteUser(userId)
    }
    return (
        <div className="container mx-auto mt-5">
            <div className="mb-5">
                <h1 className="text-2xl font-bold p-2 text-gray-800">Student's List</h1>
            </div>
            {users.length === 0 ? (
                <div className="bg-white p-6 text-center">
                    <p className="text-gray-600 text-lg mb-4">No students available.</p>
                    <button
                        onClick={goBackToForm}
                        className="px-4 py-2 bg-[#d3936b] hover:bg-[#aa795b] text-white rounded-lg"
                    >
                        Add New User
                    </button>
                </div>
            ) : (
                <div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-white uppercase bg-[#d3936b]">
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
                                                {user.course == 1 ? "Full Stack Development" : user.course == 2 ? "User Interface(UI) & User Experience(UX)" : "Artificial Intelligence(AI) & Machine Learning(ML)"}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.gender}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.password}
                                            </td>
                                            <td className="flex gap-2 px-6 py-4">
                                                <button onClick={() => getEditUser(user)} className="font-medium text-green-600 hover:underline">Edit</button>
                                                <button onClick={() => handleDelete(user.id)} className="font-medium text-red-600 hover:underline">Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <button onClick={goBackToForm} className="mt-4 px-4 py-2 bg-[#d3936b] hover:bg-[#aa795b] text-white rounded-lg ">
                            Add New User
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserList