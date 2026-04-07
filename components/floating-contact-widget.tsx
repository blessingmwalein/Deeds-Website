"use client"

import { useEffect, useState } from "react"
import { ChevronUp, Mail, MessageCircle, Phone, X } from "lucide-react"

export function FloatingContactWidget() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 280)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isChatOpen && (
        <div className="w-[290px] rounded-2xl border border-[#1B3B2B]/20 bg-white/95 p-4 shadow-xl backdrop-blur-sm">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-[#1B3B2B]">Contact Us</p>
              <p className="mt-1 text-xs text-[#1B3B2B]/70">We are ready to assist you.</p>
            </div>
            <button
              type="button"
              onClick={() => setIsChatOpen(false)}
              className="rounded-full p-1 text-[#1B3B2B]/70 transition-colors hover:bg-[#1B3B2B]/10 hover:text-[#1B3B2B]"
              aria-label="Close contact widget"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href="tel:+263242775544"
              className="flex items-center gap-3 rounded-xl border border-[#1B3B2B]/15 bg-[#F7F3EA] px-3 py-2 text-sm text-[#1B3B2B] transition-colors hover:bg-[#EFE7D8]"
            >
              <Phone className="h-4 w-4" />
              Call: +263 242 775544-6
            </a>
            <a
              href="mailto:info@deedsregistry.gov.zw"
              className="flex items-center gap-3 rounded-xl border border-[#1B3B2B]/15 bg-[#F7F3EA] px-3 py-2 text-sm text-[#1B3B2B] transition-colors hover:bg-[#EFE7D8]"
            >
              <Mail className="h-4 w-4" />
              Email: info@deedsregistry.gov.zw
            </a>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#1B3B2B]/20 bg-white text-[#1B3B2B] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#F7F3EA]"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsChatOpen((prev) => !prev)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1B3B2B] text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-[#153021]"
          aria-label="Open contact widget"
        >
          <MessageCircle className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
