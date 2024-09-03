import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Utiliza o método createRoot do ReactDOM para criar um "root" React e renderiza o componente App dentro dele
ReactDOM.createRoot(document.getElementById('root')).render(
  // Usa o modo estrito (StrictMode) para realizar verificações adicionais e destacar potenciais problemas
  <React.StrictMode>
    {/* Renderiza o componente principal da aplicação (App) */}
    <App />
  </React.StrictMode>,
)
