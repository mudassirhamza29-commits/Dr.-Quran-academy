/*
 * Dr. Quran UK — Quran Correction Page
 * Warm ivory palette, Cormorant Garamond headings, Source Sans 3 body
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Mic, BookOpen, Users, Clock } from "lucide-react";

const features = [
  { icon: Mic, title: "Makhaarij Correction", desc: "Precise correction of letter articulation points — throat, tongue, and lips." },
  { icon: BookOpen, title: "Tajweed Rules", desc: "Identify and fix errors in Noon Sakin, Madd, Ghunna, and all Tajweed rules." },
  { icon: Users, title: "One-to-One Sessions", desc: "Personalised attention from a qualified teacher focused entirely on your recitation." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Book sessions at a time that suits you — available around the clock." },
];

const steps = [
  { num: "01", title: "Contact Us", desc: "Reach out via our contact form or WhatsApp to express your interest." },
  { num: "02", title: "Initial Assessment", desc: "A teacher listens to your recitation and identifies areas for improvement." },
  { num: "03", title: "Personalised Plan", desc: "A structured correction plan is prepared specifically for your needs." },
  { num: "04", title: "Regular Sessions", desc: "Attend regular live sessions and track your progress over time." },
];

export default function QuranCorrection() {
  return (
    <div className="min-h-screen" style={{ background: "var(--ivory)" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="pt-40 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, var(--brown-dark) 0%, #5a3a1a 100%)" }}
      >
        <div className="container relative z-10 text-center">
          <div className="section-label mb-3">Personalised Service</div>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Quran Correction
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            Already reciting the Quran? Let our qualified teachers listen, identify your mistakes, 
            and guide you to a more accurate, beautiful recitation — free of charge.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 10C1200 40 960 0 720 15C480 30 240 0 0 10L0 40Z" fill="var(--ivory)" />
          </svg>
        </div>
      </section>

      {/* What is it */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-3">About This Service</div>
              <h2
                className="text-4xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
              >
                Recite with Confidence and Accuracy
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: "var(--charcoal)", fontSize: "1.05rem" }}>
                Many Muslims recite the Quran daily but carry small errors in pronunciation or Tajweed 
                that have gone uncorrected for years. Our Quran Correction service is designed to 
                address this — gently, professionally, and at no cost.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: "var(--charcoal)", fontSize: "1.05rem" }}>
                Whether you need to correct specific letters, improve your Tajweed application, 
                or refine your overall recitation, our teachers will work with you at your own pace.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Suitable for all ages and levels",
                  "100% free — no fees, no subscriptions",
                  "Taught by qualified, experienced teachers",
                  "Available 24/7 to suit your schedule",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--charcoal)" }}>
                    <CheckCircle size={16} style={{ color: "var(--olive)", marginTop: "2px", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/enrol" className="btn-primary">
                Enrol Now — It's Free <ArrowRight size={16} />
              </Link>
            </div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--cream)",
                border: "1px solid rgba(59,42,26,0.08)",
                padding: "2.5rem",
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
              >
                What We Correct
              </h3>
              <div className="space-y-4">
                {[
                  "Makhaarij al-Huroof (Articulation Points)",
                  "Sifaat al-Huroof (Letter Characteristics)",
                  "Noon Sakin & Tanween Rules",
                  "Meem Sakin Rules",
                  "Rules of Madd (Elongation)",
                  "Ghunna (Nasalisation)",
                  "Waqf & Ibtida (Stopping & Starting)",
                  "Qalqala (Echoing Letters)",
                  "Idghaam, Ikhfaa, Iqlaab",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--gold)" }}
                    />
                    <span className="text-sm" style={{ color: "var(--charcoal)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="text-center mb-10">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
            >
              How We Help You
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl p-6 card-hover"
                style={{
                  background: "white",
                  boxShadow: "0 2px 16px rgba(59,42,26,0.06)",
                  border: "1px solid rgba(59,42,26,0.06)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(90,122,74,0.1)" }}
                >
                  <Icon size={20} style={{ color: "var(--olive)" }} />
                </div>
                <h4
                  className="font-bold mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)", fontSize: "1.1rem" }}
                >
                  {title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--charcoal-mid)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-label mb-3">Getting Started</div>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
            >
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    background: "var(--cream)",
                    color: "var(--gold)",
                    border: "2px solid rgba(184,150,46,0.3)",
                  }}
                >
                  {num}
                </div>
                <h4
                  className="font-bold mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)", fontSize: "1.1rem" }}
                >
                  {title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--charcoal-mid)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: "var(--brown-dark)" }}
      >
        <div className="container text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Begin Your Correction Journey
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            It is never too late to improve your recitation. Contact us today and take the first step.
          </p>
          <Link href="/enrol" className="btn-gold">
            Enrol Now — It's Free <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
