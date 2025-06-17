import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Users from './pages/Users'
import UsersDetails from './pages/UsersDetails'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/:id" element={<UsersDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App