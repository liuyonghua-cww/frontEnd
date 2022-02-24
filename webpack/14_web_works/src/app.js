const worker = new Worker(new URL('./work.js', import.meta.url))
worker.postMessage({info: 'hello'})
worker.onmessage = message => {
    console.log(message.data);
}
