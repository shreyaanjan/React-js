import React, { useRef, useState } from 'react'

const Reviewcard = () => {
    const [input, setInput] = useState({
        name: "", message: "", date: "", rating: "",
    })

    const formRef = useRef(null);

    const [errors, setErrors] = useState({});

    const [card, setCard] = useState(false);

    const [submittedData, setSubmittedData] = useState([]);

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
        if (Object.keys(validateErrors).length === 0) {
            setCard(true);
            setSubmittedData([...submittedData, input]);
            setInput({
                name: "", message: "", date: "", rating: "",
            });
        }
    }
    console.log(input);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className={`flex w-full max-w-5xl gap-5 flex-col md:flex-row 
                ${submittedData.length === 0 ? "justify-center items-center" : ""}`}>
                <form ref={formRef} onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-lg shadow-xl rounded-xl p-6 w-full h-full max-w-md">
                    <h2 className="text-3xl font-bold text-center mb-6">Review Form</h2>
                    <div className="mb-5 pb-2 relative">
                        <label htmlFor="name" className="block mb-0.5 px-1 absolute bg-white left-3 top-[-11px] text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" value={input.name} onChange={handleChange} className="w-full px-2.5 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter your name" required />
                        {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                    </div>
                    <div className="mb-5 relative">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium px-1 absolute bg-white left-3 top-[-11px] text-gray-700">Review</label>
                        <textarea id="message" value={input.message} onChange={handleChange} rows={5} className="w-full px-2.5 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter Your Review..." />
                        {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className="relative mb-5">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <label htmlFor="rating" className="block mb-2 px-1 absolute bg-white left-4 top-[-11px] text-sm font-medium text-gray-700">
                                Date
                            </label>
                            <div className=''>
                                <input id="date" value={input.date} onChange={handleChange} type="date" className="pl-10 pr-4 py-2.5 text-sm w-48 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Select date" />
                                {errors.date && <p className="text-sm text-red-600 dark:text-red-500">{errors.date}</p>}
                            </div>
                        </div>
                        <div className="mb-5 relative">
                            <label htmlFor="rating" className="block mb-2 px-1 absolute bg-white left-3 top-[-11px] text-sm font-medium text-gray-700">
                                Rating
                            </label>
                            <select name="rating" value={input.rating} onChange={handleChange} id="rating" className="w-48 px-2.5 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none">
                                <option value="0">Rate Here</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            {errors.rating && <p className="text-sm text-red-600 dark:text-red-500">{errors.rating}</p>}
                        </div>
                    </div>
                    <button type="submit" className="w-full py-2 text-white text-sm font-medium rounded-lg bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600 transition">Submit</button>
                </form>
                <div className="h-[400px] overflow-y-auto pr-2">
                    <div className=" flex flex-wrap gap-5 justify-center">
                        {submittedData.map((review, index) => (
                            <div key={index} className="bg-gradient-to-br from-[#6C63FF] to-[#8E7EFF]  text-white p-4 rounded-xl shadow-md w-64 h-40">
                                <div className="flex gap-1 mb-3">
                                    {"⭐".repeat(Number(review.rating))}
                                </div>
                                <p className="italic text-sm leading-relaxed mb-4">
                                    "{review.message}"
                                </p>
                                <div className="text-sm font-semibold">{review.name}</div>
                                <div className="text-xs opacity-90 mt-1">{review.date}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviewcard