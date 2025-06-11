import Image from "./Image"

const Header = () => {
    let img = "/public/images/logo.png"
    return (
        <header className="header-section">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <Image img={img} />
                    </div>
                    <ul className="d-flex align-items-center gap-4 m-0">
                        <li className="text-black fw-semibold">Home</li>
                        <li className="text-black fw-semibold">Features</li>
                        <li className="text-black fw-semibold">Overview</li>
                        <li className="text-black fw-semibold">Pricing</li>
                        <li className="text-black fw-semibold">Team</li>
                        <li className="text-black fw-semibold">Pages</li>
                        <li className="text-black fw-semibold">Contact</li>
                    </ul>
                    <div>
                        <button className="rounded-pill head-btn text-white text-capitalize">Try it free</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header