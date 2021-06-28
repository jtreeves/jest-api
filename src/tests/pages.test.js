import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../components/pages/Home'
import Search from '../components/pages/Search'
import Results from '../components/pages/Results'

describe('Home page', () => {
    it('contains one heading saying Welcome', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        const headings = screen.getAllByRole('heading')
        const pageHeading = screen.getByText('Welcome!')
        expect(headings.length).toBe(1)
        expect(headings[0]).toBe(pageHeading)
    })
    
    it('contains introductory text', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        const introduction = screen.getByText(/Use this website to easily find information about GitHub users/i)
        expect(introduction).toBeTruthy()
    })
})

describe('Search page', () => {
    it('contains one heading saying Search', () => {
        render(<Search />)
        const headings = screen.getAllByRole('heading')
        const pageHeading = screen.getByText('Search')
        expect(headings.length).toBe(1)
        expect(headings[0]).toBe(pageHeading)
    })

    it('contains explanatory text', () => {
        render(<Search />)
        const explanation = screen.getByText(/see lists of their recent repos and commits/i)
        expect(explanation).toBeTruthy()
    })
})

describe('Results page', () => {
    it('contains many headings', () => {
        render(
            <MemoryRouter
                initialEntries={[
                    { state: { name: 'jtreeves' } }
                ]}
            >
                <Results />
            </MemoryRouter>
        )
        const headings = screen.getAllByRole('heading')
        expect(headings.length).toBeGreaterThan(1)
    })

    it('contains an initial heading saying Results', () => {
        render(
            <MemoryRouter
                initialEntries={[
                    { state: { name: 'jtreeves' } }
                ]}
            >
                <Results />
            </MemoryRouter>
        )
        const headings = screen.getAllByRole('heading')
        const pageHeading = screen.getByText('Results')
        expect(headings[0]).toBe(pageHeading)
    })
})