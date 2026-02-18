import { Link } from "react-router-dom";

const GL = "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/";
const ML = "/MEDINA UNITED GALLARY/medinaunitedacademy.com/";

const teams = [
  {
    name: "U9",
    ages: "Ages 6–9",
    headerBg: "bg-sky-700",
    accentColor: "text-sky-300",
    desc: "Our youngest squad is where it all begins. Kids aged 6–9 learn the basics of the game in a fun, encouraging environment — first touches, passing, teamwork and a love for football.",
    coaches: ["Lamin Manjang (U10 Coach)"],
    highlights: ["Knight Wadda U9 Tournament Winners 2021", "Regular local fixtures", "Free boots & jerseys provided"],
    photos: [GL + "imgi_106_DSC_0732.jpg", ML + "imgi_23_IMG-20221029-WA0020.jpg"],
  },
  {
    name: "U12",
    ages: "Ages 10–12",
    headerBg: "bg-orange-700",
    accentColor: "text-orange-200",
    desc: "The U12 squad builds on foundational skills with more structured tactical training. Players develop positional awareness and begin to compete in organised youth leagues.",
    coaches: ["Lamin Camara (Head Coach)"],
    highlights: ["Structured tactical development", "Competitive league participation", "Full kit & equipment provided"],
    photos: [GL + "imgi_107_DSC_0915.jpg", GL + "imgi_103_287487757_369589861826039_5363297675177184119_n.jpg"],
  },
  {
    name: "U15",
    ages: "Ages 13–15",
    headerBg: "bg-orange-800",
    accentColor: "text-orange-200",
    desc: "A step up in intensity and competition. The U15s are coached by former Gambian internationals and compete at national youth level, with a focus on physical and mental development.",
    coaches: ["Musa Manneh (Head Coach)", "Saihou Njie (U17/U15 Support)"],
    highlights: ["National youth competition", "Coached by former internationals", "Focus on physical conditioning"],
    photos: [GL + "imgi_111_DSC_1423.jpg", GL + "imgi_112_DSC_1439.jpg"],
  },
  {
    name: "U23",
    ages: "Ages 16–23",
    headerBg: "bg-gray-900",
    accentColor: "text-sky-300",
    desc: "Our elite development squad bridges the gap between youth football and senior competition. U23 players are scouted for professional opportunities at national and international levels.",
    coaches: ["Lamin Owens (U19 Coach)", "Pierre Gomez (2nd Division Coach)"],
    highlights: ["Inter Medina Tournament Champions 2021", "National and international scouting pathway", "Links with AS Pikine (Senegal) & European clubs"],
    photos: [GL + "imgi_114_DSC_0787.jpg", GL + "imgi_116_DSC_0779.jpg"],
  },
];

export default function Teams() {
  return (
    <>
      {/* Hero */}
      <section className="bg-orange-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">Our Squads</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-black">Academy Teams</h1>
          <p className="mt-3 text-orange-200 text-lg max-w-2xl">
            Four age-group squads providing a complete development pathway from grassroots to elite youth football.
          </p>
        </div>
      </section>

      {/* Pathway bar */}
      <section className="bg-sky-700">
        <div className="mx-auto max-w-7xl px-4 py-5">
          <div className="flex flex-wrap items-center justify-center gap-2 text-white font-black text-sm">
            {["U9 (6–9)", "→", "U12 (10–12)", "→", "U15 (13–15)", "→", "U23 (16–23)", "→", "Professional Football"].map((t, i) => (
              <span key={i} className={i % 2 === 1 ? "text-sky-300" : ""}>{t}</span>
            ))}
          </div>
          <p className="text-center text-sky-200 text-xs mt-2">Complete development pathway — all at no cost</p>
        </div>
      </section>

      {/* Teams */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {teams.map((team) => (
              <div key={team.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className={`${team.headerBg} px-6 py-8`}>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-6xl font-black text-white opacity-10 leading-none">{team.name}</p>
                      <p className="text-3xl font-black text-white -mt-4">{team.name}</p>
                      <p className={`text-sm font-bold mt-1 ${team.accentColor}`}>{team.ages}</p>
                    </div>
                    <div className="h-16 w-16 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center">
                      <span className="text-2xl">⚽</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{team.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {team.photos.map((src, i) => (
                      <img key={i} src={src} alt={`${team.name} squad`} className="rounded-xl object-cover w-full h-28" />
                    ))}
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">Coaching Staff</p>
                    <ul className="space-y-1">
                      {team.coaches.map((c) => (
                        <li key={c} className="text-sm text-gray-700 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-orange-600 shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">Highlights</p>
                    <ul className="space-y-1">
                      {team.highlights.map((h) => (
                        <li key={h} className="text-sm text-gray-700 flex items-center gap-2">
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
      <section className="bg-orange-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <h2 className="text-3xl font-black mb-3">Find Your Team</h2>
          <p className="text-orange-200 mb-7 max-w-xl mx-auto text-sm">
            All four squads are open and free to join for youth aged 6–25. No fees, no barriers — just football.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/join" className="rounded-xl bg-sky-700 px-7 py-3 text-sm font-black text-white hover:bg-sky-600 transition">
              Register Free
            </Link>
            <Link to="/contact" className="rounded-xl border-2 border-orange-300 px-7 py-3 text-sm font-bold text-white hover:bg-orange-600 transition">
              Contact the Academy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
