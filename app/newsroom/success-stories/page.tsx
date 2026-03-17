import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Calendar, ArrowLeft, Play, User, ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const stories = [
  {
    title: "The Moyo Family: 25 Years of Waiting Finally Over",
    excerpt: "After living in their Chitungwiza home for 25 years without official documentation, the Moyo family finally received their title deed through the Kwangu/Ngakwami programme.",
    date: "March 5, 2026",
    location: "Chitungwiza",
    type: "Documentary",
  },
  {
    title: "5,000 Title Deeds Issued in Bulawayo Province",
    excerpt: "A milestone achievement as thousands of property owners in Bulawayo receive their securitised digital title deeds, transforming lives and securing futures.",
    date: "February 10, 2026",
    location: "Bulawayo",
    type: "Video Story",
  },
  {
    title: "Small Business Owner Secures Loan with New Title Deed",
    excerpt: "Mr. Ncube, a small business owner in Hwange, was able to secure a business loan using his newly validated title deed as collateral, enabling him to expand his operations.",
    date: "January 28, 2026",
    location: "Hwange",
    type: "Interview",
  },
  {
    title: "Widow Protected: Land Rights Secured Through Digitisation",
    excerpt: "After her husband's passing, Mrs. Chigumba faced challenges proving ownership of their family home. The deed validation programme helped secure her property rights.",
    date: "January 15, 2026",
    location: "Harare",
    type: "Documentary",
  },
  {
    title: "Resettled Farmer Receives Bankable Title Deed",
    excerpt: "Through the Land Tenure Programme, Mr. Mutasa received a securitised title deed for his farm, enabling him to access agricultural financing for the first time.",
    date: "December 20, 2025",
    location: "Mashonaland East",
    type: "Video Story",
  },
  {
    title: "Community Celebrates as 200 Families Receive Title Deeds",
    excerpt: "A community celebration in Epworth as 200 families receive their official title deeds, marking a new chapter in their lives.",
    date: "December 5, 2025",
    location: "Epworth",
    type: "Documentary",
  },
]

export default function SuccessStoriesPage() {
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
                  Human Impact
                </span>
              </div>
              <h1 className="font-serif text-5xl font-normal leading-[1.1] tracking-tight text-[#1B3B2B] lg:text-7xl">
                Success <br />
                Stories.
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-[#1B3B2B]/60">
                Witness the real-world impact of our digitisation and land tenure programmes through the voices of those they serve.
              </p>
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {stories.map((story, index) => (
                <article
                  key={index}
                  className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-[#1B3B2B]/5 bg-[#F9FBF9] transition-all hover:bg-white hover:shadow-2xl hover:shadow-[#1B3B2B]/5"
                >
                  {/* Video Thumbnail Placeholder */}
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-[#001D11]/90" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-[#E5B80B] shadow-2xl transition-transform group-hover:scale-110 group-hover:bg-[#E5B80B] group-hover:text-white group-hover:border-[#E5B80B]">
                        <Play className="h-7 w-7 fill-current" />
                      </div>
                    </div>
                    {/* Badge Overlay */}
                    <div className="absolute bottom-6 left-6">
                      <span className="rounded-full bg-black/40 backdrop-blur-md px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white border border-white/10">
                        {story.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col flex-1">
                    <div className="mb-6 flex flex-wrap items-center gap-4 text-[10px] font-medium text-[#1B3B2B]/30 uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-[#E5B80B]" />
                        {story.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5" />
                        {story.date}
                      </div>
                    </div>
                    
                    <h2 className="font-serif text-2xl font-medium leading-tight text-[#1B3B2B] mb-4 group-hover:text-[#1B3B2B]/80 transition-colors">
                      {story.title}
                    </h2>
                    
                    <p className="text-sm leading-relaxed text-[#1B3B2B]/50 line-clamp-3 mb-8">
                      {story.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-[#1B3B2B]/5">
                      <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1B3B2B]">
                        WATCH STORY <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
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
