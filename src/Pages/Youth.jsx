import { Link } from "react-router-dom";

const GL = "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/";
const ML = "/MEDINA UNITED GALLARY/medinaunitedacademy.com/";

const ageGroups = [
  {
    name: "U9",
    ages: "Ages 6–9",
    color: "#0588b1",
    lightColor: "#e0f2fe",
    desc: "Where it all begins. Kids aged 6–9 discover the joy of football in a fun, safe and encouraging environment — first touches, passing, teamwork and confidence.",
    highlights: [
      "Knight Wadda U9 Tournament Winners 2021",
      "Fun, structured training sessions",
      "Free boots, jerseys & equipment",
    ],
    photos: [
      GL + "imgi_106_DSC_0732.jpg",
      ML + "imgi_23_IMG-20221029-WA0020.jpg",
    ],
    coach: "Lamin Manjang",
  },
  {
    name: "U12",
    ages: "Ages 10–12",
    color: "#f75a0b",
    lightColor: "#fff7ed",
    desc: "The U12 squad builds on foundational skills with more structured tactical training. Players develop positional awareness and begin competing in organised youth leagues.",
    highlights: [
      "Structured tactical development",
      "Competitive league participation",
      "Full kit & equipment provided",
    ],
    photos: [
      GL + "imgi_107_DSC_0915.jpg",
      GL + "imgi_103_287487757_369589861826039_5363297675177184119_n.jpg",
    ],
    coach: "Lamin Camara",
  },
  {
    name: "U15",
    ages: "Ages 13–15",
    color: "#c2410c",
    lightColor: "#fff7ed",
    desc: "Coached by former Gambian internationals, the U15s compete at national youth level with a sharp focus on physical conditioning, mental strength and technical excellence.",
    highlights: [
      "National youth competition",
      "Coached by former Gambian internationals",
      "Physical & mental development focus",
    ],
    photos: [GL + "imgi_111_DSC_1423.jpg", GL + "imgi_112_DSC_1439.jpg"],
    coach: "Musa Manneh",
  },
  {
    name: "U23",
    ages: "Ages 16–23",
    color: "#1e293b",
    lightColor: "#f1f5f9",
    desc: "Our elite development squad bridges youth football and senior competition. U23 players are identified for professional opportunities at national and international levels.",
    highlights: [
      "Inter Medina Tournament Champions 2021",
      "International scouting pathway",
      "Links with AS Pikine, Girona & English clubs",
    ],
    photos: [GL + "imgi_114_DSC_0787.jpg", GL + "imgi_116_DSC_0779.jpg"],
    coach: "Lamin Owens",
  },
];

const benefits = [
  {
    title: "Free Kit & Equipment",
    desc: "Every player receives free jerseys, boots and all training equipment. No fees — ever.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
      </svg>
    ),
  },
  {
    title: "Expert Coaching",
    desc: "Learn from former Gambian international players and certified professional coaching staff.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Competitive Football",
    desc: "Regular fixtures, local tournaments and national youth competitions to test and grow your skills.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: "International Pathway",
    desc: "Partnerships with clubs in Senegal, Spain and England create real doors to professional football.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
];

const galleryPhotos = [
  { src: GL + "imgi_101_DSC_0551.jpg", alt: "MUFA Youth Training" },
  { src: GL + "imgi_107_DSC_0915.jpg", alt: "Youth Session" },
  { src: GL + "imgi_109_DSC_1456.jpg", alt: "Youth Match" },
  { src: GL + "imgi_111_DSC_1423.jpg", alt: "Youth Players" },
  { src: GL + "imgi_112_DSC_1439.jpg", alt: "Academy Youth" },
  { src: GL + "imgi_116_DSC_0779.jpg", alt: "Training Day" },
];

