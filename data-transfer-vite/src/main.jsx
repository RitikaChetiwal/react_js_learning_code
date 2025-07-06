import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { Parent } from './data-transfer/child-children/class-component/Parent'
import { Parent } from './data-transfer/child-children/functional-component/Parent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Parent />
  </StrictMode>,
)
