import axios from 'axios'
import apiUrl from '../utilities/apiUrl'
import authorizationHeader from '../utilities/authorizationHeader'
import getDetails from '../utilities/getDetails'
import getRepos from '../utilities/getRepos'
import getCommits from '../utilities/getCommits'
import cleanUp from '../utilities/cleanUp'

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
        expect(testDetails.name).toBeTruthy()
        expect(testDetails.location).toBeTruthy()
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
})

// describe('cleanUp utility', () => {
//     it('does something', () => {
//         // const results = cleanUp()
//         const controller = new AbortController()
//         const signal = controller.signal
//         const results = axios({method: 'get', url: 'https://api.github.com/users/jtreeves/events', signal})
//         // jest.setTimeout(1000)
//         // cleanUp()
//         controller.abort()
//         console.log('RESULTS: ', results)
//         expect(1).toBe(2)
//     })
// })