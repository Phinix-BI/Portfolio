import ButtonGradient from './assets/svg/ButtonGradient'
import About from './components/About'
import Contact from './components/Contact'
// import Button from './components/Button'
import Header from './components/Header'
import Hero from './components/Hero'
import Project from './components/Project'
import Skills from './components/Skills'
import Tools from './components/Tools'
import Footer from './components/Footer'
import Loader from './components/Loader'
import { useState,useEffect } from 'react'
function App() {

    // eslint-disable-next-line no-unused-vars
    const[isLoading,setIsLoading] = useState(true)

    useEffect(() => {
      // Simulate an API call
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);
  return !isLoading ? (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        
        <Header />
        <Hero />
        <About />
        <Skills />
        <Tools  />
        <Project />
        <Contact />
        <Footer />
     
      </div>
      
      <ButtonGradient/>
    </>
  ) : (
    <Loader />
  )
}

export default App
