// 监听主线程传过来的消息
self.onmessage = message => {
    // TODO 执行其他逻辑

    self.postMessage(`我已经接收到了你的消息--${message.data.info}`)
}
