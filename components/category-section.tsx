import Link from "next/link"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/data"

export default function CategorySection() {
  return (
    <section id="categories" className="container mx-auto py-12 px-4 md:py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Cybersecurity Categories</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-card hover:bg-accent transition-colors duration-300 rounded-lg p-6 border border-border"
          >
            <h3 className="text-xl font-bold mb-4">{category.name}</h3>
            <p className="text-muted-foreground mb-6">{category.description}</p>
            <Button variant="outline" asChild>
              <Link href={`/category/${category.id}`}>Explore {category.name}</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
