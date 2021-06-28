import Commits from '../elements/Commits'
import Details from '../elements/Details'
import Repos from '../elements/Repos'

function Results(props) {
    return (
        <div>
            <Details 
                name={props.name}
            />

            <Repos 
                name={props.name}
            />

            <Commits 
                name={props.name}
            />
        </div>
    )
}

export default Results