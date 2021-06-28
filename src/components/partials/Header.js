import { Link } from 'react-router-dom'

function Header() {
    return (
        <Link 
            to="/" 
            style={{ textDecoration: 'none' }} 
        >
            <header>
                Easy Search for API
            </header>
        </Link>
    )
}

export default Header