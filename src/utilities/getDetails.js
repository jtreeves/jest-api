import apiUrl from './apiUrl'
import vetRequest from './vetRequest'

async function getDetails(name) {
    try {
        const fullUrl = apiUrl + name
        const results = await vetRequest(fullUrl)
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
        throw error
    }
}

export default getDetails