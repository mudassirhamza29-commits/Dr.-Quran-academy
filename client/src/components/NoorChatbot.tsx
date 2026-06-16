/**
 * Noor Chatbot — Floating Course Recommendation Assistant
 * Design: Warm ivory/brown palette, smooth animations, friendly tone
 * Flow: Goal → Time → Level → Course Recommendation → Enrol Link
 */
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChevronRight } from "lucide-react";
import { Link } from "wouter";

type ChatState = "closed" | "greeting" | "goal" | "time" | "level" | "recommendation" | "faq";

interface Message {
  type: "bot" | "user";
  text: string;
  options?: { label: string; value: string }[];
}

const courseRecommendations: Record<string, Record<string, Record<string, string>>> = {
  tajweed: {
    "5-10": { beginner: "Tajweed", intermediate: "Tajweed", advanced: "Islah-e-Makharaj" },
    "10+": { beginner: "Tajweed", intermediate: "Tajweed", advanced: "Islah-e-Makharaj" },
    "2-5": { beginner: "Nur-ul-Bayan", intermediate: "Tajweed", advanced: "Islah-e-Makharaj" },
  },
  hifz: {
    "5-10": { beginner: "Nur-ul-Bayan", intermediate: "Hifz", advanced: "Hifz" },
    "10+": { beginner: "Hifz", intermediate: "Hifz", advanced: "Hifz" },
    "2-5": { beginner: "Nur-ul-Bayan", intermediate: "Nur-ul-Bayan", advanced: "Hifz" },
  },
  arabic: {
    "5-10": { beginner: "Arabic Grammar", intermediate: "Arabic Grammar", advanced: "Arabic Grammar" },
    "10+": { beginner: "Arabic Grammar", intermediate: "Arabic Grammar", advanced: "Arabic Grammar" },
    "2-5": { beginner: "Nur-ul-Bayan", intermediate: "Arabic Grammar", advanced: "Arabic Grammar" },
  },
  tafsir: {
    "5-10": { beginner: "Nur-ul-Bayan", intermediate: "Tafsir-ul-Quran", advanced: "Tafsir-ul-Quran" },
    "10+": { beginner: "Tafsir-ul-Quran", intermediate: "Tafsir-ul-Quran", advanced: "Tafsir-ul-Quran" },
    "2-5": { beginner: "Nur-ul-Bayan", intermediate: "Nur-ul-Bayan", advanced: "Tafsir-ul-Quran" },
  },
  beginner: {
    "5-10": { beginner: "Nur-ul-Bayan", intermediate: "Tajweed", advanced: "Tajweed" },
    "10+": { beginner: "Nur-ul-Bayan", intermediate: "Tajweed", advanced: "Tajweed" },
    "2-5": { beginner: "Nur-ul-Bayan", intermediate: "Tajweed", advanced: "Tajweed" },
  },
};

