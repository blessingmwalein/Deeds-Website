"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Phone, Mail, Globe, MapPin, Download, Loader2 } from "lucide-react"
import { useState } from "react"
import { toPng } from "html-to-image"
import JSZip from "jszip"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const employees = [
  { name: "Tanaka Chataika", role: "Receptionist/Admin", phone: "+263777517051", email: "tanaka.chataika@dokuma.co.zw" },
  { name: "Walter Chibamu", role: "Site Lead Bulawayo", phone: "+263 77 527 8348", email: "walter.chibamu@dokuma.co.zw" },
  { name: "Hannah Chimedza", role: "Data Capturer", phone: "+263771291290", email: "hannah.chimedza@dokuma.co.zw" },
  { name: "Nyasha Chimowa", role: "Senior Frontend Engineer", phone: "+263 77 366 4613", email: "nyashahope.chimowa@dokuma.co.zw" },
  { name: "Tavonga Chinouriri", role: "Assistant Devops and DB", phone: "+263 77 348 5067", email: "tavonga.chinouriri@dokuma.co.zw" },
  { name: "Tatenda Dzapasi", role: "Data Capturer", phone: "+263787226952", email: "tatenda.dzapasi@dokuma.co.zw" },
  { name: "Takudzwa Dzere", role: "Data Capturer", phone: "+263787220542", email: "takudzwa.dzere@dokuma.co.zw" },
  { name: "Douglas Gweera", role: "Senior Backend Engineer", phone: "+263 77 908 1696", email: "douglas.gweera@dokuma.co.zw" },
  { name: "Mellisa Gwenzi", role: "Accounts Clerk", phone: "+263 78 626 9654", email: "mellisa.gwenzi@dokuma.co.zw" },
  { name: "Valentine Hungwe", role: "Accounts Clerk", phone: "+263 77 395 2468", email: "valentine.hungwe@dokuma.co.zw" },
  { name: "Collins Jimu", role: "Chief Technology Officer", phone: "+263773468496", email: "collins.jimu@dokuma.co.zw" },
  { name: "Tawanda Kaundura", role: "Driver", phone: "+263787063809", email: "tawanda.kaundura@dokuma.co.zw" },
  { name: "Allen Kawanzaruwa", role: "Senior Backend Engineer", phone: "+263 78 781 1953", email: "allen.kawanzaruwa@dokuma.co.zw" },
  { name: "Nyasha Katiguna", role: "Data Capturer", phone: "+263788676799", email: "nyashajuliankatiguna@icloud.com" },
  { name: "Nokuthaba Lunga", role: "Junior Backend Engineer", phone: "+263 77 836 2387", email: "nokuthaba.lunga@dokuma.co.zw" },
  { name: "Arthur Makaza", role: "Data Capturer", phone: "+263771446318", email: "arthur.makaza@dokuma.co.zw" },
  { name: "Paidamoyo Makururu", role: "Product Owner", phone: "+263 77 316 3949", email: "Paida.makururu@dokuma.co.zw" },
  { name: "Tadiwanashe Mandina", role: "Product Owner", phone: "+263785203054", email: "tadiwa.mandina@dokuma.co.zw" },
  { name: "Ruvimbo Manhombo", role: "Testing Engineer", phone: "+263 71 958 4664", email: "ruvimbo.manhombo@dokuma.co.zw" },
  { name: "Sheilla Manzvanzvike", role: "Data Capturer", phone: "+263775365797", email: "sheilla.manzvanzvike@dokuma.co.zw" },
  { name: "Webster Maposa", role: "Chief Executive Officer", phone: "+263 77 259 5347", email: "Webster.Maposa@dokuma.co.zw" },
  { name: "Farai Matsika", role: "Junior Backend Developer", phone: "+263 78 398 4876", email: "farai.matsika@dokuma.co.zw" },
  { name: "Priviledge Mhenyu", role: "Data Capturer", phone: "+263 77 594 5550", email: "priviledge.mhenyu@dokuma.co.zw" },
  { name: "Laura Msundire", role: "Product Owner", phone: "+263 71 405 0976", email: "Laura.msundire@dokuma.co.zw" },
  { name: "Moreblessing Msundire", role: "Data Capturer", phone: "+263771528128", email: "moreblessing.msundire@dokuma.co.zw" },
  { name: "Tanaka Mubobo", role: "Data Capturer", phone: "+263 78 254 3707", email: "tanaka.mubobo@dokuma.co.zw" },
  { name: "Vimbainashe Musabaeka", role: "Human Resources Officer", phone: "+263 77 188 5659", email: "vimbai.musabaeka@dokuma.co.zw" },
  { name: "Lousywinter Musarurwa", role: "Data Capturer", phone: "+263776185443", email: "lousywintermusarurwa@gmail.com" },
  { name: "Maccine Muswere", role: "Accountant", phone: "+263 71 868 4811", email: "maccine.muswere@dokuma.co.zw" },
  { name: "Blessing Mwale", role: "Junior Frontend Engineer", phone: "+263 77 244 0088", email: "blessing.mwale@dokuma.co.zw" },
  { name: "Methembe Ncube", role: "Data Capturer", phone: "+263781025382", email: "methembe.ncube@dokuma.co.zw" },
  { name: "Nomuhle Ntini", role: "Data Capturer", phone: "+263 78 100 8527", email: "nomuhle.ntini@dokuma.co.zw" },
  { name: "Angela Nxumalo", role: "Data Capturer", phone: "+263789606953", email: "angela.nxumalo@dokuma.co.zw" },
  { name: "Keith Saiti", role: "Project and Product Manager", phone: "+263 77 220 8436", email: "Keith.saiti@dokuma.co.zw" },
  { name: "Takawira Shambare", role: "Public Relations Officer", phone: "+263713067329", email: "takawira.shambare@dokuma.co.zw" },
  { name: "Lorraine Shoko", role: "Chief Financial Officer", phone: "+263 71 954 3642", email: "Lorraine.Shoko@dokuma.co.zw" },
  { name: "Petros Timburwa", role: "Junior Frontend Engineer", phone: "+263 77 816 0560", email: "petros.timburwa@dokuma.co.zw" },
  { name: "Stanley Turai", role: "Data Capturer", phone: "+263 78 446 2919", email: "stanley.turai@dokuma.co.zw" },
  { name: "Don Yambira", role: "Commercial & Operations Manager", phone: "+263773320160", email: "don.yambira@dokuma.co.zw" },
  { name: "Gregory Zenda", role: "Stakeholder Liaison Officer", phone: "+263 77 633 4514", email: "gregory.zenda@dokuma.co.zw" },
  { name: "Dumisani Zulu", role: "Site Lead Harare", phone: "+263 77 232 5793", email: "dumisani.zulu@dokuma.co.zw" },
]

