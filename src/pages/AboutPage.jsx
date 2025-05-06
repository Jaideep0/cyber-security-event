import { Link } from "react-router-dom"
import Button from "../components/ui/Button"

function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="blob-primary p-6 md:p-8 mb-8 text-center">
          <h1 className="text-4xl font-bold font-comic">ABOUT THE EVENT</h1>
        </div>

        <div className="blob-secondary p-8 mb-12">
          <p className="text-xl mb-6 font-comic">
            The Southwestern Ontario Cyber Talent Showcase (SWOCTS) is a super cool event bringing together students,
            graduates, cybersecurity professionals, vendors, and leading cybersecurity companies from Windsor-Essex and
            beyond.
          </p>

          <h2 className="text-2xl font-bold mb-4 font-comic">OUR MISSION</h2>
          <p className="text-lg mb-6 font-comic">
            Our goal is to bridge talent with opportunities, foster industry connections, and strengthen the local
            cybersecurity community. We believe in creating an environment where knowledge sharing and networking can
            thrive.
          </p>

          <h2 className="text-2xl font-bold mb-4 font-comic">WHAT TO EXPECT</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li className="text-lg font-comic">Engage with top cybersecurity companies & vendors</li>
            <li className="text-lg font-comic">Explore career and internship opportunities</li>
            <li className="text-lg font-comic">Network with industry experts and like-minded peers</li>
            <li className="text-lg font-comic">Gain insights into the latest trends in cybersecurity</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 font-comic">INTERACTIVE CYBERSECURITY BOOTH</h2>
          <p className="text-lg mb-6 font-comic">
            Our booth will engage participants in hands-on cybersecurity experiences and mini-games, designed to educate
            and entertain. We aim to raise awareness about password security, ethical hacking, OSINT (Open Source
            Intelligence), and red team vs. blue team cyber strategies.
          </p>
        </div>

        <div className="blob-primary p-8 text-center">
          <h2 className="text-2xl font-bold mb-6 font-comic">JOIN US!</h2>
          <p className="text-xl mb-8 font-comic">
            Mark your calendar and get ready to be amazed at the Southwestern Ontario Cyber Talent Showcase!
          </p>
          <Button size="lg" className="border-2 border-black bg-secondary hover:bg-secondary/90 cartoon-shadow" asChild>
            <Link to="/#categories">CHECK OUT THE COOL STUFF!</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
