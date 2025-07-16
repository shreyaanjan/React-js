import ServicesCard from "../components/ServicesCard"

const Services = () => {
    let cardContent = [
        {
            icon: "bi bi-rocket-takeoff",
            title: "Startup Applications",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.",
        },
        {
            icon: "bi bi-laptop",
            title: "SaaS Solutions",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.",
        },
        {
            icon: "bi bi-wallet-fill",
            title: "eCommerce Platforms",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.",
        },
        {
            icon: "bi bi-segmented-nav",
            title: "Research",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.",
        },
        {
            icon: "bi bi-graph-up-arrow",
            title: "Analytics",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.",
        },
        {
            icon: "bi bi-gear-wide-connected",
            title: "Technology",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.",
        },
    ]
    return (
<<<<<<< HEAD
        <section className="service-section py-[93px]">
            <div>
                <div className="container mx-auto">
                    <p className="text-center font-bold text-black text-3xl uppercase">Services</p>
                    {/* <h2 className="text-3xl font-bold text-center">We Are Offering All Kinds of IT Solutions Services</h2> */}
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-wrap py-[30px]">
                        {
                            cardContent.map((item, idx) => {
                                return <ServicesCard key={idx} icon={item.icon} title={item.title} desc={item.desc} />
                            })
                        }
                    </div>
=======
        <section className="service-section h-[92.5vh] py-[40px]">
            <div className="container mx-auto">
                {/* <p className="text-center text-[#03228F] uppercase">Services</p> */}
                <h2 className="text-3xl font-bold text-center">We Are Offering All Kinds of IT Solutions Services</h2>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-wrap py-[30px]">
                    {
                        cardContent.map((item, idx)=>{
                            return <ServicesCard key={idx} img={item.img} title={item.title} desc={item.desc} />
                        })
                    }
>>>>>>> 691ffb87d75f8e6f832998d0d776a63ebb612832
                </div>
            </div>
        </section>
    )
}

export default Services