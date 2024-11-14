import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './custom-bootstrap.scss';

import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App/>
  </StrictMode>,
)
