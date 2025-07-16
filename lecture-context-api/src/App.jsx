import { createContext, useState } from "react"
import Navbar from "./components/Navbar"

export const AppContext = createContext();

const App = () => {
    const [name, setName] = useState({ name: "Shreya" });

    const handleLogout = () => {
        setName(null)
    }

    return (
        <div>
            <AppContext.Provider value={{name, handleLogout}}>
                <Navbar />
            </AppContext.Provider>
        </div>
    )
}

export default App