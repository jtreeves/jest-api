import { useState } from 'react'
import Commits from '../elements/Commits'
import Form from '../sections/Form'

function Home() {
    const [name, setName] = useState('')
    const [redirect, setRedirect] = useState(false)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setRedirect(true)
    }

    if (!redirect) {
        return (
            <Form 
                name={name}
                handleName={handleName}
                handleSubmit={handleSubmit}
            />
        )
    } else {
        return (
            <Commits 
                name={name}
            />
        )
    }
}

export default Home