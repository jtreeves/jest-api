import apiUrl from './apiUrl'
import vetRequest from './vetRequest'

async function getRepos(name) {
    try {
        const fullUrl = apiUrl + name + '/repos?sort=updated'
        const results = await vetRequest(fullUrl)
        const repos = results.data.map(result => {
            return result.name
        })
        return repos
    } catch (error) {
        throw error
    }
}

export default getRepos