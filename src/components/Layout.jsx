import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* SVG Filter for hand-drawn effect */}
      <svg width="0" height="0" className="absolute">
        <filter id="hand-drawn">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
      </svg>
    </div>
  )
}

export default Layout
