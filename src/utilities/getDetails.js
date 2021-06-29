import axios from 'axios'
import apiUrl from './apiUrl'
import authorizationHeader from './authorizationHeader'

async function getDetails(name) {
    try {
        const fullUrl = apiUrl + name
        const results = await axios.get(
            fullUrl,
            authorizationHeader
        )
        const details = {
            name: results.data.name,
            bio: results.data.bio,
            location: results.data.location,
            repos: results.data.public_repos,
            followers: results.data.followers,
            following: results.data.following
        }
        return details
    } catch (error) {
        return 'User not found'
    }
}

export default getDetails