import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import { categories } from "@/lib/data"
import { ShieldCheck, Lock, Eye, Network, FileSearch, Cpu, Wifi, FileCode, Mail } from "lucide-react"

const categoryIcons = {
  authentication: ShieldCheck,
  osint: Eye,
  "cyber-awareness": Lock,
  "web-exploitation": Network,
  "digital-forensics": FileSearch,
  "network-reconnaissance": Cpu,
  "network-scanning": Wifi,
  "data-hiding": FileCode,
  "email-security": Mail,
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />

      <section id="categories" className="container mx-auto py-12 px-4 md:py-24">
        <div className="blob-primary p-6 md:p-8 mb-12 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold font-comic">CYBER SECURITY GAMES!</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = categoryIcons[category.id as keyof typeof categoryIcons] || ShieldCheck

            return (
              <Link key={category.id} href={`/category/${category.id}`} className="no-underline">
                <div className="blob-secondary p-6 h-full flex flex-col transition-transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="bg-white p-2 rounded-full border-2 border-black mr-3 cartoon-shadow">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold font-comic">{category.name}</h3>
                  </div>
                  <p className="text-foreground mb-6 flex-grow font-comic">{category.description}</p>
                  <Button
                    variant="default"
                    className="w-full border-2 border-black bg-white hover:bg-primary cartoon-shadow"
                  >
                    Play With {category.name.split(" ")[0]}!
                  </Button>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
