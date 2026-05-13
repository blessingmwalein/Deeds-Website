import { ShieldCheck, Fingerprint, ScanLine, Lock } from "lucide-react"
import { YouTubePlayer } from "@/components/youtube-player"

const VIDEO_ID = "7x9bjWdRgDw"

const securityHighlights = [
  { icon: ShieldCheck, label: "Tamper-proof seal" },
  { icon: Fingerprint, label: "Unique digital fingerprint" },
  { icon: ScanLine, label: "Scannable verification" },
  { icon: Lock, label: "Encrypted ownership record" },
]

export function VideoSection() {
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
            <YouTubePlayer
              videoId={VIDEO_ID}
              title="Securitised Deed Walkthrough"
              badge="Watch Now"
              caption="Securitised Deed Features"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
