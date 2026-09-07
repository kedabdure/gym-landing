import Link from "next/link";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const programLinks = [
  { name: "GYM", id: "gym" },
  { name: "KICKBOXING", id: "kickboxing" },
  { name: "AEROBICS", id: "aerobics" },
  { name: "TAEKWONDO", id: "taekwondo" },
];

const quickLinks = [
  { name: "Programs", href: "#programs" },
  { name: "About", href: "#why-us" },
  { name: "Facility", href: "#facility" },
  { name: "Register", href: "/register" },
  { name: "Contact", href: "#footer" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#0a0a0b] border-t border-[#1f1f22]"
      aria-label="Footer"
    >
      {/* Main footer */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display text-3xl tracking-widest text-[#f0ede8] hover:text-[#ff5500] transition-colors inline-block mb-4"
              aria-label="IRONFORGE home"
            >
              IRONFORGE
            </Link>
            <p className="text-[#4a4a4a] text-sm leading-relaxed mb-6 max-w-xs">
              Forged in Strength. Built for Life.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="IRONFORGE on Instagram"
                className="text-[#4a4a4a] hover:text-[#ff5500] transition-colors duration-200"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="#"
                aria-label="IRONFORGE on YouTube"
                className="text-[#4a4a4a] hover:text-[#ff5500] transition-colors duration-200"
              >
                <YoutubeIcon size={18} />
              </a>
              <a
                href="#"
                aria-label="IRONFORGE on Facebook"
                className="text-[#4a4a4a] hover:text-[#ff5500] transition-colors duration-200"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-label text-[#4a4a4a] mb-6">PROGRAMS</h3>
            <ul className="space-y-3" role="list">
              {programLinks.map((program) => (
                <li key={program.id}>
                  <Link
                    href={`/register?program=${program.id}`}
                    className="text-[#8a8a8a] hover:text-[#f0ede8] transition-colors duration-200 text-sm font-display text-xl leading-none"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-label text-[#4a4a4a] mb-6">NAVIGATE</h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#8a8a8a] hover:text-[#f0ede8] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-label text-[#4a4a4a] mb-6">FIND US</h3>
            <address className="not-italic space-y-4">
              <div>
                <p className="text-label text-[#2a2a2d] mb-1">LOCATION</p>
                <p className="text-[#8a8a8a] text-sm leading-relaxed">
                  [Your Address Here]
                  <br />
                  [City, Region]
                </p>
              </div>
              <div>
                <p className="text-label text-[#2a2a2d] mb-1">PHONE</p>
                <a
                  href="tel:+00000000000"
                  className="text-[#8a8a8a] hover:text-[#f0ede8] transition-colors text-sm"
                >
                  [+000 000 000 000]
                </a>
              </div>
              <div>
                <p className="text-label text-[#2a2a2d] mb-1">EMAIL</p>
                <a
                  href="mailto:info@ironforge.com"
                  className="text-[#8a8a8a] hover:text-[#f0ede8] transition-colors text-sm"
                >
                  info@ironforge.com
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1f1f22] px-6 md:px-10 lg:px-16 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-label text-[#2a2a2d] text-center sm:text-left">
            © {new Date().getFullYear()} IRONFORGE FITNESS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/register"
              className="text-label text-[#4a4a4a] hover:text-[#ff5500] transition-colors duration-200"
            >
              REGISTER
            </Link>
            <span className="text-[#1f1f22]">|</span>
            <a
              href="#hero"
              className="text-label text-[#4a4a4a] hover:text-[#ff5500] transition-colors duration-200"
            >
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
