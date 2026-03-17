import { 
  FileText, 
  Search, 
  Building2, 
  FolderOpen, 
  ShieldCheck, 
  ArrowLeftRight, 
  LayoutGrid, 
  ScrollText,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: FileText,
    title: "Property Registration",
    description: "Official registration of property ownership through title deeds.",
  },
  {
    icon: Search,
    title: "Title Deed Verification",
    description: "Verify the authenticity of property documents and ownership history.",
  },
  {
    icon: Building2,
    title: "Mortgage Bond Registration",
    description: "Legal registration of bonds and property securities for lenders.",
  },
  {
    icon: ScrollText,
    title: "Notarial Deeds & Contracts",
    description: "Registration of antenuptial contracts and notarial bonds.",
  },
  {
    icon: ArrowLeftRight,
    title: "Property Transfer Services",
    description: "Secure processing of property transfers and legal conveyancing.",
  },
  {
    icon: LayoutGrid,
    title: "Sectional Title Schemes",
    description: "Management and registration of sectional title developments.",
  },
  {
    icon: FolderOpen,
    title: "Accessing Property Records",
    description: "Search and access historical property ownership records.",
  },
  {
    icon: ShieldCheck,
    title: "Deed Validation & Digitisation",
    description: "Conversion of physical deeds into secure digital records.",
  },
]

export function WhatWeDoSection() {
  return (
    <section className="relative overflow-hidden bg-[#001D11] py-16 lg:py-24">
      {/* Official National Coat of Arms Watermark */}
      <div className="absolute -right-[5%] -top-[10%] hidden opacity-[0.08] lg:block">
        <Image
          src="/images/logo.png"
          alt="Zimbabwe National Coat of Arms"
          width={600}
          height={600}
          className="pointer-events-none select-none grayscale invert"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Precise Spacing & Width */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 backdrop-blur-sm">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
              What we do
            </span>
          </div>
          <h2 className="mt-6 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-white lg:text-6xl">
            Protecting interest through secure <br className="hidden lg:block" />
            property registration
          </h2>
        </div>

        {/* Services Grid - 4 Column Layout - Minimalist Icons */}
        <div className="mt-16 grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 lg:mt-24">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Icon - Raw & Refined */}
              <div className="mb-6 flex h-8 w-8 items-center justify-start transition-transform duration-300 group-hover:-translate-y-1">
                <service.icon className="h-8 w-8 text-white/80" strokeWidth={1} />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-medium text-white tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/40">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Area - Premium Gold Accents */}
        <div className="mt-20 flex flex-wrap items-center justify-between border-t border-white/10 pt-10">
          <div className="flex items-center gap-4">
            <div className="h-1.5 w-1.5 rounded-full bg-[#E5B80B]" />
            <p className="text-xs font-medium uppercase tracking-wider text-white/40">
              Department under the Ministry of Justice, Legal and Parliamentary Affairs
            </p>
          </div>
          <Link 
            href="/services" 
            className="group mt-4 flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white lg:mt-0"
          >
            Explore all services 
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