export default function Youth() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top right, #c2410c 0%, #f75a0b 40%, #9a3412 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-500 opacity-20 translate-x-32 -translate-y-16 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-sky-600 opacity-10 -translate-x-16 translate-y-12 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
          <span className="inline-block text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-5" style={{ background: "rgba(0,0,0,0.25)" }}>
            Youth Development — The Gambia
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
            BUILT FOR
            <span className="block text-white">YOUTH</span>
          </h1>
          <p className="mt-5 text-base md:text-xl text-orange-100 max-w-2xl leading-relaxed">
            Medina United Football Academy exists to give every child in The
            Gambia — aged 6 to 25 — a professional football pathway. Free
            training, free kit, world-class coaches. No barriers, ever.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/join"
              className="rounded-xl px-7 py-3 text-sm font-black text-white transition shadow-lg"
              style={{ background: "#1e293b" }}
            >
              Join the Academy — It's Free
            </Link>
            <Link
              to="/teams"
              className="rounded-xl border-2 border-white/40 px-7 py-3 text-sm font-bold text-orange-100 transition"
            >
              View All Teams
            </Link>
          </div>
        </div>
      </section>

      {/* WHY MUFA FOR YOUR CHILD */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0588b1]">
              Why Choose Us
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">
              What Every Young Player Gets
            </h2>
            <p className="mt-3 text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              From the moment a child joins MUFA, they receive everything they
              need to thrive — with zero cost to their family.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:shadow-md transition-shadow"
              >
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "#fff7ed", color: "#f75a0b" }}
                >
                  {b.icon}
                </div>
                <h3 className="font-black text-gray-900 text-base mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMER CAMPS */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "#f75a0b",
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-orange-400 opacity-10 translate-x-24 -translate-y-16 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-yellow-400 opacity-10 -translate-x-12 translate-y-10 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left — text */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-block bg-white/15 text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Annual Activity
                </span>
                <span className="inline-block bg-yellow-400 text-orange-900 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Registration Open
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-2">
                Annual Summer Camp
              </h2>
              <p className="text-yellow-300 font-black text-lg mb-4">
                Sports &amp; Academic Classes
              </p>
              <p className="text-orange-100 text-base leading-relaxed mb-6">
                Medina United Football Academy's annual summer camp combines
                intensive football training with academic classes — open to all
                youth aged 8–12. Completely free, no registration fee.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Daily football training with certified MUFA coaches",
                  "Academic classes alongside sports sessions",
                  "Technical drills, small-sided games and positional coaching",
                  "Team-building activities and fun tournaments",
                  "100% free — no registration or participation fee",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full mt-2 shrink-0 bg-white/70" />
                    <p className="text-orange-100 text-sm leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div
                className="rounded-xl p-4 mb-6 space-y-2"
                style={{ background: "rgba(0,0,0,0.2)" }}
              >
                <p className="text-yellow-300 text-xs font-black uppercase tracking-widest mb-1">
                  Get In Touch
                </p>
                <a
                  href="tel:3205898"
                  className="flex items-center gap-2 text-white text-sm font-bold hover:text-yellow-300 transition"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.27a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call: 3205898
                </a>
                <a
                  href="mailto:medinaunitedacademy@gmail.com"
                  className="flex items-center gap-2 text-white text-sm font-bold hover:text-yellow-300 transition break-all"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  medinaunitedacademy@gmail.com
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/join"
                  className="inline-block bg-white text-orange-700 font-black text-sm px-6 py-3 rounded-xl hover:bg-orange-50 transition shadow"
                >
                  Register for Summer Camp
                </a>
                <a
                  href="/contact"
                  className="inline-block border-2 border-white/50 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-orange-700 transition"
                >
                  Ask a Question
                </a>
              </div>
            </div>

            {/* Right — photo grid */}
            <div className="grid grid-cols-2 gap-2">
              <div
                className="col-span-2 rounded-2xl overflow-hidden"
                style={{ height: "200px" }}
              >
                <img
                  src={
                    GL +
                    "imgi_103_287487757_369589861826039_5363297675177184119_n.jpg"
                  }
                  alt="Summer Camp Training"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="rounded-xl overflow-hidden"
                style={{ height: "120px" }}
              >
                <img
                  src={GL + "imgi_107_DSC_0915.jpg"}
                  alt="Summer Camp Drills"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="rounded-xl overflow-hidden"
                style={{ height: "120px" }}
              >
                <img
                  src={GL + "imgi_109_DSC_1456.jpg"}
                  alt="Summer Camp Players"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info chips */}
              <div
                className="col-span-2 rounded-xl p-4 grid grid-cols-2 gap-3"
                style={{ background: "rgba(0,0,0,0.2)" }}
              >
                {[
                  { label: "Ages", value: "8–12 yrs" },
                  { label: "Starts", value: "August 1st" },
                  { label: "Time", value: "9:00 AM" },
                  { label: "Cost", value: "FREE" },
                ].map((c) => (
                  <div key={c.label} className="text-center py-1">
                    <p className="text-yellow-300 font-black text-base">
                      {c.value}
                    </p>
                    <p className="text-orange-200 text-xs font-semibold uppercase tracking-wide">
                      {c.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGE GROUPS */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0588b1]">
              Our Squads
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">
              Find the Right Age Group
            </h2>
            <p className="mt-3 text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              Four dedicated squads ensure every player — from first kicks at 6
              to elite development at 23 — gets the right coaching for their
              stage.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {ageGroups.map((team) => (
              <div
                key={team.name}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                {/* Coloured header */}
                <div
                  className="px-6 py-8 relative overflow-hidden"
                  style={{ background: team.color }}
                >
                  <div
                    className="absolute right-0 top-0 bottom-0 w-32 opacity-10"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      borderRadius: "50%",
                      transform: "translate(20%, -20%)",
                    }}
                  />
                  <div className="flex items-end justify-between relative z-10">
                    <div>
                      <p
                        className="font-black text-white leading-none"
                        style={{ fontSize: "4rem", opacity: 0.12 }}
                      >
                        {team.name}
                      </p>
                      <p
                        className="font-black text-white"
                        style={{ fontSize: "2rem", marginTop: "-2.5rem" }}
                      >
                        {team.name}
                      </p>
                      <p className="text-sm font-bold mt-1 text-white/70">
                        {team.ages}
                      </p>
                    </div>
                    <div className="h-14 w-14 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 8v8M8 12h8"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {team.desc}
                  </p>

                  {/* Photos */}
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

                  {/* Coach */}
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="h-7 w-7 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0"
                      style={{ background: team.color }}
                    >
                      {team.coach[0]}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                        Head Coach
                      </p>
                      <p className="text-sm font-bold text-gray-800">
                        {team.coach}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
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
                          <span
                            className="h-1.5 w-1.5 rounded-full shrink-0"
                            style={{ background: team.color }}
                          />
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

      {/* TRAINING SCHEDULE */}
      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          {/* Welcome banner */}
          <div
            className="rounded-2xl text-center mb-12 py-8 px-6"
            style={{
              background: "#0588b1",
            }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-sky-300 mb-2">
              Open to All
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              We Welcome Everyone to Try Out & Be Part of Us
            </h2>
          </div>

          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0588b1]">
              Practice / Training Schedule
            </span>
            <h3 className="mt-2 text-3xl font-black text-gray-900">
              Team Schedules
            </h3>
          </div>

          {/* Team schedule cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-12">
            {[
              {
                team: "U9 Team",
                color: "#0588b1",
                coaches: "Lamin D. Manjang & Malang Keita",
              },
              {
                team: "U11 Team",
                color: "#f75a0b",
                coaches: "Sarjo Siady & Gibril Ceesay",
              },
              {
                team: "U15 Team",
                color: "#c2410c",
                coaches: "Moses Aniobi & Armando Mbokeh",
              },
              {
                team: "U17 Team",
                color: "#6d28d9",
                coaches: "Musa Manneh & Modou Gibbon",
              },
              {
                team: "U23 Team",
                color: "#1e293b",
                coaches: "Modou Bah",
              },
            ].map((t) => (
              <div
                key={t.team}
                className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
              >
                {/* Colored header */}
                <div className="px-5 py-4" style={{ background: t.color }}>
                  <p className="text-white font-black text-xl">{t.team}</p>
                  <p className="text-white/70 text-xs mt-0.5 font-medium">
                    Coaches: {t.coaches}
                  </p>
                </div>

                {/* Monthly topics */}
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#0588b1] mb-3">
                    Monthly Topics
                  </p>
                  <div className="space-y-2 mb-5">
                    {[
                      { month: "March", topic: "Running with the ball" },
                      {
                        month: "April",
                        topic:
                          "Refreshing the 3 months technical & skills trainings and Easter camp",
                      },
                      {
                        month: "May",
                        topic: "Passing and control with ball joggling",
                      },
                    ].map((m) => (
                      <div key={m.month} className="flex gap-3 items-start">
                        <span
                          className="text-xs font-black uppercase tracking-wide px-2 py-0.5 rounded-full text-white shrink-0 mt-0.5"
                          style={{ background: t.color }}
                        >
                          {m.month}
                        </span>
                        <p className="text-sm text-gray-600 leading-snug">
                          {m.topic}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Times & venue */}
                  <div
                    className="rounded-xl p-3 space-y-1.5"
                    style={{ background: "#f0f9ff" }}
                  >
                    <div className="flex items-center gap-2">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0588b1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span className="text-xs font-bold text-sky-800">
                        Saturday & Sunday · 10:00 – 12:00
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0588b1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="text-xs font-bold text-sky-800">
                        FIFA Goal Project, Yundum
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing days */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0588b1] mb-4">
                Closing Days This Year
              </p>
              <div className="space-y-2">
                {[
                  { name: "New Year's Day", date: "1 Jan 2021" },
                  { name: "Independence Day", date: "18 Feb 2021" },
                  { name: "Good Friday", date: "2 Apr 2021" },
                  { name: "Easter Monday", date: "5 Apr 2021" },
                  { name: "May Day", date: "1 May 2021" },
                  { name: "Eid al-Fitr / Koriteh", date: "23 May 2021" },
                  { name: "Eid al-Adha / Tobaski", date: "31 Jul 2021" },
                  { name: "Christmas Day", date: "25 Dec 2021" },
                ].map((d) => (
                  <div
                    key={d.name}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-sm font-semibold text-gray-800">
                      {d.name}
                    </span>
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
                      {d.date} · Closed all day
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* General information */}
            <div className="flex flex-col gap-4">
              <div
                className="rounded-2xl p-6 text-white flex-1"
                style={{
                  background: "#f75a0b",
                }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-orange-200 mb-3">
                  General Information
                </p>
                <p className="text-sm leading-relaxed text-orange-50">
                  All training sessions will be accompanied with related fun
                  games to motivate, inspire and encourage high participation
                  and improvement.
                </p>
              </div>
              <div
                className="rounded-2xl p-6 text-white"
                style={{ background: "#0588b1" }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-sky-200 mb-3">
                  Training Venue
                </p>
                <p className="font-black text-lg text-white">
                  FIFA Goal Project
                </p>
                <p className="text-sky-200 text-sm">Yundum, The Gambia</p>
                <p className="text-sky-200 text-xs mt-2">
                  Sat & Sun · 10:00 AM – 12:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES & VISION */}
      <section
        className="bg-gray-950 overflow-hidden"
        style={{ background: "#0a0f1e" }}
      >
        {/* ── FACILITIES ── */}
        <div className="mx-auto max-w-7xl px-4 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — text */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                Our Home
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-black text-white leading-tight">
                World-Class
                <span className="block" style={{ color: "#f75a0b" }}>
                  Facilities
                </span>
              </h2>
              <p className="mt-5 text-gray-300 text-sm leading-relaxed max-w-md">
                Medina United trains at the{" "}
                <strong className="text-white">
                  FIFA Goal Project Training Fields in Yundum, Western Region
                </strong>{" "}
                — a professional-grade facility that gives our youth access to
                the same infrastructure used by senior teams across The Gambia.
              </p>

              {/* Facility feature cards */}
              <div className="mt-8 space-y-3">
                {[
                  {
                    icon: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                    ),
                    title: "FIFA Goal Project Pitch",
                    desc: "Full-size professional training pitch maintained to international standards.",
                  },
                  {
                    icon: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
                      </svg>
                    ),
                    title: "Kit & Equipment Room",
                    desc: "Full inventory of jerseys, boots, training bibs, cones and match balls — all free for every player.",
                  },
                  {
                    icon: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    ),
                    title: "Dedicated Coaching Staff",
                    desc: "Certified coaches on-site every Saturday and Sunday with dedicated space for each age group.",
                  },
                  {
                    icon: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                    ),
                    title: "International-Standard Training",
                    desc: "Methodology aligned with our partner clubs in Senegal, Spain and England.",
                  },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="flex items-start gap-4 rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(247,90,11,0.15)",
                        color: "#f75a0b",
                      }}
                    >
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-black text-white text-sm mb-0.5">
                        {f.title}
                      </p>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — photo mosaic */}
            <div className="grid grid-cols-2 gap-2">
              {/* Large photo top-left */}
              <div
                className="col-span-2 rounded-2xl overflow-hidden relative group"
                style={{ height: "240px" }}
              >
                <img
                  src={
                    "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/imgi_116_DSC_0779.jpg"
                  }
                  alt="FIFA Goal Project Training Facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span
                    className="text-xs font-black uppercase tracking-widest text-white px-3 py-1 rounded-full"
                    style={{ background: "#f75a0b" }}
                  >
                    FIFA Goal Project, Yundum
                  </span>
                </div>
              </div>
              {/* Two smaller below */}
              {[
                "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/imgi_109_DSC_1456.jpg",
                "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/imgi_107_DSC_0915.jpg",
                "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/imgi_111_DSC_1423.jpg",
                "/MEDINA UNITED GALLARY/medinaunitedacademy.com/imgi_23_IMG-20221029-WA0020.jpg",
              ].map((src, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden group"
                  style={{ height: "130px" }}
                >
                  <img
                    src={src}
                    alt={`Facility photo ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mx-auto max-w-7xl px-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        />

        {/* ── VISION ── */}
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              Our Future
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-white leading-tight">
              Our Vision for
              <span className="block" style={{ color: "#0588b1" }}>
                Gambian Football
              </span>
            </h2>
            <p className="mt-4 text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
              We believe every child in The Gambia deserves a chance at
              professional football — regardless of their background. Our vision
              is to become the leading youth development academy in West Africa.
            </p>
          </div>

          {/* Vision pillars — large cards in a 3-col grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {[
              {
                number: "01",
                title: "Own Academy Complex",
                desc: "Develop a dedicated, fully-equipped Medina United Football Academy complex with multiple pitches, changing facilities and a community centre.",
                color: "#f75a0b",
                photo:
                  "/MEDINA UNITED GALLARY/Future Home of MUA _ medinaunitedacademy.com/",
                src: "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/imgi_100_CSC_0786a.jpg",
              },
              {
                number: "02",
                title: "Women's Football Chapter",
                desc: "Launch a fully operational women's football programme under Director Dr. Mariama Jaiteh, giving young Gambian girls the same opportunities as our boys.",
                color: "#0588b1",
                src: "/MEDINA UNITED GALLARY/medinaunitedacademy.com/imgi_23_IMG-20221029-WA0020.jpg",
              },
              {
                number: "03",
                title: "1,000+ Registered Youth",
                desc: "Expand our reach to train over 1,000 youth across all age groups, extending into more communities throughout The Gambia.",
                color: "#f75a0b",
                src: "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/imgi_103_287487757_369589861826039_5363297675177184119_n.jpg",
              },
              {
                number: "04",
                title: "International Youth Exchange",
                desc: "Establish a formal youth exchange programme with partner clubs in Senegal, Spain and England — sending our best talent abroad for development camps.",
                color: "#0588b1",
                src: "/MEDINA UNITED GALLARY/medinaunitedacademy.com/imgi_29_DSC_0782.jpg",
              },
              {
                number: "05",
                title: "Elite Scouting Network",
                desc: "Build a structured scouting pathway that connects MUFA graduates directly to professional trials in Europe and across Africa.",
                color: "#f75a0b",
                src: "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/imgi_112_DSC_1439.jpg",
              },
              {
                number: "06",
                title: "Academic & Life Skills",
                desc: "Integrate school support and life skills training so every MUFA player graduates not just as a better footballer, but as a responsible, educated citizen.",
                color: "#0588b1",
                src: "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/imgi_114_DSC_0787.jpg",
              },
            ].map((v) => (
              <div
                key={v.number}
                className="rounded-2xl overflow-hidden relative group"
                style={{ minHeight: "320px" }}
              >
                {/* Background photo */}
                <img
                  src={v.src}
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-500"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, rgba(10,15,30,0.6) 0%, rgba(10,15,30,0.95) 100%)`,
                  }}
                />
                {/* Top color bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: v.color }}
                />
                {/* Content */}
                <div
                  className="relative z-10 p-6 h-full flex flex-col justify-between"
                  style={{ minHeight: "320px" }}
                >
                  <div>
                    <p
                      className="font-black text-5xl leading-none mb-4"
                      style={{ color: v.color, opacity: 0.3 }}
                    >
                      {v.number}
                    </p>
                    <h3 className="font-black text-white text-lg leading-tight mb-3">
                      {v.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                  <div
                    className="mt-4 h-0.5 rounded-full"
                    style={{ background: v.color, width: "2rem" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Big vision statement */}
          <div
            className="rounded-2xl p-8 md:p-12 text-center"
            style={{
              background: "rgba(247,90,11,0.08)",
              border: "1px solid rgba(247,90,11,0.2)",
            }}
          >
            <p
              className="text-2xl md:text-4xl font-black leading-snug"
              style={{ color: "white" }}
            >
              "Every child who walks through our gates walks out{" "}
              <span style={{ color: "#f75a0b" }}>closer to their dream.</span>"
            </p>
            <p className="text-gray-400 text-sm mt-4">
              — Michael Nicol, Founder & Chairman, Medina United Football
              Academy
            </p>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY STRIP */}
      <section className="bg-gray-900 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white">Youth in Action</h2>
            <p className="text-gray-400 text-sm mt-1">
              Moments from the pitch at Yundum Airport, The Gambia
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {galleryPhotos.map((p, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl group"
                style={{ height: "160px" }}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section
        className="text-white"
        style={{
          background: "#f75a0b",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            100% Free — No Fees Ever
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Is Your Child Ready?
          </h2>
          <p className="text-orange-100 max-w-2xl mx-auto text-base leading-relaxed mb-8">
            Any child aged 6–25 in The Gambia can join Medina United Football
            Academy for free. No registration fees, no monthly costs — just
            world-class coaching, a full kit and a pathway to professional
            football.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/join"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-white transition shadow-lg"
              style={{ background: "#0588b1" }}
            >
              Register Your Child Free
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border-2 border-white/50 px-8 py-3.5 text-sm font-bold text-white hover:bg-orange-600 transition"
            >
              Contact the Academy
            </Link>
          </div>
          <p className="mt-8 text-orange-200 text-sm">
            Call us: <span className="font-bold text-white">+220 389 1423</span>{" "}
            or <span className="font-bold text-white">+220 762 2396</span>
          </p>
        </div>
      </section>
    </>
  );
}
