import React from 'react'
import Card2 from './Card2'

const Customer = () => {
    let arr = [
        {
            img: "/public/image/team-5.webp",
            name: "Karen Usman",
            desc: "I had small problems with the payment, but it was resolved.",
        },
        {
            img: "/public/image/team-1.webp",
            name: "Adams Baker",
            desc: "My website looks amazing with the Leverage Theme.",
        },
        {
            img: "/public/image/team-2.webp",
            name: "Mary Evans",
            desc: "This company created an exclusive form. Fantastic.",
        },
        {
            img: "/public/image/team-4.webp",
            name: "Joseph Hills",
            desc: "My app was perfect. I will request more services soon.",
            icon: "bi bi-star",
        },
    ]
    return (
        <section className="customer-sect">
            <div className="container">
                <h2 className="text-center text-white fw-bold">Customer Testimonials</h2>
                <p className="text-center text-secondary mb-5 mt-3 text-max-800">Our customers are satisfied with the work we do. The greatest gratification is to receive recognition for what we have built. This motivates us to improve even more.</p>
            </div>
            <div className="container">
                <div className="row gy-5">
                    {arr.map((item) => {
                        return <Card2 img={item.img} name={item.name} desc={item.desc} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Customer