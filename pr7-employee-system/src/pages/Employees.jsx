import { useEffect, useState } from 'react';
import EmployeeTable from '../components/EmployeeTable'
import { useNavigate } from 'react-router-dom'

const Employees = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(data);
    }, []);
    
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-semibold mt-5">Employees Details</h2>
                    <button type="button" onClick={()=>navigate("/add-employee")} className="text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center flex gap-2"><i className="ri-add-line"></i>Add Employees</button>
                </div>
                <EmployeeTable employees={employees} />
            </div>
        </section>
    )
}

export default Employees