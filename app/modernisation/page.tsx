"use client"

import { useCallback, useEffect } from "react"
import Link from "next/link"
import NextImage from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { YouTubePlayer } from "@/components/youtube-player"
import {
  FileCheck,
  Home,
  Landmark,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Download,
  ShieldCheck,
  Fingerprint,
  ScanLine,
  Lock,
  BadgeCheck,
  QrCode,
} from "lucide-react"

const SECURITISED_DEED_VIDEO_ID = "7x9bjWdRgDw"

const kwanguSlides = [
  {
    image: "/kwangu-pics/Title Deed 3.jpg",
    caption: "Title deed handover led by the Minister during the Epworth ceremony.",
  },
  {
    image: "/kwangu-pics/Title Deed 1.jpg",
    caption: "Beneficiary receives a Deed of Grant during the Epworth handover.",
  },
  {
    image: "/kwangu-pics/Title Deed 2.jpg",
    caption: "Moments after collection at the Presidential handover ceremony.",
  },
  {
    image: "/kwangu-pics/Title Deed 4.jpg",
    caption: "Formalising ownership for families in Epworth.",
  },
  {
    image: "/kwangu-pics/Title Deed 5.jpg",
    caption: "Title deed handover led by H.E. President E.D. Mnangagwa.",
  },
]

// TODO: Replace these with actual farm photos when available.
const landTenureSlides = [
  {
    image: "/images/land_tenure_transformation_1773741604681.png",
    caption: "Commercial farms benefiting from bankable title conversion.",
  },
  {
    image: "/images/land-admin.jpg",
    caption: "Surveying and validating farm boundaries.",
  },
  {
    image: "/images/community.jpg",
    caption: "Empowering farmers with legally recognised ownership.",
  },
]

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Tamper-evident watermark",
    description: "A multi-layer watermark and security backdrop that cannot be reproduced by ordinary printers.",
  },
  {
    icon: Fingerprint,
    title: "Unique digital fingerprint",
    description: "Each deed carries a cryptographic hash linking the paper copy to the digital registry record.",
  },
  {
    icon: QrCode,
    title: "Scannable QR verification",
    description: "Any conveyancer, bank, or property owner can instantly verify authenticity by scanning the QR.",
  },
  {
    icon: BadgeCheck,
    title: "Government seal of authenticity",
    description: "Embossed with the official Deeds Office seal, signed by the Registrar of Deeds.",
  },
  {
    icon: ScanLine,
    title: "Anti-fraud micro-text",
    description: "Microprinted text appears as a line to the naked eye, deterring forgery and alteration.",
  },
  {
    icon: Lock,
    title: "Encrypted ownership chain",
    description: "Full ownership history is encrypted and version-controlled in the Digital Land Administration Platform.",
  },
]

