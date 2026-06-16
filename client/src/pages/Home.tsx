/*
 * Dr. Quran UK — Home Page
 * Design: Warm ivory/cream, Cormorant Garamond headings, Source Sans 3 body
 * Sections: Hero → About → Teachers → Testimonials → Donate CTA → Footer
 * No country-specific mentions. Quran Academy focus only.
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  BookOpen, Users, Clock, Globe, Star, CheckCircle,
  ArrowRight, Heart, Award, Mic, ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Animated Counter ────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, 2000 / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

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

// ─── Data ─────────────────────────────────────────────────────────────────────
const courses = [
  { icon: BookOpen, title: "Tajweed", subtitle: "Quran Recitation", color: "#5a7a4a", href: "/enrol" },
  { icon: Award, title: "Hifz", subtitle: "Quran Memorization", color: "#b8962e", href: "/enrol" },
  { icon: Mic, title: "Islah-e-Makharaj", subtitle: "Letter Articulation", color: "#7a6a5a", href: "/enrol" },
  { icon: BookOpen, title: "Tafsir-ul-Quran", subtitle: "Quranic Exegesis", color: "#8a6a4a", href: "/enrol" },
  { icon: Globe, title: "Arabic Grammar", subtitle: "Level 1 & Level 2", color: "#4a7a6a", href: "/enrol" },
  { icon: BookOpen, title: "Nur-ul-Bayan", subtitle: "Foundational Reading", color: "#9a7a5a", href: "/enrol" },
];

const teachers = [
  { name: "Mehvish Kamran", role: "Admin & Lead Teacher", spec: "24/7 Live Group Classes" },
  { name: "Natasha Tariq", role: "Quran Teacher", spec: "Live Teaching Classes" },
  { name: "Jia Khan", role: "Online Teacher", spec: "One-to-One Sessions" },
  { name: "Mah Jabeen", role: "Arabic Teacher", spec: "Arabic Grammar L1 & L2" },
  { name: "Huma Malik", role: "Tajweed Specialist", spec: "Islah-e-Makharaj" },
  { name: "Umm-e-Abdullah", role: "Tafsir Teacher", spec: "Tafsir-ul-Quran" },
];

const testimonials = [
  { text: "I corrected my recitation within weeks. The teachers are patient, knowledgeable, and genuinely caring.", name: "Ayesha K.", stars: 5 },
  { text: "The one-to-one support kept me consistent with my Hifz. I am so grateful for this free service.", name: "Bilal M.", stars: 5 },
  { text: "Tajweed rules finally make sense to me. I look forward to every class.", name: "Sara H.", stars: 5 },
  { text: "Because classes run 24/7, I can always find a time that works for me. Truly accessible.", name: "Ahmed R.", stars: 5 },
  { text: "Arabic Grammar was taught clearly and methodically. I feel confident reading the Quran now.", name: "Maha S.", stars: 5 },
  { text: "My child reads Quran confidently. The free one-to-one sessions have been a real blessing.", name: "Farah L.", stars: 5 },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  const statsRef = useFadeUp();
  const aboutRef = useFadeUp();
  const coursesRef = useFadeUp();
  const teachersRef = useFadeUp();
  const testimonialsRef = useFadeUp();
  const donateRef = useFadeUp();

  return (
    <div className="min-h-screen" style={{ background: "var(--ivory)" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(160deg, var(--brown-dark) 0%, #4a2e12 55%, #3b2a1a 100%)",
        }}
      >
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a96e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container relative z-10 pt-44 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left: Text */}
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-7"
                style={{
                  background: "rgba(184,150,46,0.15)",
                  border: "1px solid rgba(184,150,46,0.35)",
                  color: "var(--brown-light)",
                  letterSpacing: "0.04em",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "var(--brown-light)" }}
                />
                Live Classes Running 24/7 — Join Free
              </div>

              <h1
                className="font-bold text-white leading-tight mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(3.5rem, 6.5vw, 5.5rem)",
                  lineHeight: "1.15",
                  letterSpacing: "-0.02em",
                  textShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                Free Online Quran Learning.{" "}
                <span style={{ color: "var(--brown-light)" }}>Anytime.</span>
              </h1>

              <p
                className="leading-relaxed mb-8 max-w-lg"
                style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.15rem", fontWeight: "500" }}
              >
                Dr. Quran Academy provides free, structured Quran education to learners worldwide. 
                Live group classes and one-to-one sessions available 24 hours a day, 7 days a week.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/enrol"
                  className="btn-primary"
                  style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}
                >
                  Enrol Now — It's Free
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/courses"
                  className="btn-outline-light"
                  style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}
                >
                  View Courses
                </Link>
              </div>

              <div className="flex flex-wrap gap-6">
                {[
                  { icon: CheckCircle, text: "Learn the Quran, Anytime, Anywhere—Completely Free" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    <Icon size={14} style={{ color: "var(--brown-light)" }} />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative hidden lg:block">
              <div
                className="absolute -inset-3 rounded-2xl opacity-15 blur-2xl"
                style={{ background: "var(--brown-light)" }}
              />
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663517065059/DJLjTZVVtwxnS99SBj96h6/hijab-student-zoom_cfd6de2b.png"
                  alt="Quran learning online"
                  className="w-full object-cover"
                  style={{ height: "460px", borderRadius: "1rem", display: "block" }}
                />


              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="var(--ivory)" />
          </svg>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container">
          <div ref={statsRef} className="fade-up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { value: 3000, suffix: "+", label: "Students Taught", icon: Users },
                { value: 7, suffix: "+ Years", label: "Serving Learners", icon: Award },
                { value: 24, suffix: "/7", label: "Live Classes", icon: Clock },
                { value: 6, suffix: "+", label: "Courses Available", icon: BookOpen },
              ].map(({ value, suffix, label, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-xl p-6 text-center card-hover"
                  style={{
                    background: "white",
                    boxShadow: "0 2px 20px rgba(59,42,26,0.06)",
                    border: "1px solid rgba(59,42,26,0.06)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3"
                    style={{ background: "rgba(184,150,46,0.1)" }}
                  >
                    <Icon size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
                  >
                    <AnimatedCounter target={value} suffix={suffix} />
                  </div>
                  <div className="text-xs font-medium" style={{ color: "var(--charcoal-mid)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div ref={aboutRef} className="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image placeholder */}
              <div className="relative">
                <div
                  className="absolute -top-3 -left-3 w-20 h-20 rounded-xl opacity-20"
                  style={{ background: "var(--gold)" }}
                />
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    height: "420px",
                    boxShadow: "0 8px 40px rgba(59,42,26,0.12)",
                  }}
                >
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663517065059/DJLjTZVVtwxnS99SBj96h6/about-zoom-class_4a46784a.png"
                    alt="Student studying Quran in an online class"
                    className="w-full h-full object-cover"
                    style={{ display: "block" }}
                  />
                  {/* Floating year badge */}
                  <div
                    className="absolute bottom-5 right-5 rounded-xl p-4 text-center"
                    style={{
                      background: "var(--brown-dark)",
                      color: "white",
                      minWidth: "120px",
                      boxShadow: "0 6px 24px rgba(59,42,26,0.25)",
                    }}
                  >
                    <div
                      className="text-3xl font-bold"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-light)" }}
                    >
                      2017
                    </div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>Est.</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="section-label mb-3">About Us</div>
                <h2
                  className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
                >
                  An Academy Built on Service
                </h2>
                <p className="leading-relaxed mb-4" style={{ color: "var(--charcoal)", fontSize: "1.05rem" }}>
                  Dr. Quran Academy was established in 2017 with a single purpose: to make 
                  quality Quranic education freely accessible to every learner, wherever they are.
                </p>
                <p className="leading-relaxed mb-4" style={{ color: "var(--charcoal)" }}>
                  We offer live group classes and one-to-one sessions around the clock, taught by 
                  qualified, dedicated teachers. Whether you are a complete beginner or looking to 
                  refine your recitation, there is a place for you here.
                </p>
                <p className="leading-relaxed mb-8" style={{ color: "var(--charcoal)" }}>
                  Our approach is structured, sincere, and student-centred. We believe that 
                  learning the Quran should never be a privilege — it should be a right.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/about" className="btn-primary">
                    Learn More <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact" className="btn-outline">
                    Become a Volunteer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSES ──────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container">
          <div ref={coursesRef} className="fade-up">
            <div className="text-center mb-12">
              <div className="section-label mb-3">What We Teach</div>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
              >
                Our Courses
              </h2>
              <p className="max-w-xl mx-auto text-lg" style={{ color: "var(--charcoal-mid)" }}>
                Every course is taught live by qualified teachers — free of charge, available to all.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {courses.map((course) => {
                const Icon = course.icon;
                return (
                  <Link
                    key={course.title}
                    href={course.href}
                    className="rounded-xl p-5 card-hover flex items-start gap-4"
                    style={{
                      background: "white",
                      boxShadow: "0 2px 16px rgba(59,42,26,0.05)",
                      border: "1px solid rgba(59,42,26,0.07)",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${course.color}15` }}
                    >
                      <Icon size={18} style={{ color: course.color }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: course.color }}>
                        {course.subtitle}
                      </div>
                      <h3
                        className="font-bold mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)", fontSize: "1.15rem" }}
                      >
                        {course.title}
                      </h3>
                      <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: course.color }}>
                        Enrol Now <ChevronRight size={12} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="text-center mt-8">
              <Link href="/courses" className="btn-outline">
                View All Courses <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DUAS ─────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "rgba(90,122,74,0.03)" }}>
        <div className="container">
          <div ref={useFadeUp()} className="fade-up">
            <div className="text-center mb-12">
              <div className="section-label mb-3">Spiritual Resources</div>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
              >
                Duas & Supplications
              </h2>
              <p className="max-w-xl mx-auto text-lg" style={{ color: "var(--charcoal-mid)" }}>
                Download our collection of authentic supplications to strengthen your spiritual journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                {
                  title: "Supplications at Times of Hardship",
                  description: "A comprehensive collection of authentic duas from the Quran and Sunnah to seek comfort and strength during difficult times.",
                  icon: Heart,
                  color: "#a85a3a",
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663517065059/DJLjTZVVtwxnS99SBj96h6/DuasforHardship-Dr.Quran_9e6352c7.pdf"
                }
              ].map((dua) => {
                const Icon = dua.icon;
                return (
                  <a
                    key={dua.title}
                    href={dua.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl p-6 card-hover"
                    style={{
                      background: "white",
                      boxShadow: "0 2px 16px rgba(59,42,26,0.05)",
                      border: "1px solid rgba(59,42,26,0.07)",
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem"
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${dua.color}15` }}
                    >
                      <Icon size={24} style={{ color: dua.color }} />
                    </div>
                    <div>
                      <h3
                        className="font-bold mb-2"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)", fontSize: "1.25rem" }}
                      >
                        {dua.title}
                      </h3>
                      <p className="text-sm" style={{ color: "var(--charcoal-mid)", lineHeight: "1.6" }}>
                        {dua.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: dua.color }}>
                      Download PDF <ArrowRight size={14} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEACHERS ─────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--brown-dark)" }}>
        <div className="container">
          <div ref={teachersRef} className="fade-up">
            <div className="text-center mb-12">
              <div className="section-label mb-3">The Team</div>
              <h2
                className="text-4xl lg:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Some of Our Teachers
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">
                Qualified, dedicated educators committed to your Quranic journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {teachers.map((t) => (
                <div
                  key={t.name}
                  className="rounded-xl p-5 card-hover text-center"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ background: "rgba(184,150,46,0.15)", border: "1px solid rgba(201,169,110,0.3)" }}
                  >
                    <span
                      className="text-lg font-bold"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-light)" }}
                    >
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <h4
                    className="font-bold text-white leading-tight mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem" }}
                  >
                    {t.name}
                  </h4>
                  <div className="text-xs font-semibold mb-0.5" style={{ color: "var(--brown-light)" }}>
                    {t.role}
                  </div>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{t.spec}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/about#teachers" className="btn-outline-light">
                Meet All Teachers <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div ref={testimonialsRef} className="fade-up">
            <div className="text-center mb-12">
              <div className="section-label mb-3">Student Voices</div>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
              >
                What Our Students Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 card-hover"
                  style={{
                    background: "white",
                    boxShadow: "0 2px 16px rgba(59,42,26,0.05)",
                    border: "1px solid rgba(59,42,26,0.07)",
                  }}
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={13} fill="var(--gold)" color="var(--gold)" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-4 italic" style={{ color: "var(--charcoal)" }}>
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: "var(--brown-mid)" }}
                    >
                      {t.name[0]}
                    </div>
                    <div
                      className="font-semibold text-sm"
                      style={{ color: "var(--brown-dark)" }}
                    >
                      {t.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DONATE CTA ───────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div ref={donateRef} className="fade-up">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, var(--brown-dark) 0%, #5a3a1a 100%)",
                boxShadow: "0 12px 48px rgba(59,42,26,0.2)",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left */}
                <div className="p-10 lg:p-14">
                  <div className="section-label mb-4">Support the Academy</div>
                  <h2
                    className="text-4xl font-bold text-white mb-5 leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Help Keep Quran Learning Free
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Our classes are free because of the generosity of supporters like you. 
                    Your donation sponsors a student's Quran education and helps us keep 
                    our 24/7 classes running for learners everywhere.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/donate" className="btn-gold">
                      Donate Now <Heart size={16} />
                    </Link>
                    <Link href="/donate" className="btn-outline-light">
                      Sponsor a Student
                    </Link>
                  </div>
                </div>

                {/* Right: impact points */}
                <div
                  className="p-10 lg:p-14 flex flex-col justify-center"
                  style={{ background: "rgba(255,255,255,0.04)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="space-y-5">
                    {[
                      { amount: "£5", desc: "Provides essential learning materials for a student's month-long Quran journey." },
                      { amount: "£10", desc: "Could mean an orphan mastering their first Surah or a busy mother completing her Quran recitation for the first time." },
                      { amount: "£25", desc: "Powers a full month of 24/7 live classes, reaching learners across every time zone." },
                      { amount: "£50", desc: "Sponsors a student's complete year of Quran education—transforming their spiritual life." },
                    ].map(({ amount, desc }) => (
                      <div key={amount} className="flex items-start gap-4">
                        <div
                          className="rounded-lg px-3 py-1.5 font-bold text-sm flex-shrink-0"
                          style={{
                            background: "rgba(184,150,46,0.2)",
                            color: "var(--brown-light)",
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "1rem",
                          }}
                        >
                          {amount}
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
