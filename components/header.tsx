"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Modernisation", href: "/modernisation" },
  {
    name: "Newsroom",
    href: "/newsroom",
    children: [
      { name: "Press Releases", href: "/newsroom/press-releases" },
      { name: "Success Stories", href: "/newsroom/success-stories" },
      { name: "In the Media", href: "/newsroom/media" },
      { name: "Documents", href: "/newsroom/documents" },
    ],
  },
  { name: "FAQs", href: "/faqs" },
]

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className={`${transparent
        ? "absolute top-0 left-0 right-0 z-50 bg-background"
        : "sticky top-0 z-50 w-full bg-background"
        }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Deeds Registry Registry Logo"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>
          <span className="text-lg font-semibold tracking-wide text-foreground uppercase">
            Deeds Registry
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) =>
            item.name === "Newsroom" ? (
              <div key={item.name} className="group flex items-center">
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
                >
                  {item.name}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                
                {/* Mega Menu Content */}
                <div className="invisible absolute left-0 right-0 top-full z-50 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl overflow-hidden rounded-[2.5rem] border border-border bg-white p-8 shadow-2xl shadow-black/5">
                    <div className="grid grid-cols-12 gap-8">
                      {/* Mega Menu Links */}
                      <div className="col-span-8 grid grid-cols-2 gap-8">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="group/item flex gap-4 rounded-3xl p-4 transition-colors hover:bg-[#F9FBF9]"
                          >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1B3B2B]/5 text-[#1B3B2B] transition-colors group-hover/item:bg-[#1B3B2B] group-hover/item:text-white">
                              {/* Dynamic icon mapping could go here, using a default for now */}
                              <Menu className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-[#1B3B2B]">{child.name}</p>
                              <p className="mt-1 text-xs leading-relaxed text-[#1B3B2B]/40">
                                {child.name === "Press Releases" && "Official announcements and formal statements."}
                                {child.name === "Success Stories" && "Real impacts of our digitisation programmes."}
                                {child.name === "In the Media" && "Deeds Registry in national and international news."}
                                {child.name === "Documents" && "Legal frameworks, acts and statutory instruments."}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Mega Menu Featured */}
                      <div className="col-span-4 overflow-hidden rounded-[2rem] bg-[#001D11] p-8 text-white relative group/featured">
                        <div className="absolute inset-0 opacity-20 transition-transform duration-500 group-hover/featured:scale-110">
                          <Image
                            src="/images/news_mega_menu_thumbnail_1773743068722.png"
                            alt="Featured News"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative z-10 flex h-full flex-col justify-end">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5B80B]">Latest Highlight</p>
                          <h4 className="mt-2 font-serif text-xl leading-tight">National Validation <br />Drive 2026</h4>
                          <Link href="/newsroom" className="mt-4 flex items-center gap-2 text-xs font-semibold text-white/60 hover:text-white">
                            READ MORE <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* Login / Register Button */}
        <div className="hidden items-center lg:flex">
          <Button
            variant="outline"
            className="rounded-full border-foreground/30 bg-transparent px-5 py-2 text-sm font-medium text-foreground hover:bg-foreground/5"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm border-l border-border bg-card">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 pt-6">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name} className="flex flex-col gap-2">
                    <p className="font-medium text-foreground">{item.name}</p>
                    <div className="flex flex-col gap-2 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-medium text-foreground hover:text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Button
                variant="outline"
                className="mt-4 w-full rounded-full border-foreground/30 text-foreground"
              >
                Login / Register
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
