import { createRoot } from 'react-dom/client'
import { onMessage, sendMessage } from 'webext-bridge/content-script'

import { App } from './App' // Firefox `browser.tabs.executeScript()` requires scripts return a primitive value

;(() => {
  console.info('[extension-starter] Hello world from content script')

  // communication example: get current tab from background page
  onMessage('tab-prev', ({ data }) => {
    console.log(`[extension-starter] Navigate from page "${data.title}"`)
  })

  sendMessage('get-current-tab', undefined, 'background').then(console.log)

  function initApp() {
    const container = document.createElement('div')
    const root = document.createElement('div')

    const shadowDOM = container.attachShadow?.({ mode: __DEV__ ? 'open' : 'closed' }) || container
    shadowDOM.appendChild(root)

    document.documentElement.appendChild(container)
    createRoot(root).render(<App />)
  }

  if (document.readyState === 'complete') {
    initApp()
  } else {
    document.addEventListener('DOMContentLoaded', initApp, false)
  }
})()
