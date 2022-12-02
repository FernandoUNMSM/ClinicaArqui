import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ConfigContextProvider } from 'context/configContext'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ConfigContextProvider>
      <App />
    </ConfigContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
)
