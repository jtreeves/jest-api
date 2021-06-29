import axios from 'axios'
import apiUrl from './apiUrl'
import authorizationHeader from './authorizationHeader'

async function getCommits(name) {
    try {
        const fullUrl = apiUrl + name + '/events'
        const results = await axios.get(
            fullUrl,
            authorizationHeader
        )
        const commits = results.data.map(result => {
            if (result.payload.commits) {
                return result.payload.commits[0].message
            } else {
                return null
            }
        })
        const trimmedCommits = commits.filter(commit => {
            return commit !== null
        })
        return trimmedCommits
    } catch (error) {
        return 'User not found'
    }
}

export default getCommits