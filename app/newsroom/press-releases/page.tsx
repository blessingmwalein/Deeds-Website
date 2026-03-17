import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const pressReleases = [
  {
    title: "Deeds Registry Launches Nationwide Digital Validation Campaign",
    excerpt: "The Registrar of Deeds announced the commencement of a nationwide campaign to validate and digitise property records across all provinces. This initiative marks a significant milestone in our modernisation efforts.",
    date: "March 10, 2026",
    category: "Announcement",
  },
  {
    title: "Partnership with Surveyor General's Office Expanded",
    excerpt: "A new memorandum of understanding strengthens collaboration on the Kwangu/Ngakwami Presidential Title Deed Programme, enabling faster processing and improved service delivery.",
    date: "February 20, 2026",
    category: "Partnership",
  },
  {
    title: "Extended Operating Hours at Harare Office",
    excerpt: "To better serve our clients, the Harare Deeds Registry office will now operate extended hours on Wednesdays, from 7:30 AM to 5:00 PM.",
    date: "February 15, 2026",
    category: "Service Update",
  },
  {
    title: "Registrar's Address at Property Rights Conference",
    excerpt: "The Registrar of Deeds delivered a keynote address at the annual Property Rights Conference, highlighting the importance of secure land tenure for economic development.",
    date: "February 5, 2026",
    category: "Speech",
  },
  {
    title: "New Online Verification System Pilot Programme",
    excerpt: "We are pleased to announce a pilot programme for online title deed verification in select areas. This digital service will allow conveyancers to verify documents more efficiently.",
    date: "January 25, 2026",
    category: "Innovation",
  },
  {
    title: "Year-End Report: 2025 Achievements and 2026 Goals",
    excerpt: "The Deeds Registry released its annual report highlighting key achievements in 2025 and outlining strategic goals for the coming year.",
    date: "January 10, 2026",
    category: "Report",
  },
]

export default function PressReleasesPage() {
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
                  Official Statements
                </span>
              </div>
              <h1 className="font-serif text-5xl font-normal leading-[1.1] tracking-tight text-[#1B3B2B] lg:text-7xl">
                Press Releases <br />
                & Speeches.
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-[#1B3B2B]/60">
                Formal announcements and addresses governing the registration and protection of property rights in Zimbabwe.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section - List of Articles */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {pressReleases.map((item, index) => (
                <article
                  key={index}
                  className="group relative flex flex-col items-start rounded-[2.5rem] border border-[#1B3B2B]/5 bg-[#F9FBF9] p-10 lg:p-12 transition-all hover:bg-white hover:shadow-2xl hover:shadow-[#1B3B2B]/5"
                >
                  <div className="mb-6 flex flex-wrap items-center gap-4">
                    <span className="rounded-full bg-[#1B3B2B]/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B3B2B]/60">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2 text-[10px] font-medium text-[#1B3B2B]/30">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.date}
                    </div>
                  </div>
                  
                  <h2 className="font-serif text-2xl font-medium leading-tight text-[#1B3B2B] lg:text-3xl mb-6 group-hover:text-[#1B3B2B]/80 transition-colors">
                    {item.title}
                  </h2>
                  
                  <p className="text-lg leading-relaxed text-[#1B3B2B]/50 mb-8 max-w-3xl">
                    {item.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-8 border-t border-[#1B3B2B]/5 w-full">
                    <Button variant="link" className="h-auto p-0 text-xs font-bold uppercase tracking-[0.2em] text-[#1B3B2B] hover:no-underline">
                      <span className="flex items-center gap-2">
                        READ FULL RELEASE <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
