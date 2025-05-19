const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <a className="logo-name" href="">
                        Leverage
                        <i className="version">2.1</i>
                    </a>
                    <ul className="d-lg-flex d-none align-items-center gap-5 text-white menu m-0">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                    <ul className="text-white d-lg-flex d-none align-items-center gap-5 m-0">
                        <li><i className="bi bi-search" /></li>
                        <li><i className="bi bi-twitter" /></li>
                        <li><i className="bi bi-instagram" /></li>
                    </ul>
                    <button className="contact-btn d-lg-none d-flex p-2">
                        <i className="bi bi-list"></i>
                    </button>
                    <button type="button" className="contact-btn d-lg-flex d-none  text-uppercase">
                        <i className="bi bi-chat-left-dots"></i>Contact US
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;