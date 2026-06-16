/*
 * Dr. Quran UK — About Page
 * Warm ivory palette, Cormorant Garamond headings, Source Sans 3 body
 * No country-specific mentions. Academy-focused.
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { BookOpen, Users, Clock, Heart, Award, Star, ArrowRight } from "lucide-react";
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

const teachers = [
  { name: "Mehvish Kamran", role: "Admin & Lead Teacher", spec: "24/7 Live Group Classes" },
  { name: "Natasha Tariq", role: "Quran Teacher", spec: "Live Teaching Classes" },
  { name: "Jia Khan", role: "Online Teacher", spec: "One-to-One Sessions" },
  { name: "Mah Jabeen", role: "Arabic Teacher", spec: "Arabic Grammar L1 & L2" },
  { name: "Huma Malik", role: "Tajweed Specialist", spec: "Islah-e-Makharaj" },
  { name: "Javariya Sadia", role: "Online Teacher", spec: "24/7 Group Sessions" },
  { name: "Umm-e-Abdullah", role: "Tafsir Teacher", spec: "Tafsir-ul-Quran" },
  { name: "Sarah Khamis", role: "Quran Teacher", spec: "Nur-ul-Bayan" },
];

const testimonials = [
  { text: "I corrected my recitation within weeks. The teachers are patient, knowledgeable, and genuinely caring.", name: "Ayesha K.", stars: 5 },
  { text: "The one-to-one support kept me consistent with my Hifz. I am so grateful for this free service.", name: "Bilal M.", stars: 5 },
  { text: "Tajweed rules finally make sense to me. I look forward to every class.", name: "Sara H.", stars: 5 },
  { text: "Because classes run 24/7, I can always find a time that works for me. Truly accessible.", name: "Ahmed R.", stars: 5 },
  { text: "Arabic Grammar was taught clearly and methodically. I feel confident reading the Quran now.", name: "Maha S.", stars: 5 },
  { text: "My child reads Quran confidently. The free one-to-one sessions have been a real blessing.", name: "Farah L.", stars: 5 },
  { text: "The Hifz programme is structured and the teacher is very supportive. Highly recommended.", name: "Omar T.", stars: 5 },
  { text: "I started as a complete beginner. Now I can read Quran with proper Tajweed. Alhamdulillah.", name: "Zainab A.", stars: 5 },
  { text: "Excellent teachers, excellent service. I tell everyone I know about Dr. Quran Academy.", name: "Khalid N.", stars: 5 },
  { text: "The Tafsir classes opened my eyes to the depth of the Quran. Beautifully taught.", name: "Nadia F.", stars: 5 },
  { text: "Free, professional, and available whenever I need. What more could you ask for?", name: "Hassan M.", stars: 5 },
  { text: "My Makharaj has improved dramatically. The correction sessions are incredibly effective.", name: "Sana R.", stars: 5 },
];

const values = [
  { icon: Heart, title: "Sincerity", desc: "Every class is taught with genuine care for the student's spiritual and educational growth." },
  { icon: BookOpen, title: "Knowledge", desc: "Our teachers are qualified, experienced, and committed to accurate, authentic teaching." },
  { icon: Users, title: "Accessibility", desc: "Free education for all — no fees, no barriers, no exceptions." },
  { icon: Clock, title: "Availability", desc: "24/7 live classes ensure that no learner is ever turned away due to time zone or schedule." },
];

export default function About() {
  const missionRef = useFadeUp();
  const valuesRef = useFadeUp();
  const teachersRef = useFadeUp();
  const testimonialsRef = useFadeUp();

  return (
    <div className="min-h-screen" style={{ background: "var(--ivory)" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="pt-40 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, var(--brown-dark) 0%, #5a3a1a 100%)" }}
      >
        <div className="container relative z-10 text-center">
          <div className="section-label mb-3">Our Story</div>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            About Dr. Quran Academy
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            A free online Quran academy built on the belief that every Muslim deserves 
            access to quality Quranic education — regardless of location or means.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 10C1200 40 960 0 720 15C480 30 240 0 0 10L0 40Z" fill="var(--ivory)" />
          </svg>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container">
          <div ref={missionRef} className="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="section-label mb-3">Our Mission</div>
                <h2
                  className="text-4xl font-bold mb-6 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
                >
                  Free Quran Education for Every Learner
                </h2>
                <p className="leading-relaxed mb-4" style={{ color: "var(--charcoal)", fontSize: "1.05rem" }}>
                  Established in 2017, Dr. Quran Academy was founded with one purpose: to make Quranic education freely accessible to anyone, anywhere in the world. With over seven years of service, we've built a platform where learners of all ages, backgrounds, and levels can connect with the Quran, free from barriers of time or cost.
                </p>
                <p className="leading-relaxed mb-4" style={{ color: "var(--charcoal)" }}>
                  Our live classes, staffed by certified, dedicated teachers, operate 24/7—so you'll always find a session that fits your schedule. From mastering your first Arabic letter to earning your place as a Hafiz, your journey here is tailored entirely to you.
                </p>
                <p className="leading-relaxed mb-8" style={{ color: "var(--charcoal)" }}>
                  We believe that studying the Quran is not just an opportunity; it is a right—one that should be open to every believer.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "2017", label: "Year Founded" },
                    { value: "3,000+", label: "Students Taught" },
                    { value: "24/7", label: "Live Classes" },
                    { value: "6+", label: "Courses" },
                  ].map(({ value, label }) => (
                    <div
                      key={label}
                      className="rounded-xl p-4 text-center"
                      style={{ background: "var(--cream)", border: "1px solid rgba(59,42,26,0.08)" }}
                    >
                      <div
                        className="text-2xl font-bold mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
                      >
                        {value}
                      </div>
                      <div className="text-xs" style={{ color: "var(--charcoal-mid)" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl overflow-hidden"
                style={{ height: "460px" }}
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663517065059/DJLjTZVVtwxnS99SBj96h6/about-zoom-class_4a46784a.png"
                  alt="Student studying Quran in an online class"
                  className="w-full h-full object-cover"
                  style={{ display: "block", borderRadius: "1rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div ref={valuesRef} className="fade-up">
            <div className="text-center mb-10">
              <div className="section-label mb-3">What We Stand For</div>
              <h2
                className="text-4xl font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
              >
                Our Core Values
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl p-6 card-hover text-center"
                  style={{
                    background: "white",
                    boxShadow: "0 2px 16px rgba(59,42,26,0.06)",
                    border: "1px solid rgba(59,42,26,0.06)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(184,150,46,0.1)" }}
                  >
                    <Icon size={22} style={{ color: "var(--gold)" }} />
                  </div>
                  <h4
                    className="font-bold mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)", fontSize: "1.15rem" }}
                  >
                    {title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--charcoal-mid)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section id="teachers" className="py-20">
        <div className="container">
          <div ref={teachersRef} className="fade-up">
            <div className="text-center mb-12">
              <div className="section-label mb-3">The Team</div>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
              >
                Some of Our Teachers
              </h2>
              <p className="max-w-xl mx-auto" style={{ color: "var(--charcoal-mid)" }}>
                Each teacher brings deep knowledge, patience, and a genuine commitment to your learning.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {teachers.map((t) => (
                <div
                  key={t.name}
                  className="rounded-xl p-6 card-hover text-center"
                  style={{
                    background: "white",
                    boxShadow: "0 2px 20px rgba(59,42,26,0.07)",
                    border: "1px solid rgba(59,42,26,0.07)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ background: "rgba(184,150,46,0.12)", border: "1px solid rgba(201,169,110,0.25)" }}
                  >
                    <span
                      className="text-xl font-bold"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
                    >
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <h4
                    className="font-bold mb-1 leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)", fontSize: "1.05rem" }}
                  >
                    {t.name}
                  </h4>
                  <div className="text-xs font-semibold mb-1" style={{ color: "var(--olive)" }}>
                    {t.role}
                  </div>
                  <p className="text-xs" style={{ color: "var(--charcoal-mid)" }}>{t.spec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20" style={{ background: "var(--cream)" }}>
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
                    <div className="font-semibold text-sm" style={{ color: "var(--brown-dark)" }}>
                      {t.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "var(--brown-dark)" }}>
        <div className="container text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Join Our Academy Today
          </h2>
          <p className="text-white/65 mb-8 max-w-lg mx-auto">
            Free Quran education is available to you right now. Take the first step.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/enrol" className="btn-gold">
              Enrol Now — It's Free <ArrowRight size={16} />
            </Link>
            <Link href="/donate" className="btn-outline-light">
              Support the Academy
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
