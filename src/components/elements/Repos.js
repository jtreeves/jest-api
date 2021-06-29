import { useEffect, useState } from 'react'
import getRepos from '../../utilities/getRepos'
import cleanUp from '../../utilities/cleanUp'

function Repos(props) {
    const [repos, setRepos] = useState([])

    const renderRepos = async () => {
        const rawRepos = await getRepos(props.name)
        if (typeof rawRepos !== 'string') {
            const prettyRepos = rawRepos.map((repo, index) => {
                return (
                    <li key={index}>
                        {repo}
                    </li>
                )
            })
            setRepos(prettyRepos)
        } else {
            const message = <li>{rawRepos}</li>
            setRepos(message)
        }
    }

    useEffect(() => {
        renderRepos()
        return () => {
            cleanUp()
        }
    }, [])

    return (
        <section>
            <h2>Repos</h2>
            <ul>
                {repos}
            </ul>
        </section>
    )
}

export default Repos