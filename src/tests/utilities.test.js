import apiUrl from '../utilities/apiUrl'
import authorizationHeader from '../utilities/authorizationHeader'
import vetRequest from '../utilities/vetRequest'
import getDetails from '../utilities/getDetails'
import getRepos from '../utilities/getRepos'
import getCommits from '../utilities/getCommits'

describe('apiUrl utility', () => {
    it('returns a string', () => {
        expect(typeof apiUrl).toBe('string')
    })
    
    it('contains URL for GitHub API requests', () => {
        expect(apiUrl).toBe('https://api.github.com/users/')
    })
})

describe('authorizationHeader utility', () => {
    it('returns an object', () => {
        expect(typeof authorizationHeader).toBe('object')
    })
    
    it('contains key for headers', () => {
        expect(authorizationHeader.headers).toBeTruthy()
    })
    
    it('contains nested key for authorization', () => {
        expect(authorizationHeader.headers.Authorization).toBeTruthy()
    })
    
    it('contains token as string within authorization key', () => {
        expect(typeof authorizationHeader.headers.Authorization).toBe('string')
    })
    
    it('contains secret API token', () => {
        expect(authorizationHeader.headers.Authorization).toBe('token ' + process.env.GITHUB_TOKEN)
    })
})

describe('vetRequest utility', () => {
    it('returns an object', async () => {
        const testVet = await vetRequest('https://api.github.com/users/jtreeves')
        expect(typeof testVet).toBe('object')
    })
    
    it('contains a key called data', async () => {
        const testVet = await vetRequest('https://api.github.com/users/jtreeves')
        expect(testVet.data).toBeTruthy()
    })

    it('returns error message if no user exists', async () => {
        try {
            await vetRequest('https://api.github.com/users/ga-jtreeves')
        } catch (error) {
            expect(error).toBe('User not found')
        }
    })
})

describe('getDetails utility', () => {
    it('returns an object', async () => {
        const testDetails = await getDetails('jtreeves')
        expect(typeof testDetails).toBe('object')
    })
    
    it('contains many keys', async () => {
        const testDetails = await getDetails('jtreeves')
        const allKeys = Object.keys(testDetails)
        expect(allKeys.length).toBeGreaterThan(1)
    })
    
    it('contains keys for name and location', async () => {
        const testDetails = await getDetails('jtreeves')
        expect(testDetails.name).toBe('Jackson Reeves')
        expect(testDetails.location).toBe('Atlanta, GA')
    })

    it('returns string on error', async () => {
        try {
            await getDetails('ga-jtreeves')
        } catch (error) {
            expect(error).toBe('User not found')
        }
    })
})

describe('getRepos utility', () => {
    it('returns an array', async () => {
        const testRepos = await getRepos('jtreeves')
        expect(Array.isArray(testRepos)).toBe(true)
    })
    
    it('contains many strings', async () => {
        const testRepos = await getRepos('jtreeves')
        expect(testRepos.length).toBeGreaterThan(1)
        expect(typeof testRepos[0]).toBe('string')
    })

    it('returns string on error', async () => {
        try {
            await getRepos('ga-jtreeves')
        } catch (error) {
            expect(error).toBe('User not found')
        }
    })
})

describe('getCommits utility', () => {
    it('returns an array', async () => {
        const testCommits = await getCommits('jtreeves')
        expect(Array.isArray(testCommits)).toBe(true)
    })
    
    it('contains many strings', async () => {
        const testCommits = await getCommits('jtreeves')
        expect(testCommits.length).toBeGreaterThan(1)
        expect(typeof testCommits[0]).toBe('string')
    })
    
    it('returns string on error', async () => {
        try {
            await getCommits('ga-jtreeves')
        } catch (error) {
            expect(error).toBe('User not found')
        }
    })
})