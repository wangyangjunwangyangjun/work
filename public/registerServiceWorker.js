window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
})
window.addEventListener('offline', () => {
  new Notification('提示', {
    body: '快联网！我等不急了！'
  })
})
window.addEventListener('online', () => {
  new Notification('提示', {
    body: '有网络还不刷新？'
  })
})
