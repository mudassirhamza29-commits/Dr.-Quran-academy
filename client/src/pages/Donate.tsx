/*
 * Dr. Quran UK — Donate Page
 * Warm ivory palette, Cormorant Garamond headings, Source Sans 3 body
 * No country-specific mentions. Academy-focused.
 */
import { useState } from "react";
import { Heart, Copy, CheckCircle, ArrowRight, Users, BookOpen, Globe, Calculator } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-md transition-colors"
      style={{
        color: copied ? "var(--olive)" : "var(--charcoal-mid)",
        background: copied ? "rgba(90,122,74,0.1)" : "rgba(59,42,26,0.06)",
        border: "none",
        cursor: "pointer",
      }}
      title="Copy"
    >
      {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
    </button>
  );
}

const impacts = [
  { icon: BookOpen, amount: "£5", desc: "Covers a student's learning materials for one month" },
  { icon: Users, amount: "£10", desc: "Supports a teacher's volunteer work for one week" },
  { icon: Globe, amount: "£25", desc: "Helps run 24/7 live classes for an entire month" },
  { icon: Heart, amount: "£50", desc: "Sponsors a student's full year of Quran education" },
];

export default function Donate() {
  return (
    <div className="min-h-screen" style={{ background: "var(--ivory)" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="pt-40 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, var(--brown-dark) 0%, #5a3a1a 100%)" }}
      >
        <div className="container relative z-10 text-center">
          <div className="section-label mb-3">Support Our Mission</div>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Donate & Support
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Your donation keeps our classes free for thousands of learners worldwide. 
            Every contribution — large or small — makes a real difference.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 10C1200 40 960 0 720 15C480 30 240 0 0 10L0 40Z" fill="var(--ivory)" />
          </svg>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-label mb-3">Your Impact</div>
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
            >
              What Your Donation Does
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: "var(--charcoal-mid)" }}>
              100% of donations go towards running free Quran education for learners around the world.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {impacts.map(({ icon: Icon, amount, desc }) => (
              <div
                key={amount}
                className="rounded-xl p-6 text-center card-hover"
                style={{
                  background: "white",
                  boxShadow: "0 2px 20px rgba(59,42,26,0.06)",
                  border: "1px solid rgba(59,42,26,0.07)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "rgba(184,150,46,0.1)" }}
                >
                  <Icon size={20} style={{ color: "var(--gold)" }} />
                </div>
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
                >
                  {amount}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--charcoal-mid)" }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Bank Details + Zakat */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bank Transfer */}
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: "var(--brown-dark)",
                boxShadow: "0 8px 40px rgba(59,42,26,0.2)",
              }}
            >
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ background: "rgba(184,150,46,0.12)", borderBottom: "1px solid rgba(184,150,46,0.2)" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--gold)" }}
                >
                  <Heart size={15} color="white" />
                </div>
                <h3
                  className="font-bold text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}
                >
                  Bank Transfer
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { label: "Account Number", value: "79417660" },
                  { label: "Sort Code", value: "30-96-26" },
                  { label: "IBAN", value: "GB66LOYD30962679417660" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wide mb-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</div>
                      <div className="font-mono font-medium" style={{ color: "white" }}>{value}</div>
                    </div>
                    <CopyButton text={value} />
                  </div>
                ))}
                <p
                  className="text-xs pt-3"
                  style={{ color: "rgba(255,255,255,0.35)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  Lloyds Bank · Please include your name as reference
                </p>
              </div>
            </div>

            {/* Zakat */}
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: "var(--cream)",
                border: "1px solid rgba(59,42,26,0.1)",
                boxShadow: "0 4px 24px rgba(59,42,26,0.07)",
              }}
            >
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ background: "rgba(90,122,74,0.08)", borderBottom: "1px solid rgba(90,122,74,0.15)" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--olive)" }}
                >
                  <CheckCircle size={15} color="white" />
                </div>
                <h3
                  className="font-bold"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)", fontSize: "1.15rem" }}
                >
                  Zakat Eligible
                </h3>
              </div>
              <div className="p-6 flex flex-col h-[calc(100%-60px)]">
                <p className="leading-relaxed mb-4" style={{ color: "var(--charcoal)", fontSize: "0.95rem" }}>
                  Dr. Quran Academy is eligible to receive Zakat funds. Your Zakat donation 
                  directly supports deserving students who cannot afford any form of education.
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--charcoal-mid)" }}>
                  We desire and intend to help poor and deserving people through knowledge, 
                  guidance, and ongoing support. Your Zakat fulfills this noble purpose.
                </p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href="mailto:dr.quran@mail.com?subject=Zakat Donation"
                    className="btn-primary text-sm"
                    style={{ padding: "0.6rem 1.25rem" }}
                  >
                    Send Zakat Enquiry <ArrowRight size={14} />
                  </a>
                  <Link
                    href="/zakat"
                    className="btn-outline text-sm"
                    style={{ padding: "0.6rem 1.25rem" }}
                  >
                    <Calculator size={14} /> Calculate Zakat
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Thank you note */}
          <div
            className="mt-10 rounded-xl p-8 text-center"
            style={{
              background: "var(--cream)",
              border: "1px solid rgba(59,42,26,0.08)",
            }}
          >
            <Heart size={26} style={{ color: "var(--gold)", margin: "0 auto 12px" }} />
            <h3
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
            >
              JazakAllahu Khayran
            </h3>
            <p className="max-w-lg mx-auto" style={{ color: "var(--charcoal-mid)" }}>
              May Allah reward you abundantly for supporting free Quranic education. 
              Every donation, no matter the size, helps keep our classes running 24/7 
              for students around the world.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
