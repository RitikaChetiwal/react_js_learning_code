import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import CounterApp from './usememo-hook/CounterApp'
// import { App } from './useeffect-hook/App'
// import './index.css'
// import App from './App.jsx'
import { UseEffect } from './useeffect-hook/UseEffect'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <UseEffect />
    {/* <CounterApp/> */}
  </StrictMode>,
)
