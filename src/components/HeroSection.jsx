import { Link } from "react-router-dom"
import Button from "./ui/Button"
import CyberRobot from "./CyberRobot"

function HeroSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="blob-primary p-6 md:p-10 mb-6 max-w-2xl mx-auto md:mx-0">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-comic">CYBER SECURITY</h1>
            </div>
            <div className="blob-primary p-6 md:p-10 max-w-3xl mx-auto md:mx-0">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-comic">TALENT SHOWCASE</h1>
              <p className="text-xl md:text-2xl mb-8 font-comic">
                Connect, learn, and have fun with cybersecurity tools & games!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild className="border-2 border-black cartoon-shadow">
                  <Link to="/#categories">See The Cool Stuff!</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-black bg-white hover:bg-primary cartoon-shadow"
                >
                  <Link to="/about">What's This About?</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <CyberRobot />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
