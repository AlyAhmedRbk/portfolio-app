import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Hero from './Components/hero/Hero'
import About from './Components/about/About'
import Services from './Components/services/Services'
import Work from './Components/work/Work'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App