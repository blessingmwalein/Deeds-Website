import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#001D11] py-20 lg:py-32">
      {/* Subtle Background Mark */}
      <div className="absolute -left-20 -bottom-20 opacity-[0.03] pointer-events-none">
        <Image
          src="/images/logo.png"
          alt="Watermark"
          width={500}
          height={500}
          className="grayscale invert"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left - Main CTA Area */}
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 mb-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Contact Us
              </span>
            </div>
            <h2 className="font-serif text-5xl font-normal leading-[1.1] tracking-tight text-white lg:text-7xl">
              Secure your <br />
              property heritage.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-white/50">
              Our experts are ready to assist you with property registration, deed verification, and digitisation services across Zimbabwe.
            </p>
            <div className="mt-12">
              <Button asChild size="lg" className="rounded-full bg-[#E5B80B] px-10 py-7 text-base font-semibold text-[#001D11] hover:bg-[#E5B80B]/90 shadow-xl">
                <Link href="/faqs" className="flex items-center gap-3">
                  GET STARTED NOW
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right - Contact Information Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {/* Harare Card */}
            <div className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5B80B]/10">
                <MapPin className="h-6 w-6 text-[#E5B80B]" />
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight">Harare Office</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/40">
                Century House East, 38 Nelson Mandela Ave, Cnr Angwa Street
              </p>
              <a href="tel:+263242775544" className="mt-6 flex items-center gap-2 text-sm font-medium text-white hover:text-[#E5B80B]">
                <Phone className="h-4 w-4" />
                +263 242 775544
              </a>
            </div>

            {/* Bulawayo Card */}
            <div className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5B80B]/10">
                <MapPin className="h-6 w-6 text-[#E5B80B]" />
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight">Bulawayo</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/40">
                Cnr Fort Street /L. Takawira, Office 222, Tredgold Building
              </p>
              <a href="tel:+2632961601" className="mt-6 flex items-center gap-2 text-sm font-medium text-white hover:text-[#E5B80B]">
                <Phone className="h-4 w-4" />
                +263 2961601
              </a>
            </div>

            {/* Operating Hours */}
            <div className="sm:col-span-2 rounded-[2rem] border border-white/10 bg-white/5 p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
              <div className="flex gap-6 items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Clock className="h-6 w-6 text-white/60" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Operating Hours</h3>
                  <p className="text-sm text-white/40">Open for public services</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Weekday</p>
                  <p className="text-sm font-medium text-white">08:00 — 16:00</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Weekend</p>
                  <p className="text-sm font-medium text-white">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
