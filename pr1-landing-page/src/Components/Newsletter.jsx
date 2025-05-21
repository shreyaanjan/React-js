import Title from "./Title";

function Newsletter() {
    let title = "Newsletter";
    let desc = "Subscribe to our newsletter and follow our content closely. Receive news based on what has to do with you. We promise not to send promotions you don't like.";
    return (
        <section className="news-section">
            <div className="container">
                <Title title={title} desc={desc} />
            </div>
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <input type="text" placeholder="Name" className="form-control name" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <input type="email" placeholder="Email" className="form-control name" />
                    </div>
                    <div className="col-12 col-lg-2 mb-3 mb-lg-0">
                        <button className="subsBtn text-white text-uppercase w-100">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter