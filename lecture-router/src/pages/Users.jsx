import { Link } from "react-router-dom";

const Users = () => {
    let users = [
        { id: 1, name: "Shreya", role: "Developer" },
        { id: 2, name: "Aryan", role: "Designer" },
        { id: 3, name: "Janvi", role: "Management" },
    ]

    localStorage.setItem("users", JSON.stringify(users));
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold mt-2">Users</h2>
            <div className="container mx-auto mt-3">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Number</th>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Role</th>
                                <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => {
                                    return <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.id}</th>
                                        <td className="px-6 py-4">{user.name}</td>
                                        <td className="px-6 py-4">{user.role}</td>
                                        <td className="px-6 py-4">
                                            <Link to={`/Users/${user.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Users