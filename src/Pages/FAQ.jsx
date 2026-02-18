import { useState } from "react";
import { Link } from "react-router-dom";

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
          <span className="mt-0.5 h-6 w-6 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center shrink-0">
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
  return (
    <>
      {/* Hero */}
      <section className="bg-orange-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">Got Questions?</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-black">Frequently Asked Questions</h1>
          <p className="mt-3 text-orange-200 text-lg max-w-2xl">
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

      {/* Still have questions */}
      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Still have a question?</h2>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
            Our team is happy to help. Send us a message or call us directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-orange-600 px-7 py-3 text-sm font-bold text-white hover:bg-orange-700 transition"
            >
              Contact Us
            </Link>
            <Link
              to="/join"
              className="rounded-xl border-2 border-orange-600 px-7 py-3 text-sm font-bold text-orange-600 hover:bg-orange-50 transition"
            >
              Join Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
