import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Add.jsx'
import Input from './Input';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Input/>
  </StrictMode>,
)
// import React from 'react';
