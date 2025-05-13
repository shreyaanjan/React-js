const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <a className="logo-name" href="">
                        Leverage
                        <i className="version">2.1</i>
                    </a>
                    <ul className="d-flex align-items-center gap-3 text-white menu m-0">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                    <ul className="text-white d-flex align-items-center gap-3 m-0">
                        <li><i className="bi bi-search" /></li>
                        <li><i className="bi bi-twitter" /></li>
                        <li><i className="bi bi-instagram" /></li>
                    </ul>
                    <button type="button" className="contact-btn text-uppercase">
                        <i className="bi bi-chat-left-dots"></i>Contact US
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;