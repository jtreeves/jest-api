import { Link } from 'react-router-dom'
import '../../style/home.css'

function Home() {
    return (
        <main>
            <p>Perform a new search</p>

            <Link to="/search">
                <button>
                    New Search
                </button>
            </Link>
        </main>
    )
}

export default Home