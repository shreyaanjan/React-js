import Customer from "./Components/Customer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Newsletter from "./Components/Newsletter";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";


const App = ()=>{
    return(
        <div>
            <Header/>
            <Hero/>
            <Services/>
            <Portfolio/>
            <Customer/>
            <Newsletter/>
        </div>
    )
}

export default App;