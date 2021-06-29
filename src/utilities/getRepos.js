import axios from 'axios'
import apiUrl from './apiUrl'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

async function getRepos(name) {
    try {
        const fullUrl = apiUrl + name + '/repos?sort=updated'
        const results = await axios.get(
            fullUrl,
            {
                headers: {
                    'Authorization': GITHUB_TOKEN
                }
            }
        )
        const repos = results.data.map(result => {
            return result.name
        })
        return repos
    } catch (error) {
        console.log(error)
    }
}

export default getRepos