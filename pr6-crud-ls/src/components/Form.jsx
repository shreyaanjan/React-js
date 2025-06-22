import { useState } from "react"

const Form = ({addUsers}) => {
    const [input, setInput] = useState({
        name: "", email: "", course: "", gender: "", password: "", confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
        setErrors({...errors, [e.target.id] : ""});
    }

    const handleSubmit = (e) => {   
        e.preventDefault();

        let validationErrors = {}

        if(input.name.trim() === ""){
            validationErrors.name = "Enter Your Name !";
        }

        if(input.email.trim() === ""){
            validationErrors.email = "Enter Your Email !";
        }

        if(input.course == "" || input.course == null || input.course == undefined){
            validationErrors.course = "Select Your Course !";
        }

         if (input.gender == "" || input.gender == null || input.gender == undefined) {
            validationErrors.gender = "Please select your gender";
        }

        if(input.password.trim().length < 8){
            validationErrors.password = "Enter a Valid and Strong Password !";
        }

        if(input.password.trim() !== input.confirmPassword.trim()){
            validationErrors.confirmPassword = "Password and Confirm Password Should Be Same !";
        }

        setErrors(validationErrors);

        if(Object.keys(validationErrors).length > 0){
            return;
        }

        addUsers({...input, id: Date.now()})
        setInput({name: "", email: "", course: "", gender: "", password: "", confirmPassword: "",})
    }

    return (
        <div className="container mx-auto my-4 md:px-0 px-10">
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input type="text" onChange={handleChange} value={input.name} id="name" className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-2" placeholder="John"/>
                        {errors.name && (<p className="text-red-500 text-sm mt-1">{errors.name}</p>)}
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input type="email" onChange={handleChange} value={input.email} id="email" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-2" placeholder="john.doe@company.com"/>
                        {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email}</p>)}
                    </div>
                    <div>
                        <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900">Course</label>
                        <select id="course" onChange={handleChange} value={input.course} className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option value="">Select Course</option>
                            <option value="1">Full Stack Development</option>
                            <option value="2">User Interface(UI) & User Experience(UX)</option>
                            <option value="3">Artificial Intelligence(AI) & Machine Learning(ML)</option>
                        </select>
                        {errors.course && (<p className="text-red-500 text-sm mt-1">{errors.course}</p>)}
                    </div>
                    <div className="mt-2">
                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">Gender</label>
                        <div className="flex items-center mb-2">
                            <input id="gender" onChange={handleChange} value="male" type="radio" name="gender" checked={input.gender === "male"} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="male" className="ms-2 text-sm font-medium text-gray-900 me-5">Male</label>
                            <input id="gender" onChange={handleChange} value="female" type="radio" name="gender" checked={input.gender === "female"} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="female" className="ms-2 text-sm font-medium text-gray-900">Female</label>
                        </div>
                        {errors.gender && (<p className="text-red-500 text-sm mt-1">{errors.gender}</p>)}
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" onChange={handleChange} value={input.password} id="password" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••"/>
                        {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password}</p>)}
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                        <input type="password" onChange={handleChange} value={input.confirmPassword} id="confirmPassword" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••"/>
                        {errors.confirmPassword && (<p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>)}
                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    )
}

export default Form