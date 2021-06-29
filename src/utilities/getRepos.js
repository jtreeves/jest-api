import axios from 'axios'
import apiUrl from './apiUrl'
import authorizationHeader from './authorizationHeader'

async function getRepos(name) {
    try {
        const fullUrl = apiUrl + name + '/repos?sort=updated'
        const results = await axios.get(
            fullUrl,
            authorizationHeader
        )
        const repos = results.data.map(result => {
            return result.name
        })
        return repos
    } catch (error) {
        return 'User not found'
    }
}

export default getRepos