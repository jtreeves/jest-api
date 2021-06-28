import { useEffect, useState } from 'react'
import getCommits from '../../utilities/getCommits'
import cleanUp from '../../utilities/cleanUp'

function Commits(props) {
    const [commits, setCommits] = useState([])

    const renderCommits = async () => {
        const rawCommits = await getCommits(props.name)
        const prettyCommits = rawCommits.map((commit, index) => {
            return (
                <li key={index}>
                    {commit}
                </li>
            )
        })
        setCommits(prettyCommits)
    }

    useEffect(() => {
        renderCommits()
        return () => {
            cleanUp()
        }
    }, [])

    return (
        <ul>
            <h2>Commits</h2>
            {commits}
        </ul>
    )
}

export default Commits