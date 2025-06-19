import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import { useEffect, useState } from 'react';
import Employees from './pages/Employees';
import AddEmployee from './pages/AddEmployee';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        let loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"))
        setIsLoggedIn(loginStatus)
    },[])

    return (
        <BrowserRouter>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
                <Route path="/employees" element={<Employees/>} />
                <Route path="/addemployee" element={<AddEmployee/>} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App