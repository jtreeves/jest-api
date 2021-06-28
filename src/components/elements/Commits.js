import { useEffect, useState } from 'react'
import getCommits from '../../utilities/getCommits'

function Commits() {
    const [commits, setCommits] = useState([])

    const renderCommits = async () => {
        const rawCommits = await getCommits()
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
    }, [])

    return (
        <ul>
            {commits}
        </ul>
    )
}

export default Commits