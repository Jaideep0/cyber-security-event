import { Link } from "react-router-dom"
import { ExternalLink } from "lucide-react"
import Button from "./ui/Button"

function ToolCard({ tool }) {
  return (
    <div className="blob-secondary p-6 transition-transform hover:scale-[1.02]">
      <h2 className="text-2xl font-bold mb-2 font-comic">{tool.name}</h2>
      <p className="mb-4 font-comic">{tool.shortDescription}</p>

      <div className="mb-6">
        <h4 className="font-bold mb-2 font-comic">LEARN STUFF LIKE:</h4>
        <ul className="list-disc pl-6 space-y-1">
          {tool.learningOutcomes.map((outcome, index) => (
            <li key={index} className="font-comic">
              {outcome}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="outline" asChild className="border-2 border-black bg-white hover:bg-primary cartoon-shadow">
          <Link to={`/tool/${tool.id}`}>More Details</Link>
        </Button>
        <Button
          variant="default"
          asChild
          className="border-2 border-black bg-primary hover:bg-primary/90 cartoon-shadow"
        >
          <Link to={`/tool/${tool.id}`}>
            Try It Out! <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default ToolCard
