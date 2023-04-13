import { useEffect, useState } from 'react'
import * as browser from 'webextension-polyfill'

export const Popup = () => {
  const [value, setValue] = useState<string>()

  function handleOpenOptionsPage() {
    browser.runtime.openOptionsPage()
  }

  useEffect(() => {
    browser.storage.local.get('__es__').then(result => setValue(result['__es__']))
  }, [])

  return (
    <div>
      <h2 className="text-xl">Popup: {value}</h2>
      <div className="flex justify-center py-4">
        <button className="w-32 p-2 bg-blue-700 text-white" onClick={handleOpenOptionsPage}>
          Open options page
        </button>
      </div>
    </div>
  )
}
