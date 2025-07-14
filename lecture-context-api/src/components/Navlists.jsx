import { useContext } from "react"
import { AppContext } from "../App";

const Navlists = () => {
    const {name, handleLogout} = useContext(AppContext);
    
    return (
        <div className="d-flex align-items-center gap-5">
            <ul className="d-flex m-0 align-items-center list-unstyled gap-3">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Services</li>
                <li className="nav-item">Hello {name?.name?.toUpperCase()}</li>
            </ul>
            <button onClick={handleLogout} className="btn btn-danger" type="submit">Click</button>
        </div>
    )
}

export default Navlists