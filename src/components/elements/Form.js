function Form(props) {
    return (
        <form>
            <label htmlFor="name">
                Name
            </label>

            <input 
                type="text" 
                name="name" 
                id="name"
                value={props.name} 
                onChange={props.handleName} 
            />

            <button onClick={props.handleSubmit}>
                Search GitHub
            </button>
        </form>
    )
}

export default Form