import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import ARoutes from './ARoutes.tsx'
import { ParallaxProvider } from 'react-scroll-parallax'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParallaxProvider>
      <ARoutes />
    </ParallaxProvider>
  </StrictMode>,
)
