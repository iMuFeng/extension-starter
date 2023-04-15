import { defineManifest } from '@crxjs/vite-plugin'
import pkg from './package.json'

export default defineManifest(async (env) => ({
  manifest_version: 3,
  name: 'Extension Starter',
  version: pkg.version,
  action: {
    default_icon: 'src/assets/icon-512.png',
    default_popup: 'src/popup/index.html',
  },
  options_ui: {
    page: 'src/options/index.html',
    open_in_tab: true,
  },
  background: {
    service_worker: 'src/background/index.ts',
  },
  icons: {
    16: 'src/assets/icon-512.png',
    48: 'src/assets/icon-512.png',
    128: 'src/assets/icon-512.png',
  },
  permissions: [
    'activeTab',
    'tabs',
    'scripting',
    'storage'
  ],
  host_permissions: ['<all_urls>'],
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/contentScripts/index.tsx'],
      run_at: 'document_start',
    },
  ],
  content_security_policy: {
    extension_pages: 'script-src \'self\'; object-src \'self\'',
  },
  // default_locale: 'en',
}))
