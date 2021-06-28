import apiUrl from '../utilities/apiUrl'
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