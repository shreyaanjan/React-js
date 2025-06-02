import React, { useRef, useState } from 'react'

const Reviewcard = () => {
    const [input, setInput] = useState({
        name: "", message: "", date: "", rating: "",
    })

    const formRef = useRef(null);

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
        setErrors({ ...errors, [e.target.id]: "" })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let validateErrors = {}

        if (input.name.trim() == "") {
            validateErrors.name = "Enter Valid Name !";
        }

        if (input.message.trim() == "") {
            validateErrors.message = "Enter Valid Review !";
        }

        if (input.date.trim() == "") {
            validateErrors.date = "Select Valid Date !";
        }

        if (input.rating.trim() == "") {
            validateErrors.rating = "Select Rating !";
        }

        setErrors(validateErrors);
    }
    console.log(input);
    return (
        <div className="container">
            <form ref={formRef} onSubmit={handleSubmit} className="max-w-sm mx-auto mt-5">
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                    <input type="text" id="name" value={input.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 peer" placeholder="Enter your name" required />
                    {errors.name && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.name}</p>}
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your review</label>
                    <textarea id="message" value={input.message} onChange={handleChange} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Your Review..." />
                    {errors.message && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.message}</p>}
                </div>
                <div className="relative max-w-sm">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input id="date" value={input.date} onChange={handleChange} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Select date" />
                    {errors.date && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.date}</p>}
                </div>
                <div className="mt-4">
                    <select name="rating" value={input.rate} onChange={handleChange} id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-25 p-2.5">
                        <option value="0">Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    {errors.rating && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.rating}</p>}
                </div>
                <button type="submit" className="text-white bg-[linear-gradient(95deg,_rgba(169,132,245,1)_0%,_rgba(65,122,244,1)_100%)] mt-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>                
            </form>
        </div>
    )
}

export default Reviewcard