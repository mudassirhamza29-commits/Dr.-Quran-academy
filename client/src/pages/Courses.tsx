/*
 * Dr. Quran UK — Courses Page
 * Warm ivory palette, Cormorant Garamond headings, Source Sans 3 body
 * No country-specific mentions. Academy-focused.
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { BookOpen, Mic, Globe, Award, CheckCircle, ArrowRight, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const courses = [
  {
    icon: BookOpen,
    title: "Tajweed",
    subtitle: "Quran Recitation with Proper Rules",
    color: "#5a7a4a",
    desc: "Learn to recite the Quran with correct pronunciation, rhythm, and Tajweed rules. Suitable for all levels — from beginners to those refining their recitation.",
    features: [
      "Rules of Noon Sakin and Tanween",
      "Madd (elongation) rules",
      "Qalqala and Ghunna",
      "Waqf and Ibtida",
      "Practical recitation practice",
    ],
    format: "Live group classes + one-to-one sessions",
  },
  {
    icon: Award,
    title: "Hifz",
    subtitle: "Quran Memorisation Programme",
    color: "#b8962e",
    desc: "A structured programme for memorising the Quran with proper Tajweed. Our teachers guide you through each juz' with revision strategies and consistent support.",
    features: [
      "Structured memorisation plan",
      "Daily revision sessions",
      "Tajweed integrated throughout",
      "Progress tracking",
      "Supportive one-to-one guidance",
    ],
    format: "One-to-one sessions",
  },
  {
    icon: Mic,
    title: "Islah-e-Makharaj",
    subtitle: "Letter Articulation Correction",
    color: "#7a6a5a",
    desc: "A specialised course focusing on the correct articulation points (Makhaarij) of Arabic letters. Ideal for those who want to perfect their pronunciation at the foundational level.",
    features: [
      "Throat letters (Huroof Halqiyya)",
      "Tongue letters (Huroof Lisaniyya)",
      "Lip letters (Huroof Shafawiyya)",
      "Nasal sounds",
      "Letter-by-letter correction",
    ],
    format: "One-to-one correction sessions",
  },
  {
    icon: BookOpen,
    title: "Tafsir-ul-Quran",
    subtitle: "Understanding the Meaning of the Quran",
    color: "#8a6a4a",
    desc: "Explore the deeper meanings, context, and wisdom of the Quran. This course helps students connect with the message of the Quran beyond recitation.",
    features: [
      "Verse-by-verse explanation",
      "Historical context (Asbab al-Nuzul)",
      "Linguistic insights",
      "Practical lessons for daily life",
      "Classical and contemporary references",
    ],
    format: "Live group classes",
  },
  {
    icon: Globe,
    title: "Arabic Grammar",
    subtitle: "Level 1 & Level 2",
    color: "#4a7a6a",
    desc: "A two-level Arabic grammar programme designed to help students understand the structure of the Arabic language and read the Quran with greater comprehension.",
    features: [
      "Nouns, verbs, and particles",
      "Sentence structure",
      "Quranic vocabulary",
      "Grammar exercises",
      "Level 2 for advanced students",
    ],
    format: "Live group classes",
  },
  {
    icon: BookOpen,
    title: "Nur-ul-Bayan",
    subtitle: "Foundational Quran Reading",
    color: "#9a7a5a",
    desc: "The Nur-ul-Bayan method is a proven approach for beginners to learn the Arabic alphabet and begin reading the Quran from scratch with confidence.",
    features: [
      "Arabic alphabet recognition",
      "Joining letters and words",
      "Short vowels and long vowels",
      "Tanween and Sukoon",
      "Reading simple Quranic words",
    ],
    format: "One-to-one sessions",
  },
];

export default function Courses() {
  const coursesRef = useFadeUp();
  const ctaRef = useFadeUp();

  return (
    <div className="min-h-screen" style={{ background: "var(--ivory)" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="pt-40 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, var(--brown-dark) 0%, #5a3a1a 100%)" }}
      >
        <div className="container relative z-10 text-center">
          <div className="section-label mb-3">What We Teach</div>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Courses
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Every course is taught live by qualified teachers, completely free of charge. 
            Choose the course that fits your level and begin learning today.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 10C1200 40 960 0 720 15C480 30 240 0 0 10L0 40Z" fill="var(--ivory)" />
          </svg>
        </div>
      </section>

      {/* Quick info bar */}
      <section className="py-8" style={{ background: "var(--cream)", borderBottom: "1px solid rgba(59,42,26,0.08)" }}>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: CheckCircle, text: "100% Free — No Fees" },
              { icon: Clock, text: "24/7 Live Classes" },
              { icon: Users, text: "Group & One-to-One" },
              { icon: BookOpen, text: "6 Courses Available" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--brown-dark)" }}>
                <Icon size={15} style={{ color: "var(--olive)" }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses grid */}
      <section className="py-20">
        <div className="container">
          <div ref={coursesRef} className="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {courses.map((course) => {
                const Icon = course.icon;
                return (
                  <div
                    key={course.title}
                    className="rounded-xl overflow-hidden card-hover"
                    style={{
                      background: "white",
                      boxShadow: "0 2px 20px rgba(59,42,26,0.06)",
                      border: "1px solid rgba(59,42,26,0.07)",
                    }}
                  >
                    {/* Header */}
                    <div
                      className="p-6 flex items-start gap-4"
                      style={{ borderBottom: "1px solid rgba(59,42,26,0.06)" }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${course.color}15` }}
                      >
                        <Icon size={22} style={{ color: course.color }} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: course.color }}>
                          {course.subtitle}
                        </div>
                        <h3
                          className="text-2xl font-bold leading-tight"
                          style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
                        >
                          {course.title}
                        </h3>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--charcoal)" }}>
                        {course.desc}
                      </p>

                      <h5 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--charcoal-mid)" }}>
                        What You'll Learn
                      </h5>
                      <ul className="space-y-2 mb-5">
                        {course.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--charcoal)" }}>
                            <CheckCircle size={14} style={{ color: "var(--olive)", marginTop: "2px", flexShrink: 0 }} />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div
                        className="flex items-center gap-2 text-xs font-medium rounded-lg px-3 py-2 mb-5"
                        style={{ background: "var(--cream)", color: "var(--charcoal-mid)" }}
                      >
                        <Clock size={12} style={{ color: "var(--gold)" }} />
                        {course.format}
                      </div>

                      <Link
                        href="/enrol"
                        className="btn-primary text-sm"
                        style={{ padding: "0.6rem 1.25rem" }}
                      >
                        Enrol Now <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quran Correction CTA */}
      <section className="py-12" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div
            className="rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6"
            style={{
              background: "var(--brown-dark)",
              boxShadow: "0 8px 32px rgba(59,42,26,0.15)",
            }}
          >
            <div>
              <div className="section-label mb-2">Free Service</div>
              <h3
                className="text-3xl font-bold text-white mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Already Reciting? Get a Free Quran Correction
              </h3>
              <p className="text-white/65 max-w-lg">
                Our teachers will listen to your recitation and correct any errors in your 
                Tajweed or Makhaarij — completely free.
              </p>
            </div>
            <Link href="/quran-correction" className="btn-gold flex-shrink-0">
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div ref={ctaRef} className="fade-up text-center">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
            >
              Not Sure Where to Start?
            </h2>
            <p className="max-w-xl mx-auto mb-8" style={{ color: "var(--charcoal-mid)" }}>
              Contact us and we will help you choose the right course for your level and goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Guidance <ArrowRight size={16} />
              </Link>
              <Link href="/enrol" className="btn-outline">
                Enrol Now — It's Free <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
