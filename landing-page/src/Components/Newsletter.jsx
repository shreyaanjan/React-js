import Title from "./Title";

function Newsletter() {
    let title="Newsletter";
    let desc = "Subscribe to our newsletter and follow our content closely. Receive news based on what has to do with you. We promise not to send promotions you don't like.";
    return (
        <section className="news-section">
            <div className="container">
                <Title title={title} desc={desc}/>
            </div>
            <div className="container">
                <div className="d-flex align-items-center justify-content-center gap-5 mb-5">
                    <input type="text" placeholder="Name" className="form-control w-25 name"/>
                    <input type="email" placeholder="Email" className="form-control w-25 name"/>
                    <button className="subsBtn text-white text-uppercase">Subscribe</button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter