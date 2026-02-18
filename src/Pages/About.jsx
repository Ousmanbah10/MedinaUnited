import { Link } from "react-router-dom";

const MT = "/MEDINA UNITED GALLARY/Management Team _ medinaunitedacademy.com/";
const GL = "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/";

const aims = [
  "Create a conducive environment for youth development",
  "Provide equal opportunities regardless of background, faith or ethnicity",
  "Train, guide, and develop responsible citizens through sport",
  "Recruit talented players for national and international levels",
  "Build a state-of-the-art training complex",
  "Open a school of excellence for players",
  "Secure partners for socio-economic growth of the community",
];

const management = [
  { role: "Founder & Chairman",          name: "Michael Nicol",       contact: "+1 305 975 6303", photo: MT + "imgi_10_PHOTO-2020-08-30-08-25-47.jpg" },
  { role: "Director of Women's Chapter", name: "Dr. Mariama Jaiteh",  contact: "",                photo: MT + "imgi_20_Jaiteh.png" },
  { role: "General Manager",             name: "Sanna Jobarteh",      contact: "+220 389 1423",   photo: MT + "imgi_11_f7d7ceaf-94c8-4d60-a440-05cd36de86b8.jpg" },
  { role: "Technical Director",          name: "Sang Mendy",          contact: "+220 762 2396",   photo: MT + "imgi_12_029108cf-32f0-44a3-ad69-816c8fbdff34.jpg" },
  { role: "Office Manager",              name: "Musa Manneh",         contact: "",                photo: MT + "imgi_19_IMG-20210204-WA0051.jpg" },
  { role: "Secretary General",           name: "Basiru Njie",         contact: "",                photo: MT + "imgi_21_PHOTO-2020-08-30-08-16-59.jpg" },
  { role: "Facilities Manager",          name: "Modou Dibba",         contact: "",                photo: MT + "imgi_22_a23b2327-4508-4a98-a4e7-b76f3b7140cf.jpg" },
  { role: "Footballers' Mothers' Pres.", name: "Danise Mendy",        contact: "",                photo: MT + "imgi_23_178153d8-c330-46b6-979e-55e373883548.jpg" },
  { role: "Sporting Director",           name: "Max Sanz Casasus",    contact: "Barcelona, Spain",photo: MT + "imgi_24_6429988e-0e44-42f2-a74b-738ddd370718.jpg" },
];

const technicalTeam = [
  { role: "Technical Director",    name: "Sang Mendy",    photo: GL + "imgi_100_CSC_0786a.jpg" },
  { role: "Head Physiotherapist",  name: "Jawara Ngum",   photo: GL + "imgi_101_DSC_0551.jpg" },
  { role: "Physical Therapist",    name: "Musa Sanyang",  photo: GL + "imgi_102_CSC_0751.jpg" },
  { role: "U10 Coach",             name: "Lamin Manjang", photo: GL + "imgi_106_DSC_0732.jpg" },
  { role: "U12 Coach",             name: "Lamin Camara",  photo: GL + "imgi_107_DSC_0915.jpg" },
  { role: "U14 Coach",             name: "Omar Bayo",     photo: GL + "imgi_108_DSC_0302.jpg" },
  { role: "U14 Coach",             name: "Sarjo Saidykhan",photo: GL + "imgi_109_DSC_1456.jpg" },
  { role: "U14 Coach",             name: "Ayo Jobe",      photo: GL + "imgi_110_DSC_1461.jpg" },
  { role: "U15 Coach",             name: "Musa Manneh",   photo: GL + "imgi_111_DSC_1423.jpg" },
  { role: "U17 Coach",             name: "Saihou Njie",   photo: GL + "imgi_112_DSC_1439.jpg" },
  { role: "U19 Coach",             name: "Lamin Owens",   photo: GL + "imgi_114_DSC_0787.jpg" },
  { role: "2nd Division Coach",    name: "Pierre Gomez",  photo: GL + "imgi_116_DSC_0779.jpg" },
];

const board = [
  "Tijan Masanneh Ceesay (Board CEO)", "Dr. Mariama Jaiteh", "Munga Eketebi",
  "Barry Kaplan", "Sanusi Pa Ceesay", "Aziz Corr", "Oriol Dorsainvil",
  "Osaro Aloba", "John Joof", "Momodou Wadda", "Michael Nicol", "Alieu Jack", "Lawrence Prom",
];

const advisors = [
  "Kara Ceesay", "Momodou Njie", "Pa Ousman Cham", "Pa Samba Jow",
  "Abdoulie Mboob", "Alhaji Baker", "Ebrima Kujabi", "Alhaji Jallow",
  "Jumbo Jallow", "Francis Ndow", "Kamal Ndow", "Telmo Dantes",
];

