"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Phone, Mail, Globe, MapPin, Facebook, Twitter, Linkedin, Instagram, Download, Loader2, CheckCircle2 } from "lucide-react"
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
  { name: "Nyasha Kutiguna", role: "Data Capturer", phone: "+263788676799", email: "nyasha.kutiguna@dokuma.co.zw" },
  { name: "Nokuthaba Lunga", role: "Junior Backend Engineer", phone: "+263 77 836 2387", email: "nokuthaba.lunga@dokuma.co.zw" },
  { name: "Arthur Makaza", role: "Data Capturer", phone: "+263771446318", email: "arthur.makaza@dokuma.co.zw" },
  { name: "Paidamoyo Makururu", role: "Product Owner", phone: "+263 77 316 3949", email: "paidamoyo.makururu@dokuma.co.zw" },
  { name: "Tadiwanashe Mandina", role: "Product Owner", phone: "+263785203054", email: "tadiwa.mandina@dokuma.co.zw" },
  { name: "Ruvimbo Manhombo", role: "Testing Engineer", phone: "+263 77 558 4664", email: "ruvimbo.manhombo@dokuma.co.zw" },
  { name: "Sheila Manzvanzvike", role: "Data Capturer", phone: "+263775365797", email: "sheila.manzvanzvike@dokuma.co.zw" },
  { name: "Webster Maposa", role: "Chief Executive Officer", phone: "+263 77 259 5347", email: "Webster.Maposa@dokuma.co.zw" },
  { name: "Farai Matsika", role: "Junior Backend Developer", phone: "+263 78 398 4876", email: "farai.matsika@dokuma.co.zw" },
  { name: "Privilege Mhenyu", role: "Data Capturer", phone: "+263 77 594 5550", email: "privilege.mhenyu@dokuma.co.zw" },
  { name: "Laura Msundire", role: "Product Owner", phone: "+263 71 405 0976", email: "Laura.msundire@dokuma.co.zw" },
  { name: "Moreblessing Msundire", role: "Data Capturer", phone: "+263771528128", email: "moreblessing.msundire@dokuma.co.zw" },
  { name: "Tanaka Mubobo", role: "Data Capturer", phone: "+263 78 254 3707", email: "tanaka.mubobo@dokuma.co.zw" },
  { name: "Vimbainashe Musabaeka", role: "Human Resources Officer", phone: "+263 77 188 5659", email: "vimbai.musabaeka@dokuma.co.zw" },
  { name: "Lousywinter Musarurwa", role: "Data Capturer", phone: "+263776185443", email: "lousywinter.musarurwa@dokuma.co.zw" },
  { name: "Maccine Muswere", role: "Accountant", phone: "+263 71 868 4811", email: "maccine.muswere@dokuma.co.zw" },
  { name: "Blessing Mwale", role: "Junior Frontend Engineer", phone: "+263 77 244 0088", email: "blessing.mwale@dokuma.co.zw" },
  { name: "Methembe Ncube", role: "Data Capturer", phone: "+263781025382", email: "methembe.ncube@dokuma.co.zw" },
  { name: "Nomuhle Ntini", role: "Data Capturer", phone: "+263 78 100 8527", email: "nomuhle.ntini@dokuma.co.zw" },
  { name: "Angela Nxumalo", role: "Data Capturer", phone: "+263789606953", email: "angela.nxumalo@dokuma.co.zw" },
  { name: "Keith Saiti", role: "Project and Product Manager", phone: "+263 77 220 8436", email: "Keith.saiti@dokuma.co.zw" },
  { name: "Takawira Shambare", role: "Public Relations Officer", phone: "+263713067329", email: "takawira.shambare@dokuma.co.zw" },
  { name: "Lorraine Shoko", role: "Chief Financial Officer", phone: "+263 71 954 3642", email: "Lorraine.Shoko@dokuma.co.zw" },
  { name: "Petros Timburwa", role: "Junior Frontend Engineer", phone: "+263 77 816 0560", email: "petros.timburwa@dokuma.co.zw" },
  { name: "Stanely Turai", role: "Data Capturer", phone: "+263 78 446 2919", email: "stanely.turai@dokuma.co.zw" },
  { name: "Don Yambira", role: "Commercial Manager", phone: "+263773320160", email: "don.yambira@dokuma.co.zw" },
  { name: "Gregory Zenda", role: "Stakeholder Liaison Officer", phone: "+263 77 633 4514", email: "gregory.zenda@dokuma.co.zw" },
  { name: "Dumisani Zulu", role: "Site Lead Harare", phone: "+263 77 232 5793", email: "dumisani.zulu@dokuma.co.zw" },
]

const DOKUMA_BLUE = "#003399"
const DOKUMA_LIGHT_BLUE = "#00AEEF"

function DokumaPattern() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none">
      <defs>
        <pattern id="dokuma-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          {/* Main circles */}
          <circle cx="20" cy="20" r="8" fill="currentColor" />
          <circle cx="50" cy="50" r="8" fill="currentColor" />

          {/* Half circles - using paths */}
          <path d="M 0 40 A 10 10 0 0 1 20 40 L 0 40 Z" fill="currentColor" />
          <path d="M 40 10 A 10 10 0 0 1 40 30 L 40 10 Z" fill="currentColor" />
          <path d="M 10 60 A 10 10 0 0 0 30 60 L 10 60 Z" fill="currentColor" />

          {/* Smaller dots */}
          <circle cx="40" cy="40" r="3" fill="currentColor" />
          <circle cx="10" cy="10" r="3" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dokuma-pattern)" />
    </svg>
  )
}

