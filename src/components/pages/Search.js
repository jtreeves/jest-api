import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Form from '../elements/Form'
import '../../style/search.css'

function Search() {
    const [name, setName] = useState('')
    const [clicked, setClicked] = useState(false)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setClicked(true)
    }

    if (!clicked) {
        return (
            <main>
                <p>Search a user</p>

                <Form 
                    name={name}
                    handleName={handleName}
                    handleSubmit={handleSubmit}
                />
            </main>
        )
    } else {
        return (
            <Redirect 
                to={{
                    pathname: "/results",
                    state: {
                        name: name
                    }
                }}
            />
        )
    }
}

export default Search