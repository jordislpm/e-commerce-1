import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App/index.tsx'
import './styles/index.css'
import { MyContextProductProvider} from './context/contextProducts/index.tsx'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyContextProductProvider>
    <App />
    </MyContextProductProvider>
  </React.StrictMode>,
)
