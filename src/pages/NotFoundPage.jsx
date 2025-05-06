import { Link } from "react-router-dom"
import Button from "../components/ui/Button"

function NotFoundPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:py-24 text-center">
      <div className="blob-primary p-8 md:p-12 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 font-comic">404 - PAGE NOT FOUND!</h1>
        <p className="text-xl mb-8 font-comic">Oops! Looks like this page has disappeared into cyberspace.</p>
        <Button size="lg" className="border-2 border-black bg-secondary hover:bg-secondary/90 cartoon-shadow" asChild>
          <Link to="/">GO BACK HOME</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFoundPage
