import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Counterapp } from './state-management/class-components/Counterapp'
// import App from './App.jsx'
// import { Counterapp } from './state-management/functional-components/Counterapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Counterapp/>
  </StrictMode>,
)