import Navlists from "./Navlists"

const Navbar = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-between my-2">
                <h3 className="navbar-brand">Navbar</h3>
                <Navlists />
            </div>
        </div>
    )
}

export default Navbar