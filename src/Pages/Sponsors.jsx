import { Link } from "react-router-dom";

const GL = "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/";
const ML = "/MEDINA UNITED GALLARY/medinaunitedacademy.com/";

const tiers = [
  {
    name: "Gold Sponsor",
    badge: "bg-yellow-400 text-yellow-900",
    perks: [
      "Logo on all team jerseys",
      "Logo and feature on academy website",
      "Naming rights for a team or training programme",
      "VIP invitations to all academy events and tournaments",
      "Social media recognition and dedicated post",
      "Annual sponsor appreciation certificate",
    ],
  },
  {
    name: "Silver Sponsor",
    badge: "bg-gray-200 text-gray-700",
    perks: [
      "Logo on training bibs or equipment",
      "Feature on academy website and newsletter",
      "Invitations to key academy events",
      "Social media recognition",
      "Appreciation certificate",
    ],
  },
  {
    name: "Bronze / Community Sponsor",
    badge: "bg-orange-100 text-orange-800",
    perks: [
      "Name listed on academy website",
      "Acknowledgement at events",
      "Appreciation certificate",
    ],
  },
];

const uses = [
  {
    label: "Full Kits",
    desc: "Jerseys, shorts, socks and boots for every registered player.",
    photo: GL + "imgi_107_DSC_0915.jpg",
  },
  {
    label: "Equipment",
    desc: "Match balls, training cones, bibs, goal nets and more.",
    photo: GL + "imgi_108_DSC_0302.jpg",
  },
  {
    label: "Facility Rental",
    desc: "Maintaining access to the FIFA Goal Project grounds in Yundum.",
    photo: GL + "imgi_100_CSC_0786a.jpg",
  },
  {
    label: "Tournaments",
    desc: "Entry fees, referees, and organisation for competitive fixtures.",
    photo: "/throphy-photo.png",
  },
  {
    label: "Transportation",
    desc: "Getting our youth to away matches and regional competitions.",
    photo: ML + "imgi_26_287799815_369589948492697_9193087671688465878_n.jpg",
  },
  {
    label: "Coaching",
    desc: "Professional coach salaries and continued development training.",
    photo: GL + "imgi_109_DSC_1456.jpg",
  },
];

const connections = [
  {
    name: "AS Pikine",
    abbr: "ASP",
    detail: "Senegal 1st Division — Official Partnership",
    photo: ML + "imgi_29_DSC_0782.jpg",
    gradient: "linear-gradient(135deg, #166534 0%, #15803d 100%)",
  },
  {
    name: "Girona FC",
    abbr: "GFC",
    detail: "Spain — Sporting Director affiliation",
    photo: GL + "imgi_102_CSC_0751.jpg",
    gradient: "linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)",
  },
  {
    name: "Nottingham Forest",
    abbr: "NF",
    detail: "England — Supporter Omar Marong",
    photo: GL + "imgi_104_280270510_394576822678616_342529681069862217_n.jpg",
    gradient: "linear-gradient(135deg, #7f1d1d 0%, #b91c1c 100%)",
  },
  {
    name: "Akirah FC",
    abbr: "AFC",
    detail: "England — Kit donation & coaching camp",
    photo: GL + "imgi_103_287487757_369589861826039_5363297675177184119_n.jpg",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #0588b1 100%)",
  },
  {
    name: "Gambia Football Federation",
    abbr: "GFF",
    detail: "National governing body recognition",
    photo: GL + "imgi_116_DSC_0779.jpg",
    gradient: "linear-gradient(135deg, #1a3a1a 0%, #166534 100%)",
  },
  {
    name: "Ministry of Youth & Sports",
    abbr: "MYS",
    detail: "Government of The Gambia",
    photo: ML + "imgi_45_275501447_352777133525252_5621748583139200031_n.jpg",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #374151 100%)",
  },
];

export default function Sponsors() {
  return (
    <>
      {/* Hero */}
      <section className="bg-orange-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">Partner With Us</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-black">Become a Sponsor</h1>
          <p className="mt-3 text-orange-200 text-lg max-w-2xl">
            Help us develop the next generation of Gambian football talent. Your support makes free training, kits and coaching possible for 450+ youth.
          </p>
        </div>
      </section>

      {/* Where your support goes — photo cards */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Your Impact</span>
            <h2 className="mt-2 text-3xl font-black text-gray-900">Where Your Support Goes</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm">
              Every contribution directly funds the development and welfare of our registered youth players.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {uses.map((u) => (
              <div key={u.label} className="rounded-2xl overflow-hidden group relative" style={{ height: "260px" }}>
                <img
                  src={u.photo}
                  alt={u.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)" }}
                />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div
                    className="inline-block text-xs font-black uppercase tracking-wider text-white px-2.5 py-1 rounded-full mb-2"
                    style={{ background: "#f75a0b" }}
                  >
                    {u.label}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Sponsorship Levels</span>
            <h2 className="mt-2 text-3xl font-black text-gray-900">Choose Your Tier</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {tiers.map((tier) => (
              <div key={tier.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
                <span className={`inline-block self-start text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full mb-4 ${tier.badge}`}>
                  {tier.name}
                </span>
                <ul className="space-y-2 flex-1">
                  {tier.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-600 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 block text-center rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-orange-700 transition"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connections — photo cards */}
      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">International Network</span>
            <h2 className="mt-2 text-3xl font-black text-gray-900">Our Connections</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {connections.map((c) => (
              <div key={c.name} className="rounded-2xl overflow-hidden group relative" style={{ height: "220px" }}>
                {/* Photo behind a strong gradient overlay */}
                <div className="absolute inset-0" style={{ background: c.gradient }} />
                <img
                  src={c.photo}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                />
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full p-5">
                  {/* Badge/abbr */}
                  <div
                    className="self-start flex items-center justify-center rounded-xl text-white font-black text-xl"
                    style={{ width: "3rem", height: "3rem", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)" }}
                  >
                    {c.abbr.slice(0, 2)}
                  </div>
                  {/* Club info */}
                  <div>
                    <p className="text-white font-black text-lg leading-tight mb-1">{c.name}</p>
                    <p className="text-white/65 text-xs font-medium">{c.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-700">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Ready to Make a Difference?</h2>
          <p className="text-sky-200 text-sm mb-6 max-w-md mx-auto">
            Contact our founder or management team to discuss how your support can change the lives of youth in The Gambia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-xl bg-orange-600 px-7 py-3 text-sm font-black text-white hover:bg-orange-500 transition">
              Contact Us to Sponsor
            </Link>
            <a
              href="mailto:medinaunitedacademy@gmail.com"
              className="rounded-xl border-2 border-sky-400 px-7 py-3 text-sm font-bold text-white hover:bg-sky-600 transition"
            >
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
