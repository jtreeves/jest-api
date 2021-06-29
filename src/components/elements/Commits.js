import { useEffect, useState } from 'react'
import getCommits from '../../utilities/getCommits'
import cleanUp from '../../utilities/cleanUp'

function Commits(props) {
    const [commits, setCommits] = useState([])

    const renderCommits = async () => {
        const rawCommits = await getCommits(props.name)
        if (typeof rawCommits !== 'string') {
            const prettyCommits = rawCommits.map((commit, index) => {
                return (
                    <li key={index}>
                        {commit}
                    </li>
                )
            })
            setCommits(prettyCommits)
        } else {
            const message = <li>{rawCommits}</li>
            setCommits(message)
        }
    }

    useEffect(() => {
        renderCommits()
        return () => {
            cleanUp()
        }
    }, [])

    return (
        <section>
            <h2>Commits</h2>
            <ul>
                {commits}
            </ul>
        </section>
    )
}

export default Commits