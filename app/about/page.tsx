import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Award, 
  Users, 
  Target, 
  Heart, 
  Shield, 
  Accessibility,
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import NextImage from "next/image"
import { Button } from "@/components/ui/button"

const coreValues = [
  { icon: Award, title: "Excellence", description: "Striving for the highest standards in service delivery" },
  { icon: Users, title: "Accountability", description: "Taking responsibility for our actions and decisions" },
  { icon: Target, title: "Teamwork", description: "Collaborating effectively to achieve common goals" },
  { icon: Heart, title: "Customer Care", description: "Putting the needs of our clients first" },
  { icon: Shield, title: "Integrity", description: "Maintaining honesty and ethical conduct in all dealings" },
  { icon: Accessibility, title: "Accessibility", description: "Ensuring services are available to all Zimbabweans" },
]

const commitments = [
  "Transparency in property administration",
  "Efficient service delivery",
  "Secure and reliable record keeping",
  "Continuous modernisation of property registration systems",
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Premium Hero Section */}
        <section className="relative overflow-hidden bg-[#F9FBF9] py-20 lg:py-32">
          {/* Subtle Coat of Arms Watermark */}
          <div className="absolute -right-20 -top-20 opacity-[0.05] pointer-events-none hidden lg:block">
            <NextImage
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
                  Established 1891
                </span>
              </div>
              <h1 className="font-serif text-5xl font-normal leading-[1.1] tracking-tight text-[#1B3B2B] lg:text-7xl max-w-4xl">
                A legacy of property security in Zimbabwe.
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-[#1B3B2B]/60">
                The Deeds Registry is Zimbabwe's official authority for the registration, custody and management of property ownership records. We ensure every Zimbabwean's property rights are legally recognised and protected.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission - Interactive Premium Cards */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Vision Card */}
              <div className="group relative overflow-hidden rounded-[3rem] bg-[#001D11] p-12 lg:p-16 transition-all hover:shadow-2xl hover:shadow-[#001D11]/20">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-all group-hover:scale-150" />
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E5B80B]/10 mb-8">
                  <Target className="h-8 w-8 text-[#E5B80B]" />
                </div>
                <h2 className="font-serif text-4xl text-white mb-6">Our Vision</h2>
                <p className="text-xl leading-relaxed text-white/50">
                  To be a world class service provider in registration and protection of proprietary rights in land by 2030.
                </p>
              </div>

              {/* Mission Card */}
              <div className="group relative overflow-hidden rounded-[3rem] bg-[#F5F1EB] p-12 lg:p-16 transition-all hover:bg-[#ece6db]">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1B3B2B]/5 mb-8">
                  <Shield className="h-8 w-8 text-[#1B3B2B]" />
                </div>
                <h2 className="font-serif text-4xl text-[#1B3B2B] mb-6">Our Mission</h2>
                <p className="text-xl leading-relaxed text-[#1B3B2B]/60">
                  Dedicated to register, protect real rights in land and facilitate access to information in order to promote economic growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values - "Finer" Cards Grid */}
        <section className="py-24 lg:py-32 bg-[#F9FBF9]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20 text-center">
              <div className="inline-flex items-center rounded-full border border-[#1B3B2B]/10 bg-[#1B3B2B]/5 px-4 py-1 mb-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1B3B2B]/60">
                  Our Ethics
                </span>
              </div>
              <h2 className="font-serif text-4xl font-normal tracking-tight text-[#1B3B2B] lg:text-6xl">
                The values that guide us.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="group rounded-[2.5rem] border border-[#1B3B2B]/5 bg-white p-10 transition-all hover:shadow-xl hover:shadow-[#1B3B2B]/5"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1B3B2B]/5 text-[#1B3B2B] transition-colors group-hover:bg-[#1B3B2B] group-hover:text-white">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#1B3B2B] mb-3">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-[#1B3B2B]/50">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment & Ministry Area */}
        <section className="py-24 lg:py-40 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-serif text-5xl font-normal tracking-tight text-[#1B3B2B] lg:text-7xl mb-10">
                  Our commitment <br />
                  to Zimbabwe.
                </h2>
                <div className="grid gap-4">
                  {commitments.map((commitment, index) => (
                    <div key={index} className="flex items-center gap-5 p-4 rounded-3xl border border-[#1B3B2B]/5 hover:bg-[#F9FBF9] transition-colors">
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#1B3B2B] text-white">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <span className="text-lg font-medium text-[#1B3B2B]">{commitment}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <Button asChild size="lg" className="rounded-full bg-[#1B3B2B] px-10 py-7 text-base font-semibold text-white hover:bg-[#1B3B2B]/90 shadow-2xl shadow-[#1B3B2B]/20">
                    <Link href="/modernisation" className="flex items-center gap-3">
                      EXPLORE MODERNISATION
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Department Info Box */}
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-[4rem] bg-[#001D11] p-12 lg:p-20 flex flex-col justify-center">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                    <NextImage
                      src="/images/logo.png"
                      alt="Watermark"
                      width={400}
                      height={400}
                      className="grayscale invert"
                    />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E5B80B] mb-6">
                    A Department Under
                  </p>
                  <h3 className="font-serif text-4xl text-white leading-tight mb-8">
                    Ministry of Justice, Legal and Parliamentary Affairs
                  </h3>
                  <div className="h-1 w-20 bg-[#E5B80B]/30 mb-8" />
                  <p className="text-lg leading-relaxed text-white/50">
                    The Deeds Registry exercises its functions through the Deeds Registries Act, serving as the cornerstone for Zimbabwe's economic development through secure land rights.
                  </p>
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
