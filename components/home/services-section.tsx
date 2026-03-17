import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  return (
    <section id="solution" className="bg-[#F5F1EB] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Area - Refined */}
        <div className="mb-12">
          <div className="inline-flex items-center rounded-full border border-[#1B3B2B]/10 bg-[#1B3B2B]/5 px-4 py-1 mb-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1B3B2B]/60">
              Solution
            </span>
          </div>
          <h2 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight text-[#1B3B2B] lg:text-6xl">
            Experience the security of <br />
            digitized property records
          </h2>
        </div>

        {/* Bottom Area - CTA and Detailed Description */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between border-t border-[#1B3B2B]/5 pt-12">
          <div>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#1B3B2B] px-10 py-7 text-base font-medium text-white hover:bg-[#1B3B2B]/90"
            >
              <Link href="/modernisation" className="flex items-center gap-3">
                DOWNLOAD BROCHURE
                <Download className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="max-w-2xl">
            <div className="space-y-6 text-xl leading-relaxed text-[#1B3B2B]/70">
              <p>
                The Deed Reissuance / Validation & Digitisation Programme focuses on verifying and validating your paper Title Deeds into securitised digital records. Our team works with you through your Conveyancers to verify ownership.
              </p>
              <p>
                Once verified, the Deeds Registry issues a new, secure, and digitized deed, ensuring the absolute integrity of your property rights in the modern era.
              </p>
            </div>
            <div className="mt-8">
              <Link 
                href="/modernisation" 
                className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#1B3B2B] hover:text-[#1B3B2B]/80"
              >
                Learn more about the Deed Validation Programme
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
