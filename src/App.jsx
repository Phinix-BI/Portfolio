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

function App() {


  return (
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
  )
}

export default App
