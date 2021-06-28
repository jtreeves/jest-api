import { useState } from 'react'
import Search from '../sections/Search'
import Results from '../sections/Results'

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
            <Search 
                name={name}
                handleName={handleName}
                handleSubmit={handleSubmit}
            />
        )
    } else {
        return (
            <Results 
                name={name}
            />
        )
    }
}

export default Home