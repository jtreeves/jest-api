import { Link, useLocation } from 'react-router-dom'
import Commits from '../elements/Commits'
import Details from '../elements/Details'
import Repos from '../elements/Repos'
import '../../style/results.css'

function Results() {
    const location = useLocation()
    const name = location.state.name

    return (
        <main>
            <h1>Results</h1>
            
            <Details 
                name={name}
            />

            <Repos 
                name={name}
            />

            <Commits 
                name={name}
            />

            <Link to="/search">
                <button>
                    Search Another User
                </button>
            </Link>
        </main>
    )
}

export default Results