function BubblePattern({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-6 gap-2 ${className}`}>
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="w-4 h-4 rounded-full opacity-30"
          style={{
            backgroundColor: i % 2 === 0 ? "#003399" : "#BFCED1",
            transform: `scale(${0.5 + Math.random()})`
          }}
        />
      ))}
    </div>
  )
}

function SignatureCardWithOverlay({ employee, index }: { employee: typeof employees[0], index: number }) {
  const [isGenerating, setIsGenerating] = useState(false)

  const generateSingle = async () => {
    setIsGenerating(true)
    try {
      const element = document.getElementById(`sig-${index}`)
      if (element) {
        toast.info(`Generating signature for ${employee.name}...`)
        const dataUrl = await toPng(element, {
          pixelRatio: 3,
          skipFonts: false,
          cacheBust: true,
        })
        const link = document.createElement("a")
        link.href = dataUrl
        link.download = `${employee.name.replace(/\s+/g, "_")}_Signature_V2.png`
        link.click()
        toast.success(`Successfully generated signature for ${employee.name}!`)
      }
    } catch (error) {
      console.error("Signature generation failed:", error)
      toast.error(`Failed to generate signature for ${employee.name}.`)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="relative group w-[700px] h-[350px]">
      <SignatureCardV2 id={`sig-${index}`} employee={employee} />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm z-20">
        <Button
          onClick={generateSingle}
          disabled={isGenerating}
          size="lg"
          className="bg-[#003399] hover:bg-[#002880] text-white scale-95 group-hover:scale-100 transition-all duration-300 shadow-2xl"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Download className="mr-2 h-5 w-5" />
              Download PNG
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

function SignatureCardV2({ employee, id }: { employee: typeof employees[0], id: string }) {
  return (
    <div
      id={id}
      className="relative w-[700px] h-[350px] bg-white border border-gray-100 shadow-xl overflow-hidden flex flex-col font-sans shrink-0"
    >
      {/* Top Section */}
      <div className="flex-1 flex p-8 relative">
        {/* Left: Logo & Branding */}
        <div className="w-[40%] flex flex-col pt-4">
          <div className="flex items-center gap-3">
            <Image
              src="/dokumalogo.png"
              alt="Dokuma Logo"
              width={160}
              height={60}
              className="object-contain"
            />
          </div>
          {/* <p className="text-[#666666] text-lg font-medium mt-1 ml-12">Digital Consultancy</p> */}
        </div>

        {/* Right: Employee Details */}
        <div className="flex-1 pl-8 pt-2">
          <h2 className="text-[32px] font-semibold text-[#94B4B1] mb-1 whitespace-nowrap overflow-hidden text-ellipsis">{employee.name}</h2>
          <p className="text-xl font-medium text-black mb-6">{employee.role}</p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-[#333333]">
              <MapPin size={16} className="text-[#E95D5D]" fill="#E95D5D" strokeWidth={0} />
              78 Piers Rd, Borrowdale, Harare
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333]">
              <Phone size={16} className="text-[#E95D5D]" fill="#E95D5D" strokeWidth={0} />
              {employee.phone}
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333]">
              <Mail size={16} className="text-[#E95D5D]" fill="#E95D5D" strokeWidth={0} />
              <span className="underline decoration-[#333333] underline-offset-2">{employee.email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333]">
              <Globe size={16} className="text-[#E95D5D]" fill="#E95D5D" strokeWidth={0} />
              <span className="underline decoration-[#333333] underline-offset-2">www.dokuma.co.zw</span>
            </div>
          </div>
        </div>

        {/* Bubble Pattern Overlap Left */}
        <div className="absolute left-[-20px] bottom-[-40px] pointer-events-none">
          <BubblePattern className="w-[180px] rotate-12" />
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="h-[120px] bg-[#003399] relative overflow-hidden flex items-center justify-center">
        {/* Dynamic Blue Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002880] via-[#003399] to-[#0055CC] opacity-90" />

        {/* Pattern overlap into banner */}
        <div className="absolute left-[30px] top-[-30px] w-[200px] pointer-events-none">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full bg-white opacity-40 shrink-0"
              />
            ))}
          </div>
        </div>

        <h3 className="relative z-10 text-white text-xl font-medium tracking-wide">
          Innovation leading to digital transformation
        </h3>

        {/* Right side diagonal light effect */}
        <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-white/10 skew-x-[-30deg] translate-x-20" />
      </div>

      {/* Background patterns */}
      <div className="absolute right-[-30px] top-[-20px] opacity-[0.05] pointer-events-none">
        <BubblePattern className="w-[300px]" />
      </div>
    </div>
  )
}

export default function SignaturesV2Page() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)

  const generateAllSignatures = async () => {
    setIsGenerating(true)
    setProgress(0)
    const zip = new JSZip()
    const folder = zip.folder("Dokuma_Signatures_V2")

    try {
      toast.info("Starting signature generation... This may take a moment.")

      for (let i = 0; i < employees.length; i++) {
        const employee = employees[i]
        const element = document.getElementById(`sig-${i}`)

        if (element) {
          const dataUrl = await toPng(element, {
            pixelRatio: 3,
            skipFonts: false,
            cacheBust: true,
          })

          const base64Data = dataUrl.replace(/^data:image\/png;base64,/, "")
          folder?.file(`${employee.name.replace(/\s+/g, "_")}_Signature_V2.png`, base64Data, { base64: true })
        }

        setProgress(Math.round(((i + 1) / employees.length) * 100))
      }

      const content = await zip.generateAsync({ type: "blob" })
      const link = document.createElement("a")
      link.href = URL.createObjectURL(content)
      link.download = "Dokuma_Employee_Signatures_V2.zip"
      link.click()

      toast.success("Successfully generated all signatures!")
    } catch (error) {
      console.error("Signature generation failed:", error)
      toast.error("An error occurred during generation.")
    } finally {
      setIsGenerating(false)
      setProgress(0)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1 py-12 px-4 bg-gray-50/50">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-[#333333] mb-4">Email Signatures - New Template</h1>
            <p className="text-gray-500 text-lg mb-8">Redesigned template matching the official Dokuma design.</p>

            <div className="relative inline-block mb-12">
              <Button
                onClick={generateAllSignatures}
                disabled={isGenerating}
                className="rounded-lg bg-[#003399] hover:bg-[#002880] text-white px-8 py-6 text-base font-semibold transition-all hover:scale-105 active:scale-95 disabled:opacity-70"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                    Generating {progress}%
                  </>
                ) : (
                  <>
                    <Download className="mr-3 h-5 w-5" />
                    Export All Signatures (ZIP)
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-16 place-items-center">
            {employees.map((employee, index) => (
              <SignatureCardWithOverlay key={index} index={index} employee={employee} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
