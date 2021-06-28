import axios from 'axios'

const githubUrl = 'https://api.github.com/users/jtreeves/events'

async function getCommits() {
    try {
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