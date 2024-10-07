import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { Login } from './components/login/login';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
