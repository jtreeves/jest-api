import axios from 'axios'
import apiUrl from './apiUrl'

async function getRepos(name) {
    try {
        const fullUrl = apiUrl + name + '/repos?sort=updated'
        const results = await axios.get(fullUrl)
        const repos = results.data.map(result => {
            return result.name
        })
        return repos
    } catch (error) {
        console.log(error)
    }
}

export default getRepos