import { useState } from "react";
import { Link } from "react-router-dom";

const GL = "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/";
const ML = "/MEDINA UNITED GALLARY/medinaunitedacademy.com/";

const newsItems = [
  {
    id: 1,
    category: "Governance",
    title: "3rd Annual AGM Held at Academy Complex in Yundum",
    date: "2022",
    photo: GL + "imgi_103_287487757_369589861826039_5363297675177184119_n.jpg",
    body: "The third Annual General Meeting was successfully held at the Medina United Football Academy complex in Yundum, bringing together management, staff, board members and stakeholders to review the year's progress and set goals for the academy's future.",
  },
  {
    id: 2,
    category: "Partnerships",
    title: "Academy President Visits AS Pikine in Senegal",
    date: "2022",
    photo: ML + "imgi_29_DSC_0782.jpg",
    body: "Academy President and Founder Michael Nicol, alongside one of our goalkeepers, made an official visit to AS Pikine — one of Senegal's top 1st Division clubs — formalising a partnership that opens exciting pathways for our talented youth.",
  },
  {
    id: 3,
    category: "Signings",
    title: "Veteran Ayo Jobe Signed as U14 Head Coach",
    date: "2022",
    photo: GL + "imgi_116_DSC_0779.jpg",
    body: "Medina United Football Academy is proud to announce the signing of veteran Gambia national team player and ex-Ports Authority FC star Ayo Jobe on a 2-year contract as head coach of the U14 squad.",
  },
  {
    id: 4,
    category: "Community",
    title: "Footballers' Mothers' Association Launched & Gabriel Latjorr Ndow Centre Unveiled",
    date: "2022",
    photo: ML + "imgi_23_IMG-20221029-WA0020.jpg",
    body: "A landmark day for the academy: the inaugural Medina United Footballers' Mothers' Association was officially launched, and the Gabriel Latjorr Ndow Center for Excellence was unveiled — a major step forward in building our community infrastructure.",
  },
  {
    id: 5,
    category: "Honours",
    title: "GFF President Lamin Kaba Bajo Presents Trophies at MUFA",
    date: "2022",
    photo: "/throphy-photo.png",
    body: "In a proud moment for the academy, Gambia Football Federation President Lamin Kaba Bajo personally visited Medina United to present trophies to our winning teams, acknowledging the academy's growing presence in Gambian football.",
  },
  {
    id: 6,
    category: "Signings",
    title: "Former Gambian International Saihou Njie Appointed U15 Head Coach",
    date: "2022",
    photo: GL + "imgi_109_DSC_1456.jpg",
    body: "The academy announces the appointment of former Gambian international Saihou Njie as head coach of our U15 Champions squad, bringing top-level playing experience to our development pathway.",
  },
  {
    id: 7,
    category: "Donations",
    title: "Gift from Omar Marong of Nottingham Forest",
    date: "2021",
    photo: GL + "imgi_104_280270510_394576822678616_342529681069862217_n.jpg",
    body: "The academy received a generous gift from Omar Marong, Nottingham Forest first-team player and VIP coordinator, demonstrating growing international support for our mission to develop Gambian youth talent.",
  },
  {
    id: 8,
    category: "Events",
    title: "Knight Wadda U9 Tournament Victory Celebration 2021",
    date: "2021",
    photo: GL + "imgi_107_DSC_0915.jpg",
    body: "Our youngest stars celebrated their victory in the Knight Wadda U9 Tournament in style. The event showcased the immense talent developing through our grassroots programme.",
  },
  {
    id: 9,
    category: "Partnerships",
    title: "England-Based Akirah Team Hosts One-Day Football Camp & Donates Kits",
    date: "2021",
    photo: ML + "imgi_28_280273220_394576919345273_5296530875640710582_n.jpg",
    body: "The Akirah team from England organised a one-day football camp at the academy, followed by a generous donation of jerseys and training materials for our registered youth players.",
  },
  {
    id: 10,
    category: "Signings",
    title: "Lamin Owens Signed as U19 Head Coach",
    date: "2021",
    photo: GL + "imgi_114_DSC_0787.jpg",
    body: "Medina United welcomes veteran Gambia national team player Lamin Owens as head coach of the U19 squad, adding another high-profile name to our world-class coaching roster.",
  },
  {
    id: 11,
    category: "Partnerships",
    title: "AS Pikine Conduct Three-Day Training Visit at MUFA",
    date: "2021",
    photo: GL + "imgi_100_CSC_0786a.jpg",
    body: "AS Pikine — Senegal 1st Division runners-up — spent three days at the Medina United complex for working visits and training sessions, strengthening ties between the two academies.",
  },
  {
    id: 12,
    category: "Competitions",
    title: "U23 Squad Champions of Inter Medina Tournament",
    date: "2021",
    photo: GL + "imgi_112_DSC_1439.jpg",
    body: "Our U23 squad claimed the championship at the Inter Medina Tournament, underlining the academy's rapid rise as a competitive force in Gambian football at every age level.",
  },
  {
    id: 13,
    category: "Events",
    title: "Above-40s Medina United Veteran Cup 2021 Final & Awards",
    date: "2021",
    photo: ML + "imgi_26_287799815_369589948492697_9193087671688465878_n.jpg",
    body: "The Above-40 Medina United Veteran Cup 2021 concluded with a thrilling final and awards ceremony, celebrating the spirit of football and community across all generations.",
  },
  {
    id: 14,
    category: "Appointments",
    title: "Max Sanz Casasus (Barcelona / Girona FC) Appointed Sporting Director",
    date: "2021",
    photo: GL + "imgi_105_293883665_438201624982802_3864059304989199188_n.jpg",
    body: "In a major coup for the academy, Max Sanz Casasus — based in Barcelona, Spain, and affiliated with Girona FC — has been appointed as Sporting Director of Medina United Football Academy.",
  },
  {
    id: 15,
    category: "Staff",
    title: "Jawara Ngum Joins as Head Physiotherapist",
    date: "2021",
    photo: GL + "imgi_115_DSC_0768.jpg",
    body: "Jawara Ngum, an experienced physiotherapist with a track record at Gamtel, Wallidan, Red Scorpions, Real de Banjul and Superstars Academy, joins the academy as Head Physio.",
  },
  {
    id: 16,
    category: "Events",
    title: "Minister of Youth & Sports Bakary Badgie Visits Academy",
    date: "2021",
    photo: ML + "imgi_45_275501447_352777133525252_5621748583139200031_n.jpg",
    body: "Honourable Bakary Badgie, Minister of Youth and Sports, paid an official visit to Medina United Football Academy, recognising our contribution to youth development and sport in The Gambia.",
  },
];

