import { createRoot } from 'react-dom/client'

import '../styles/global.css'
import { Popup } from './Popup'

createRoot(document.getElementById('app')!).render(<Popup />)
