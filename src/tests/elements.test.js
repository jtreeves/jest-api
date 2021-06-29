import { render, screen, act } from '@testing-library/react'
import Commits from '../components/elements/Commits'

describe('Commits element', () => {
    it('contains one heading', () => {
        act(() => {
            render(
                <Commits name='jtreeves' />
            )
        })
        const headings = screen.getAllByRole('heading')
        expect(headings.length).toBe(1)
    })
})