export default function ModernisationPage() {
  const [kwanguRef, kwanguApi] = useEmblaCarousel({ align: "start", loop: true })
  const [landRef, landApi] = useEmblaCarousel({ align: "start", loop: true })

  const kwanguPrev = useCallback(() => kwanguApi?.scrollPrev(), [kwanguApi])
  const kwanguNext = useCallback(() => kwanguApi?.scrollNext(), [kwanguApi])
  const landPrev = useCallback(() => landApi?.scrollPrev(), [landApi])
  const landNext = useCallback(() => landApi?.scrollNext(), [landApi])

  useEffect(() => {
    if (!kwanguApi) return
    const interval = setInterval(() => kwanguApi.scrollNext(), 3000)
    return () => clearInterval(interval)
  }, [kwanguApi])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Modernisation Hero */}
        <section className="relative overflow-hidden bg-[#001D11] py-20 lg:py-40">
          <div className="absolute inset-0 opacity-10">
            <NextImage
              src="/images/logo.png"
              alt="Background Pattern"
              fill
              className="object-contain grayscale invert scale-110"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 mb-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E5B80B]">
                  Strategic Vision 2030
                </span>
              </div>
              <h1 className="font-serif text-5xl font-normal leading-[1.1] tracking-tight text-white lg:text-8xl">
                Modernising the <br />
                Deeds Office.
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-white/60">
                We are currently implementing a modernisation and digitisation programme aimed at improving the way we process, handle, protect and store your property records. This initiative represents an important step towards building a modern and more secure land and property archive for Zimbabwe.
              </p>
            </div>
          </div>
        </section>

        {/* DLAP OverView */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-[4rem] bg-[#F5F1EB] p-12 lg:p-20">
                  <div className="flex flex-col h-full justify-center">
                    <h2 className="font-serif text-5xl font-normal tracking-tight text-[#1B3B2B] mb-8">
                      Digital Land <br />
                      Administration <br />
                      Platform (DLAP)
                    </h2>
                    <div className="space-y-6">
                      {[
                        "Comprehensive digital records",
                        "Enhanced security measures",
                        "Improved accessibility for all",
                        "Faster processing turnaround",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="h-2 w-2 rounded-full bg-[#E5B80B]" />
                          <span className="text-lg font-medium text-[#1B3B2B]/60">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E5B80B] mb-8">
                  The Flagship Projects
                </p>
                <h3 className="font-serif text-4xl text-[#1B3B2B] leading-tight mb-8">
                  Transforming property governance through three high-impact initiatives.
                </h3>
                <p className="text-lg leading-relaxed text-[#1B3B2B]/50 mb-10">
                  The DLAP ecosystem integrates three flagship projects designed to regularise, secure, and digitise the entire property spectrum of Zimbabwe, from informal settlements to large-scale commercial land reform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project 1: Deed Securitisation */}
        <section id="deed-securitisation" className="py-24 lg:py-32 bg-[#F9FBF9] overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                  <NextImage
                    src="/images/deed_validation_modernization_1773741570527.png"
                    alt="Deed Validation and Securitisation Programme"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001D11]/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-12">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E5B80B] mb-2">PROJECT 01</p>
                    <h4 className="text-3xl font-serif text-white">Validation &amp; Securitisation</h4>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1B3B2B]/5 mb-8">
                  <FileCheck className="h-6 w-6 text-[#1B3B2B]" />
                </div>
                <h2 className="font-serif text-4xl font-normal leading-[1.2] tracking-tight text-[#1B3B2B] lg:text-6xl mb-8">
                  Validation &amp; <br />
                  Securitisation Programme.
                </h2>

                <div className="space-y-8">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1B3B2B]/40 mb-3">Background</p>
                    <p className="text-lg leading-relaxed text-[#1B3B2B]/60">
                      Over decades, many original title deeds have been lost, damaged or destroyed, creating a challenge in the land and property market where owners cannot sell, leverage, or prove ownership of their own property.
                    </p>
                  </div>
                  <div className="rounded-[2rem] bg-white border border-[#1B3B2B]/5 p-8 shadow-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E5B80B] mb-3">The Solution</p>
                    <p className="text-sm leading-relaxed text-[#1B3B2B]/70 italic">
                      "Verifying and validating paper Title Deeds into securitised digital records. We work with you through your Conveyancers to verify ownership and issue a new, secure, and digitised deed."
                    </p>
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap gap-6">
                  <Button asChild variant="outline" className="rounded-full border-[#1B3B2B]/10 bg-white px-8 py-6 text-sm font-semibold uppercase tracking-wider text-[#1B3B2B] hover:bg-[#1B3B2B]/5">
                    <a href="#" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Securitisation Brochure
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample of the Securitised Deed + Security Features */}
        <section id="securitised-deed-sample" className="py-24 lg:py-32 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-[#1B3B2B]/10 bg-[#1B3B2B]/5 px-4 py-1 mb-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1B3B2B]/60">
                  Sample Deed
                </span>
              </div>
              <h2 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight text-[#1B3B2B] lg:text-6xl">
                Anatomy of a securitised deed.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#1B3B2B]/60">
                Get familiar with the new securitised title deed and the security features built into every page. Each deed combines physical anti-fraud protections with a tamper-evident digital twin in the Deeds Office registry.
              </p>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-6">
                <YouTubePlayer
                  videoId={SECURITISED_DEED_VIDEO_ID}
                  title="Securitised Deed Walkthrough"
                  badge="Watch Walkthrough"
                  caption="Securitised Deed Features"
                />
              </div>

              <div className="lg:col-span-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {securityFeatures.map(({ icon: Icon, title, description }) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-[#1B3B2B]/10 bg-[#F9FBF9] p-6 transition-colors hover:bg-white hover:shadow-lg"
                    >
                      <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1B3B2B]/5">
                        <Icon className="h-5 w-5 text-[#1B3B2B]" />
                      </span>
                      <h4 className="text-base font-semibold text-[#1B3B2B]">{title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-[#1B3B2B]/60">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project 2: Kwangu/Ngakwami */}
        <section id="kwangu" className="py-24 lg:py-32 bg-[#F9FBF9] overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5B80B]/10 mb-8">
                  <Home className="h-6 w-6 text-[#E5B80B]" />
                </div>
                <h2 className="font-serif text-4xl font-normal leading-[1.2] tracking-tight text-[#1B3B2B] lg:text-6xl mb-8">
                  Kwangu/Ngakwami <br />
                  Presidential Initiative.
                </h2>
                <p className="text-lg leading-relaxed text-[#1B3B2B]/60 mb-8">
                  Under this Programme, the Deeds Office, in collaboration with the Surveyor General's Office, was given a mandate by the Government of Zimbabwe to regularise informal settlements across the country through issuing verified stand owners with modern and securitised Title Deeds. H.E. President E.D. Mnangagwa has personally led handover ceremonies in Epworth and beyond.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Button asChild variant="outline" className="rounded-full border-[#1B3B2B]/10 bg-white px-8 py-6 text-xs font-bold uppercase tracking-widest text-[#1B3B2B] hover:bg-[#1B3B2B]/5">
                    <a href="#" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Kwangu Brochure
                    </a>
                  </Button>
                  <Button asChild className="rounded-full bg-[#E5B80B] px-8 py-6 text-xs font-bold uppercase tracking-widest text-[#001D11] hover:bg-[#E5B80B]/90">
                    <a href="https://kwangungakwami.co.zw/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Visit Website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-[3rem] shadow-2xl" ref={kwanguRef}>
                  <div className="flex">
                    {kwanguSlides.map((slide, index) => (
                      <div key={index} className="relative flex-[0_0_100%]">
                        <div className="relative aspect-[4/5]">
                          <NextImage
                            src={slide.image}
                            alt={slide.caption}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#001D11]/85 via-[#001D11]/10 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-8">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5B80B] mb-2">
                              Epworth Handover · Photo {index + 1} of {kwanguSlides.length}
                            </p>
                            <p className="text-base font-medium text-white/90 leading-relaxed">
                              {slide.caption}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute top-8 right-8 rounded-2xl bg-white/90 backdrop-blur px-6 py-4 shadow-xl">
                  <p className="text-[10px] font-bold text-[#1B3B2B] uppercase tracking-widest mb-1">Status</p>
                  <p className="text-sm font-medium text-[#E5B80B]">Active Nationwide</p>
                </div>

                <div className="mt-6 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={kwanguPrev}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1B3B2B]/10 text-[#1B3B2B] transition-colors hover:bg-[#1B3B2B]/5"
                    aria-label="Previous Kwangu photo"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={kwanguNext}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1B3B2B]/10 text-[#1B3B2B] transition-colors hover:bg-[#1B3B2B]/5"
                    aria-label="Next Kwangu photo"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project 3: Land Tenure */}
        <section id="land-tenure" className="py-24 lg:py-32 bg-[#001D11] overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-[3rem] shadow-2xl" ref={landRef}>
                  <div className="flex">
                    {landTenureSlides.map((slide, index) => (
                      <div key={index} className="relative flex-[0_0_100%]">
                        <div className="relative aspect-[16/10]">
                          <NextImage
                            src={slide.image}
                            alt={slide.caption}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#001D11]/90 via-[#001D11]/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-8">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5B80B] mb-2">
                              Farm {index + 1} of {landTenureSlides.length}
                            </p>
                            <p className="text-base font-medium text-white/90 leading-relaxed">
                              {slide.caption}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={landPrev}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10"
                    aria-label="Previous farm photo"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={landNext}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10"
                    aria-label="Next farm photo"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 mb-8">
                  <Landmark className="h-6 w-6 text-[#E5B80B]" />
                </div>
                <h2 className="font-serif text-4xl font-normal leading-[1.2] tracking-tight text-white lg:text-5xl mb-8">
                  Empowering Zimbabwe's <br />
                  farmers through bankable titles.
                </h2>
                <div className="space-y-6 text-white/60">
                  <p className="text-lg leading-relaxed">
                    Converting existing offer letters, permits and 99-year leases into bankable, registrable, and transferable securitised title deeds.
                  </p>
                  <p className="text-base leading-relaxed">
                    The Deeds Office is underpinning this programme by providing legal validation, record keeping and formal ownership recognition to thousands of beneficiaries.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-6">
                  <Button asChild variant="outline" className="rounded-full border-white/10 bg-white/5 px-8 py-6 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10">
                    <a href="#" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Land Tenure Brochure
                    </a>
                  </Button>
                  <Button asChild variant="ghost" className="text-white hover:text-white/80">
                    <a href="https://www.agric.gov.zw/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Visit Ministry of Agriculture
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Progress CTA */}
        <section className="py-24 lg:py-40 bg-white text-center">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-serif text-4xl font-normal tracking-tight text-[#1B3B2B] lg:text-7xl mb-8">
              Still have questions?
            </h2>
            <p className="text-xl text-[#1B3B2B]/50 mb-12 italic">
              "We are here to help you navigate through our modernisation processes."
            </p>
            <div className="flex justify-center gap-6">
              <Button asChild size="lg" className="rounded-full bg-[#1B3B2B] px-10 py-7 text-base font-semibold text-white hover:bg-[#1B3B2B]/90">
                <Link href="/faqs" className="flex items-center gap-3">
                  VIEW FAQ'S
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
