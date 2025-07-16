const Contact = () => {
    return (
        <section className="contact-section py-[30px]">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row">

                    <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
                        <form className="space-y-4">
                            <input type="text" placeholder="Name" className="w-full p-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none" />
                            <input type="email" placeholder="Email" className="w-full p-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none" />
                            <input type="text" placeholder="Phone number" className="w-full p-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none" />
                            <input type="text" placeholder="Subject" className="w-full p-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none" />
                            <textarea placeholder="Write your message..." className="w-full h-32 p-3 bg-gray-100 border border-gray-200 rounded-md resize-none focus:outline-none"></textarea>
                            <button className="bg-[#ff5d22] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-[#e24d14] transition-all">
                                <span>✔</span> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact