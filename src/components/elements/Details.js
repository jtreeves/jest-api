import { useEffect, useState } from 'react'
import getDetails from '../../utilities/getDetails'

function Details(props) {
    const [details, setDetails] = useState({})

    const renderDetails = async () => {
        const rawDetails = await getDetails(props.name)
        setDetails(rawDetails)
    }

    useEffect(() => {
        renderDetails()
    })

    return (
        <ul>
            <li>Name: {details.name}</li>
            <li>Bio: {details.bio}</li>
            <li>Location: {details.location}</li>
            <li>Repos: {details.repos}</li>
            <li>Followers: {details.followers}</li>
            <li>Following: {details.following}</li>
        </ul>
    )
}

export default Details