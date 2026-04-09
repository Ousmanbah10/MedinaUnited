import { Link } from "react-router-dom";

const GL  = "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/";
const ML  = "/MEDINA UNITED GALLARY/medinaunitedacademy.com/";
const PT  = "/MEDINA UNITED GALLARY/PARTNERS _ medinaunitedacademy.com/";
const SP  = "/MEDINA UNITED GALLARY/Sponsors/";

/* ─── Current sponsors ─── */
const sponsors = [
  {
    name: "CMS Insurance",
    photo: SP + "CMS Insurance.jpg",
    category: "Insurance",
  },
  {
    name: "DL Logistics",
    photo: SP + "DL Logistics.jpg",
    category: "Logistics",
  },
  {
    name: "Delta Auto & Shipping",
    photo: SP + "Delta Auto & Shipping.jpg",
    category: "Auto & Shipping",
  },
  {
    name: "FBS Soccer",
    photo: SP + "FBS soccer.jpg",
    category: "Soccer",
  },
  {
    name: "Florida Wireless",
    photo: SP + "FloridaWireless.jpg",
    category: "Telecommunications",
  },
];

/* ─── International connections ─── */
const connections = [
  {
    name: "AS Pikine",
    abbr: "ASP",
    detail: "Senegal 1st Division — Official Partnership",
    photo: PT + "AS PIKIN MAIN PHOTO.jpg",
    gradient: "#f75a0b",
  },
  {
    name: "Girona FC",
    abbr: "GFC",
    detail: "Spain — Sporting Director affiliation",
    photo: GL + "imgi_102_CSC_0751.jpg",
    gradient: "#0588b1",
  },
  {
    name: "Nottingham Forest",
    abbr: "NF",
    detail: "England — Supporter Omar Marong",
    photo: GL + "imgi_104_280270510_394576822678616_342529681069862217_n.jpg",
    gradient: "#f75a0b",
  },
  {
    name: "Akirah FC",
    abbr: "AFC",
    detail: "England — Kit donation & coaching camp",
    photo: GL + "imgi_103_287487757_369589861826039_5363297675177184119_n.jpg",
    gradient: "#0588b1",
  },
  {
    name: "Gambia Football Federation",
    abbr: "GFF",
    detail: "National governing body recognition",
    photo: GL + "imgi_116_DSC_0779.jpg",
    gradient: "#f75a0b",
  },
  {
    name: "Ministry of Youth & Sports",
    abbr: "MYS",
    detail: "Government of The Gambia",
    photo: ML + "imgi_45_275501447_352777133525252_5621748583139200031_n.jpg",
    gradient: "#0588b1",
  },
];

/* ─── Where support goes ─── */
const uses = [
  { label: "Full Kits",       desc: "Jerseys, shorts, socks and boots for every registered player.",                    photo: GL + "imgi_107_DSC_0915.jpg" },
  { label: "Equipment",       desc: "Match balls, training cones, bibs, goal nets and more.",                           photo: GL + "imgi_108_DSC_0302.jpg" },
  { label: "Facility Rental", desc: "Maintaining access to the FIFA Goal Project grounds in Yundum.",                   photo: GL + "imgi_100_CSC_0786a.jpg" },
  { label: "Tournaments",     desc: "Entry fees, referees, and organisation for competitive fixtures.",                  photo: "/throphy-photo.png" },
  { label: "Transportation",  desc: "Getting our youth to away matches and regional competitions.",                     photo: ML + "imgi_26_287799815_369589948492697_9193087671688465878_n.jpg" },
  { label: "Coaching",        desc: "Professional coach salaries and continued development training.",                   photo: GL + "imgi_109_DSC_1456.jpg" },
];

