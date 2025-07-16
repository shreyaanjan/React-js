const Contact = () => {
    return (
        <section className="contact-section py-[30px]"> 
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-5/12 w-full bg-gradient-to-b from-blue-500 to-blue-800 text-white p-10 flex flex-col justify-center">
                        <h4 className="text-sm uppercase tracking-wide mb-2">Let's Talk</h4>
                        <h1 className="text-3xl md:text-4xl font-bold mb-8">Speak With Expert Engineers.</h1>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="bg-white text-blue-700 px-3 py-2 rounded-full">
                                    <i className="fas fa-home"></i>
                                </div>
                                <div>
                                    <p className="font-bold">Email:</p>
                                    <p>(+088)589-8745</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="bg-white text-blue-700 px-3 py-2 rounded-full">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <p className="font-bold">Phone:</p>
                                    <p>support@rstheme.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="bg-white text-blue-700 px-3 py-2 rounded-full">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <p className="font-bold">Address:</p>
                                    <p>New Jesrsy, 1201, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
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