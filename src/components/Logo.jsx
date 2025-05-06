import { Link } from "react-router-dom"

function Logo() {
  return (
    <Link to="/" className="flex items-center no-underline">
      <div className="relative">
        <svg width="120" height="80" viewBox="0 0 120 80" className="fill-yellow-300 stroke-black stroke-2">
          <path d="M30,10 Q40,5 50,10 Q60,15 70,10 Q80,5 90,10 Q100,15 110,20 Q115,30 110,40 Q105,50 110,60 Q115,70 100,75 Q80,80 60,75 Q40,80 20,75 Q10,70 15,60 Q20,50 15,40 Q10,30 15,20 Q20,10 30,10 Z" />
          <circle cx="35" cy="30" r="3" className="fill-black" />
          <circle cx="85" cy="30" r="3" className="fill-black" />
          <path d="M45,50 Q60,60 75,50" fill="none" />
          <path d="M20,15 L15,5 L10,15" fill="none" />
          <path d="M100,15 L105,5 L110,15" fill="none" />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-xl text-black">
          SWOCTS
        </div>
      </div>
    </Link>
  )
}

export default Logo
