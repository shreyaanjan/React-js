import { useRef, useState } from "react"

const Form = () => {
    const [input, setInput] = useState({
        fname: "",
        lname: "",
        phone: "",
        password: "",
        confirmPassword: "",
        email: "",
    });

    const [errors, setErrors] = useState({});

    const formRef = useRef(null);

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
        setErrors({...errors, [e.target.id]: "" })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let validateErrors = {};

        if (input.fname.trim() == "") {
            validateErrors.fname = "Enter First Name...";
        }

        if (input.lname.trim() == "") {
            validateErrors.lname = "Enter Last Name...";
        }

        if (input.password.trim() == "" || input.password.length < 8) {
            validateErrors.password = "Enter Password...";
        }

        if (input.confirmPassword.trim() == "") {
            validateErrors.confirmPassword = "Password doesn't match...";
        }

        setErrors(validateErrors)

        if(Object.keys(validateErrors).length == 0){
            formRef.current.submit();
        }
    }

    return (
        <div className="container mx-auto my-4 md:px-0 px-10">
            <h1 className="text-3xl text-center my-5 font-bold">Form Validation</h1>
            <form onSubmit={handleSubmit} ref={formRef}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="fname" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                        <input type="text" value={input.fname} onChange={handleChange} id="fname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" />
                        {errors.fname && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.fname}</p>} 
                    </div>
                    <div>
                        <label htmlFor="lname" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                        <input type="text" value={input.lname} onChange={handleChange} id="lname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" />
                        {errors.lname && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.lname}</p>} 
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
                        <input type="tel" value={input.phone} onChange={handleChange} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-45-678" />
                        
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                        <input type="email" value={input.email} onChange={handleChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" />
                       
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" value={input.password} onChange={handleChange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" />
                        {errors.password && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.password}</p>} 
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                        <input type="password" value={input.confirmPassword} onChange={handleChange} id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" />
                        {errors.confirmPassword && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.confirmPassword}</p>} 
                    </div>
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    )
}

export default Form