import { useState } from "react"

const Form = () => {
    const [users, setUsers] = useState({
        name: "", email: "", course: "", gender: "", password: "", confirmPassword: "",
    });

    const handleChange = (e) => {
        setUsers({ ...users, [e.target.id]: e.target.value });
    }
    console.log(users);

    return (
        <div className="container mx-auto my-4 md:px-0 px-10">
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input type="text" onChange={handleChange} value={users.name} id="name" className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-2" placeholder="John" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                        <input type="email" onChange={handleChange} value={users.email} id="email" className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-2" placeholder="john.doe@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900">Course</label>
                        <select id="course" onChange={handleChange} value={users.course} className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option value="0">Select Course</option>
                            <option value="1">Full Stack Development</option>
                            <option value="2">UI/UX</option>
                            <option value="3">AI/ML</option>
                        </select>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">Gender</label>
                        <div className="flex items-center mb-2">
                            <input id="male" onChange={handleChange} value="male" type="radio" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="male" className="ms-2 text-sm font-medium text-gray-900 me-5">Male</label>
                            <input id="female" onChange={handleChange} value="female" type="radio" name="female" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="female" className="ms-2 text-sm font-medium text-gray-900">Female</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" onChange={handleChange} value={users.password} id="password" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                        <input type="password" onChange={handleChange} value={users.confirmPassword} id="confirmPassword" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                    </div>
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    )
}

export default Form