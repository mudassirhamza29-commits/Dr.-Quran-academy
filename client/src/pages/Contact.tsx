/*
 * Dr. Quran UK — Contact Page
 * Warm ivory palette, Cormorant Garamond headings, Source Sans 3 body
 * No country-specific mentions. Academy-focused.
 */
import { useState } from "react";
import { Link } from "wouter";
import { Mail, MessageCircle, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.7rem 1rem",
    borderRadius: "0.5rem",
    border: "1px solid rgba(59,42,26,0.15)",
    background: "white",
    fontSize: "0.9rem",
    color: "var(--brown-dark)",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "'Source Sans 3', sans-serif",
  };

  const labelStyle = {
    display: "block" as const,
    fontSize: "0.8rem",
    fontWeight: "600" as const,
    color: "var(--charcoal-mid)",
    marginBottom: "0.4rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--ivory)" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="pt-40 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, var(--brown-dark) 0%, #5a3a1a 100%)" }}
      >
        <div className="container relative z-10 text-center">
          <div className="section-label mb-3">Get in Touch</div>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Contact Us
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            Whether you want to enroll, volunteer, or simply ask a question — 
            we are here and happy to help.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 10C1200 40 960 0 720 15C480 30 240 0 0 10L0 40Z" fill="var(--ivory)" />
          </svg>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="space-y-5">
              {/* Email */}
              <div
                className="rounded-xl p-5"
                style={{ background: "var(--cream)", border: "1px solid rgba(59,42,26,0.08)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(184,150,46,0.12)" }}
                  >
                    <Mail size={16} style={{ color: "var(--gold)" }} />
                  </div>
                  <h3
                    className="font-bold"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)", fontSize: "1.05rem" }}
                  >
                    Email Us
                  </h3>
                </div>
                <a
                  href="mailto:dr.quran@mail.com"
                  style={{ color: "var(--olive)", textDecoration: "none", fontSize: "0.9rem", fontWeight: "600" }}
                >
                  dr.quran@mail.com
                </a>
                <p className="text-xs mt-1" style={{ color: "var(--charcoal-mid)" }}>
                  We aim to respond within 24 hours.
                </p>
              </div>

              {/* WhatsApp */}
              <div
                className="rounded-xl p-5"
                style={{ background: "var(--cream)", border: "1px solid rgba(59,42,26,0.08)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(90,122,74,0.12)" }}
                  >
                    <MessageCircle size={16} style={{ color: "var(--olive)" }} />
                  </div>
                  <h3
                    className="font-bold"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)", fontSize: "1.05rem" }}
                  >
                    WhatsApp
                  </h3>
                </div>
                <Link
                  href="/enrol"
                  className="btn-primary text-sm"
                  style={{ padding: "0.5rem 1.1rem" }}
                >
                  Enrol Now <ArrowRight size={13} />
                </Link>
                <p className="text-xs mt-2" style={{ color: "var(--charcoal-mid)" }}>
                  Fastest way to get started with your classes.
                </p>
              </div>

              {/* Social */}
              <div
                className="rounded-xl p-5"
                style={{ background: "var(--cream)", border: "1px solid rgba(59,42,26,0.08)" }}
              >
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)", fontSize: "1.05rem" }}
                >
                  Follow Us
                </h3>

              </div>

              {/* Volunteer */}
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(90,122,74,0.07)", border: "1px solid rgba(90,122,74,0.2)" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Users size={16} style={{ color: "var(--olive)" }} />
                  <h3
                    className="font-bold"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)", fontSize: "1.05rem" }}
                  >
                    Volunteer With Us
                  </h3>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--charcoal)" }}>
                  Are you a qualified Quran teacher? We welcome volunteers who share our mission. 
                  Use the form to get in touch.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "white",
                  boxShadow: "0 4px 32px rgba(59,42,26,0.07)",
                  border: "1px solid rgba(59,42,26,0.07)",
                }}
              >
                {!submitted ? (
                  <>
                    <h2
                      className="text-2xl font-bold mb-6"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
                    >
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label style={labelStyle}>Your Name</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="e.g. Ayesha Khan"
                            style={inputStyle}
                            onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                            onBlur={(e) => (e.target.style.borderColor = "rgba(59,42,26,0.15)")}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Email Address</label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="your@email.com"
                            style={inputStyle}
                            onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                            onBlur={(e) => (e.target.style.borderColor = "rgba(59,42,26,0.15)")}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={labelStyle}>Subject</label>
                        <select
                          required
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          style={{ ...inputStyle, appearance: "none" as const }}
                          onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(59,42,26,0.15)")}
                        >
                          <option value="">Select a subject…</option>
                          <option value="enroll">Enroll in a Course</option>
                          <option value="correction">Quran Correction Session</option>
                          <option value="volunteer">Volunteer as a Teacher</option>
                          <option value="donate">Donation Enquiry</option>
                          <option value="general">General Question</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label style={labelStyle}>Message</label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us how we can help…"
                          style={{ ...inputStyle, resize: "vertical" as const }}
                          onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(59,42,26,0.15)")}
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full justify-center text-base">
                        Send Message <ArrowRight size={16} />
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: "rgba(90,122,74,0.12)" }}
                    >
                      <Mail size={28} style={{ color: "var(--olive)" }} />
                    </div>
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
                    >
                      Message Received
                    </h3>
                    <p className="mb-6" style={{ color: "var(--charcoal-mid)" }}>
                      Thank you, {form.name}. We will get back to you at {form.email} within 24 hours, in sha Allah.
                    </p>
                    <button
                      onClick={() => { setForm({ name: "", email: "", subject: "", message: "" }); setSubmitted(false); }}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
