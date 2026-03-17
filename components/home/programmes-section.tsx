"use client"

import { useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

const programmes = [
  {
    title: "Kwangu / Ngakwami",
    description: "Regularising informal settlements with verified title deeds.",
    image: "/images/land-admin.jpg",
    href: "/modernisation#kwangu",
  },
  {
    title: "Land Tenure Programme",
    description: "Converting permits into bankable title deeds.",
    image: "/images/hero-property.jpg",
    href: "/modernisation#land-tenure",
  },
  {
    title: "Digital Land Administration",
    description: "Building a modern and secure land archive.",
    image: "/images/title-deed.jpg",
    href: "/modernisation#dlap",
  },
  {
    title: "Archives Digitisation",
    description: "Preserving our heritage through secure digital records.",
    image: "/images/community.jpg",
    href: "/modernisation#archives",
  },
]

export function ProgrammesSection() {
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
    <section className="bg-[#001D11] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 mb-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Modernisation Programmes
              </span>
            </div>
            <h2 className="font-serif text-5xl font-normal leading-[1.1] tracking-tight text-white lg:text-7xl">
              Flagship initiatives <br />
              transforming Zimbabwe.
            </h2>
          </div>
          
          <div className="flex gap-4 lg:mb-4">
            <button
              onClick={scrollPrev}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/5"
              aria-label="Previous programme"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={scrollNext}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/5"
              aria-label="Next programme"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Interactive Slider */}
        <div className="mt-16 lg:mt-24">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8">
              {programmes.map((prog, index) => (
                <div 
                  key={index} 
                  className="relative min-w-[320px] flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
                >
                  <Link href={prog.href} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-emerald-950/50 shadow-2xl">
                      <Image
                        src={prog.image}
                        alt={prog.title}
                        fill
                        className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001D11] via-[#001D11]/20 to-transparent" />
                      <div className="absolute bottom-10 left-8 right-8">
                        <h3 className="text-2xl font-medium text-white tracking-tight">
                          {prog.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-white/50">
                          {prog.description}
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E5B80B] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          View Details
                          <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All */}
        <div className="mt-20 flex justify-end">
          <Link 
            href="/modernisation" 
            className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:text-white/80"
          >
            View All Programmes
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
