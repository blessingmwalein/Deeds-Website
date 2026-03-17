import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Newspaper, 
  Video, 
  Radio, 
  FileText, 
  ArrowRight,
  Calendar
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const categories = [
  {
    icon: Newspaper,
    title: "Press Releases & Speeches",
    description: "Official announcements regarding project phases and progress",
    href: "/newsroom/press-releases",
    count: 12,
  },
  {
    icon: Video,
    title: "Success Stories",
    description: "Stories of individuals and families who have received their digitized title deeds",
    href: "/newsroom/success-stories",
    count: 8,
  },
  {
    icon: Radio,
    title: "In the Media",
    description: "Links to articles and news features where the Deeds Registry has been mentioned",
    href: "/newsroom/media",
    count: 15,
  },
  {
    icon: FileText,
    title: "Legal & Policy Documents",
    description: "Download documents such as the Deeds Registry Act, SI 76 OF 2025",
    href: "/newsroom/documents",
    count: 6,
  },
]

const latestNews = [
  {
    category: "Press Release",
    title: "Deeds Registry Launches Nationwide Digital Validation Campaign",
    excerpt: "The Registrar of Deeds announced the commencement of a nationwide campaign to validate and digitise property records across all provinces.",
    date: "March 10, 2026",
    href: "/newsroom/press-releases",
  },
  {
    category: "Success Story",
    title: "Family in Chitungwiza Celebrates Receiving Title Deed After 25 Years",
    excerpt: "The Moyo family finally received their official title deed through the Kwangu/Ngakwami programme, securing their family home for generations to come.",
    date: "March 5, 2026",
    href: "/newsroom/success-stories",
  },
  {
    category: "Media",
    title: "Registrar Featured on ZBC News Discussing Land Tenure Security",
    excerpt: "An in-depth interview covering the importance of property rights and the modernisation efforts underway at the Deeds Registry.",
    date: "February 28, 2026",
    href: "/newsroom/media",
  },
  {
    category: "Press Release",
    title: "Partnership with Surveyor General's Office Expanded",
    excerpt: "A new memorandum of understanding strengthens collaboration on the Kwangu/Ngakwami Presidential Title Deed Programme.",
    date: "February 20, 2026",
    href: "/newsroom/press-releases",
  },
  {
    category: "Document",
    title: "SI 76 of 2025 Now Available for Download",
    excerpt: "The latest statutory instrument governing deed validation procedures is now available in our documents section.",
    date: "February 15, 2026",
    href: "/newsroom/documents",
  },
  {
    category: "Success Story",
    title: "Over 5,000 Title Deeds Issued in Bulawayo Province",
    excerpt: "A milestone achievement as thousands of property owners in Bulawayo receive their securitised digital title deeds.",
    date: "February 10, 2026",
    href: "/newsroom/success-stories",
  },
]

export default function NewsroomPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Newsroom Hero */}
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
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-[#1B3B2B]/10 bg-[#1B3B2B]/5 px-4 py-1 mb-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1B3B2B]/60">
                  Media & Communications
                </span>
              </div>
              <h1 className="font-serif text-5xl font-normal leading-[1.1] tracking-tight text-[#1B3B2B] lg:text-8xl">
                The latest from the <br />
                National Registry.
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-[#1B3B2B]/60">
                Stay updated with the latest news, official press releases, success stories from our digitisation programmes, and legal announcements.
              </p>
            </div>
          </div>
        </section>

        {/* Categories - Premium Grid */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={category.href}
                  className="group relative flex flex-col items-center text-center rounded-[2.5rem] border border-[#1B3B2B]/5 bg-[#F9FBF9] p-10 transition-all hover:bg-white hover:shadow-2xl hover:shadow-[#1B3B2B]/5"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#1B3B2B] shadow-sm transition-colors group-hover:bg-[#1B3B2B] group-hover:text-white">
                    <category.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#1B3B2B] mb-3">{category.title}</h3>
                  <p className="text-sm leading-relaxed text-[#1B3B2B]/50 mb-6">{category.description}</p>
                  <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5B80B]">
                    EXPLORE <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News - Refined Grid */}
        <section className="py-24 lg:py-32 bg-[#F9FBF9]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 flex items-end justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E5B80B] mb-4">REPORTS & UPDATES</p>
                <h2 className="font-serif text-4xl font-normal tracking-tight text-[#1B3B2B] lg:text-6xl">
                  Recent insights.
                </h2>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {latestNews.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group flex flex-col overflow-hidden rounded-[2.5rem] bg-white transition-all hover:shadow-2xl hover:shadow-[#1B3B2B]/5"
                >
                  {/* Decorative Color Bar */}
                  <div className="h-1.5 w-full bg-[#1B3B2B]/5 group-hover:bg-[#E5B80B] transition-colors" />
                  
                  <div className="p-10 flex flex-col flex-1">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B3B2B]/40">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-2 text-[10px] font-medium text-[#1B3B2B]/30">
                        <Calendar className="h-3 w-3" />
                        {item.date}
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-2xl font-medium leading-tight text-[#1B3B2B] mb-4 group-hover:text-[#1B3B2B]/80 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-[#1B3B2B]/50 line-clamp-3 mb-8">
                      {item.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-[#1B3B2B]/5">
                      <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1B3B2B]">
                        READ ARTICLE <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Connect Section - Premium Visual */}
        <section className="py-24 lg:py-40 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[4rem] bg-[#001D11] p-12 lg:p-24 text-center">
              <div className="absolute inset-0 opacity-10">
                <Image
                  src="/images/logo.png"
                  alt="Background"
                  fill
                  className="object-contain grayscale invert scale-125"
                />
              </div>
              <div className="relative z-10 mx-auto max-w-2xl">
                <h2 className="font-serif text-4xl font-normal tracking-tight text-white lg:text-7xl mb-8">
                  Stay in the loop.
                </h2>
                <p className="text-xl text-white/50 mb-12 italic">
                  "Follow our social media channels to get real-time updates on our nationwide programmes."
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/5 px-8 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10">
                    <a href="https://facebook.com/DcipZimbabwe" target="_blank" rel="noopener noreferrer">
                      FACEBOOK
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-[#E5B80B]/20 bg-[#E5B80B]/5 px-8 py-6 text-xs font-bold uppercase tracking-[0.2em] text-[#E5B80B] hover:bg-[#E5B80B]/10">
                    <a href="https://twitter.com/Dcip_zimbabwe" target="_blank" rel="noopener noreferrer">
                      TWITTER
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
