"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  "Property Registration",
  "Title Deed Verification",
  "Mortgage Bond Registration",
  "Accessing Property Records",
  "Deed Validation & Digitisation",
]

export function HeroSection() {
  const [index, setIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % services.length)
        setIsFading(false)
      }, 500) // Duration of fade-out
    }, 4000) // Cycle every 4 seconds

    return () => clearInterval(timer)
  }, [])

  // Get current 3 services starting from index
  const getService = (offset: number) => services[(index + offset) % services.length]

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-[#F5F1EB] pb-12 pt-16 lg:pb-0 lg:pt-0">
      {/* Harare Background Image - Full Width with narrower masking */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="relative h-full w-full">
          <Image
            src="/images/01HARA-IM0001-harare-1920.jpg"
            alt="Harare City Skyline"
            fill
            className="object-cover object-top opacity-75"
            priority
          />
          {/* Transition mask from solid cream (left) to transparent (by ~25% width) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F1EB] via-[#F5F1EB] to-transparent via-[percentage:25%]"></div>
          {/* Top fade for header transition and bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1EB] via-transparent to-transparent"></div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Content - Pushed Up */}
          <div className="relative z-10 lg:col-span-6 lg:-mt-16">
            {/* Heading - Reduced Size */}
            <h1 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Protecting and Securing <br />
              Property Rights In Zimbabwe
            </h1>

            {/* Description - Condensed and High Contrast */}
            <div className="mt-6 max-w-lg space-y-4">
              <p className="text-lg leading-relaxed text-foreground/80">
                Ensuring the secure registration, custody, and management of property records through a transparent and legally recognised system.
              </p>
              <Link 
                href="/about" 
                className="group inline-flex items-center text-sm font-medium text-[#2D5DA3] underline-offset-4 hover:underline"
              >
                Learn more about our mission
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* CTA Button */}
            <div className="mt-10 flex items-center gap-6">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-[#1A1A1A] px-10 py-7 text-base font-medium text-white hover:bg-[#1A1A1A]/90"
              >
                <Link href="/about">
                  Get Started
                  <span className="ml-3 flex h-6 w-6 items-center justify-center rounded-full border border-white/20">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>

              {/* Hand-drawn Curvy Arrow */}
              <div className="hidden translate-y-4 lg:block">
                <svg
                  className="h-20 w-20 text-[#2D5DA3]"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C20 40 40 60 80 50M80 50L70 45M80 50L75 60"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30 60C40 70 50 80 70 75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right - Spaced "Star Grid" Image Cards with 20px gaps */}
          <div className="relative z-10 lg:col-span-6 lg:-mt-20">
            <div className="relative h-[600px] w-full">
              {/* Card 1 - Middle Left */}
              <div className="absolute left-[-2%] top-[45%] z-20 w-[49%] -translate-y-1/2 overflow-hidden rounded-3xl shadow-2xl transition-transform hover:scale-[1.02]">
                <div className="relative aspect-[4/3.5]">
                  <Image
                    src="/images/hero-property.jpg"
                    alt="Property related service"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-5 left-5">
                    <p className={`text-sm font-medium text-white transition-opacity duration-500 lg:text-base ${isFading ? "opacity-0" : "opacity-100"}`}>
                      {getService(0)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Top Right */}
              <div className="absolute left-[51%] top-[5%] z-10 w-[47%] overflow-hidden rounded-3xl shadow-2xl transition-transform hover:scale-[1.02]">
                <div className="relative aspect-[3/3.1]">
                  <Image
                    src="/images/title-deed.jpg"
                    alt="Property related service"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-5 left-5">
                    <p className={`text-sm font-medium text-white transition-opacity duration-500 lg:text-base ${isFading ? "opacity-0" : "opacity-100"}`}>
                      {getService(1)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Bottom Right */}
              <div className="absolute bottom-[5%] left-[51%] z-20 w-[51%] overflow-hidden rounded-3xl shadow-2xl transition-transform hover:scale-[1.02]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/community.jpg"
                    alt="Property related service"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-5 left-5">
                    <p className={`text-sm font-medium text-white transition-opacity duration-500 lg:text-base ${isFading ? "opacity-0" : "opacity-100"}`}>
                      {getService(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
