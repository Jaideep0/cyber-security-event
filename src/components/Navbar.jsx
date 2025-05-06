"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Logo from "./Logo"
import Button from "./ui/Button"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full py-4">
      <div className="container flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-4">
          <Link to="/" className="nav-item cartoon-shadow">
            Home
          </Link>
          <Link to="/#categories" className="nav-item cartoon-shadow">
            Categories
          </Link>
          <Link to="/about" className="nav-item cartoon-shadow">
            About
          </Link>
        </nav>

        <div className="flex md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="border-2 border-black bg-white hover:bg-primary cartoon-shadow"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4">
          <nav className="flex flex-col gap-4">
            <Link to="/" className="nav-item cartoon-shadow" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/#categories" className="nav-item cartoon-shadow" onClick={() => setIsMenuOpen(false)}>
              Categories
            </Link>
            <Link to="/about" className="nav-item cartoon-shadow" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
