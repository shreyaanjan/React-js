import { Link } from "react-router-dom"

const EmployeeTable = ({ employees }) => {
    return (
        <div className="relative overflow-x-auto mt-5">
            <table className="w-full text-sm text-left  text-gray-500">
                <thead className="text-xs text-white uppercase bg-teal-600">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Employee Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Salary
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Department
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp, idx) => {
                            return <tr key={idx} className="border-b border-l border-r border-gray-300">
                                <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap ">{idx + 1}</td>
                                <td className="px-6 py-4 text-gray-900">{emp.name}</td>
                                <td className="px-6 py-4 text-gray-900">{emp.salary}</td>
                                <td className="px-6 py-4 text-gray-900">{emp.department == 1 ? "Designing" : emp.department == 2 ? "Development" : emp.department == 3 ? "Finance" : "Sales and Marketing"}</td>
                                <td className="px-6 py-4 flex gap-5">
                                    <Link className="font-medium text-green-600">Edit</Link>
                                    <button className="font-medium text-red-600">Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable