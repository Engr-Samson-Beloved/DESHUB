"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Download, Filter, Menu, Search, ShoppingCart, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useMobile } from "@/hooks/use-mobile"
import { UserAccountMenu } from "@/components/user-account-menu"

// Template categories
const categories = ["All", "PSD", "PSB", "CDR", "Free", "Premium"]

// Sample template data
const templates = [
  {
    id: 1,
    title: "Modern Business Card",
    category: "PSD",
    image: "/placeholder.svg?height=200&width=300",
    price: 0,
    downloads: 1245,
  },
  {
    id: 2,
    title: "Creative Resume Template",
    category: "PSD",
    image: "/placeholder.svg?height=200&width=300",
    price: 19.99,
    downloads: 876,
  },
  {
    id: 3,
    title: "Social Media Kit",
    category: "PSB",
    image: "/placeholder.svg?height=200&width=300",
    price: 29.99,
    downloads: 543,
  },
  {
    id: 4,
    title: "Logo Template Pack",
    category: "CDR",
    image: "/placeholder.svg?height=200&width=300",
    price: 0,
    downloads: 2134,
  },
  {
    id: 5,
    title: "Brochure Design",
    category: "PSD",
    image: "/placeholder.svg?height=200&width=300",
    price: 14.99,
    downloads: 765,
  },
  {
    id: 6,
    title: "Website UI Kit",
    category: "PSB",
    image: "/placeholder.svg?height=200&width=300",
    price: 39.99,
    downloads: 432,
  },
  {
    id: 7,
    title: "Icon Pack",
    category: "CDR",
    image: "/placeholder.svg?height=200&width=300",
    price: 0,
    downloads: 1876,
  },
  {
    id: 8,
    title: "Magazine Layout",
    category: "PSD",
    image: "/placeholder.svg?height=200&width=300",
    price: 24.99,
    downloads: 654,
  },
]

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const isMobile = useMobile()

  // Filter templates based on active category and search query
  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = activeCategory === "All" || template.category === activeCategory
    const matchesPricing =
      (activeCategory === "Free" && template.price === 0) ||
      (activeCategory === "Premium" && template.price > 0) ||
      (activeCategory !== "Free" && activeCategory !== "Premium")
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesPricing && matchesSearch
  })

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <div className="flex flex-col gap-6 py-6">
                  <Link href="/" className="flex items-center gap-2">
                    <Image src="/placeholder.svg?height=30&width=30" width={30} height={30} alt="Design Hub Logo" />
                    <span className="font-bold">Design Hub</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    <Link href="/" className="text-muted-foreground hover:text-foreground">
                      Home
                    </Link>
                    <Link href="/templates" className="text-foreground font-medium">
                      Templates
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Pricing
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      About
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Contact
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=30&width=30"
                width={30}
                height={30}
                alt="Design Hub Logo"
                className="hidden sm:block"
              />
              <span className="font-bold">Design Hub</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {showSearch && isMobile ? (
              <div className="absolute inset-0 z-50 flex items-center justify-between bg-background/95 px-4 py-2">
                <Input
                  type="search"
                  placeholder="Search templates..."
                  className="flex-1 mr-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Button variant="ghost" size="icon" onClick={() => setShowSearch(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <>
                <div className="hidden md:block relative w-full max-w-lg">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search templates..."
                    className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setShowSearch(true)}>
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
                <ThemeToggle />
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </Button>
                <div className="hidden md:block">
                  <UserAccountMenu />
                </div>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <UserAccountMenu showFullName={false} />
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-4 md:py-8">
          <div className="mb-4 md:mb-8 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold creative-text-gradient">Design Templates</h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Browse our collection of professional design templates
              </p>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 md:h-9">
                    <Filter className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Filters
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setActiveCategory("All")}>All</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveCategory("Free")}>Free</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveCategory("Premium")}>Premium</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveCategory("PSD")}>PSD</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveCategory("PSB")}>PSB</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveCategory("CDR")}>CDR</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" size="sm" className="h-8 md:h-9">
                Latest
              </Button>
              <Button variant="outline" size="sm" className="h-8 md:h-9">
                Popular
              </Button>
            </div>
          </div>

          <Tabs defaultValue="All" className="mb-4 md:mb-8" value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="mb-4 flex w-full flex-nowrap justify-start gap-1 md:gap-2 bg-muted/50 overflow-x-auto pb-px">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-full whitespace-nowrap px-3 py-1 text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {filteredTemplates.map((template) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-primary/10">
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <Image
                          src={template.image || "/placeholder.svg"}
                          alt={template.title}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                        <div className="absolute right-2 top-2">
                          <Badge variant={template.price === 0 ? "secondary" : "default"} className="text-xs">
                            {template.price === 0 ? "Free" : `$${template.price}`}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="p-2 md:p-4">
                        <CardTitle className="line-clamp-1 text-sm md:text-lg">{template.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                        <div className="flex items-center text-xs md:text-sm text-muted-foreground">
                          <Badge variant="outline" className="mr-2 text-xs">
                            {template.category}
                          </Badge>
                          <Download className="mr-1 h-3 w-3" />
                          {template.downloads}
                        </div>
                      </CardContent>
                      <CardFooter className="p-2 md:p-4">
                        <Button
                          className="w-full text-xs md:text-base"
                          variant={template.price === 0 ? "default" : "outline"}
                          size="sm"
                        >
                          {template.price === 0 ? "Download" : "Buy Now"}
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredTemplates.length === 0 && (
            <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed">
              <p className="text-muted-foreground">No templates found matching your criteria</p>
              <Button
                variant="link"
                onClick={() => {
                  setActiveCategory("All")
                  setSearchQuery("")
                }}
              >
                Clear filters
              </Button>
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

