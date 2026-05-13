"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, ShieldCheck, Fingerprint, ScanLine, Lock } from "lucide-react"

const VIDEO_ID = "7x9bjWdRgDw"

const securityHighlights = [
  {
    icon: ShieldCheck,
    label: "Tamper-proof seal",
  },
  {
    icon: Fingerprint,
    label: "Unique digital fingerprint",
  },
  {
    icon: ScanLine,
    label: "Scannable verification",
  },
  {
    icon: Lock,
    label: "Encrypted ownership record",
  },
]

export function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="bg-[#F5F1EB] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center rounded-full border border-[#1B3B2B]/10 bg-[#1B3B2B]/5 px-4 py-1 mb-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1B3B2B]/60">
                Securitised Deed
              </span>
            </div>
            <h2 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight text-[#1B3B2B] lg:text-5xl">
              See the security <br />
              built into every deed.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#1B3B2B]/70">
              A short walkthrough of the new securitised title deed — its anti-fraud features, embedded verification marks, and the digital safeguards that protect your property rights.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {securityHighlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-[#1B3B2B]/10 bg-white/60 px-4 py-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1B3B2B]/5">
                    <Icon className="h-4 w-4 text-[#1B3B2B]" />
                  </span>
                  <span className="text-sm font-medium text-[#1B3B2B]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#1B3B2B]/10 bg-[#001D11] shadow-2xl">
              <div className="relative aspect-video">
                {playing ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                    title="Securitised Deed Walkthrough"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="group absolute inset-0 flex items-center justify-center"
                    aria-label="Play securitised deed video"
                  >
                    <Image
                      src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                      alt="Securitised deed walkthrough preview"
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-[#001D11]/70 via-[#001D11]/20 to-transparent" />
                    <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#E5B80B] shadow-2xl transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-8 w-8 translate-x-0.5 text-[#001D11]" fill="currentColor" />
                    </span>
                    <span className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E5B80B]">
                        Watch Now
                      </span>
                      <span className="text-xs font-medium text-white/70">
                        Securitised Deed Features
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
