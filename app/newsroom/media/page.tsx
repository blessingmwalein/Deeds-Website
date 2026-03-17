import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Calendar, ArrowLeft, ExternalLink, Radio, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const mediaItems = [
  {
    title: "Registrar Featured on ZBC News Discussing Land Tenure Security",
    source: "ZBC News",
    excerpt: "An in-depth interview covering the importance of property rights and the modernisation efforts underway at the Deeds Registry.",
    date: "February 28, 2026",
    type: "TV Interview",
    link: "#",
  },
  {
    title: "The Herald: Digital Transformation at Deeds Registry",
    source: "The Herald",
    excerpt: "Feature article on the ongoing digitisation programme and its impact on property registration in Zimbabwe.",
    date: "February 15, 2026",
    type: "News Article",
    link: "#",
  },
  {
    title: "Radio Zimbabwe: Understanding Title Deeds",
    source: "Radio Zimbabwe",
    excerpt: "Educational segment explaining the importance of title deeds and how citizens can access Deeds Registry services.",
    date: "February 8, 2026",
    type: "Radio Interview",
    link: "#",
  },
  {
    title: "Chronicle: Bulawayo Office Modernisation",
    source: "The Chronicle",
    excerpt: "Coverage of the new digital systems being implemented at the Bulawayo Deeds Registry office.",
    date: "January 30, 2026",
    type: "News Article",
    link: "#",
  },
  {
    title: "Star FM: Kwangu Programme Explained",
    source: "Star FM",
    excerpt: "Live radio discussion about the Kwangu/Ngakwami Presidential Title Deed Programme and how communities can participate.",
    date: "January 20, 2026",
    type: "Radio Interview",
    link: "#",
  },
  {
    title: "NewsDay: Property Rights and Economic Development",
    source: "NewsDay",
    excerpt: "Opinion piece by the Registrar of Deeds on the relationship between secure property rights and economic growth.",
    date: "January 12, 2026",
    type: "Opinion",
    link: "#",
  },
]

export default function MediaPage() {
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
                  External Relations
                </span>
              </div>
              <h1 className="font-serif text-5xl font-normal leading-[1.1] tracking-tight text-[#1B3B2B] lg:text-7xl">
                In the <br />
                Media.
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-[#1B3B2B]/60">
                Explore external coverage, interviews, and features detailing our national transformation and digitisation efforts.
              </p>
            </div>
          </div>
        </section>

        {/* Media List */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {mediaItems.map((item, index) => (
                <article
                  key={index}
                  className="group relative flex flex-col gap-8 rounded-[2.5rem] border border-[#1B3B2B]/5 bg-[#F9FBF9] p-10 lg:p-12 transition-all hover:bg-white hover:shadow-2xl hover:shadow-[#1B3B2B]/5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex-1">
                    <div className="mb-6 flex flex-wrap items-center gap-4">
                      <span className="rounded-full bg-[#1B3B2B]/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B3B2B]/60">
                        {item.type}
                      </span>
                      <div className="flex items-center gap-2 text-[10px] font-medium text-[#1B3B2B]/30 uppercase tracking-widest">
                        <Radio className="h-3.5 w-3.5" />
                        {item.source}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-medium text-[#1B3B2B]/30">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.date}
                      </div>
                    </div>
                    
                    <h2 className="font-serif text-2xl font-medium leading-tight text-[#1B3B2B] lg:text-3xl mb-4 group-hover:text-[#1B3B2B]/80 transition-colors line-clamp-2">
                      {item.title}
                    </h2>
                    
                    <p className="text-lg leading-relaxed text-[#1B3B2B]/50 line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                  
                  <div className="shrink-0 flex items-center">
                    <Button variant="outline" size="lg" className="rounded-full border-[#1B3B2B]/10 bg-white px-8 py-6 text-xs font-bold uppercase tracking-[0.2em] text-[#1B3B2B] hover:bg-[#1B3B2B] hover:text-white transition-all shadow-sm">
                      VIEW SOURCE
                      <ExternalLink className="ml-2 h-4 w-4" />
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
