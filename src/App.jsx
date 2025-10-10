import { useState } from 'react'
import Button from './components/atoms/Button'
import Navbar from './components/organisms/Navbar'
import MediaBar from './components/organisms/MediaBar'
import Footer from './components/organisms/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Skills from './components/pages/Skills'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'

function App() {
  const [activePage, setActivePage] = useState('Home')

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Home/>;
      case 'About':
        return <About/>;
      case 'Skills':
        return <Skills />;
      case 'Projects':
        return <Projects/>
      case 'Contact':
        return <Contact />;
      default:
        return <Home/>;
    }
  }

  return (
    <>
      <Navbar setActivePage={setActivePage}/>
      <MediaBar/>
      <div className='flex-1'>
        {renderPage()}
      </div>
      <br />
      <Footer/>
    </>
  )
}

export default App
