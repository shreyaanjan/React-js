import Customer from "./Components/Customer";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Newsletter from "./Components/Newsletter";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import SignUp from "./Components/SignUp";
import Video from "./Components/Video";


const App = ()=>{
    return(
        <div>
            <Header/>
            <Hero/>
            <Services/>
            <Portfolio/>
            <Video/>
            <Customer/>
            <Newsletter/>
            <SignUp/>
            <Footer/>
        </div>
    )
}

export default App;