import { Link } from 'react-router-dom'
import '../../style/home.css'

function Home() {
    return (
        <main>
            <h1>Welcome!</h1>

            <p>Use this website to easily find information about GitHub users. Just input their usernames, and see the results!</p>

            <Link to="/search">
                <button>
                    New Search
                </button>
            </Link>
        </main>
    )
}

export default Home