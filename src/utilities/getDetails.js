import axios from 'axios'
import apiUrl from './apiUrl'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

async function getDetails(name) {
    try {
        const fullUrl = apiUrl + name
        const results = await axios.get(
            fullUrl,
            {
                headers: {
                    'Authorization': GITHUB_TOKEN
                }
            }
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
        console.log(error)
    }
}

export default getDetails