function SignatureCard({ employee, id }: { employee: typeof employees[0], id: string }) {
  return (
    <div 
      id={id}
      className="relative w-[700px] h-[240px] bg-white border border-gray-100 shadow-2xl rounded-[1.5rem] overflow-hidden flex font-sans group shrink-0"
    >
      {/* Background Pattern Layer (Faded across the whole card) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <DokumaPattern />
      </div>

      {/* Left Block - Pill Shape */}
      <div className="absolute left-[-20px] top-[40px] bottom-[40px] w-[220px] bg-[#003399] rounded-r-[100px] flex items-center justify-center overflow-hidden">
        {/* Pattern on the pill - Higher prominence */}
        <div className="absolute inset-0 text-white opacity-40">
          <DokumaPattern />
        </div>

        {/* Decorative Grid Dots (Top Left of pill) */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-1.5 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full" />
          ))}
        </div>
      </div>

      {/* Overlapping Circle Logo Container */}
      <div className="relative z-10 ml-[80px] my-auto">
        <div className="w-[150px] h-[150px] rounded-full bg-[#003399] p-[5px] shadow-xl">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-3">
            <Image
              src="/dokumalogo.png"
              alt="Dokuma Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Center Content Section */}
      <div className="flex-1 pl-12 pr-6 flex flex-col justify-center relative z-10">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#003399] mb-1">{employee.name}</h2>
          <p className="text-sm font-medium text-[#666666] uppercase tracking-wide">{employee.role}</p>
          <div className="w-[120px] h-[1px] bg-[#003399]/20 mt-4" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-[11px] font-semibold text-[#003399]">
            <div className="w-5 h-5 rounded-full bg-[#003399] flex items-center justify-center text-white">
              <MapPin size={10} />
            </div>
            78 Piers Rd, Borrowdale, Harare
          </div>

          <div className="flex flex-col gap-2 border-l-2 border-[#003399] pl-3 py-1">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-[#666666]">
              <Phone size={12} className="text-[#003399]" />
              {employee.phone}
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold text-[#666666]">
              <Mail size={12} className="text-[#003399]" />
              {employee.email}
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold text-[#666666]">
              <Globe size={12} className="text-[#003399]" />
              www.dokuma.co.zw
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Secondary Branding */}
      <div className="w-[140px] border-l border-[#003399]/10 bg-[#F8FAFF] flex flex-col items-center justify-center p-4 relative">
        {/* Decorative dots in corners */}
        <div className="absolute right-6 top-8 grid grid-cols-4 gap-1 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-[#003399] rounded-full" />
          ))}
        </div>

        <div className="mb-6 flex flex-col items-center text-center">
          <Image
            src="/dokumalogo.png"
            alt="Dokuma Logo Small"
            width={32}
            height={32}
            className="mb-2"
          />
          <span className="text-[10px] font-bold text-[#003399] tracking-widest uppercase">DOKUMA</span>
          <span className="text-[7px] text-[#666666] uppercase tracking-[0.2em] mt-1 italic">Innovation leading to digital transformation</span>
        </div>

        <div className="flex gap-1.5">
          <div className="w-6 h-6 rounded-full bg-[#003399] flex items-center justify-center text-white scale-90">
            <Facebook size={10} />
          </div>
          <div className="w-6 h-6 rounded-full bg-[#003399] flex items-center justify-center text-white scale-90">
            <Twitter size={10} />
          </div>
          <div className="w-6 h-6 rounded-full bg-[#003399] flex items-center justify-center text-white scale-90">
            <Linkedin size={10} />
          </div>
          <div className="w-6 h-6 rounded-full bg-[#003399] flex items-center justify-center text-white scale-90">
            <Instagram size={10} />
          </div>
        </div>

        {/* Thick curved right border accent */}
        <div className="absolute right-0 top-0 bottom-0 w-[12px] bg-[#003399] rounded-l-[40px]" />
      </div>
    </div>
  )
}

export default function SignaturesPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)

  const generateAllSignatures = async () => {
    setIsGenerating(true)
    setProgress(0)
    const zip = new JSZip()
    const folder = zip.folder("Dokuma_Employee_Signatures")
    
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
          folder?.file(`${employee.name.replace(/\s+/g, "_")}_Signature.png`, base64Data, { base64: true })
        }
        
        setProgress(Math.round(((i + 1) / employees.length) * 100))
      }

      const content = await zip.generateAsync({ type: "blob" })
      const link = document.createElement("a")
      link.href = URL.createObjectURL(content)
      link.download = "Dokuma_Employee_Signatures.zip"
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
    <div className="flex min-h-screen flex-col bg-[#F4F7FF]">
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003399]/5 text-[#003399] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Our Identity
            </div>
            <h1 className="font-serif text-6xl font-normal text-[#003399] mb-4">Employee Signatures</h1>
            <p className="text-[#003399]/50 text-xl max-w-2xl mx-auto mb-10">Standardized digital identifiers meticulously designed for the Dokuma team.</p>
            
            <div className="relative inline-block mt-4">
              <Button 
                onClick={generateAllSignatures} 
                disabled={isGenerating}
                className="rounded-full bg-[#003399] hover:bg-[#002880] text-white px-10 py-7 text-sm font-bold uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95 disabled:opacity-70"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                    Generating ({progress}%)
                  </>
                ) : (
                  <>
                    <Download className="mr-3 h-5 w-5" />
                    Generate All Signatures (PNG)
                  </>
                )}
              </Button>
              
              {isGenerating && (
                <div className="absolute -bottom-4 left-0 w-full h-1 bg-[#003399]/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#003399] transition-all duration-300" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-20 gap-y-16 place-items-center">
            {employees.map((employee, index) => (
              <SignatureCard key={index} id={`sig-${index}`} employee={employee} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
