import { useEffect, useState } from "react"

const Form = ({ addUsers, editUser, updateUser }) => {
    const [input, setInput] = useState({
        name: "", email: "", course: "", gender: "", password: "", confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (editUser) {
            setInput(editUser);
        } else {
            setInput({
                name: "", email: "", course: "", gender: "", password: "", confirmPassword: "",
            })
        }
    }, [editUser])

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
        setErrors({ ...errors, [e.target.id]: "" });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let validationErrors = {}

        if (input.name.trim() === "") {
            validationErrors.name = "Enter Your Name !";
        }

        if (input.email.trim() === "") {
            validationErrors.email = "Enter Your Email !";
        }

        if (input.course == "" || input.course == null || input.course == undefined) {
            validationErrors.course = "Select Your Course !";
        }

        if (input.gender == "" || input.gender == null || input.gender == undefined) {
            validationErrors.gender = "Please select your gender";
        }

        if (input.password.trim().length < 8) {
            validationErrors.password = "Enter a Valid and Strong Password !";
        }

        if (input.password.trim() !== input.confirmPassword.trim()) {
            validationErrors.confirmPassword = "Password and Confirm Password Should Be Same !";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        if (editUser) {
            updateUser(input)
        } else {
            addUsers({ ...input, id: Date.now() })
        }
        setInput({ name: "", email: "", course: "", gender: "", password: "", confirmPassword: "", })
    }

    return (
        <div className="flex min-h-screen">
            <div className="hidden lg:flex w-1/2 bg-white justify-center items-center">
                <img src="./images/home.svg" alt="Team work illustration" className="max-w-[80%]" />
            </div>
            <div className="w-full lg:w-1/2 bg-[#d3936b] flex items-center justify-center">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 w-full max-w-lg">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">Student Form</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input onChange={handleChange} value={input.name} type="text" id="name" placeholder="Name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <input onChange={handleChange} value={input.email} type="email" id="email" placeholder="Email"
                                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <select id="course" onChange={handleChange} value={input.course}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
                                <option value="">Select Course</option>
                                <option value="1">Full Stack Development</option>
                                <option value="2">User Interface(UI) & User Experience(UX)</option>
                                <option value="3">Artificial Intelligence(AI) & Machine Learning(ML)</option>
                            </select>
                            {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
                        </div>
                        <div>
                            {/* <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label> */}
                            <div className="flex gap-4">
                                <label className="flex items-center gap-1">
                                    <input type="radio" id="gender" name="gender" value="Male" onChange={handleChange}
                                        checked={input.gender === "Male"}
                                        className="w-4 h-4 text-orange-500 focus:ring-orange-400"
                                    />
                                    Male
                                </label>
                                <label className="flex items-center gap-1">
                                    <input type="radio" id="gender" name="gender" value="Female"
                                        onChange={handleChange}
                                        checked={input.gender === "Female"}
                                        className="w-4 h-4 text-orange-500 focus:ring-orange-400"
                                    />
                                    Female
                                </label>
                            </div>
                            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                        </div>
                        <div>
                            <input onChange={handleChange} value={input.password} type="password" id="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>
                        <div>
                            <input onChange={handleChange} value={input.confirmPassword} type="password" id="confirmPassword" placeholder="Confirm Password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"/>
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                        </div>
                        <div className="flex gap-2">
                            <button type="submit" className="w-full bg-[#30231b] text-white py-2 rounded-lg hover:bg-[#584031] transition">
                                {editUser ? "Update" : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form