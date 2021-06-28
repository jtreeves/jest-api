import { useEffect, useState } from 'react'
import getRepos from '../../utilities/getRepos'

function Repos(props) {
    const [repos, setRepos] = useState([])

    const renderRepos = async () => {
        const rawRepos = await getRepos(props.name)
        const prettyRepos = rawRepos.map((repo, index) => {
            return (
                <li key={index}>
                    {repo}
                </li>
            )
        })
        setRepos(prettyRepos)
    }

    useEffect(() => {
        renderRepos()
    })

    return (
        <ul>
            <h2>Repos</h2>
            {repos}
        </ul>
    )
}

export default Repos