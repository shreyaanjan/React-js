import Title from "./Title"

const SignUp = () => {
    let title = "Let's Talk?";
    let desc = "Don't wait until tomorrow. Talk to one of our consultants today and learn how to start leveraging your business.";

    return (
        <section className="signSection">
            <div className="container">
                <div className="d-flex gap-5">
                    <div className="col-6">
                        <Title title={title} desc={desc} />
                        <ul className="progressbar d-flex gap-4 align-items-center">
                            <div>
                            <li className="active text-white bg-red">1</li>
                                <p className="text-white">Personal Details</p>
                            </div>
                            <div>
                            <li className="active text-white line">2</li>
                                <p className="text-white">Company Budget</p>
                            </div>
                            <div>
                            <li className="active text-white line">3</li>
                                <p className="text-white">Service Setup</p>
                            </div>
                        </ul>
                        <div>
                            <input type="email" placeholder="Email" className="form-control name my-4" />
                            <input type="text" placeholder="Name" className="form-control name my-4" />
                            <input type="number" placeholder="Phone" className="form-control name my-4" />
                            <button className="subsBtn text-white text-uppercase d-flex align-items-center gap-2">Next<i className="bi bi-arrow-right-circle"></i></button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <img src="/public/image/about-8.webp" alt="laptop" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp