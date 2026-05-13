"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"

const stats = [
  { 
    number: "130+", 
    label: "Years of Service",
    image: "/images/hero-property.jpg" 
  },
  { 
    number: "1M+", 
    label: "Records Maintained",
    image: "/images/title-deed.jpg" 
  },
  { 
    number: "10", 
    label: "Provinces Served",
    image: "/images/land-admin.jpg" 
  },
  { 
    number: "99%", 
    label: "Record Accuracy",
    image: "/images/community.jpg" 
  },
]

export function AboutSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    containScroll: "trimSnaps",
    loop: true 
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Content - 2 Column Layout like Reference */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-foreground/10 bg-secondary/50 px-4 py-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/60">
                Know More
              </span>
            </div>
            <h2 className="mt-8 font-serif text-5xl font-normal leading-[1.1] tracking-tight text-foreground lg:text-7xl">
              A Legacy of <br />
              Property Security
            </h2>
          </div>

          <div className="max-w-lg lg:mt-12">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                The Zimbabwe Deeds Office has been the cornerstone of property rights for over a century. Our mandate is to ensure every square inch of our nation is registered with absolute legal certainty.
              </p>
              <p>
                From historical archives to modern digital transformation, we safeguard the records that represent the wealth and heritage of our people.
              </p>
            </div>
            <div className="mt-10">
              <Button asChild size="lg" className="rounded-full bg-secondary px-8 py-6 text-primary hover:bg-secondary/80">
                <Link href="/about" className="flex items-center gap-2 font-medium">
                  EXPLORE OUR MISSION
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Slider - Bottom */}
        <div className="mt-20 lg:mt-32">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="relative min-w-[300px] flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_22%]"
                >
                  <div className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-secondary shadow-sm transition-all hover:shadow-xl">
                    <Image
                      src={stat.image}
                      alt={stat.label}
                      fill
                      className="object-cover opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-10 left-8">
                      <div className="text-4xl font-bold text-white lg:text-5xl">
                        {stat.number}
                      </div>
                      <div className="mt-2 text-sm font-medium uppercase tracking-[0.1em] text-white/70">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <div className="mt-12 flex items-center justify-between">
            <div className="flex gap-4">
              <button
                onClick={scrollPrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 text-foreground transition-colors hover:bg-secondary"
                aria-label="Previous stat"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 text-foreground transition-colors hover:bg-secondary"
                aria-label="Next stat"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <Link 
              href="/newsroom" 
              className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground hover:text-muted-foreground"
            >
              Learn More History
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