export default function Sponsors() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden py-20 md:py-28" style={{ backgroundImage: "radial-gradient(ellipse at top right, #c2410c 0%, #f75a0b 40%, #9a3412 100%)" }}>
        <div className="mx-auto max-w-7xl px-4">
          <span className="inline-block text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ background: "rgba(0,0,0,0.25)" }}>
            Partner With Us
          </span>
          <h1 className="text-4xl md:text-5xl font-black">
            Sponsors &amp; Partners
          </h1>
          <p className="mt-3 text-white/80 text-lg max-w-2xl">
            Medina United Football Academy is synonymous with quality — strictly
            dedicated to producing players of the highest calibre and grooming
            young people to become responsible citizens.
          </p>
        </div>
      </section>

      {/* ── OUR SPONSORS — highlighted near top ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0588b1]">
              Our Sponsors
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">
              Proud to Be Supported By
            </h2>
            <p className="mt-3 text-gray-500 text-sm max-w-lg mx-auto">
              These organisations believe in the power of sport to transform
              young lives. Their support keeps MUFA free for every child.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-6xl mx-auto">
            {sponsors.map((s) => (
              <div
                key={s.name}
                className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-gray-50 border-b border-gray-100 flex items-center justify-center" style={{ height: "160px" }}>
                  <img
                    src={s.photo}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-black text-gray-900 text-sm leading-tight">{s.name}</p>
                  <p className="text-[#0588b1] text-xs mt-1 font-medium uppercase tracking-wide">{s.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Become a sponsor nudge */}
          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Want to see your company here? Join our growing family of sponsors.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-xl px-7 py-3 text-sm font-black text-white transition shadow"
              style={{ background: "#f75a0b" }}
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTERNATIONAL CONNECTIONS ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0588b1]">
              International Network
            </span>
            <h2 className="mt-2 text-3xl font-black text-gray-900">
              Our Connections
            </h2>
            <p className="mt-3 text-gray-500 text-sm max-w-lg mx-auto">
              Medina United has built partnerships with clubs, federations and
              government bodies across Africa and Europe.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {connections.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl overflow-hidden group relative"
                style={{ height: "220px" }}
              >
                <div className="absolute inset-0" style={{ background: c.gradient }} />
                <img
                  src={c.photo}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-45 transition-opacity duration-500"
                />
                <div className="relative z-10 flex flex-col justify-between h-full p-5">
                  <div
                    className="self-start flex items-center justify-center rounded-xl text-white font-black text-base"
                    style={{ width: "3rem", height: "3rem", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)" }}
                  >
                    {c.abbr.slice(0, 2)}
                  </div>
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

      {/* ── WHAT YOUR SPONSORSHIP WILL PROVIDE ── */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0588b1]">
                Your Impact
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                What Your Sponsorship Will Provide
              </h2>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Medina United Football Academy hires only coaches who have
                themselves played football at a competitive level. All coaches
                go through a training programme where they learn the Academy's
                curriculum and the fundamentals of coaching youth football, and
                are certified with the West Coast Region Football Academies
                Association Grassroots Coaching Certificate.
              </p>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Your sponsorship provides Academy players with{" "}
                <strong>training uniforms, equipment, game jerseys and
                warm-up apparel</strong> so that the Academy and your company
                are well-represented wherever they go. It allows us to recruit,
                train and retain well-qualified coaching staff, and helps send
                players to{" "}
                <strong>tournaments, summer camps and competitive academy
                programmes</strong> around the country and internationally.
              </p>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Your sponsorship also pays for the{" "}
                <strong>rental of the training facility at the FIFA Goal
                Project Training Fields</strong>, and the transportation of
                players to and from the training field.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "450+", label: "Registered Youth", color: "#f75a0b" },
                { value: "100%", label: "Free to Join",     color: "#0588b1" },
                { value: "5",   label: "Squad Teams",       color: "#f75a0b" },
                { value: "6+",  label: "Int'l Partners",    color: "#0588b1" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-6 text-center"
                  style={{ background: s.color + "14", border: `1px solid ${s.color}22` }}
                >
                  <p className="text-4xl font-black" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-gray-600 text-sm mt-1 font-semibold">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHERE YOUR SUPPORT GOES ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0588b1]">
              Fund Allocation
            </span>
            <h2 className="mt-2 text-3xl font-black text-gray-900">
              Where Your Support Goes
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm">
              Every contribution directly funds the development and welfare of
              our registered youth players.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {uses.map((u) => (
              <div
                key={u.label}
                className="rounded-2xl overflow-hidden group relative"
                style={{ height: "260px" }}
              >
                <img
                  src={u.photo}
                  alt={u.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)" }}
                />
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

      {/* ── SPONSORSHIP LEVELS (Marketing & Visibility) ── */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0588b1]">
              Levels of Sponsorship
            </span>
            <h2 className="mt-2 text-3xl font-black text-gray-900">
              Marketing &amp; Visibility For You
            </h2>
            <p className="mt-3 text-gray-500 text-sm max-w-lg mx-auto">
              The following are guidelines — all sponsorships are negotiable.
              Contact us to discuss a package that works for your organisation.
            </p>
          </div>

          {/* Corporate */}
          <div className="mt-10 mb-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-black uppercase tracking-widest text-gray-500 px-3">Corporate Sponsorship</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {/* Platinum */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-yellow-200">
              <div
                className="px-6 py-5"
                style={{ background: "#f75a0b" }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-block bg-white/20 text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      Platinum
                    </span>
                    <p className="text-yellow-100 text-xs mt-2 font-medium">
                      Ongoing / Team Sponsorship
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6">
                <ul className="space-y-3">
                  {[
                    "Recognised as a Main Academy Sponsor",
                    "Company logo on the front of ALL Academy apparel, including all jerseys",
                    "Company logo and recognition as Main Academy Sponsor on the Academy website",
                    "Recognition on all marketing materials — flyers, posters, banners and tents",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-500 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 block text-center rounded-xl px-4 py-2.5 text-sm font-bold text-white transition"
                  style={{ background: "#f75a0b" }}
                >
                  Enquire About Platinum
                </Link>
              </div>
            </div>

            {/* Gold */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-yellow-100">
              <div
                className="px-6 py-5"
                style={{ background: "#f75a0b" }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-block bg-white/20 text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      Gold
                    </span>
                    <p className="text-green-200 text-xs mt-2 font-medium">
                      Team Sponsorship
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6">
                <ul className="space-y-3">
                  {[
                    "Large company logo on the back of Academy pregame jerseys",
                    "Company logo on the sleeve of Academy game jerseys",
                    "Company logo displayed on Academy banner",
                    "Company logo and recognition as Team Sponsor on the Academy website",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-600 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 block text-center rounded-xl px-4 py-2.5 text-sm font-bold text-white transition"
                  style={{ background: "#f75a0b" }}
                >
                  Enquire About Gold
                </Link>
              </div>
            </div>
          </div>

          {/* Individual / Family */}
          <div className="mt-4 mb-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-black uppercase tracking-widest text-gray-500 px-3">Individual / Family Sponsorship</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-sky-100">
              <div
                className="px-6 py-5"
                style={{ background: "#0588b1" }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-block bg-white/20 text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      Sponsor a Child
                    </span>
                    <p className="text-sky-200 text-xs mt-2 font-medium">
                      Individual Player Sponsorship
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6">
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Sponsor a player's development from present to future career",
                    "Funds held in individual player's account managed by the Academy",
                    "Covers daily needs including school fees and other arising needs",
                    "Interact with player through MUFA and follow progress quarterly",
                    "Meeting with player and MUFA staff",
                    "Satisfaction of directly transforming a young person's life",
                  ].map((p) => (
                    <div key={p} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600 shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="mt-6 block text-center rounded-xl px-4 py-2.5 text-sm font-bold text-white transition"
                  style={{ background: "#0588b1" }}
                >
                  Sponsor a Child Today
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-xs mt-6">
            Other forms of sponsorship of your choice are also welcomed.
          </p>
        </div>
      </section>

      {/* ── PAYMENT OPTIONS ── */}
      <section
        className="text-white"
        style={{ background: "#0588b1" }}
      >
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-300">
              How to Pay
            </span>
            <h2 className="mt-2 text-3xl font-black text-white">
              Sponsorship Payment Options
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { method: "Zelle",             detail: "medinaunitedacademy@gmail.com" },
              { method: "Bank of America",   detail: "Account #: 898107224991\nMedina United Academy" },
              { method: "Trust Bank (Gambia)", detail: "Account #: 11224409601\nMedina United Academy" },
            ].map((p) => (
              <div
                key={p.method}
                className="rounded-2xl p-5 text-center"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <p className="font-black text-white text-base mb-1">{p.method}</p>
                <p className="text-sky-200 text-xs leading-relaxed whitespace-pre-line">{p.detail}</p>
              </div>
            ))}
          </div>

          {/* Contacts */}
          <div className="mt-12 border-t border-white/10 pt-10">
            <p className="text-center text-sky-300 text-xs font-bold uppercase tracking-widest mb-6">
              For More Information Contact
            </p>
            <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
              {[
                { name: "Michael Nicol",    role: "Founder & Chairman",  phone: "+1 305 975 6303" },
                { name: "Sanna Jobarteh",   role: "General Manager",     phone: "+220 389 1423" },
                { name: "Sang Mendy",       role: "Technical Director",  phone: "+220 762 2396" },
              ].map((c) => (
                <div
                  key={c.name}
                  className="rounded-xl p-4 text-center"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <p className="font-black text-white text-sm">{c.name}</p>
                  <p className="text-sky-300 text-xs mb-2">{c.role}</p>
                  <a
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                    className="text-orange-400 font-bold text-sm hover:text-orange-300 transition"
                  >
                    {c.phone}
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center mt-4">
              <a
                href="mailto:medinaunitedacademy@gmail.com"
                className="text-sky-300 hover:text-white text-sm font-bold transition"
              >
                medinaunitedacademy@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#f75a0b" }}>
        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <h2 className="text-2xl font-black text-white mb-3">
            Ready to Make a Difference?
          </h2>
          <p className="text-orange-200 text-sm mb-6 max-w-md mx-auto">
            Contact our founder or management team to discuss how your support
            can change the lives of youth in The Gambia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl px-7 py-3 text-sm font-black text-white transition"
              style={{ background: "#0588b1" }}
            >
              Contact Us to Sponsor
            </Link>
            <a
              href="mailto:medinaunitedacademy@gmail.com"
              className="rounded-xl border-2 border-white/50 px-7 py-3 text-sm font-bold text-white transition"
            >
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
