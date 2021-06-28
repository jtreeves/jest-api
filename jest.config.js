module.exports = {
    verbose: true,
    setupFilesAfterEnv: [
        "./src/tests/config.js"
    ],
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy"
    }
}