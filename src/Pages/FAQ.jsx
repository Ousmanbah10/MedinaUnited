import { useState } from "react";
import { Link } from "react-router-dom";

const contacts = [
  { role: "General Manager",        name: "Sanna Jobarteh",    phone: "+220 389 1423" },
  { role: "Technical Director",     name: "Sang Mendy",        phone: "+220 762 2396" },
  { role: "Founder & Chairman",     name: "Michael Nicol",     phone: "+1 305 975 6303" },
  { role: "Press & Media Secretary",name: "Paul Steven Preira",phone: "" },
  { role: "Accountant / Treasurer", name: "Sang Gomez",        phone: "" },
];

const phones = ["+220 502 5813", "+220 389 1423", "+220 762 2396", "+220 630 6350"];

const fixtures = [
  {
    id: 1,
    type: "result",
    result: "W",
    competition: "GFF Regional League",
    matchday: "Round 12",
    team1: "MUFA U23",
    team2: "Yundum Athletic",
    score: "3–1",
    date: "Sat, 15 Feb 2026",
    venue: "FIFA Goal Project, Yundum",
  },
  {
    id: 2,
    type: "result",
    result: "D",
    competition: "GFF Academy League",
    matchday: "Round 7",
    team1: "Brikama FC",
    team2: "MUFA U15",
    score: "1–1",
    date: "Sun, 9 Feb 2026",
    venue: "Brikama Mini Stadium",
  },
  {
    id: 3,
    type: "upcoming",
    competition: "GFF Youth Cup",
    matchday: "Quarter-Final",
    team1: "MUFA U15",
    team2: "Kombo Youth FC",
    date: "Sat, 22 Feb 2026",
    time: "4:00 PM",
    venue: "Independence Stadium, Bakau",
  },
  {
    id: 4,
    type: "upcoming",
    competition: "GFF Regional League",
    matchday: "Round 13",
    team1: "MUFA U23",
    team2: "Lamin FC",
    date: "Sat, 1 Mar 2026",
    time: "3:30 PM",
    venue: "FIFA Goal Project, Yundum",
  },
  {
    id: 5,
    type: "upcoming",
    competition: "GFF Academy League",
    matchday: "Round 8",
    team1: "Brikama FC",
    team2: "MUFA U12",
    date: "Sun, 8 Mar 2026",
    time: "10:00 AM",
    venue: "Brikama Mini Stadium",
  },
];

