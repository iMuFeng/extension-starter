import { ChangeEvent, useState } from 'react'
import * as browser from 'webextension-polyfill'

export const Popup = () => {
  const [value, setValue] = useState<string>()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  function handleSave() {
    browser.storage.local.set({
      __es__: value
    })
  }

  return (
    <div>
      <h2 className="text-xl">Options</h2>
      <div className="flex items-center">
        <input className="border border-gray-200 p-3 rounded-md" onChange={handleChange} />
        <button className="w-32 p-1 bg-blue-700 text-white" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  )
}