const categories = ["All", "Signings", "Partnerships", "Appointments", "Competitions", "Community", "Events", "Donations", "Governance", "Honours", "Staff"];

export default function News() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? newsItems : newsItems.filter((n) => n.category === active);

  return (
    <>
      {/* Hero */}
      <section className="bg-orange-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">Latest Updates</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-black">Academy News</h1>
          <p className="mt-3 text-orange-200 text-lg max-w-2xl">
            Stay up to date with signings, events, partnerships and achievements at Medina United Football Academy.
          </p>
        </div>
      </section>

      {/* Filter bar — redesigned */}
      <section className="bg-white border-b border-gray-100 sticky top-[92px] z-40 shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex gap-0 overflow-x-auto scrollbar-none" style={{ scrollbarWidth: "none" }}>
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    padding: "1rem 1.1rem",
                    fontSize: "0.72rem",
                    fontWeight: isActive ? 900 : 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: isActive ? "#f75a0b" : "#6b7280",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "color 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cat}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "0.5rem",
                        right: "0.5rem",
                        height: "2px",
                        borderRadius: "2px 2px 0 0",
                        background: "#f75a0b",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
            {filtered.length} {filtered.length !== 1 ? "stories" : "story"}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
              >
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ height: "190px" }}>
                  <img
                    src={item.photo}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Category + year row at bottom of photo */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 pb-2.5">
                    <span
                      className="text-white text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ background: "#0588b1" }}
                    >
                      {item.category}
                    </span>
                    <span className="text-white/70 text-xs font-semibold">{item.date}</span>
                  </div>
                </div>

                {/* Text */}
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="font-bold text-gray-900 text-sm leading-snug mb-2 flex-1">{item.title}</h2>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">{item.body}</p>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-4xl mb-3">📰</p>
              <p className="font-semibold">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="font-black text-xl">Want to be part of the story?</h3>
            <p className="text-orange-200 text-sm mt-1">Join the academy and help write the next chapter.</p>
          </div>
          <Link
            to="/join"
            className="shrink-0 rounded-xl px-7 py-3 text-sm font-black text-white transition"
            style={{ background: "#0588b1" }}
          >
            Join the Academy
          </Link>
        </div>
      </section>
    </>
  );
}
