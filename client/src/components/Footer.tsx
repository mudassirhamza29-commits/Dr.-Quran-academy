/*
 * Dr. Quran Academy — Footer Component
 * Warm brown/dark palette, gold accents
 * Academy-focused, no country-specific mentions
 */
import { Link } from "wouter";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--brown-dark)", color: "rgba(255,255,255,0.75)" }}>
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" style={{ display: "inline-block", marginBottom: "1rem" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663517065059/DJLjTZVVtwxnS99SBj96h6/logo-outlined_f1ad9d1a.png"
                alt="Dr. Quran Academy"
                style={{ height: "176px", width: "auto", display: "block" }}
              />
            </Link>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              Providing free, high-quality Quranic education to learners worldwide since 2017.
              24/7 live classes, one-to-one sessions, and community support.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4
              className="text-white font-semibold text-xs mb-4 uppercase tracking-wider"
              style={{ letterSpacing: "0.08em" }}
            >
              Our Courses
            </h4>
            <ul className="space-y-2.5">
              {["Tajweed", "Hifz (Quran Memorisation)", "Arabic Grammar L1 & L2", "Tafsir-ul-Quran", "Nur-ul-Bayan", "Islah-e-Makharaj", "Quran Correction"].map((course) => (
                <li key={course}>
                  <Link
                    href="/courses"
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--gold)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-semibold text-xs mb-4 uppercase tracking-wider"
              style={{ letterSpacing: "0.08em" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Some of Our Teachers", href: "/about#teachers" },
                { label: "Student Testimonials", href: "/about#testimonials" },
                { label: "Quran Correction", href: "/quran-correction" },
                { label: "Zakat Calculator", href: "/zakat" },
                { label: "Become a Volunteer", href: "/contact" },
                { label: "Contact Us", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--gold)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Donate */}
          <div>
            <h4
              className="text-white font-semibold text-xs mb-4 uppercase tracking-wider"
              style={{ letterSpacing: "0.08em" }}
            >
              Contact & Donate
            </h4>
            <div className="space-y-3 mb-5">
              <a
                href="mailto:dr.quran@mail.com"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                }}
              >
                <Mail size={13} style={{ color: "var(--gold)" }} />
                dr.quran@mail.com
              </a>
            </div>
            <div
              className="rounded-lg p-4 mb-4"
              style={{
                background: "rgba(184,150,46,0.08)",
                border: "1px solid rgba(184,150,46,0.18)",
              }}
            >
              <p className="text-xs uppercase tracking-wide mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                Bank Transfer
              </p>
              <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.6)" }}>
                Acc: 79417660
              </p>
              <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.6)" }}>
                Sort: 30-96-26
              </p>
              <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.6)" }}>
                Lloyds Bank
              </p>
            </div>
            <Link
              href="/donate"
              className="btn-gold w-full justify-center text-sm"
              style={{ padding: "0.6rem 1.25rem" }}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container py-2 flex flex-col sm:flex-row items-center justify-between gap-1">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Dr. Quran Academy. All rights reserved. · Registered Charity No. 1198110
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Established 2017 · Free Quran Education Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
