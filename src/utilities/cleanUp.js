function cleanUp() {
    const controller = new AbortController()
    return controller.abort()
}

export default cleanUp