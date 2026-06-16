/*
 * Dr. Quran — Navbar
 * Structure: thin dark header (email | tagline) + white header with logo on left, nav links + donate on right
 * Nav items always visible on desktop: About | Courses | Zakat Calculator | Contact Us | [Donate Now btn]
 * Palette: warm ivory bg, dark brown text, olive CTA, gold accents
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Zakat Calculator", href: "/zakat" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Thin top header bar ─────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--brown-dark)",
          color: "rgba(255,255,255,0.85)",
          fontSize: "0.75rem",
          padding: "0.45rem 0",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {/* Left: email */}
          <a
            href="mailto:dr.quran@mail.com"
            className="text-white/70 hover:text-white transition-colors text-xs"
            style={{ justifySelf: "start" }}
          >
            dr.quran@mail.com
          </a>

          {/* Centre: tagline */}
          <span
            className="text-white/80 text-xs font-medium text-center hidden sm:block"
            style={{ letterSpacing: "0.02em", whiteSpace: "nowrap" }}
          >
            Dr. Quran Academy &nbsp;|&nbsp; 24/7 Free Online Learning
          </span>
        </div>
      </div>

      {/* ── Main nav with logo on left, links on right ───────────────────────────────────────────────── */}
      <nav
        style={{
          background: scrolled
            ? "rgba(250,247,242,0.97)"
            : "rgba(250,247,242,0.99)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(59,42,26,0.08)",
          boxShadow: scrolled ? "0 2px 20px rgba(59,42,26,0.08)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.5rem 1.5rem",
            gap: "1.5rem",
          }}
        >
          {/* Logo on left */}
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0, marginTop: "-16px", marginBottom: "-16px" }}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663517065059/DJLjTZVVtwxnS99SBj96h6/Dr_Quran_Logo_-_Copy-removebg-preview_31c94460.png"
              alt="Dr. Quran UK Charity & Free Academy"
              style={{ height: "112px", width: "auto", display: "block" }}
            />
          </Link>

          {/* Right side: nav links + donate button grouped together */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginLeft: "auto" }}>
            {/* Desktop nav links */}
            <div
              className="items-center"
              style={{ gap: "0.5rem", flexWrap: "nowrap", display: "flex" }}
            >
              {navLinks.map(({ label, href }) => {
                const active = location === href || (href !== "/" && location.startsWith(href));
                return (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: active ? "800" : "700",
                      color: active ? "var(--olive)" : "#3b2a1a",
                      padding: "0.35rem 0.65rem",
                      borderRadius: "0.375rem",
                      textDecoration: "none",
                      transition: "color 0.2s ease, background 0.2s ease",
                      background: active ? "rgba(90,122,74,0.1)" : "transparent",
                      whiteSpace: "nowrap",
                      letterSpacing: "0.01em",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLElement).style.color = "var(--olive)";
                        (e.currentTarget as HTMLElement).style.background = "rgba(90,122,74,0.06)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLElement).style.color = "#3b2a1a";
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                      }
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            {/* Donate Now CTA */}
            <Link href="/donate" className="btn-gold" style={{ padding: "0.5rem 1.2rem", fontSize: "0.75rem", fontWeight: "700", whiteSpace: "nowrap", flexShrink: 0 }}>
              Donate Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
