const GITHUB_TOKEN = process.env.GITHUB_TOKEN

const authorizationHeader = {
    headers: {
        'Authorization': GITHUB_TOKEN
    }
}

export default authorizationHeader