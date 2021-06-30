import axios from 'axios'
import authorizationHeader from './authorizationHeader'

async function vetRequest(url) {
    try {
        const results = await axios.get(
            url,
            authorizationHeader
        )
        return results
    } catch (error) {
        throw 'User not found'
    }
}

export default vetRequest