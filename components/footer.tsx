import Link from "next/link"
import NextImage from "next/image"
import { Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Modernisation", href: "/modernisation" },
  { name: "Newsroom", href: "/newsroom" },
  { name: "FAQs", href: "/faqs" },
]

const services = [
  { name: "Property Registration", href: "/#services" },
  { name: "Title Deed Verification", href: "/#services" },
  { name: "Mortgage Bond Registration", href: "/#services" },
  { name: "Deed Validation", href: "/modernisation" },
]

export function Footer() {
  return (
    <footer className="bg-[#001D11] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all group-hover:bg-white/10">
                <NextImage
                  src="/images/logo.png"
                  alt="Deeds Registry Logo"
                  width={32}
                  height={32}
                  className="grayscale invert brightness-200"
                />
              </div>
              <div>
                <p className="font-serif text-lg font-normal leading-tight tracking-tight text-white">Zimbabwe</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">Deeds Registry</p>
              </div>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-white/40 max-w-xs">
              Ensuring secure property registration and safeguarding rights in Zimbabwe since 1891. A department under the Ministry of Justice.
            </p>
            <div className="mt-8 flex gap-5">
              <a
                href="https://facebook.com/DcipZimbabwe"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:bg-white/5 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/Dcip_zimbabwe"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:bg-white/5 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-auto">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E5B80B]">Quick Links</h3>
            <ul className="mt-8 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:ml-auto">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E5B80B]">Services</h3>
            <ul className="mt-8 space-y-4">
              {services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:ml-auto">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E5B80B]">Contact Us</h3>
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white/40" />
                <span className="text-sm leading-relaxed text-white/50">
                  Century House East, 38 Nelson Mandela Avenue, Harare
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 shrink-0 text-white/40" />
                <span className="text-sm text-white/50">+263 242 775544-6</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 shrink-0 text-white/40" />
                <span className="text-sm text-white/50">info@deedsregistry.gov.zw</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Area */}
        <div className="mt-20 border-t border-white/5 pt-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-6">
              <p className="text-[11px] font-medium uppercase tracking-wider text-white/20">
                © {new Date().getFullYear()} Zimbabwe Deeds Registry
              </p>
              <div className="h-px w-12 bg-white/10 hidden sm:block" />
              <p className="text-[11px] font-medium uppercase tracking-wider text-white/20">
                Ministry of Justice, Legal & Parliamentary Affairs
              </p>
            </div>
            
            <div className="flex gap-8">
              <Link href="/privacy" className="text-[11px] font-medium uppercase tracking-wider text-white/20 transition-colors hover:text-white/40">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[11px] font-medium uppercase tracking-wider text-white/20 transition-colors hover:text-white/40">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
