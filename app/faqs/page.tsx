import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { ArrowRight, HelpCircle, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the Deeds Registry?",
    answer: "The Deeds Registry is the government office that is responsible for registering and maintaining records of ownership of immovable property in Zimbabwe. Additionally, the Registry ensures that property transactions are legally recorded and that ownership rights are protected.",
  },
  {
    question: "What are Title Deeds?",
    answer: "Title Deeds are documents that prove you legally own your house or piece of land. In Zimbabwe, title deeds are issued by the Deeds Registry. These documents confirm that: (i) You are the legal owner, (ii) The property is registered under your name, (iii) You have full rights to sell, lease, or develop the land (within zoning limits).",
  },
  {
    question: "Why are Title Deeds Registered?",
    answer: "Registration of title deeds is a statutory requirement that ensures that ownership of property is legally recognised and recorded in official government records. This protects property rights and provides legal certainty in property transactions.",
  },
  {
    question: "Who can register property at the Deeds Registry?",
    answer: "Property registration is conducted through Conveyancers (Legal practitioners who specialise in property transactions). The conveyancer prepares and lodges your documents for registration.",
  },
  {
    question: "What documents are required for property registration?",
    answer: "The required documents typically include: identity documents, proof of ownership, survey diagrams, tax clearance certificates, and other supporting documentation as advised by your conveyancer. Requirements may vary depending on the type of property transaction.",
  },
  {
    question: "How long does the registration process take?",
    answer: "The registration timeframe varies depending on the complexity of the transaction and the completeness of documentation. Your conveyancer will provide an estimated timeline based on your specific case.",
  },
  {
    question: "What is the Deed Validation Programme?",
    answer: "The Deed Validation Programme focuses on verifying and validating paper Title Deeds into securitised digital records. This initiative helps property owners whose original deeds have been lost, damaged, or destroyed to obtain new, secure, and digitized deeds.",
  },
  {
    question: "How can I verify the authenticity of a title deed?",
    answer: "You can verify the authenticity of a title deed by contacting the Deeds Registry offices in Harare or Bulawayo. Our staff can assist with confirming the validity of property documents and ownership records.",
  },
]

export default function FAQsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* FAQs Hero */}
        <section className="relative overflow-hidden bg-[#001D11] py-20 lg:py-32">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/logo.png"
              alt="Logo Pattern"
              fill
              className="object-contain grayscale invert scale-125"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 mb-8">
                <HelpCircle className="mr-2 h-4 w-4 text-[#E5B80B]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Help Center
                </span>
              </div>
              <h1 className="font-serif text-5xl font-normal leading-[1.1] tracking-tight text-white lg:text-8xl">
                How can we <br />
                help you?
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-white/50">
                Find answers to common questions about property registration, title deeds, and our digitisation programmes.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs - Premium Accordion */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-[2rem] border border-[#1B3B2B]/5 bg-[#F9FBF9] px-8 transition-all hover:bg-white hover:shadow-xl hover:shadow-[#1B3B2B]/5 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-serif text-xl font-medium text-[#1B3B2B] hover:no-underline py-8 transition-colors data-[state=open]:text-[#E5B80B]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg leading-relaxed text-[#1B3B2B]/60 pb-8 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Offices - Premium Cards */}
        <section className="py-24 lg:py-40 bg-[#F9FBF9]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E5B80B] mb-6">PHYSICAL LOCATIONS</p>
              <h2 className="font-serif text-4xl font-normal tracking-tight text-[#1B3B2B] lg:text-7xl">
                Visit our offices.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Harare Office */}
              <div className="group relative overflow-hidden rounded-[3rem] bg-white p-12 lg:p-16 border border-[#1B3B2B]/5 transition-all hover:shadow-2xl hover:shadow-[#1B3B2B]/5">
                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1B3B2B]/5 text-[#1B3B2B] group-hover:bg-[#1B3B2B] group-hover:text-white transition-colors">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-3xl font-medium text-[#1B3B2B] mb-8">Harare Office</h3>
                <div className="space-y-6 text-lg text-[#1B3B2B]/50">
                  <div>
                    <p className="font-bold text-[#1B3B2B] mb-1">Century House East</p>
                    <p>38 Nelson Mandela Avenue</p>
                    <p>Cnr Angwa Street / Nelson Mandela Ave</p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-[#1B3B2B]/5 pt-6">
                    <Phone className="h-5 w-5 text-[#E5B80B]" />
                    <span>+263 242 775544-6</span>
                  </div>
                </div>
              </div>

              {/* Bulawayo Office */}
              <div className="group relative overflow-hidden rounded-[3rem] bg-[#001D11] p-12 lg:p-16 text-white transition-all hover:shadow-2xl hover:shadow-[#001D11]/20">
                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-[#E5B80B] group-hover:bg-[#E5B80B] group-hover:text-[#001D11] transition-colors">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-3xl font-medium text-white mb-8">Bulawayo Office</h3>
                <div className="space-y-6 text-lg text-white/50">
                  <div>
                    <p className="font-bold text-white mb-1">Tredgold Building</p>
                    <p>Corner Fort Street / L. Takawira</p>
                    <p>Office no. 222, 2nd Floor</p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                    <Phone className="h-5 w-5 text-[#E5B80B]" />
                    <span>+263 2961601</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connector */}
            <div className="mt-12 rounded-[2.5rem] bg-white border border-[#1B3B2B]/5 p-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1B3B2B] mb-6">CONNECT DIGITALLY</p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <a href="https://facebook.com/DcipZimbabwe" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-[#1B3B2B]/50 hover:text-[#1B3B2B] transition-colors">
                  Facebook @DcipZimbabwe
                </a>
                <div className="h-2 w-2 rounded-full bg-[#E5B80B]" />
                <a href="https://twitter.com/Dcip_zimbabwe" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-[#1B3B2B]/50 hover:text-[#1B3B2B] transition-colors">
                  Twitter @Dcip_zimbabwe
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-40 bg-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-serif text-5xl font-normal tracking-tight text-[#1B3B2B] lg:text-7xl mb-10">
              Ready to secure <br />
              your property?
            </h2>
            <div className="flex justify-center gap-6">
              <Button asChild size="lg" className="rounded-full bg-[#1B3B2B] px-10 py-7 text-base font-semibold text-white hover:bg-[#1B3B2B]/90 shadow-2xl shadow-[#1B3B2B]/20">
                <Link href="/modernisation" className="flex items-center gap-3">
                  OUR PROGRAMMES
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