const missionPhotos = [
  GL + "imgi_103_287487757_369589861826039_5363297675177184119_n.jpg",
  GL + "imgi_104_280270510_394576822678616_342529681069862217_n.jpg",
  GL + "imgi_105_293883665_438201624982802_3864059304989199188_n.jpg",
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-orange-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">Medina United FA</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-black">About Us</h1>
          <p className="mt-3 text-orange-200 text-lg max-w-2xl">
            Learn about our mission, vision, staff and the people who make Medina United Football Academy possible.
          </p>
        </div>
      </section>

      {/* MISSION + photos */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid gap-12 md:grid-cols-2 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Who We Are</span>
            <h2 className="mt-2 text-3xl font-black text-gray-900">Mission Statement</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To create an environment that helps and accommodates children of different orientation
              ranging from social status, faith and/or ethnicity, as well as facilitate the development
              of young people through sports, education and other recreational activities.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Medina United Football Academy (MUFA) is one of Gambia's finest professionally organised
              training academies for competitive youth football. Located in Yundum Airport, West Coast
              Region, The Gambia. We currently serve over 450 registered youths aged 6–25 — completely free of charge.
            </p>

            {/* 3-photo strip */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              {missionPhotos.map((src, i) => (
                <img key={i} src={src} alt="MUFA Academy" className="rounded-xl object-cover w-full h-28" />
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Our Vision</span>
            <h2 className="mt-2 text-3xl font-black text-gray-900">Vision</h2>
            <ul className="mt-4 space-y-3">
              {[
                "Catch children young to prevent waywardness and channel energy positively through sport",
                "Use football as a tool for social development and community upliftment",
                "Build a strong team of world-class administrators and coaches",
                "Become a premier football development hub in West Africa",
              ].map((v) => (
                <li key={v} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                  {v}
                </li>
              ))}
            </ul>

            {/* Large action photo */}
            <img
              src={GL + "imgi_115_DSC_0768.jpg"}
              alt="Academy action"
              className="mt-6 rounded-2xl object-cover w-full h-52 shadow-md"
            />
          </div>
        </div>
      </section>

      {/* AIMS */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Our Goals</span>
            <h2 className="mt-2 text-3xl font-black text-gray-900">Aims & Objectives</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {aims.map((aim, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4">
                <span className="h-8 w-8 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">{aim}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANAGEMENT — photo cards */}
      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Leadership</span>
            <h2 className="mt-2 text-3xl font-black text-gray-900">Administration & Management</h2>
            <p className="mt-2 text-gray-500 text-sm">Photos are placeholders — swap them as needed.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {management.map((m) => (
              <div key={m.name} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-52 object-cover object-top"
                />
                <div className="p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-1">{m.role}</p>
                  <p className="font-bold text-gray-900">{m.name}</p>
                  {m.contact && <p className="text-sm text-gray-500 mt-1">{m.contact}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL TEAM — photo cards */}
      <section className="bg-orange-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-10">
            <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">Coaching Staff</span>
            <h2 className="mt-2 text-3xl font-black">Technical Team</h2>
            <p className="mt-2 text-orange-200 max-w-xl mx-auto text-sm">
              Former Gambian internationals and experienced coaches leading our age-group squads.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {technicalTeam.map((t) => (
              <div key={`${t.role}-${t.name}`} className="bg-orange-800 rounded-xl overflow-hidden border border-orange-600">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-full h-40 object-cover object-top"
                />
                <div className="p-3">
                  <p className="text-sky-300 text-xs font-bold uppercase tracking-wide mb-0.5">{t.role}</p>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOARD & ADVISORS */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16 grid gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Governance</span>
            <h2 className="mt-2 text-2xl font-black text-gray-900 mb-6">Board of Directors</h2>
            <ul className="space-y-2">
              {board.map((name) => (
                <li key={name} className="flex items-center gap-3 text-gray-700 text-sm py-2 border-b border-gray-100 last:border-0">
                  <span className="h-2 w-2 rounded-full bg-orange-600 shrink-0" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Guidance</span>
            <h2 className="mt-2 text-2xl font-black text-gray-900 mb-6">Advisors & Consultants</h2>
            <ul className="space-y-2">
              {advisors.map((name) => (
                <li key={name} className="flex items-center gap-3 text-gray-700 text-sm py-2 border-b border-gray-100 last:border-0">
                  <span className="h-2 w-2 rounded-full bg-sky-600 shrink-0" />
                  {name}
                </li>
              ))}
            </ul>
            {/* Photo beside advisors */}
            <img
              src={GL + "imgi_118_DSC_0743.jpg"}
              alt="Academy"
              className="mt-6 rounded-2xl object-cover w-full h-48 shadow-md"
            />
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="bg-sky-700">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-white font-black text-xl">Ready to Join the Academy?</h3>
            <p className="text-sky-200 text-sm mt-1">Registration is completely free for all youth aged 6–25.</p>
          </div>
          <Link
            to="/join"
            className="shrink-0 rounded-xl bg-orange-600 px-8 py-3 text-sm font-black text-white hover:bg-orange-500 transition shadow"
          >
            Register Now
          </Link>
        </div>
      </section>
    </>
  );
}
