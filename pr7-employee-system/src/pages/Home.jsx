const Home = () => {
    return (
<<<<<<< HEAD
        <section className="home-section bg-gradient-to-b from-white to-[#eae4ff] min-h-screen flex items-center py-16">
            <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-8">
                <div className="lg:w-[48%] space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                        Secure IT Solutions<br />Services
=======
        <section className="bg-gradient-to-b from-white to-[#eae4ff] h-[92.5vh] flex items-center justify-center py-[50px]">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-3">
                <div className="lg:w-1/2 space-y-6">
                    <p className="text-sm text-orange-600 font-semibold tracking-wide uppercase">Technology & IT Solutions</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Digital <span className="text-blue-600">Technology,</span><br />
                        <span className="text-orange-600">IT Solution</span> & Services<br />
                        Around the World
>>>>>>> 691ffb87d75f8e6f832998d0d776a63ebb612832
                    </h1>
                    <p className="text-gray-500 text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="flex items-center gap-2 bg-[#ff5d22] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#e24d14] transition duration-300">
                        <span>➜</span> Get Started
                    </button>
                </div>
                <div className="lg:w-[52%] flex justify-center">
                    <img src="/images/home.png" alt="Technology Illustration" className="w-full max-w-[500px]" />
                </div>
            </div>
        </section>
    )
}

export default Home