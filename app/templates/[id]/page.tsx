"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, Heart, Share2, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { useMobile } from "@/hooks/use-mobile"

// Sample template data
const templates = [
  {
    id: 1,
    title: "Modern Business Card",
    category: "PSD",
    image: "/placeholder.svg?height=400&width=600",
    price: 0,
    downloads: 1245,
    description:
      "A clean and modern business card template perfect for professionals in any industry. Easy to customize with your own branding.",
    features: [
      "Fully layered PSD file",
      "Print ready (CMYK, 300 DPI)",
      "3.5 x 2 inches with bleed",
      "Well organized layers",
      "Free fonts used",
    ],
    author: "Design Hub Team",
    dateAdded: "2023-05-15",
    fileSize: "15.2 MB",
    relatedTemplates: [2, 5, 8],
  },
  {
    id: 2,
    title: "Creative Resume Template",
    category: "PSD",
    image: "/placeholder.svg?height=400&width=600",
    price: 19.99,
    downloads: 876,
    description:
      "Stand out from the crowd with this creative resume template. Perfect for designers, artists, and creative professionals.",
    features: [
      "Fully layered PSD file",
      "Print ready (CMYK, 300 DPI)",
      "A4 size with bleed",
      "Well organized layers",
      "Free fonts used",
    ],
    author: "Design Hub Team",
    dateAdded: "2023-06-22",
    fileSize: "22.8 MB",
    relatedTemplates: [1, 3, 5],
  },
]

export default function TemplateDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const isMobile = useMobile()
  const [activeTab, setActiveTab] = useState("details")

  // Find the template by ID
  const template = templates.find((t) => t.id === Number.parseInt(params.id)) || templates[0]

  // Get related templates
  const relatedTemplates = templates.filter((t) => template.relatedTemplates?.includes(t.id)).slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => router.back()} aria-label="Back">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold hidden sm:inline-block">Design Hub</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-4 md:py-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
            {/* Template Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border">
              <Image src={template.image || "/placeholder.svg"} alt={template.title} fill className="object-cover" />
            </div>

            {/* Template Info */}
            <div className="flex flex-col space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="mb-2">
                    {template.category}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold">{template.title}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-muted-foreground text-sm">By {template.author}</p>
                  <span className="text-muted-foreground">•</span>
                  <p className="text-muted-foreground text-sm">{template.downloads} downloads</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-2xl md:text-3xl font-bold">
                  {template.price === 0 ? "Free" : `$${template.price}`}
                </div>
                <Button className="flex-1 md:flex-none" size={isMobile ? "default" : "lg"}>
                  {template.price === 0 ? (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Download Now
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </>
                  )}
                </Button>
                {!isMobile && template.price > 0 && (
                  <Button variant="outline" size="lg">
                    Buy Now
                  </Button>
                )}
              </div>

              {isMobile && template.price > 0 && (
                <Button variant="outline" className="w-full">
                  Buy Now
                </Button>
              )}

              <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab} className="mt-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="mt-4 space-y-4">
                  <p className="text-muted-foreground">{template.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium">File Format</p>
                      <p className="text-muted-foreground">{template.category}</p>
                    </div>
                    <div>
                      <p className="font-medium">File Size</p>
                      <p className="text-muted-foreground">{template.fileSize}</p>
                    </div>
                    <div>
                      <p className="font-medium">Date Added</p>
                      <p className="text-muted-foreground">{template.dateAdded}</p>
                    </div>
                    <div>
                      <p className="font-medium">Downloads</p>
                      <p className="text-muted-foreground">{template.downloads}</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="mt-4">
                  <ul className="space-y-2">
                    {template.features?.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Related Templates */}
          {relatedTemplates.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl font-bold mb-6">Related Templates</h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                {relatedTemplates.map((template) => (
                  <div key={template.id} className="group relative overflow-hidden rounded-lg border">
                    <Link href={`/templates/${template.id}`}>
                      <div className="aspect-[3/2] w-full overflow-hidden">
                        <Image
                          src={template.image || "/placeholder.svg"}
                          alt={template.title}
                          width={300}
                          height={200}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-2 sm:p-4">
                        <h3 className="line-clamp-1 text-sm sm:text-base font-medium">{template.title}</h3>
                        <div className="mt-1 sm:mt-2 flex items-center justify-between">
                          <Badge variant={template.price === 0 ? "secondary" : "outline"}>
                            {template.price === 0 ? "Free" : `$${template.price}`}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{template.downloads} downloads</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-4 md:py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-xs md:text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Design Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs md:text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-xs md:text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-xs md:text-sm text-muted-foreground underline-offset-4 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

