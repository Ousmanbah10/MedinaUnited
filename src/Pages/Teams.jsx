import { Link } from "react-router-dom";

const GL = "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/";
const ML = "/MEDINA UNITED GALLARY/medinaunitedacademy.com/";

const teams = [
  {
    name: "U9",
    ages: "Ages 6–9",
    headerColor: "#0588b1",
    accentColor: "text-sky-200",
    desc: "Our youngest squad is where it all begins. Kids aged 6–9 learn the basics of the game in a fun, encouraging environment — first touches, passing, teamwork and a love for football.",
    coaches: ["Lamin Manjang (U10 Coach)"],
    highlights: [
      "Knight Wadda U9 Tournament Winners 2021",
      "Regular local fixtures",
      "Free boots & jerseys provided",
    ],
    photos: [
      GL + "imgi_106_DSC_0732.jpg",
      ML + "imgi_23_IMG-20221029-WA0020.jpg",
    ],
  },
  {
    name: "U12",
    ages: "Ages 10–12",
    headerColor: "#f75a0b",
    accentColor: "text-orange-200",
    desc: "The U12 squad builds on foundational skills with more structured tactical training. Players develop positional awareness and begin to compete in organised youth leagues.",
    coaches: ["Lamin Camara (Head Coach)"],
    highlights: [
      "Structured tactical development",
      "Competitive league participation",
      "Full kit & equipment provided",
    ],
    photos: [
      GL + "imgi_107_DSC_0915.jpg",
      GL + "imgi_103_287487757_369589861826039_5363297675177184119_n.jpg",
    ],
  },
  {
    name: "U15",
    ages: "Ages 13–15",
    headerColor: "#c2410c",
    accentColor: "text-orange-200",
    desc: "A step up in intensity and competition. The U15s are coached by former Gambian internationals and compete at national youth level, with a focus on physical and mental development.",
    coaches: ["Musa Manneh (Head Coach)", "Saihou Njie (U17/U15 Support)"],
    highlights: [
      "National youth competition",
      "Coached by former internationals",
      "Focus on physical conditioning",
    ],
    photos: [GL + "imgi_111_DSC_1423.jpg", GL + "imgi_112_DSC_1439.jpg"],
  },
  {
    name: "U23",
    ages: "Ages 16–23",
    headerColor: "#1e293b",
    accentColor: "text-sky-300",
    desc: "Our elite development squad bridges the gap between youth football and senior competition. U23 players are scouted for professional opportunities at national and international levels.",
    coaches: ["Lamin Owens (U19 Coach)", "Pierre Gomez (2nd Division Coach)"],
    highlights: [
      "Inter Medina Tournament Champions 2021",
      "National and international scouting pathway",
      "Links with AS Pikine (Senegal) & European clubs",
    ],
    photos: [GL + "imgi_114_DSC_0787.jpg", GL + "imgi_116_DSC_0779.jpg"],
  },
  {
    name: "1st Division",
    ages: "Men's Senior Team",
    headerColor: "#0a1850",
    accentColor: "text-orange-300",
    desc: "Medina United's Men's First Division side competes at the highest level of domestic club football in The Gambia. Built on the foundation of our youth academy, the 1st Division team is the pinnacle of the MUFA pathway — where academy graduates step up and compete professionally.",
    coaches: ["Pierre Gomez (Head Coach)", "Sang Mendy (Technical Director)"],
    highlights: [
      "GFF First Division competitors",
      "Academy-to-senior pathway",
      "Professional development programme",
    ],
    photos: [GL + "imgi_115_DSC_0768.jpg", GL + "imgi_116_DSC_0779.jpg"],
  },
];

export default function Teams() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white overflow-hidden py-20 md:py-28"
        style={{ backgroundImage: "radial-gradient(ellipse at top right, #c2410c 0%, #f75a0b 40%, #9a3412 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-4">
          <span className="inline-block text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ background: "rgba(0,0,0,0.25)" }}>
            Our Squads
          </span>
          <h1 className="text-4xl md:text-5xl font-black">
            Academy Teams
          </h1>
          <p className="mt-3 text-white/80 text-lg max-w-2xl">
            Five squads — from grassroots youth to the Men's First Division —
            providing a complete development pathway from first kicks to
            professional football.
          </p>
        </div>
      </section>

      {/* Teams */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {teams.map((team) => (
              <div
                key={team.name}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div
                  className="px-6 py-8"
                  style={{ background: team.headerColor }}
                >
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-6xl font-black text-white opacity-10 leading-none">
                        {team.name}
                      </p>
                      <p className="text-3xl font-black text-white -mt-4">
                        {team.name}
                      </p>
                      <p
                        className={`text-sm font-bold mt-1 ${team.accentColor}`}
                      >
                        {team.ages}
                      </p>
                    </div>
                    <div className="h-16 w-16 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 8v8M8 12h8"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {team.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {team.photos.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${team.name} squad`}
                        className="rounded-xl object-cover w-full h-28"
                      />
                    ))}
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0588b1] mb-2">
                      Coaching Staff
                    </p>
                    <ul className="space-y-1">
                      {team.coaches.map((c) => (
                        <li
                          key={c}
                          className="text-sm text-gray-700 flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#f75a0b] shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0588b1] mb-2">
                      Highlights
                    </p>
                    <ul className="space-y-1">
                      {team.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-sm text-gray-700 flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-600 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="text-white" style={{ background: "#f75a0b" }}>
        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <h2 className="text-3xl font-black mb-3">Find Your Team</h2>
          <p className="text-orange-200 mb-7 max-w-xl mx-auto text-sm">
            Our youth squads are open and free to join for ages 6–25. The 1st
            Division welcomes talented players ready for senior competition. No
            fees, no barriers — just football.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/join"
              className="rounded-xl px-7 py-3 text-sm font-black text-white transition hover:opacity-90"
              style={{ background: "#0588b1" }}
            >
              Register Free
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border-2 border-white/50 px-7 py-3 text-sm font-bold text-white transition"
            >
              Contact the Academy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
