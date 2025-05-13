import React from 'react'
import Card2 from './Card2'

const Customer = () => {
    let arr = [
        {
            img: "https://leverage-html.codings.dev/assets/images/team-5.jpg",
            name: "Karen Usman",
            desc: "I had small problems with the payment, but it was resolved.",
        },
        {
            img: "https://leverage-html.codings.dev/assets/images/team-1.jpg",
            name: "Adams Baker",
            desc: "My website looks amazing with the Leverage Theme.",
        },
        {
            img: "https://leverage-html.codings.dev/assets/images/team-2.jpg",
            name: "Mary Evans",
            desc: "This company created an exclusive form. Fantastic.",
        },
        // {
        //     img: "https://leverage-html.codings.dev/assets/images/team-3.jpg",
        //     name: "Sarah Lopez",
        //     desc: "I'm loving the partnership. The support deserves 5 stars.",
        // },
        {
            img: "https://leverage-html.codings.dev/assets/images/team-4.jpg",
            name: "Joseph Hills",
            desc: "My app was perfect. I will request more services soon.",
            icon: "bi bi-star",
        },
    ]
    return (
        <div className="customer-sect">
            <div className="container">
                <h2 className="text-center text-white fw-bold">Customer Testimonials</h2>
                <p className="text-center text-secondary">Our customers are satisfied with the work we do. The greatest gratification is to receive recognition for what we have built. This motivates us to improve even more.</p>
            </div>
            <div className="container">
                <div className="row gy-5">
                    {arr.map((item) => {
                        return <Card2 img={item.img} name={item.name} desc={item.desc} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Customer