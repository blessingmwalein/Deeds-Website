import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { ArrowLeft, Download, FileText, Scale, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const documents = [
  {
    icon: Scale,
    title: "Deeds Registries Act",
    description: "The principal legislation governing the registration of deeds and other documents relating to immovable property in Zimbabwe.",
    category: "Legislation",
    size: "2.4 MB",
    format: "PDF",
  },
  {
    icon: FileText,
    title: "SI 76 of 2025",
    description: "Statutory Instrument governing deed validation procedures and digital registration requirements.",
    category: "Statutory Instrument",
    size: "1.2 MB",
    format: "PDF",
  },
  {
    icon: BookOpen,
    title: "Deed Validation Brochure",
    description: "Information guide about the Deed Reissuance/Validation & Digitisation Programme.",
    category: "Brochure",
    size: "850 KB",
    format: "PDF",
  },
  {
    icon: BookOpen,
    title: "Kwangu/Ngakwami Programme Brochure",
    description: "Comprehensive guide to the Presidential Title Deed Programme for informal settlements.",
    category: "Brochure",
    size: "1.1 MB",
    format: "PDF",
  },
  {
    icon: BookOpen,
    title: "Land Tenure Programme Brochure",
    description: "Information about the conversion of offer letters and permits to securitised title deeds.",
    category: "Brochure",
    size: "920 KB",
    format: "PDF",
  },
  {
    icon: FileText,
    title: "Property Registration Guide",
    description: "Step-by-step guide for property registration through the Deeds Registry.",
    category: "Guide",
    size: "1.5 MB",
    format: "PDF",
  },
]

export default function DocumentsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#F9FBF9] py-20 lg:py-32">
          {/* Watermark */}
          <div className="absolute -right-20 -top-20 opacity-[0.05] pointer-events-none hidden lg:block">
            <Image
              src="/images/logo.png"
              alt="Watermark"
              width={600}
              height={600}
              className="grayscale"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link 
              href="/newsroom" 
              className="group mb-12 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#1B3B2B]/40 transition-colors hover:text-[#1B3B2B]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Newsroom
            </Link>
            
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-[#1B3B2B]/10 bg-[#1B3B2B]/5 px-4 py-1 mb-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1B3B2B]/60">
                  Resource Repository
                </span>
              </div>
              <h1 className="font-serif text-5xl font-normal leading-[1.1] tracking-tight text-[#1B3B2B] lg:text-7xl">
                Legal & Policy <br />
                Documents.
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-[#1B3B2B]/60">
                Access official legislation, statutory instruments, and informational brochures related to property registration and management.
              </p>
            </div>
          </div>
        </section>

        {/* Documents Grid */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {documents.map((doc, index) => (
                <article
                  key={index}
                  className="group relative flex flex-col items-start rounded-[2.5rem] border border-[#1B3B2B]/5 bg-[#F9FBF9] p-10 lg:p-12 transition-all hover:bg-white hover:shadow-2xl hover:shadow-[#1B3B2B]/5"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#1B3B2B] shadow-sm transition-colors group-hover:bg-[#1B3B2B] group-hover:text-white">
                    <doc.icon className="h-8 w-8" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="rounded-full bg-[#1B3B2B]/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B3B2B]/60">
                      {doc.category}
                    </span>
                  </div>
                  
                  <h2 className="font-serif text-2xl font-medium leading-tight text-[#1B3B2B] mb-4 group-hover:text-[#1B3B2B]/80 transition-colors">
                    {doc.title}
                  </h2>
                  
                  <p className="text-sm leading-relaxed text-[#1B3B2B]/50 mb-10">
                    {doc.description}
                  </p>
                  
                  <div className="mt-auto flex w-full items-center justify-between border-t border-[#1B3B2B]/5 pt-8">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1B3B2B]/30">
                      {doc.format} • {doc.size}
                    </span>
                    <Button size="sm" variant="outline" className="rounded-full border-[#1B3B2B]/10 bg-white px-6 text-[10px] font-bold uppercase tracking-widest text-[#1B3B2B] hover:bg-[#1B3B2B] hover:text-white transition-all shadow-sm">
                      <Download className="mr-2 h-3.5 w-3.5" />
                      DOWNLOAD
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Note - Premium Callout */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[3rem] bg-[#001D11] p-12 lg:p-16 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <Image
                  src="/images/logo.png"
                  alt="Background"
                  fill
                  className="object-contain grayscale invert scale-125"
                />
              </div>
              <div className="relative z-10 mx-auto max-w-2xl">
                <p className="text-lg leading-relaxed text-white/60 mb-8 italic">
                  "For additional documents or specific legal inquiries, please contact our offices in Harare or Bulawayo."
                </p>
                <Button asChild variant="outline" className="rounded-full border-[#E5B80B]/20 bg-[#E5B80B]/5 px-8 py-6 text-xs font-bold uppercase tracking-[0.2em] text-[#E5B80B] hover:bg-[#E5B80B]/10">
                  <Link href="/faqs" className="flex items-center gap-2">
                    CONTACT INFORMATION <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
