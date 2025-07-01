const Contact = () => {
    return (
        <section className="contact-section">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
                    <div className="w-5/12 contact-left p-10 flex flex-col justify-center">
                        <h4 className="text-white text-sm mb-3">Let's Talk</h4>
                        <h2 className="text-white text-3xl font-bold">Speak With Expert Engineers.</h2>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <i className="ri-home-3-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact