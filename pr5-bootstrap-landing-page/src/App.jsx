import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Companies from './components/Companies'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import Contact from './Contact'

const App = () => {
    return (
        <>
            <Header /> 
            <Hero />  
            <About />
            <Companies />
            <Features />
            <Pricing />
            <Team />
            <Testimonial />
            <Contact />
        </>
    )
}

export default App