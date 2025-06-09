import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Companies from './components/Companies'
import Features from './components/Features'

const App = () => {
    return (
        <>
            <Header /> 
            <Hero />  
            <About />
            <Companies />
            <Features />
        </>
    )
}

export default App