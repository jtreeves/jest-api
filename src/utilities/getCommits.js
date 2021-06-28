import axios from 'axios'

async function getCommits(name) {
    try {
        const githubUrl = 'https://api.github.com/users/' + name + '/events'
        const results = await axios.get(githubUrl)
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