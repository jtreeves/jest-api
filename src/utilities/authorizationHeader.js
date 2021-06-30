const GITHUB_TOKEN = process.env.GITHUB_TOKEN

const authorizationHeader = {
    headers: {
        'Authorization': 'token ' + GITHUB_TOKEN
    }
}

export default authorizationHeader