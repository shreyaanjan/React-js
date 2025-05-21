import Title from "./Title"

const SignUp = () => {
    let title = "Let's Talk?";
    let desc = "Don't wait until tomorrow. Talk to one of our consultants today and learn how to start leveraging your business.";

    return (
        <section className="signSection">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-xl-6 col-12">
                        <Title title={title} desc={desc} />
                        <ul className="progressbar d-flex align-items-center justify-content-center list-unstyled m-0 p-0">
                            <li className="step active">
                                <div className="circle">1</div>
                                <p>Personal Details</p>
                            </li>
                            <li className="step">
                                <div className="circle">2</div>
                                <p>Company Budget</p>
                            </li>
                            <li className="step">
                                <div className="circle">3</div>
                                <p>Service Setup</p>
                            </li>
                        </ul>
                        <div>
                            <input type="email" placeholder="Email" className="form-control name my-4" />
                            <input type="text" placeholder="Name" className="form-control name my-4" />
                            <input type="number" placeholder="Phone" className="form-control name my-4" />
                            <button className="subsBtn text-white text-uppercase d-flex align-items-center gap-2">Next<i className="bi bi-arrow-right-circle"></i></button>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div>
                            <img src="/public/image/about-8.webp" alt="laptop" width={'100%'} className="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp