"use client"

import { Textarea } from "@/components/ui/textarea"

import { SelectItem } from "@/components/ui/select"

import { SelectContent } from "@/components/ui/select"

import { SelectValue } from "@/components/ui/select"

import { SelectTrigger } from "@/components/ui/select"

import { Select } from "@/components/ui/select"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { BarChart3, FileUp, Grid, LayoutDashboard, LogOut, Menu, Plus, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"
import { UserAccountMenu } from "@/components/user-account-menu"

// Sample data for creator dashboard
const creatorStats = {
  totalDesigns: 12,
  totalDownloads: 1245,
  totalEarnings: 349.99,
  pendingDesigns: 2,
}

const recentDesigns = [
  {
    id: 1,
    title: "Modern Business Card",
    category: "PSD",
    image: "/placeholder.svg?height=200&width=300",
    price: 0,
    downloads: 245,
    status: "approved",
    date: "2023-12-15",
  },
  {
    id: 2,
    title: "Creative Resume Template",
    category: "PSD",
    image: "/placeholder.svg?height=200&width=300",
    price: 19.99,
    downloads: 76,
    status: "approved",
    date: "2023-11-22",
  },
  {
    id: 3,
    title: "Social Media Kit",
    category: "PSB",
    image: "/placeholder.svg?height=200&width=300",
    price: 29.99,
    downloads: 43,
    status: "pending",
    date: "2023-12-28",
  },
  {
    id: 4,
    title: "Logo Template Pack",
    category: "CDR",
    image: "/placeholder.svg?height=200&width=300",
    price: 0,
    downloads: 134,
    status: "pending",
    date: "2023-12-30",
  },
]

// Creator profile data
const creatorProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/placeholder.svg?height=100&width=100",
  role: "Creator",
  joinDate: "January 2023",
  bio: "Professional graphic designer specializing in branding and UI design templates.",
}

export default function CreatorDashboard() {
  const router = useRouter()
  const isMobile = useMobile()
  const [activeTab, setActiveTab] = useState("overview")

  const handleLogout = () => {
    // In a real app, you would handle logout here
    router.push("/")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-background">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/placeholder.svg?height=30&width=30" width={30} height={30} alt="Design Hub Logo" />
              <span className="font-bold">Design Hub</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="px-4 py-2">
              <h2 className="mb-2 text-lg font-semibold tracking-tight">Dashboard</h2>
              <div className="space-y-1">
                <Button
                  variant={activeTab === "overview" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("overview")}
                >
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Overview
                </Button>
                <Button
                  variant={activeTab === "designs" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("designs")}
                >
                  <Grid className="mr-2 h-4 w-4" />
                  My Designs
                </Button>
                <Button
                  variant={activeTab === "upload" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("upload")}
                >
                  <FileUp className="mr-2 h-4 w-4" />
                  Upload Design
                </Button>
                <Button
                  variant={activeTab === "analytics" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("analytics")}
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Analytics
                </Button>
              </div>
            </div>
            <div className="px-4 py-2">
              <h2 className="mb-2 text-lg font-semibold tracking-tight">Account</h2>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </nav>

          {/* Creator Profile Card */}
          <div className="mt-auto p-4 border-t">
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/40">
              <Image
                src={creatorProfile.avatar || "/placeholder.svg"}
                width={60}
                height={60}
                alt={creatorProfile.name}
                className="rounded-full border-2 border-primary mb-2"
              />
              <h3 className="font-medium">{creatorProfile.name}</h3>
              <p className="text-xs text-muted-foreground">{creatorProfile.role}</p>
              <p className="text-xs text-muted-foreground mt-1">Member since {creatorProfile.joinDate}</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Header - Mobile */}
          <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background px-4 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <div className="flex flex-col gap-6 py-6">
                  <Link href="/" className="flex items-center gap-2">
                    <Image src="/placeholder.svg?height=30&width=30" width={30} height={30} alt="Design Hub Logo" />
                    <span className="font-bold">Design Hub</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    <div className="space-y-1">
                      <Button
                        variant={activeTab === "overview" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => {
                          setActiveTab("overview")
                          document.querySelector("[data-radix-collection-item]")?.click()
                        }}
                      >
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Overview
                      </Button>
                      <Button
                        variant={activeTab === "designs" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => {
                          setActiveTab("designs")
                          document.querySelector("[data-radix-collection-item]")?.click()
                        }}
                      >
                        <Grid className="mr-2 h-4 w-4" />
                        My Designs
                      </Button>
                      <Button
                        variant={activeTab === "upload" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => {
                          setActiveTab("upload")
                          document.querySelector("[data-radix-collection-item]")?.click()
                        }}
                      >
                        <FileUp className="mr-2 h-4 w-4" />
                        Upload Design
                      </Button>
                      <Button
                        variant={activeTab === "analytics" ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => {
                          setActiveTab("analytics")
                          document.querySelector("[data-radix-collection-item]")?.click()
                        }}
                      >
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Analytics
                      </Button>
                    </div>
                    <div className="space-y-1">
                      <Button variant="ghost" className="w-full justify-start">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </Button>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
            <div className="flex-1">
              <h1 className="text-lg font-semibold">Creator Dashboard</h1>
            </div>
            <UserAccountMenu showFullName={false} />
            <ThemeToggle />
          </header>

          {/* Dashboard Content */}
          <div className="container py-6 md:py-8">
            <div className="md:hidden">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="designs">Designs</TabsTrigger>
                  <TabsTrigger value="upload">Upload</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="hidden md:flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Creator Dashboard</h1>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <UserAccountMenu
                  variant="outline"
                  userName={creatorProfile.name}
                  userEmail={creatorProfile.email}
                  userImage={creatorProfile.avatar}
                />
              </div>
            </div>

            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Designs</CardTitle>
                      <Grid className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{creatorStats.totalDesigns}</div>
                      <p className="text-xs text-muted-foreground">+2 from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
                      <FileUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{creatorStats.totalDownloads}</div>
                      <p className="text-xs text-muted-foreground">+180 from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">${creatorStats.totalEarnings}</div>
                      <p className="text-xs text-muted-foreground">+$42.50 from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Pending Designs</CardTitle>
                      <Settings className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{creatorStats.pendingDesigns}</div>
                      <p className="text-xs text-muted-foreground">Awaiting approval</p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Recent Designs</h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {recentDesigns.map((design) => (
                      <Card key={design.id} className="overflow-hidden">
                        <div className="relative aspect-[3/2] w-full">
                          <Image
                            src={design.image || "/placeholder.svg"}
                            alt={design.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute right-2 top-2">
                            <Badge variant={design.status === "approved" ? "secondary" : "outline"}>
                              {design.status}
                            </Badge>
                          </div>
                        </div>
                        <CardHeader className="p-3">
                          <CardTitle className="text-base">{design.title}</CardTitle>
                          <CardDescription>
                            {design.category} • ${design.price}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="p-3 pt-0 flex justify-between">
                          <span className="text-xs text-muted-foreground">{design.downloads} downloads</span>
                          <span className="text-xs text-muted-foreground">{design.date}</span>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Designs Tab */}
            {activeTab === "designs" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">My Designs</h2>
                  <Button onClick={() => setActiveTab("upload")}>
                    <Plus className="mr-2 h-4 w-4" />
                    Upload New
                  </Button>
                </div>

                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">All Designs</TabsTrigger>
                    <TabsTrigger value="approved">Approved</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {recentDesigns.map((design) => (
                        <Card key={design.id} className="overflow-hidden">
                          <div className="relative aspect-[3/2] w-full">
                            <Image
                              src={design.image || "/placeholder.svg"}
                              alt={design.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute right-2 top-2">
                              <Badge variant={design.status === "approved" ? "secondary" : "outline"}>
                                {design.status}
                              </Badge>
                            </div>
                          </div>
                          <CardHeader className="p-3">
                            <CardTitle className="text-base">{design.title}</CardTitle>
                            <CardDescription>
                              {design.category} • ${design.price}
                            </CardDescription>
                          </CardHeader>
                          <CardFooter className="p-3 pt-0 flex justify-between">
                            <span className="text-xs text-muted-foreground">{design.downloads} downloads</span>
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="approved" className="mt-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {recentDesigns
                        .filter((design) => design.status === "approved")
                        .map((design) => (
                          <Card key={design.id} className="overflow-hidden">
                            <div className="relative aspect-[3/2] w-full">
                              <Image
                                src={design.image || "/placeholder.svg"}
                                alt={design.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <CardHeader className="p-3">
                              <CardTitle className="text-base">{design.title}</CardTitle>
                              <CardDescription>
                                {design.category} • ${design.price}
                              </CardDescription>
                            </CardHeader>
                            <CardFooter className="p-3 pt-0 flex justify-between">
                              <span className="text-xs text-muted-foreground">{design.downloads} downloads</span>
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="pending" className="mt-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {recentDesigns
                        .filter((design) => design.status === "pending")
                        .map((design) => (
                          <Card key={design.id} className="overflow-hidden">
                            <div className="relative aspect-[3/2] w-full">
                              <Image
                                src={design.image || "/placeholder.svg"}
                                alt={design.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <CardHeader className="p-3">
                              <CardTitle className="text-base">{design.title}</CardTitle>
                              <CardDescription>
                                {design.category} • ${design.price}
                              </CardDescription>
                            </CardHeader>
                            <CardFooter className="p-3 pt-0 flex justify-between">
                              <span className="text-xs text-muted-foreground">Pending approval</span>
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {/* Upload Tab */}
            {activeTab === "upload" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Upload New Design</h2>
                  <Card>
                    <CardContent className="p-6">
                      <form className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="title">Design Title</Label>
                            <Input id="title" placeholder="Enter design title" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="psd">PSD</SelectItem>
                                <SelectItem value="psb">PSB</SelectItem>
                                <SelectItem value="cdr">CDR</SelectItem>
                                <SelectItem value="ai">AI</SelectItem>
                                <SelectItem value="sketch">Sketch</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="price">Price ($)</Label>
                            <Input id="price" type="number" min="0" step="0.01" placeholder="0.00" />
                            <p className="text-xs text-muted-foreground">Set to 0 for free designs</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="tags">Tags</Label>
                            <Input id="tags" placeholder="Separate tags with commas" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="description">Description</Label>
                          <Textarea id="description" placeholder="Describe your design" rows={4} />
                        </div>

                        <div className="space-y-2">
                          <Label>Preview Image</Label>
                          <div className="flex items-center justify-center w-full">
                            <label
                              htmlFor="preview-image"
                              className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <FileUp className="w-8 h-8 mb-4 text-muted-foreground" />
                                <p className="mb-2 text-sm text-muted-foreground">
                                  <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-muted-foreground">PNG, JPG or GIF (MAX. 2MB)</p>
                              </div>
                              <input id="preview-image" type="file" className="hidden" />
                            </label>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Design File</Label>
                          <div className="flex items-center justify-center w-full">
                            <label
                              htmlFor="design-file"
                              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <FileUp className="w-6 h-6 mb-2 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">
                                  Upload your design file (PSD, PSB, CDR, etc.)
                                </p>
                              </div>
                              <input id="design-file" type="file" className="hidden" />
                            </label>
                          </div>
                        </div>

                        <div className="flex justify-end gap-2">
                          <Button variant="outline" type="button">
                            Cancel
                          </Button>
                          <Button type="submit">Upload Design</Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === "analytics" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Analytics</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Overview</CardTitle>
                    <CardDescription>View your design performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                      <p className="text-muted-foreground">Analytics chart will be displayed here</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Performing Designs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentDesigns.slice(0, 3).map((design, index) => (
                          <div key={design.id} className="flex items-center gap-4">
                            <div className="font-bold text-muted-foreground">{index + 1}</div>
                            <div className="relative w-12 h-12 overflow-hidden rounded">
                              <Image
                                src={design.image || "/placeholder.svg"}
                                alt={design.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-medium">{design.title}</h4>
                              <p className="text-xs text-muted-foreground">{design.downloads} downloads</p>
                            </div>
                            <div className="text-sm font-medium">${design.price}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Earnings by Month</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] flex items-center justify-center bg-muted rounded-md">
                        <p className="text-muted-foreground">Monthly earnings chart will be displayed here</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

