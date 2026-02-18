import { useState } from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    step: "1",
    title: "Check Your Age",
    desc: "The academy is open to all youth aged 6–25. Players are placed in U9, U12, U15 or U23 squads based on age and ability.",
  },
  {
    step: "2",
    title: "Visit or Call Us",
    desc: "Come to our office in Yundum Airport, or call General Manager Sanna Jobarteh (+220 389 1423) or Technical Director Sang Mendy (+220 762 2396).",
  },
  {
    step: "3",
    title: "Register for Free",
    desc: "Complete your free registration. There are no fees at any stage — training, kits and equipment are all provided at no cost.",
  },
  {
    step: "4",
    title: "Start Training",
    desc: "Join your age-group squad and begin training with our world-class coaching team. Your road to success starts here.",
  },
];

const teams = [
  { name: "U9", ages: "6–9 years", coaches: "Lamin Manjang" },
  { name: "U12", ages: "10–12 years", coaches: "Lamin Camara" },
  { name: "U15", ages: "13–15 years", coaches: "Musa Manneh" },
  { name: "U23", ages: "16–23 years", coaches: "Lamin Owens / Pierre Gomez" },
];

export default function Join() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    playerName: "", dob: "", parentName: "", phone: "", email: "", area: "", notes: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section
        className="bg-orange-700 text-white py-20"
        style={{ backgroundImage: "linear-gradient(135deg, #9a3412 0%, #c2410c 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="inline-block bg-sky-700 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            100% Free — No Fees Ever
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight">JOIN US NOW</h1>
          <p className="mt-3 text-2xl font-semibold text-sky-300 uppercase tracking-wide">
            You Are Just 1 Click Away
          </p>
          <p className="mt-5 text-orange-100 max-w-xl mx-auto text-base leading-relaxed">
            Register for free at Medina United Football Academy. Open to all youth aged 6–25 in The Gambia.
            Jerseys, boots, equipment and professional coaching — all provided at no cost.
          </p>
        </div>
      </section>

      {/* How to join */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Simple Process</span>
            <h2 className="mt-2 text-3xl font-black text-gray-900">How to Join</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="h-14 w-14 rounded-full bg-orange-600 text-white font-black text-xl flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams available */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">Choose Your Team</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {teams.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl border border-gray-100 p-5 text-center shadow-sm">
                <p className="text-3xl font-black text-orange-600 mb-1">{t.name}</p>
                <p className="text-sm font-semibold text-gray-700">{t.ages}</p>
                <p className="text-xs text-gray-400 mt-1">{t.coaches}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + contacts */}
      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-2">Registration Form</h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill in the form below and we will be in touch to confirm your place. Or contact us directly to register in person.
            </p>

            {sent ? (
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
                <div className="h-14 w-14 rounded-full bg-orange-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-black">
                  ✓
                </div>
                <h3 className="font-bold text-orange-900 text-lg mb-2">Registration Received!</h3>
                <p className="text-orange-700 text-sm">
                  Thank you for registering! Our team will be in touch shortly to confirm your place.
                </p>
                <p className="text-orange-600 text-sm mt-3">
                  You can also call us at <strong>+220 389 1423</strong> or <strong>+220 762 2396</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Player's Full Name *</label>
                    <input type="text" required value={form.playerName}
                      onChange={(e) => setForm({ ...form, playerName: e.target.value })}
                      placeholder="Player name"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Date of Birth *</label>
                    <input type="date" required value={form.dob}
                      onChange={(e) => setForm({ ...form, dob: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition text-gray-700"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Parent / Guardian Name</label>
                    <input type="text" value={form.parentName}
                      onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                      placeholder="Parent or guardian"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Phone Number *</label>
                    <input type="tel" required value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+220..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Email Address</label>
                  <input type="email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com (optional)"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Area / Village</label>
                  <input type="text" value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    placeholder="e.g. Lamin, Yundum, Brikama..."
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Additional Notes</label>
                  <textarea rows={3} value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Any previous experience, preferred position, etc."
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition resize-none"
                  />
                </div>
                <button type="submit"
                  className="w-full rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-black text-white hover:bg-orange-700 transition"
                >
                  Submit Registration — It's Free
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-5">Register in Person</h2>
              <div className="bg-orange-700 rounded-2xl p-6 text-white">
                <p className="font-black text-lg mb-4">Contact Our Team Directly</p>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-sky-300 font-bold uppercase tracking-wider text-xs mb-1">Visit Us</p>
                    <p className="text-orange-100">Medina United Football Academy</p>
                    <p className="text-orange-200">Yundum Airport, Western Region, The Gambia</p>
                  </div>
                  <div>
                    <p className="text-sky-300 font-bold uppercase tracking-wider text-xs mb-1">General Manager</p>
                    <p className="text-orange-100 font-semibold">Sanna Jobarteh</p>
                    <a href="tel:+2203891423" className="text-white font-bold hover:text-orange-200 transition">+220 389 1423</a>
                  </div>
                  <div>
                    <p className="text-sky-300 font-bold uppercase tracking-wider text-xs mb-1">Technical Director</p>
                    <p className="text-orange-100 font-semibold">Sang Mendy</p>
                    <a href="tel:+2207622396" className="text-white font-bold hover:text-orange-200 transition">+220 762 2396</a>
                  </div>
                  <div>
                    <p className="text-sky-300 font-bold uppercase tracking-wider text-xs mb-1">Email</p>
                    <a href="mailto:medinaunitedacademy@gmail.com" className="text-white font-bold hover:text-orange-200 transition break-all">
                      medinaunitedacademy@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 mb-3">What to Expect</h3>
              <ul className="space-y-2">
                {[
                  "Free registration — no payment required at any stage",
                  "Full kit (jersey, shorts, socks) and football boots provided",
                  "Training equipment and match gear supplied",
                  "Professional coaching from former Gambian internationals",
                  "Pathway to national and international football",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <Link to="/faq" className="text-sm font-semibold text-orange-600 hover:text-orange-800 transition">
                Have questions? Read our FAQ &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
