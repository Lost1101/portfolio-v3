import Navlink from "../molecules/Navlink"
import ThemeToggle from "../molecules/ThemeToggle"
import PropTypes from "prop-types"

export default function Navbar({setActivePage}){
    return(
        <div className="navbar bg-base-100 shadow-lg fixed w-full top-0">
            <div className="w-full flex gap-4 justify-center">
                <Navlink onClick={() => setActivePage('Home')} link={'#'}>Home</Navlink>
                <Navlink onClick={() => setActivePage('About')} link={'#About'}>About</Navlink>
                <Navlink onClick={() => setActivePage('Skills')} link={'#Skills'}>Skills</Navlink>
                <Navlink onClick={() => setActivePage('Projects')} link={'#Projects'}>Projects</Navlink>
                <Navlink onClick={() => setActivePage('Contact')} link={'#Contact'}>Contact</Navlink>
            </div>
            <ThemeToggle/>
        </div>
    )
}

Navbar.propTypes = {
    setActivePage: PropTypes.func
}