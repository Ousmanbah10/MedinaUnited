import { useState } from "react";

const contacts = [
  { role: "General Manager", name: "Sanna Jobarteh", phone: "+220 389 1423" },
  { role: "Technical Director", name: "Sang Mendy", phone: "+220 762 2396" },
  { role: "Founder & Chairman", name: "Michael Nicol", phone: "+1 305 975 6303" },
  { role: "Press & Media Secretary", name: "Paul Steven Preira", phone: "" },
  { role: "Accountant / Treasurer", name: "Sang Gomez", phone: "" },
];

const phones = ["+220 502 5813", "+220 389 1423", "+220 762 2396", "+220 630 6350"];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-orange-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">Get In Touch</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-black">Contact Us</h1>
          <p className="mt-3 text-orange-200 text-lg max-w-2xl">
            Wanna play with us or have questions? Let us know — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 grid gap-12 lg:grid-cols-2">

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-6">Send a Message</h2>
            {sent ? (
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
                <div className="h-14 w-14 rounded-full bg-orange-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-black">
                  ✓
                </div>
                <h3 className="font-bold text-orange-900 text-lg mb-2">Message Received!</h3>
                <p className="text-orange-700 text-sm">
                  Thank you for reaching out. Our team will get back to you as soon as possible.
                </p>
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
                  className="w-full rounded-xl bg-orange-600 px-6 py-3 text-sm font-bold text-white hover:bg-orange-700 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-5">Contact Details</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-1">Address</p>
                  <p className="text-gray-800 font-semibold text-sm">Medina United Football Academy</p>
                  <p className="text-gray-500 text-sm">Yundum Airport, Western Region</p>
                  <p className="text-gray-500 text-sm">The Gambia, West Africa</p>
                  <a
                    href="https://maps.google.com/?q=Yundum+Airport+Gambia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-semibold text-orange-600 hover:text-orange-800 transition"
                  >
                    View on Google Maps &rarr;
                  </a>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">Email</p>
                  <a
                    href="mailto:medinaunitedacademy@gmail.com"
                    className="text-gray-800 text-sm font-semibold hover:text-orange-600 transition break-all"
                  >
                    medinaunitedacademy@gmail.com
                  </a>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">Phone Numbers</p>
                  <div className="space-y-1">
                    {phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/\s/g, "")}`}
                        className="block text-sm font-semibold text-gray-800 hover:text-orange-600 transition"
                      >
                        {p}
                      </a>
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
                      <p className="text-xs font-bold uppercase tracking-wider text-sky-700">{c.role}</p>
                      <p className="font-semibold text-gray-900 text-sm mt-0.5">{c.name}</p>
                    </div>
                    {c.phone && (
                      <a
                        href={`tel:${c.phone.replace(/\s/g, "")}`}
                        className="shrink-0 text-xs font-semibold text-orange-600 hover:text-orange-800 transition"
                      >
                        {c.phone}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
