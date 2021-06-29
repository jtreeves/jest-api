import { useEffect, useState } from 'react'
import getRepos from '../../utilities/getRepos'
import cleanUp from '../../utilities/cleanUp'

function Repos(props) {
    const [repos, setRepos] = useState([])

    const renderRepos = async () => {
        try {
            const rawRepos = await getRepos(props.name)
            const prettyRepos = rawRepos.map((repo, index) => {
                return (
                    <li key={index}>
                        {repo}
                    </li>
                )
            })
            setRepos(prettyRepos)
        } catch (error) {
            const message = <li>{error}</li>
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