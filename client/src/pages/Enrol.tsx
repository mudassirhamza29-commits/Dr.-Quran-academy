/*
 * Dr. Quran Academy — Enrol Page
 * Warm ivory palette, Cormorant Garamond headings, Source Sans 3 body
 * Student enrolment form: name, email, age, gender, course interest
 */
import { useState } from "react";
import { BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const courses = [
  "Tajweed (Quran Recitation)",
  "Hifz (Quran Memorisation)",
  "Islah-e-Makharaj (Letter Articulation)",
  "Tafsir-ul-Quran (Quranic Exegesis)",
  "Arabic Grammar — Level 1",
  "Arabic Grammar — Level 2",
  "Nur-ul-Bayan (Foundational Reading)",
  "Quran Correction",
];

export default function Enrol() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    course: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Google Apps Script Web App URL — set via env or replace directly
  const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || "";

  function validate() {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number.";
    } else if (!/^[+]?[\d\s()-]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number.";
    }
    if (!formData.age.trim()) {
      errs.age = "Please enter your age.";
    } else if (isNaN(Number(formData.age)) || Number(formData.age) < 4 || Number(formData.age) > 99) {
      errs.age = "Please enter a valid age (4–99).";
    }
    if (!formData.gender) errs.gender = "Please select your gender.";
    if (!formData.course) errs.course = "Please select a course.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setSubmitError("");
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    try {
      if (GOOGLE_SHEETS_URL) {
        await fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            age: formData.age.trim(),
            gender: formData.gender,
            course: formData.course,
          }),
        });
      }
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  // Label style helper
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "var(--brown-dark)",
    marginBottom: "0.4rem",
    fontFamily: "'Source Sans 3', sans-serif",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    fontSize: "0.95rem",
    borderRadius: "0.5rem",
    border: "1.5px solid rgba(59,42,26,0.15)",
    background: "white",
    color: "var(--brown-dark)",
    fontFamily: "'Source Sans 3', sans-serif",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  };

  const inputFocusStyle = "focus:border-[var(--olive)] focus:shadow-[0_0_0_3px_rgba(90,122,74,0.12)]";

  const errorStyle: React.CSSProperties = {
    fontSize: "0.78rem",
    color: "#c0392b",
    marginTop: "0.3rem",
  };

  if (submitted) {
    return (
      <div className="min-h-screen" style={{ background: "var(--ivory)" }}>
        <Navbar />
        <section className="pt-40 pb-32">
          <div className="container max-w-xl mx-auto text-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(90,122,74,0.12)" }}
            >
              <CheckCircle size={40} style={{ color: "var(--olive)" }} />
            </div>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
            >
              Enrolment Submitted
            </h1>
            <p className="text-lg mb-2" style={{ color: "var(--charcoal)" }}>
              JazakAllah Khair, <strong>{formData.name.split(" ")[0]}</strong>!
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: "var(--charcoal-mid)" }}>
              Your enrolment for <strong>{formData.course}</strong> has been received. 
              Our team will contact you at <strong>{formData.email}</strong> with class details 
              and next steps within 24–48 hours, In Sha Allah.
            </p>
            <div
              className="rounded-xl p-6 mb-8 text-left"
              style={{
                background: "var(--cream)",
                border: "1px solid rgba(59,42,26,0.08)",
              }}
            >
              <h3
                className="font-bold mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)", fontSize: "1.1rem" }}
              >
                Your Enrolment Summary
              </h3>
              <div className="space-y-2 text-sm" style={{ color: "var(--charcoal)" }}>
                <div className="flex justify-between">
                  <span style={{ color: "var(--charcoal-mid)" }}>Name</span>
                  <span className="font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--charcoal-mid)" }}>Email</span>
                  <span className="font-medium">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--charcoal-mid)" }}>Phone</span>
                  <span className="font-medium">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--charcoal-mid)" }}>Age</span>
                  <span className="font-medium">{formData.age}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--charcoal-mid)" }}>Gender</span>
                  <span className="font-medium">{formData.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--charcoal-mid)" }}>Course</span>
                  <span className="font-medium">{formData.course}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/courses" className="btn-gold">
                Explore More Courses <ArrowRight size={16} />
              </Link>
              <Link href="/" className="btn-outline">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--ivory)" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="pt-40 pb-16 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, var(--brown-dark) 0%, #5a3a1a 100%)" }}
      >
        <div className="container relative z-10 text-center">
          <div className="section-label mb-3">Free Enrolment</div>
          <h1
            className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Enrol Now — It's Free
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Fill in the form below to register for any of our courses. 
            All classes are completely free, taught live by qualified teachers, and available 24/7.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 10C1200 40 960 0 720 15C480 30 240 0 0 10L0 40Z" fill="var(--ivory)" />
          </svg>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="container max-w-2xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: "white",
              boxShadow: "0 4px 40px rgba(59,42,26,0.08)",
              border: "1px solid rgba(59,42,26,0.06)",
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(184,150,46,0.12)" }}
              >
                <BookOpen size={20} style={{ color: "var(--gold)" }} />
              </div>
              <div>
                <h2
                  className="text-xl font-bold"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
                >
                  Student Enrolment Form
                </h2>
                <p className="text-xs" style={{ color: "var(--charcoal-mid)" }}>
                  All fields are required
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" style={labelStyle}>
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Ayesha Khan"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    style={{
                      ...inputStyle,
                      borderColor: errors.name ? "#c0392b" : "rgba(59,42,26,0.15)",
                    }}
                    className={inputFocusStyle}
                  />
                  {errors.name && <p style={errorStyle}>{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" style={labelStyle}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. ayesha@gmail.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    style={{
                      ...inputStyle,
                      borderColor: errors.email ? "#c0392b" : "rgba(59,42,26,0.15)",
                    }}
                    className={inputFocusStyle}
                  />
                  {errors.email && <p style={errorStyle}>{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" style={labelStyle}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="e.g. +44 7123 456789"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    style={{
                      ...inputStyle,
                      borderColor: errors.phone ? "#c0392b" : "rgba(59,42,26,0.15)",
                    }}
                    className={inputFocusStyle}
                  />
                  {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
                </div>

                {/* Age & Gender row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Age */}
                  <div>
                    <label htmlFor="age" style={labelStyle}>
                      Age
                    </label>
                    <input
                      id="age"
                      type="number"
                      min={4}
                      max={99}
                      placeholder="e.g. 25"
                      value={formData.age}
                      onChange={(e) => handleChange("age", e.target.value)}
                      style={{
                        ...inputStyle,
                        borderColor: errors.age ? "#c0392b" : "rgba(59,42,26,0.15)",
                      }}
                      className={inputFocusStyle}
                    />
                    {errors.age && <p style={errorStyle}>{errors.age}</p>}
                  </div>

                  {/* Gender */}
                  <div>
                    <label style={labelStyle}>Gender</label>
                    <div className="flex gap-3 mt-1">
                      {["Female", "Male"].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => handleChange("gender", g)}
                          className="flex-1 py-2.5 rounded-lg text-sm font-medium transition-all"
                          style={{
                            background:
                              formData.gender === g
                                ? "var(--olive)"
                                : "white",
                            color:
                              formData.gender === g
                                ? "white"
                                : "var(--brown-dark)",
                            border:
                              formData.gender === g
                                ? "1.5px solid var(--olive)"
                                : errors.gender
                                ? "1.5px solid #c0392b"
                                : "1.5px solid rgba(59,42,26,0.15)",
                            cursor: "pointer",
                          }}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                    {errors.gender && <p style={errorStyle}>{errors.gender}</p>}
                  </div>
                </div>

                {/* Course */}
                <div>
                  <label htmlFor="course" style={labelStyle}>
                    Course You're Interested In
                  </label>
                  <select
                    id="course"
                    value={formData.course}
                    onChange={(e) => handleChange("course", e.target.value)}
                    style={{
                      ...inputStyle,
                      borderColor: errors.course ? "#c0392b" : "rgba(59,42,26,0.15)",
                      appearance: "none",
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%233b2a1a' d='M2 4l4 4 4-4'/%3E%3C/svg%3E\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      paddingRight: "2.5rem",
                    }}
                    className={inputFocusStyle}
                  >
                    <option value="">Select a course…</option>
                    {courses.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.course && <p style={errorStyle}>{errors.course}</p>}
                </div>
              </div>

              {/* Info note */}
              <div
                className="rounded-lg p-4 mt-6 mb-6"
                style={{
                  background: "rgba(90,122,74,0.06)",
                  border: "1px solid rgba(90,122,74,0.12)",
                }}
              >
                <p className="text-xs leading-relaxed" style={{ color: "var(--charcoal-mid)" }}>
                  <strong style={{ color: "var(--olive)" }}>What happens next?</strong> After submitting, 
                  our team will review your enrolment and contact you within 24–48 hours with your class 
                  schedule and teacher details. All courses are 100% free — no hidden charges.
                </p>
              </div>

              {/* Submit error */}
              {submitError && (
                <div
                  className="rounded-lg p-3 mb-4"
                  style={{ background: "rgba(192,57,43,0.08)", border: "1px solid rgba(192,57,43,0.2)" }}
                >
                  <p className="text-sm" style={{ color: "#c0392b" }}>{submitError}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="btn-gold w-full justify-center text-base"
                style={{
                  padding: "0.85rem 2rem",
                  fontSize: "1rem",
                  opacity: submitting ? 0.7 : 1,
                  cursor: submitting ? "not-allowed" : "pointer",
                }}
              >
                {submitting ? "Submitting…" : "Submit Enrolment"} {!submitting && <ArrowRight size={18} />}
              </button>
            </form>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              "100% Free — No Hidden Fees",
              "24/7 Live Classes",
              "Qualified Teachers",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm" style={{ color: "var(--charcoal-mid)" }}>
                <CheckCircle size={14} style={{ color: "var(--olive)" }} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
