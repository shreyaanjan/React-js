import React, { useState } from 'react'

const Reviewcard = () => {
    const [input, setInput] = useState({
        name: "", message: "", date: "", rating: "",
    })

    const [errors, setErrors] = useState({});

    const [editIndex, setEditIndex] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false)

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
            if (isUpdate) {
                const updatedArr = [...submittedData];
                updatedArr[editIndex] = input;
                setSubmittedData(updatedArr);
                setIsUpdate(false);
                setEditIndex(null);
            } else {
                setSubmittedData([...submittedData, input]);
            }

            setInput({
                name: "", message: "", date: "", rating: "",
            });
        }

    }

    const handleEdit = (idx) => {
        const editObj = submittedData[idx];
        setInput({
            name: editObj.name, message: editObj.message, date: editObj.date, rating: editObj.rating,
        });
        setEditIndex(idx);
        setIsUpdate(true)
    }

    const handleDelete = (idx) => {
        const afterDelete = submittedData.filter((data, index) => {
            return idx != index;
        });
        setSubmittedData(afterDelete);
    }

    console.log(input);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className={`flex w-full max-w-3xl gap-14 flex-col md:flex-row
                ${submittedData.length === 0 ? "justify-center items-center" : ""}`}>
                <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-lg shadow-xl rounded-xl p-6 w-full h-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-6">Review Form</h2>
                    <div className="mb-5 pb-2 relative">
                        <label htmlFor="name" className="block mb-2 px-1 absolute bg-white left-3 top-[-11px] text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" value={input.name} onChange={handleChange} className="w-full px-2.5 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter your name" />
                        {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                    </div>
                    <div className="mb-5 relative">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium px-1 absolute bg-white left-3 top-[-11px] text-gray-700">Review</label>
                        <textarea id="message" value={input.message} onChange={handleChange} rows={5} className="w-full px-2.5 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter Your Review..." />
                        {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className="relative mb-5">
                            <label htmlFor="rating" className="block mb-2 px-1 absolute bg-white left-4 top-[-11px] text-sm font-medium text-gray-700">Date</label>
                            <div className=''>
                                <input id="date" value={input.date} onChange={handleChange} type="date" className="px-2.5 py-2.5 text-sm w-48 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Select date" />
                                {errors.date && <p className="text-sm text-red-600 dark:text-red-500">{errors.date}</p>}
                            </div>
                        </div>
                        <div className="mb-5 relative">
                            <label htmlFor="rating" className="block mb-2 px-1 absolute bg-white left-3 top-[-11px] text-sm font-medium text-gray-700">Rating</label>
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
                {submittedData.length > 0 && (
                    <div className="h-[425px] w-full overflow-y-auto scrollbar-width pr-2">
                        <div className="gap-4">
                            {submittedData.map((review, index) => (
                                <div key={index} className="my-4 bg-gradient-to-br from-[#6C63FF] to-[#8E7EFF] text-white w-full p-3 rounded-xl shadow-md">
                                    <div className="flex gap-1 mb-3">
                                        {"⭐".repeat(Number(review.rating))}
                                    </div>
                                    <p className="italic text-sm leading-relaxed  break-words mb-4">
                                        '{review.message}'
                                    </p>
                                    <div className="text-sm font-semibold">{review.name}</div>
                                    <div className="text-xs opacity-90 mt-1 mb-2">{review.date}</div>
                                    <div className='flex gap-4'>
                                        <button onClick={() => { handleEdit(index) }} className="rounded-xl"><i className="bi bi-pencil-square"></i></button>
                                        <button onClick={() => { handleDelete(index) }} className="rounded-xl"><i className="bi bi-trash"></i></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Reviewcard