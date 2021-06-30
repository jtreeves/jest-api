import apiUrl from './apiUrl'
import vetRequest from './vetRequest'

async function getCommits(name) {
    try {
        const fullUrl = apiUrl + name + '/events'
        const results = await vetRequest(fullUrl)
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
        throw error
    }
}

export default getCommits