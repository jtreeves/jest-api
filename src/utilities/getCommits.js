import axios from 'axios'
import apiUrl from './apiUrl'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

async function getCommits(name) {
    try {
        const fullUrl = apiUrl + name + '/events'
        const results = await axios.get(
            fullUrl,
            {
                headers: {
                    'Authorization': GITHUB_TOKEN
                }
            }
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
        console.log(error)
    }
}

export default getCommits