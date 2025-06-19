import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();
    
    const { pathname } = useLocation();

    const handleClick = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", JSON.stringify(false))
        toast.success("Logged Out Successfully")
        navigate("/")
    }

    return (
        <header>
            <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Flowbite</span>
                    </Link>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link to={"/"} className={`${pathname == "/" ? "text-teal-700" : "text-gray-900"}`}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/about"} className={`${pathname == "/about" ? "text-teal-700" : "text-gray-900"}`}>About</Link>
                            </li>
                            <li>
                                <Link to={"/contact"} className={`${pathname == "/contact" ? "text-teal-700" : "text-gray-900"}`}>Contact</Link>
                            </li>
                            {isLoggedIn && (<Link to={"/employees"} className={`${pathname == "/employees" || pathname == "/add-employee" ? "text-teal-700" : "text-gray-900"}`}>Employees</Link>)}
                        </ul>
                    </div>
                    {
                        isLoggedIn ? <button onClick={handleClick} type="button" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Logout</button>
                            : <button onClick={() => {
                                navigate("/login")
                            }} type="button" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Login</button>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header