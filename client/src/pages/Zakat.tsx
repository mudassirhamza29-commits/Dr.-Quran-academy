/*
 * Dr. Quran UK — Zakat Calculator Page
 * Interactive Zakat calculator with nisab threshold
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calculator, ArrowRight, Info } from "lucide-react";

// Gold nisab: ~85g of gold. Approximate GBP value (update periodically)
const GOLD_NISAB_GBP = 4200; // approx value — displayed as guidance only
const ZAKAT_RATE = 0.025;

export default function Zakat() {
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [cash, setCash] = useState("");
  const [savings, setSavings] = useState("");
  const [investments, setInvestments] = useState("");
  const [businessAssets, setBusinessAssets] = useState("");
  const [debts, setDebts] = useState("");
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({ total: 0, zakat: 0, aboveNisab: false });

  const parse = (v: string) => parseFloat(v) || 0;

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const assets =
      parse(gold) + parse(silver) + parse(cash) +
      parse(savings) + parse(investments) + parse(businessAssets);
    const netAssets = Math.max(0, assets - parse(debts));
    const aboveNisab = netAssets >= GOLD_NISAB_GBP;
    const zakat = aboveNisab ? netAssets * ZAKAT_RATE : 0;
    setResult({ total: netAssets, zakat, aboveNisab });
    setCalculated(true);
  };

  const reset = () => {
    setGold(""); setSilver(""); setCash(""); setSavings("");
    setInvestments(""); setBusinessAssets(""); setDebts("");
    setCalculated(false);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.65rem 1rem",
    borderRadius: "0.5rem",
    border: "1px solid rgba(59,42,26,0.15)",
    background: "white",
    fontSize: "0.9rem",
    color: "var(--brown-dark)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
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
          <div className="section-label mb-3">Islamic Finance</div>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Zakat Calculator
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto leading-relaxed">
            Calculate your annual Zakat obligation simply and accurately. 
            Enter your assets below to find out how much Zakat you owe.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 10C1200 40 960 0 720 15C480 30 240 0 0 10L0 40Z" fill="var(--ivory)" />
          </svg>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info sidebar */}
            <div className="space-y-5">
              <div
                className="rounded-xl p-5"
                style={{ background: "var(--cream)", border: "1px solid rgba(59,42,26,0.08)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Info size={16} style={{ color: "var(--gold)" }} />
                  <h3
                    className="font-bold"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)", fontSize: "1.1rem" }}
                  >
                    About Zakat
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--charcoal)" }}>
                  Zakat is one of the Five Pillars of Islam. It is an obligatory annual payment 
                  of 2.5% of your net zakatable assets, provided they exceed the Nisab threshold 
                  and have been held for one lunar year (Hawl).
                </p>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ background: "var(--cream)", border: "1px solid rgba(59,42,26,0.08)" }}
              >
                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)", fontSize: "1.1rem" }}
                >
                  Nisab Threshold
                </h3>
                <div className="space-y-2 text-sm" style={{ color: "var(--charcoal)" }}>
                  <div className="flex justify-between">
                    <span>Gold Nisab (85g):</span>
                    <span className="font-semibold">~£{GOLD_NISAB_GBP.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zakat Rate:</span>
                    <span className="font-semibold">2.5%</span>
                  </div>
                </div>
                <p className="text-xs mt-3" style={{ color: "var(--charcoal-mid)" }}>
                  * Gold price is approximate. Please verify current rates before paying Zakat.
                </p>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(90,122,74,0.07)", border: "1px solid rgba(90,122,74,0.2)" }}
              >
                <h3
                  className="font-bold mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)", fontSize: "1.1rem" }}
                >
                  Pay Your Zakat
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--charcoal)" }}>
                  Support free Quran education by directing your Zakat to Dr. Quran Academy.
                </p>
                <a href="/donate" className="btn-primary text-sm" style={{ padding: "0.55rem 1.25rem" }}>
                  Donate Zakat <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Calculator form */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "white",
                  boxShadow: "0 4px 32px rgba(59,42,26,0.07)",
                  border: "1px solid rgba(59,42,26,0.07)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(184,150,46,0.12)" }}
                  >
                    <Calculator size={20} style={{ color: "var(--gold)" }} />
                  </div>
                  <h2
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
                  >
                    Calculate Your Zakat
                  </h2>
                </div>

                {!calculated ? (
                  <form onSubmit={calculate}>
                    <p className="text-sm mb-6" style={{ color: "var(--charcoal-mid)" }}>
                      Enter the current value (in GBP) of each asset category you own. 
                      Leave blank if not applicable.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                      {[
                        { label: "Gold (£)", key: "gold", val: gold, set: setGold, placeholder: "e.g. 1500" },
                        { label: "Silver (£)", key: "silver", val: silver, set: setSilver, placeholder: "e.g. 200" },
                        { label: "Cash in Hand (£)", key: "cash", val: cash, set: setCash, placeholder: "e.g. 500" },
                        { label: "Bank Savings (£)", key: "savings", val: savings, set: setSavings, placeholder: "e.g. 8000" },
                        { label: "Investments / Shares (£)", key: "investments", val: investments, set: setInvestments, placeholder: "e.g. 2000" },
                        { label: "Business Assets (£)", key: "business", val: businessAssets, set: setBusinessAssets, placeholder: "e.g. 3000" },
                      ].map(({ label, key, val, set, placeholder }) => (
                        <div key={key}>
                          <label style={labelStyle}>{label}</label>
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={val}
                            onChange={(e) => set(e.target.value)}
                            placeholder={placeholder}
                            style={inputStyle}
                            onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                            onBlur={(e) => (e.target.style.borderColor = "rgba(59,42,26,0.15)")}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mb-6">
                      <label style={labelStyle}>Debts / Liabilities (£)</label>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={debts}
                        onChange={(e) => setDebts(e.target.value)}
                        placeholder="e.g. 1000 (deducted from total)"
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(59,42,26,0.15)")}
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center text-base">
                      Calculate Zakat <ArrowRight size={16} />
                    </button>
                  </form>
                ) : (
                  <div>
                    <div
                      className="rounded-xl p-6 mb-6 text-center"
                      style={{
                        background: result.aboveNisab ? "rgba(90,122,74,0.07)" : "rgba(59,42,26,0.04)",
                        border: `1px solid ${result.aboveNisab ? "rgba(90,122,74,0.25)" : "rgba(59,42,26,0.1)"}`,
                      }}
                    >
                      <div
                        className="text-sm font-semibold uppercase tracking-wider mb-2"
                        style={{ color: result.aboveNisab ? "var(--olive)" : "var(--charcoal-mid)" }}
                      >
                        {result.aboveNisab ? "Zakat is Due" : "Below Nisab Threshold"}
                      </div>
                      <div
                        className="text-5xl font-bold mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--brown-dark)" }}
                      >
                        £{result.zakat.toFixed(2)}
                      </div>
                      <div className="text-sm" style={{ color: "var(--charcoal-mid)" }}>
                        Zakat payable (2.5% of £{result.total.toFixed(2)} net assets)
                      </div>
                    </div>

                    {result.aboveNisab && (
                      <div
                        className="rounded-xl p-5 mb-6"
                        style={{ background: "var(--cream)", border: "1px solid rgba(59,42,26,0.08)" }}
                      >
                        <p className="text-sm leading-relaxed" style={{ color: "var(--charcoal)" }}>
                          Your net zakatable assets of <strong>£{result.total.toFixed(2)}</strong> exceed 
                          the Nisab threshold. Your Zakat due is <strong>£{result.zakat.toFixed(2)}</strong>. 
                          May Allah accept your Zakat and bless your wealth.
                        </p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      <a href="/donate" className="btn-primary">
                        Pay Zakat to Dr. Quran Academy <ArrowRight size={16} />
                      </a>
                      <button onClick={reset} className="btn-outline">
                        Recalculate
                      </button>
                    </div>
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
