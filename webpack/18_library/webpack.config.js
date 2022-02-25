module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'myLibrary.js',
        library: {
            name:  'myLibrary',
            type: 'umd'
        },
        globalObject: 'globalThis'
    }
}