const faqs = [
  {
    q: "How many different teams does Medina United Academy have?",
    a: "We currently have four age-group teams: U9 (ages 6–9), U12 (ages 10–12), U15 (ages 13–15), and U23 (ages 16–23). Each squad is managed by experienced coaches, many of whom are former Gambian internationals.",
  },
  {
    q: "How can I register my child?",
    a: "Registration is completely free. You can visit our office in Lamin / Yundum Airport, or contact our General Manager Sanna Jobarteh at +220 389 1423, or Technical Director Sang Mendy at +220 762 2396. There are no fees — ever.",
  },
  {
    q: "Is training really free? What is provided at no cost?",
    a: "Yes, 100% free. Every registered player receives jerseys, football boots, training equipment and full professional coaching at absolutely no charge. Our mission is to remove all financial barriers to youth development.",
  },
  {
    q: "What age range is the academy open to?",
    a: "The academy accepts youth aged 6 to 25. Players are placed into the appropriate age-group team (U9, U12, U15 or U23) based on their age and development level.",
  },
  {
    q: "Where is the academy located?",
    a: "We are based at Yundum Airport, Western Region (WRC), The Gambia — close to Lamin Village. The training facilities are located at the FIFA Goal Project grounds in Yundum.",
  },
  {
    q: "Is Medina United Academy only for male players?",
    a: "Currently, the academy operates male-only squads. A female chapter was planned for launch in January 2021 — please contact us directly for the latest update on the women's programme.",
  },
  {
    q: "How do I become a sponsor?",
    a: "We welcome sponsors at all levels. Please contact our Founder Michael Nicol, General Manager Sanna Jobarteh (+220 389 1423), or Technical Director Sang Mendy (+220 762 2396), or email medinaunitedacademy@gmail.com.",
  },
  {
    q: "What does sponsorship help provide?",
    a: "Your sponsorship funds jerseys and full kits, football boots and equipment, professional coaching and training sessions, tournament entry fees and travel, facility rental costs, and transportation for players to matches.",
  },
  {
    q: "Does the academy compete in official tournaments?",
    a: "Yes. Our teams compete in local, regional and national football competitions. Our U23 squad won the Inter Medina Tournament, and our U9 team claimed victory in the Knight Wadda tournament. We have an active fixtures calendar throughout the year.",
  },
  {
    q: "Who are the coaches at the academy?",
    a: "Our technical team is led by Technical Director Sang Mendy and includes former Gambian internationals such as Saihou Njie (U15/U17), Lamin Owens (U19), Ayo Jobe (U14), and Lamin Camara (U12). We also have UEFA-certified and internationally linked coaching staff.",
  },
  {
    q: "Does the academy have international connections?",
    a: "Yes. We have an official partnership with AS Pikine (Senegal 1st Division), and our Sporting Director Max Sanz Casasus is based in Barcelona, Spain with connections to Girona FC. We have also received support from players in the English Football League.",
  },
  {
    q: "How can I contact the academy?",
    a: "Email: medinaunitedacademy@gmail.com | Phone: +220 502 5813, +220 389 1423, +220 762 2396, +220 630 6350 | Address: Medina United Football Academy, Yundum Airport, Western Region, The Gambia.",
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-gray-50 transition"
      >
        <div className="flex items-start gap-4">
          <span className="mt-0.5 h-6 w-6 rounded-full bg-[#f75a0b] text-white text-xs font-black flex items-center justify-center shrink-0">
            {index + 1}
          </span>
          <span className="font-semibold text-gray-900 text-sm leading-snug">{faq.q}</span>
        </div>
        <span className={`shrink-0 h-6 w-6 rounded-full border-2 flex items-center justify-center text-orange-600 border-orange-200 transition-transform ${open ? "rotate-45" : ""}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1">
          <div className="ml-10 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
            {faq.a}
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden py-20 md:py-28" style={{ backgroundImage: "radial-gradient(ellipse at top right, #c2410c 0%, #f75a0b 40%, #9a3412 100%)" }}>
        <div className="mx-auto max-w-7xl px-4">
          <span className="inline-block text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ background: "rgba(0,0,0,0.25)" }}>Got Questions?</span>
          <h1 className="text-4xl md:text-5xl font-black">Frequently Asked Questions</h1>
          <p className="mt-3 text-white/80 text-lg max-w-2xl">
            Everything you need to know about joining, training, sponsoring and connecting with Medina United Football Academy.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* MATCH CALENDAR */}
      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#0588b1" }}>
              Match Calendar
            </span>
            <h2 className="mt-1 text-2xl font-black text-gray-900">Fixtures &amp; Results</h2>
            <p className="mt-2 text-gray-500 text-sm">Upcoming matches and recent results across all MUFA squads.</p>
          </div>
          <div className="space-y-3">
            {fixtures.map((f) => {
              const isResult = f.type === "result";
              const resultColors = { W: "#15803d", D: "#b45309", L: "#dc2626" };
              const resultLabels = { W: "WIN", D: "DRAW", L: "LOSS" };
              return (
                <div
                  key={f.id}
                  className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
                >
                  <div className="flex items-center justify-between px-5 py-4 gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">{f.competition} · {f.matchday}</p>
                      <p className="font-black text-gray-900 text-sm leading-tight">
                        {f.team1} <span className="text-gray-400 font-normal">vs</span> {f.team2}
                        {isResult && (
                          <span className="ml-2 font-black" style={{ color: resultColors[f.result] }}>{f.score}</span>
                        )}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">{f.date}{f.time ? ` · ${f.time}` : ""} · {f.venue}</p>
                    </div>
                    <span
                      className="text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-full shrink-0"
                      style={{
                        background: isResult ? (resultColors[f.result] + "18") : "#f75a0b18",
                        color: isResult ? resultColors[f.result] : "#f75a0b",
                      }}
                    >
                      {isResult ? resultLabels[f.result] : "Upcoming"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#0588b1" }}>Get In Touch</span>
            <h2 className="mt-1 text-3xl font-black text-gray-900">Still Have a Question?</h2>
            <p className="mt-2 text-gray-500 text-sm max-w-md mx-auto">
              Can't find your answer above? Send us a message or reach out directly — we'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Contact form */}
            <div>
              <h3 className="text-xl font-black text-gray-900 mb-6">Send a Message</h3>
              {sent ? (
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
                  <div className="h-14 w-14 rounded-full bg-[#f75a0b] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-black">✓</div>
                  <h3 className="font-bold text-orange-900 text-lg mb-2">Message Received!</h3>
                  <p className="text-orange-700 text-sm">Thank you for reaching out. Our team will get back to you as soon as possible.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-5 text-sm font-semibold text-orange-700 hover:text-orange-900 transition"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Full Name *</label>
                      <input
                        type="text" required value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Email Address *</label>
                      <input
                        type="email" required value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Subject *</label>
                    <select
                      required value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition bg-white text-gray-700"
                    >
                      <option value="">Select a subject...</option>
                      <option value="join">Joining the Academy</option>
                      <option value="sponsor">Sponsorship Enquiry</option>
                      <option value="media">Media / Press</option>
                      <option value="partnership">Partnership</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Message *</label>
                    <textarea
                      required rows={5} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us how we can help..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition bg-white resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl px-6 py-3 text-sm font-bold text-white transition"
                    style={{ background: "#f75a0b" }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-5">Contact Details</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0588b1] mb-1">Address</p>
                    <p className="text-gray-800 font-semibold text-sm">Medina United Football Academy</p>
                    <p className="text-gray-500 text-sm">Yundum Airport, Western Region</p>
                    <p className="text-gray-500 text-sm">The Gambia, West Africa</p>
                    <a
                      href="https://maps.google.com/?q=Yundum+Airport+Gambia"
                      target="_blank" rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs font-semibold text-orange-600 hover:text-orange-800 transition"
                    >
                      View on Google Maps &rarr;
                    </a>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0588b1] mb-2">Email</p>
                    <a href="mailto:medinaunitedacademy@gmail.com" className="text-gray-800 text-sm font-semibold hover:text-orange-600 transition break-all">
                      medinaunitedacademy@gmail.com
                    </a>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0588b1] mb-2">Phone Numbers</p>
                    <div className="space-y-1">
                      {phones.map((p) => (
                        <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-sm font-semibold text-gray-800 hover:text-orange-600 transition">{p}</a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-lg mb-4">Key Contacts</h3>
                <div className="space-y-3">
                  {contacts.map((c) => (
                    <div key={c.name} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#0588b1]">{c.role}</p>
                        <p className="font-semibold text-gray-900 text-sm mt-0.5">{c.name}</p>
                      </div>
                      {c.phone && (
                        <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="shrink-0 text-xs font-semibold text-orange-600 hover:text-orange-800 transition">
                          {c.phone}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