export default function NoorChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<ChatState>("greeting");
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", text: "Assalamu Alaikum! 👋 I'm Noor, your Quran learning guide. How can I help you today?", options: [
      { label: "Help me find a course", value: "goal" },
      { label: "I have questions", value: "faq" },
    ]},
  ]);
  const [userGoal, setUserGoal] = useState("");
  const [userTime, setUserTime] = useState("");
  const [userLevel, setUserLevel] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOptionClick = (value: string) => {
    if (state === "greeting") {
      if (value === "goal") {
        setMessages((prev) => [...prev, { type: "user", text: "Help me find a course" }]);
        setState("goal");
        setMessages((prev) => [...prev, {
          type: "bot",
          text: "Great! What's your main goal? 🎯",
          options: [
            { label: "Learn Tajweed (proper recitation)", value: "tajweed" },
            { label: "Memorize the Quran (Hifz)", value: "hifz" },
            { label: "Learn Arabic Grammar", value: "arabic" },
            { label: "Understand Quran meaning (Tafsir)", value: "tafsir" },
            { label: "Just get started (beginner)", value: "beginner" },
          ],
        }]);
      } else if (value === "faq") {
        setMessages((prev) => [...prev, { type: "user", text: "I have questions" }]);
        setState("faq");
        setMessages((prev) => [...prev, {
          type: "bot",
          text: "What would you like to know? 📚",
          options: [
            { label: "Is it really free?", value: "free" },
            { label: "How do live classes work?", value: "classes" },
            { label: "What equipment do I need?", value: "equipment" },
            { label: "Can I join anytime?", value: "anytime" },
            { label: "Back to course finder", value: "goal" },
          ],
        }]);
      }
    } else if (state === "goal") {
      setUserGoal(value);
      setMessages((prev) => [...prev, { type: "user", text: value }]);
      setState("time");
      setMessages((prev) => [...prev, {
        type: "bot",
        text: "How much time can you dedicate weekly? ⏰",
        options: [
          { label: "2-5 hours", value: "2-5" },
          { label: "5-10 hours", value: "5-10" },
          { label: "10+ hours", value: "10+" },
        ],
      }]);
    } else if (state === "time") {
      setUserTime(value);
      setMessages((prev) => [...prev, { type: "user", text: value }]);
      setState("level");
      setMessages((prev) => [...prev, {
        type: "bot",
        text: "What's your current level? 📖",
        options: [
          { label: "Complete beginner", value: "beginner" },
          { label: "Some experience", value: "intermediate" },
          { label: "Advanced", value: "advanced" },
        ],
      }]);
    } else if (state === "level") {
      setUserLevel(value);
      setMessages((prev) => [...prev, { type: "user", text: value }]);
      setState("recommendation");

      // Get recommendation
      const recommended = courseRecommendations[userGoal]?.[userTime]?.[value] || "Nur-ul-Bayan";
      setMessages((prev) => [...prev, {
        type: "bot",
        text: `Perfect! Based on your answers, I recommend **${recommended}**. 🌟\n\nThis course is tailored to your goals and schedule. Ready to start your Quranic journey?`,
        options: [
          { label: "Enrol Now (Free)", value: "enrol" },
          { label: "Ask more questions", value: "faq" },
        ],
      }]);
    } else if (state === "recommendation") {
      if (value === "enrol") {
        setMessages((prev) => [...prev, { type: "user", text: "Enrol Now (Free)" }]);
        setMessages((prev) => [...prev, {
          type: "bot",
          text: "Excellent! Click the button below to complete your enrolment. You'll be connected with a teacher within 24 hours. 🎓",
        }]);
      } else if (value === "faq") {
        setMessages((prev) => [...prev, { type: "user", text: "Ask more questions" }]);
        setState("faq");
        setMessages((prev) => [...prev, {
          type: "bot",
          text: "What would you like to know? 📚",
          options: [
            { label: "Is it really free?", value: "free" },
            { label: "How do live classes work?", value: "classes" },
            { label: "What equipment do I need?", value: "equipment" },
            { label: "Can I join anytime?", value: "anytime" },
            { label: "Back to course finder", value: "goal" },
          ],
        }]);
      }
    } else if (state === "faq") {
      let answer = "";
      if (value === "free") {
        answer = "Yes! Dr. Quran Academy is 100% free. All classes, teachers, and materials are provided at no cost. We're funded by donations from generous supporters.";
      } else if (value === "classes") {
        answer = "Our live classes run 24/7 via Zoom. You can join group sessions or book one-to-one sessions with a teacher. Classes are interactive and tailored to your level.";
      } else if (value === "equipment") {
        answer = "You just need a device (phone, tablet, or computer) with internet access. A microphone and camera are helpful but not required. We can work around any limitations!";
      } else if (value === "anytime") {
        answer = "Absolutely! Classes run around the clock, so you can join whenever it fits your schedule. Whether it's 2 AM or 2 PM, there's always a class available.";
      } else if (value === "goal") {
        setState("goal");
        setMessages((prev) => [...prev, { type: "user", text: "Back to course finder" }]);
        setMessages((prev) => [...prev, {
          type: "bot",
          text: "Great! What's your main goal? 🎯",
          options: [
            { label: "Learn Tajweed (proper recitation)", value: "tajweed" },
            { label: "Memorize the Quran (Hifz)", value: "hifz" },
            { label: "Learn Arabic Grammar", value: "arabic" },
            { label: "Understand Quran meaning (Tafsir)", value: "tafsir" },
            { label: "Just get started (beginner)", value: "beginner" },
          ],
        }]);
        return;
      }
      setMessages((prev) => [...prev, { type: "user", text: value }]);
      setMessages((prev) => [...prev, {
        type: "bot",
        text: answer,
        options: [
          { label: "Find a course", value: "goal" },
          { label: "Ask another question", value: "faq" },
        ],
      }]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 rounded-full p-4 shadow-lg transition-all hover:scale-110"
        style={{
          background: "var(--brown-dark)",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        title="Chat with Noor"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-40 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{
            width: "360px",
            height: "500px",
            background: "white",
            border: "1px solid rgba(59,42,26,0.1)",
          }}
        >
          {/* Header */}
          <div
            className="p-4 text-white flex items-center justify-between"
            style={{ background: "var(--brown-dark)" }}
          >
            <div>
              <h3 className="font-bold text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Noor 💡
              </h3>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>
                Your Quran Guide
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4"
            style={{ background: "rgba(245,241,235,0.5)" }}
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-xs px-4 py-2 rounded-lg text-sm leading-relaxed"
                  style={{
                    background: msg.type === "user" ? "var(--brown-dark)" : "white",
                    color: msg.type === "user" ? "white" : "var(--charcoal)",
                    border: msg.type === "bot" ? "1px solid rgba(59,42,26,0.1)" : "none",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Options */}
            {messages[messages.length - 1]?.options && messages[messages.length - 1].options && (
              <div className="space-y-2 mt-4">
                {messages[messages.length - 1].options!.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(opt.value)}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition hover:shadow-md"
                    style={{
                      background: "white",
                      color: "var(--brown-dark)",
                      border: "1px solid var(--brown-light)",
                    }}
                  >
                    {opt.label} <ChevronRight size={14} className="inline float-right" />
                  </button>
                ))}
              </div>
            )}

            {/* Enrol Button */}
            {state === "recommendation" && (
              <Link href="/enrol" className="block mt-4">
                <button
                  className="w-full px-4 py-3 rounded-lg font-bold text-white transition hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ background: "var(--brown-light)" }}
                >
                  Enrol Now (Free) <Send size={16} />
                </button>
              </Link>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
    </>
  );
}
