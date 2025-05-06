"use client"
import { useParams, Link, Navigate } from "react-router-dom"
import { ChevronLeft } from "lucide-react"
import Button from "../components/ui/Button"
import ToolCard from "../components/ToolCard"
import { categories, tools } from "../data/data"

function CategoryPage() {
  const { id } = useParams()
  const category = categories.find((c) => c.id === id)

  if (!category) {
    return <Navigate to="/404" />
  }

  const categoryTools = tools.filter((tool) => tool.categoryId === id)

  return (
    <div className="container mx-auto py-12 px-4 md:py-24">
      <div className="max-w-4xl mx-auto">
        <Link to="/#categories">
          <Button
            variant="outline"
            className="mb-6 pl-0 border-2 border-black bg-white hover:bg-primary cartoon-shadow"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Categories
          </Button>
        </Link>

        <div className="blob-primary p-6 md:p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-comic">{category.name}</h1>
        </div>

        <div className="blob-secondary p-6 mb-12">
          <p className="text-xl font-comic">{category.description}</p>
        </div>

        <div className="space-y-8">
          {categoryTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {categoryTools.length === 0 && (
          <div className="blob-muted p-12 text-center">
            <h3 className="text-2xl font-medium mb-4 font-comic">No tools available yet</h3>
            <p className="text-muted-foreground font-comic">
              Interactive games for this category will be added soon. Check back later!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryPage
