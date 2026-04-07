"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Search, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    badge: "New Program",
    title: "Deeds Reinsurance Program",
    subtitle: "Protecting Your Property Investment",
    description:
      "Introducing our comprehensive Deeds Reinsurance Program — providing an additional layer of security for your property titles. Safeguard your real estate investments against unforeseen risks with government-backed protection.",
    cta: "Learn About Reinsurance",
    ctaLink: "/services/reinsurance",
    learnMore: "Discover program benefits",
    learnMoreLink: "/services/reinsurance#benefits",
    icon: Shield,
    image: "/images/harare-skyline.jpg",
    location: "Harare",
  },
  {
    id: 2,
    badge: "Coming Soon",
    title: "Deeds Search Platform",
    subtitle: "Global Access to Zimbabwe Title Deeds",
    description:
      "A revolutionary new digital platform enabling global users to search, verify, and access Zimbabwe title deeds from anywhere in the world. Transparent, secure, and available 24/7 for property verification.",
    cta: "Join the Waitlist",
    ctaLink: "/deeds-search",
    learnMore: "Explore platform features",
    learnMoreLink: "/deeds-search#features",
    icon: Search,
    image: "/images/victoria-falls.jpg",
    location: "Victoria Falls",
  },
  {
    id: 3,
    badge: "Our Services",
    title: "Deeds Registry Zimbabwe",
    subtitle: "Protecting Property Rights Since 1891",
    description:
      "Ensuring the secure registration, custody, and management of property records through a transparent and legally recognised system. Your trusted partner for all property documentation needs.",
    cta: "Get Started",
    ctaLink: "/services",
    learnMore: "Learn more about our mission",
    learnMoreLink: "/about",
    icon: Building2,
    image: "/images/bulawayo.jpg",
    location: "Bulawayo",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsTransitioning(false)
    }, 500)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const goToSlide = (index: number) => {
    if (index === currentSlide) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsTransitioning(false)
    }, 500)
  }

  const slide = slides[currentSlide]
  const IconComponent = slide.icon

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-[#F5F1EB] pb-12 pt-16 lg:pb-0 lg:pt-0">
      {/* Dynamic Background Images */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 hidden transition-opacity duration-700 lg:block ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full w-full">
            <Image
              src={s.image}
              alt={`${s.location} Zimbabwe`}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
            {/* Gradient overlays for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F1EB] via-[#F5F1EB]/95 to-transparent via-[40%]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1EB]/80 via-transparent to-[#F5F1EB]/60" />
          </div>
        </div>
      ))}

      {/* Mobile Background */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={slide.image}
          alt={`${slide.location} Zimbabwe`}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1EB] via-[#F5F1EB]/90 to-[#F5F1EB]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Content */}
          <div className="relative z-10 lg:col-span-7 lg:-mt-8">
            {/* Badge */}
            <div
              className={`mb-6 transition-all duration-500 ${
                isTransitioning ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#2D5DA3]/10 px-4 py-2 text-sm font-medium text-[#2D5DA3]">
                <IconComponent className="h-4 w-4" />
                {slide.badge}
              </span>
            </div>

            {/* Heading */}
            <div
              className={`transition-all duration-500 ${
                isTransitioning ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#2D5DA3]">
                {slide.subtitle}
              </p>
              <h1 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                {slide.title}
              </h1>
            </div>

            {/* Description */}
            <div
              className={`mt-6 max-w-xl space-y-4 transition-all delay-100 duration-500 ${
                isTransitioning ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              <p className="text-lg leading-relaxed text-foreground/80">{slide.description}</p>
              <Link
                href={slide.learnMoreLink}
                className="group inline-flex items-center text-sm font-medium text-[#2D5DA3] underline-offset-4 hover:underline"
              >
                {slide.learnMore}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* CTA Button */}
            <div
              className={`mt-10 flex items-center gap-6 transition-all delay-200 duration-500 ${
                isTransitioning ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-[#1A1A1A] px-10 py-7 text-base font-medium text-white hover:bg-[#1A1A1A]/90"
              >
                <Link href={slide.ctaLink}>
                  {slide.cta}
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

          {/* Right side intentionally left for background image visibility */}
          <div className="hidden lg:col-span-5 lg:block" />
        </div>
      </div>

      {/* Slide Controls - Bottom Right Corner */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4 rounded-full bg-white/80 px-5 py-3 shadow-lg backdrop-blur-sm lg:bottom-12 lg:right-12">
        <div className="flex gap-2">
          {slides.map((s, index) => (
            <button
              key={s.id}
              onClick={() => goToSlide(index)}
              className={`group relative h-2 overflow-hidden rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-10 bg-[#2D5DA3]" : "w-2 bg-[#2D5DA3]/30 hover:bg-[#2D5DA3]/50"
              }`}
              aria-label={`Go to slide ${index + 1}: ${s.title}`}
            >
              {index === currentSlide && (
                <span
                  className="absolute inset-y-0 left-0 bg-[#2D5DA3]/50"
                  style={{
                    animation: "progress 7s linear",
                    width: "100%",
                  }}
                />
              )}
            </button>
          ))}
        </div>
        <span className="text-sm text-foreground/60">
          <span className="font-medium text-foreground">{String(currentSlide + 1).padStart(2, "0")}</span>
          {" / "}
          {String(slides.length).padStart(2, "0")}
        </span>
        {/* Location Badge */}
        <span className="hidden items-center gap-2 border-l border-foreground/10 pl-4 text-xs text-foreground/50 sm:inline-flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2D5DA3]" />
          {slide.location}
        </span>
      </div>

      {/* Progress bar animation */}
      <style jsx>{`
        @keyframes progress {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}
