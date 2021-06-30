import { render, screen } from '@testing-library/react'
import Header from '../components/elements/Header'
import Footer from '../components/elements/Footer'
import Form from '../components/elements/Form'
import Details from '../components/elements/Details'
import Repos from '../components/elements/Repos'
import Commits from '../components/elements/Commits'

describe('Header element', () => {
    it('contains a banner', () => {
        render(
            <Header />
        )
        const banner = screen.getByRole('banner')
        expect(banner).toBeTruthy()
    })
    
    it('contains name of site', async () => {
        render(
            <Header />
        )
        const banner = screen.getByText('Search GitHub Users')
        expect(banner).toBeTruthy()
    })
})

describe('Footer element', () => {
    it('contains a summarizing text field', () => {
        render(
            <Footer />
        )
        const section = screen.getByRole('contentinfo')
        expect(section).toBeTruthy()
    })
    
    it('contains copyright information', () => {
        render(
            <Footer />
        )
        const section = screen.getByText('© 2021 Jackson Reeves')
        expect(section).toBeTruthy()
    })
})

describe('Form element', () => {
    it('contains a button', () => {
        const mockName = ''
        const mockHandleName = jest.fn()
        const mockHandleSubmit = jest.fn()
        render(
            <Form 
                name={mockName}
                handleName={mockHandleName}
                handleSubmit={mockHandleSubmit}
            />
        )
        const buttonByRole = screen.getByRole('button')
        const buttonByText = screen.getByText('Search GitHub')
        expect(buttonByRole).toBe(buttonByText)
    })
    
    it('contains an input field', () => {
        const mockName = ''
        const mockHandleName = jest.fn()
        const mockHandleSubmit = jest.fn()
        render(
            <Form 
                name={mockName}
                handleName={mockHandleName}
                handleSubmit={mockHandleSubmit}
            />
        )
        const field = screen.getByRole('textbox')
        expect(field.type).toBe('text')
        expect(field.name).toBe('name')
        expect(field.value).toBe(mockName)
    })
    
    it('contains a label', () => {
        const mockName = ''
        const mockHandleName = jest.fn()
        const mockHandleSubmit = jest.fn()
        render(
            <Form 
                name={mockName}
                handleName={mockHandleName}
                handleSubmit={mockHandleSubmit}
            />
        )
        const label = screen.getByLabelText('Name')
        expect(label).toBeTruthy()
    })
})

describe('Details element', () => {
    it('contains one heading with name of element', () => {
        render(
            <Details name='jtreeves' />
        )
        const headings = screen.getAllByRole('heading')
        const elementHeading = screen.getByText('Details')
        expect(headings[0]).toBe(elementHeading)
    })
    
    it('contains list for details', async () => {
        render(
            <Details name='jtreeves' />
        )
        const list = screen.getByRole('list')
        expect(list).toBeTruthy()
    })
})

describe('Repos element', () => {
    it('contains one heading with name of element', () => {
        render(
            <Repos name='jtreeves' />
        )
        const headings = screen.getAllByRole('heading')
        const elementHeading = screen.getByText('Repos')
        expect(headings[0]).toBe(elementHeading)
    })
    
    it('contains list for repos', async () => {
        render(
            <Repos name='jtreeves' />
        )
        const list = screen.getByRole('list')
        expect(list).toBeTruthy()
    })
})

describe('Commits element', () => {
    it('contains one heading with name of element', () => {
        render(
            <Commits name='jtreeves' />
        )
        const headings = screen.getAllByRole('heading')
        const elementHeading = screen.getByText('Commits')
        expect(headings[0]).toBe(elementHeading)
    })
    
    it('contains list for commits', async () => {
        render(
            <Commits name='jtreeves' />
        )
        const list = screen.getByRole('list')
        expect(list).toBeTruthy()
    })
})