import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const news = [
  {
    category: "Press Release",
    title: "Deeds Registry Launches Digital Validation Programme",
    excerpt: "A new initiative to digitise and validate property records across Zimbabwe.",
    date: "March 10, 2026",
    href: "/newsroom/press-releases",
  },
  {
    category: "Success Story",
    title: "Thousands Receive Title Deeds Through Kwangu Programme",
    excerpt: "The Kwangu/Ngakwami programme continues to transform lives across the nation.",
    date: "March 5, 2026",
    href: "/newsroom/success-stories",
  },
  {
    category: "Announcement",
    title: "Extended Operating Hours at Harare Office",
    excerpt: "Improved service delivery with extended hours for property registration services.",
    date: "February 28, 2026",
    href: "/newsroom/press-releases",
  },
  {
    category: "Media",
    title: "Registrar Speaks on Land Tenure Security",
    excerpt: "Interview on the importance of property rights for economic development.",
    date: "February 20, 2026",
    href: "/newsroom/media",
  },
]

export function NewsSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-[#1B3B2B]/10 bg-[#1B3B2B]/5 px-4 py-1 mb-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1B3B2B]/60">
                Media & Updates
              </span>
            </div>
            <h2 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight text-[#1B3B2B] lg:text-6xl">
              Latest news and <br />
              official updates.
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-full border-[#1B3B2B]/10 bg-white px-8 py-6 text-sm font-semibold uppercase tracking-wider text-[#1B3B2B] hover:bg-[#1B3B2B]/5">
            <Link href="/newsroom" className="flex items-center gap-2">
              All News
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group relative flex flex-col rounded-[2.5rem] border border-[#1B3B2B]/5 bg-[#F9FBF9] p-8 transition-all hover:bg-white hover:shadow-2xl hover:shadow-[#1B3B2B]/10"
            >
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5B80B]">
                  {item.category}
                </span>
              </div>
              <h3 className="font-serif text-xl font-medium leading-snug text-[#1B3B2B] transition-colors group-hover:text-[#1B3B2B]/80 line-clamp-3">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#1B3B2B]/50 line-clamp-2">
                {item.excerpt}
              </p>
              <div className="mt-auto pt-8 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#1B3B2B]/30">
                <Calendar className="h-3 w-3" />
                {item.date}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
