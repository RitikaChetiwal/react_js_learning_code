import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './context_api/apps/App'
import CounterApp from './counter_app_by_context_api/apps/CountetApp'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <App /> */}
        <CounterApp />
    </StrictMode>
)