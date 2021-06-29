import { useEffect, useState } from 'react'
import getDetails from '../../utilities/getDetails'
import cleanUp from '../../utilities/cleanUp'

function Details(props) {
    const [details, setDetails] = useState({})

    const renderDetails = async () => {
        try {
            const rawDetails = await getDetails(props.name)
            setDetails(rawDetails)
        } catch (error) {
            const message = error
            setDetails(message)
        }
    }

    useEffect(() => {
        renderDetails()
        return () => {
            cleanUp()
        }
    }, [])

    if (typeof details !== 'string') {
        return (
            <section>
                <h2>Details</h2>
                <ul>
                    <li>Name: {details.name}</li>
                    <li>Bio: {details.bio}</li>
                    <li>Location: {details.location}</li>
                    <li>Repos: {details.repos}</li>
                    <li>Followers: {details.followers}</li>
                    <li>Following: {details.following}</li>
                </ul>
            </section>
        )
    } else {
        return (
            <section>
                <h2>Details</h2>
                <ul>
                    <li>{details}</li>
                </ul>
            </section>
        )
    }
}

export default Details