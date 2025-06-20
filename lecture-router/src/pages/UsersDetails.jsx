import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const UsersDetails = () => {
    const params = useParams();

    const navigate = useNavigate();

    let users = JSON.parse(localStorage.getItem("users"));

    let currentUser = users.find((user) => {
        return user.id == params.id;
    })

    return (
        <div>
            <h2 className="text-center text-3xl font-semibold mt-2">Users</h2>
            <div className="container mx-auto">
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{currentUser.name}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{currentUser.role}</p>
                    <button onClick={()=>{
                        navigate("/users")
                    }} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Back
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default UsersDetails