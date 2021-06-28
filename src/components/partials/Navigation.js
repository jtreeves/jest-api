import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <NavLink
                to="/"
                style={{ textDecoration: 'none' }} 
            >
                Home
            </NavLink>
            
            <NavLink
                to="/about"
                style={{ textDecoration: 'none' }} 
            >
                About
            </NavLink>
        </nav>
    )
}

export default Navigation