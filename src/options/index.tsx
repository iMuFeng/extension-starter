import { createRoot } from 'react-dom/client'

import '../styles/global.css'
import { Popup } from './Options'

createRoot(document.getElementById('app')!).render(<Popup />)
