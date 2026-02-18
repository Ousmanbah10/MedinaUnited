import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const heroSlides = [
  { src: "/throphy-photo.png", alt: "MUFA Trophy Presentation" },
  {
    src: "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/imgi_100_CSC_0786a.jpg",
    alt: "Academy Training Session",
  },
  {
    src: "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/imgi_107_DSC_0915.jpg",
    alt: "MUFA Players",
  },
  {
    src: "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/imgi_109_DSC_1456.jpg",
    alt: "Academy Match Day",
  },
  {
    src: "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/imgi_116_DSC_0779.jpg",
    alt: "Training at Yundum",
  },
  {
    src: "/MEDINA UNITED GALLARY/medinaunitedacademy.com/imgi_29_DSC_0782.jpg",
    alt: "MUFA Squad",
  },
  {
    src: "/MEDINA UNITED GALLARY/medinaunitedacademy.com/imgi_23_IMG-20221029-WA0020.jpg",
    alt: "Academy Event",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
        setFading(false);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  function goTo(index) {
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 300);
  }

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
      {/* Image */}
      <img
        key={current}
        src={heroSlides[current].src}
        alt={heroSlides[current].alt}
        className="w-full h-full object-cover rounded-2xl"
        style={{
          opacity: fading ? 0 : 1,
          transition: "opacity 0.4s ease-in-out",
          maxHeight: "560px",
          minHeight: "400px",
        }}
      />

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="rounded-full transition-all"
            style={{
              width: i === current ? "20px" : "8px",
              height: "8px",
              backgroundColor:
                i === current ? "#f75a0b" : "rgba(255,255,255,0.6)",
            }}
          />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() =>
          goTo((current - 1 + heroSlides.length) % heroSlides.length)
        }
        className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition"
        aria-label="Previous"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={() => goTo((current + 1) % heroSlides.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition"
        aria-label="Next"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

const stats = [
  { value: "450+", label: "Registered Youth" },
  { value: "4", label: "Academy Teams" },
  { value: "100%", label: "Free Training" },
  { value: "6–25", label: "Age Range" },
];

const GL = "/MEDINA UNITED GALLARY/Gallery _ medinaunitedacademy.com/";
const ML = "/MEDINA UNITED GALLARY/medinaunitedacademy.com/";

const news = [
  {
    id: 1,
    category: "Events",
    title: "3rd Annual AGM Held at Academy Complex in Yundum",
    excerpt:
      "The third Annual General Meeting was successfully held at the academy's complex, bringing together management, staff, and stakeholders.",
    photo: GL + "imgi_103_287487757_369589861826039_5363297675177184119_n.jpg",
  },
  {
    id: 2,
    category: "Partnerships",
    title: "Partnership with AS Pikine (Senegal) Established",
    excerpt:
      "Academy President Michael Nicol and our goalkeeper visited AS Pikine in Senegal, formalising a key international partnership for our youth.",
    photo: ML + "imgi_29_DSC_0782.jpg",
  },
  {
    id: 3,
    category: "Signings",
    title: "Veteran Gambia NT Player Ayo Jobe Signed as U14 Coach",
    excerpt:
      "Medina United signs experienced Gambia national team and ex-Ports Authority FC star Ayo Jobe on a 2-year contract as U14 head coach.",
    photo: GL + "imgi_116_DSC_0779.jpg",
  },
  {
    id: 4,
    category: "Community",
    title: "Footballers' Mothers' Association Launched",
    excerpt:
      "The Medina United Footballers' Mothers' Association was officially launched, alongside the unveiling of the Gabriel Latjorr Ndow Center for Excellence.",
    photo: ML + "imgi_23_IMG-20221029-WA0020.jpg",
  },
  {
    id: 5,
    category: "Honours",
    title: "GFF President Lamin Kaba Bajo Presents Trophies at MUFA",
    excerpt:
      "Gambia Football Federation President Lamin Kaba Bajo personally visited Medina United to present trophies to our winning teams.",
    photo: "/throphy-photo.png",
  },
  {
    id: 6,
    category: "Appointments",
    title: "Max Sanz Casasus (Barcelona) Named Sporting Director",
    excerpt:
      "The academy appoints Max Sanz Casasus from Barcelona, Spain — also affiliated with Girona FC — as the new Sporting Director.",
    photo: GL + "imgi_100_CSC_0786a.jpg",
  },
];

/* ── Players carousel ── */

const players = [
  {
    firstName: "Lamin",
    lastName: "JALLOW",
    position: "Goalkeeper",
    number: "1",
    photo: GL + "imgi_101_DSC_0551.jpg",
  },
  {
    firstName: "Ebrima",
    lastName: "CEESAY",
    position: "Defender",
    number: "4",
    photo: GL + "imgi_102_CSC_0751.jpg",
  },
  {
    firstName: "Ousman",
    lastName: "TOURAY",
    position: "Defender",
    number: "5",
    photo: GL + "imgi_106_DSC_0732.jpg",
  },
  {
    firstName: "Modou",
    lastName: "SANNEH",
    position: "Midfielder",
    number: "8",
    photo: GL + "imgi_108_DSC_0302.jpg",
  },
  {
    firstName: "Suleyman",
    lastName: "NJIE",
    position: "Midfielder",
    number: "10",
    photo: GL + "imgi_109_DSC_1456.jpg",
  },
  {
    firstName: "Amadou",
    lastName: "FATTY",
    position: "Forward",
    number: "11",
    photo: GL + "imgi_110_DSC_1461.jpg",
  },
  {
    firstName: "Bakary",
    lastName: "CAMARA",
    position: "Forward",
    number: "7",
    photo: GL + "imgi_111_DSC_1423.jpg",
  },
  {
    firstName: "Alieu",
    lastName: "BALDEH",
    position: "Defender",
    number: "3",
    photo: GL + "imgi_112_DSC_1439.jpg",
  },
  {
    firstName: "Momodou",
    lastName: "DARBOE",
    position: "Goalkeeper",
    number: "16",
    photo: GL + "imgi_113_DSC_1467.jpg",
  },
  {
    firstName: "Omar",
    lastName: "BOJANG",
    position: "Midfielder",
    number: "6",
    photo: GL + "imgi_114_DSC_0787.jpg",
  },
];

const SHOW = 3;

function PlayerCard({ player }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        height: "540px",
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: "1rem",
      }}
    >
      {/* Card bg gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(145deg, #7b0f0f 0%, #0a1850 100%)",
        }}
      />

      {/* Photo */}
      <img
        src={player.photo}
        alt={`${player.firstName} ${player.lastName}`}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top center",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.6s ease",
        }}
      />

      {/* Left reddish glow — like Barca */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(140,15,15,0.45) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "22%",
          background:
            "linear-gradient(to top, rgba(255,120,0,0.97) 0%, rgba(255,120,0,0.65) 45%, transparent 100%)",

          pointerEvents: "none",
        }}
      />

      {/* Jersey number watermark */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "9rem",
          fontWeight: 900,
          fontStyle: "italic",
          color: "rgba(210,175,55,0.2)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.05em",
        }}
      >
        {player.number}
      </div>

      {/* Name & position */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.25rem 1.5rem 1.75rem",
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "0.95rem",
            margin: "0 0 0.1rem",
            fontWeight: 400,
            letterSpacing: "0.03em",
          }}
        >
          {player.firstName}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "2.1rem",
            fontWeight: 900,
            margin: 0,
            lineHeight: 1,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
          }}
        >
          {player.lastName}
        </p>
        <div
          style={{
            width: "1.75rem",
            height: "2px",
            background: "#f75a0b",
            margin: "0.55rem 0",
          }}
        />
        <p
          style={{
            color: "rgba(255,255,255,0.52)",
            fontSize: "0.63rem",
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            fontWeight: 700,
          }}
        >
          {player.position}
        </p>
      </div>
    </div>
  );
}

function PlayersSection() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const canPrev = index > 0;
  const canNext = index < players.length - SHOW;

  // Fade-in on scroll into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0588b1",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {/* Dot-grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.065) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Header row */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 2rem 1rem",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.65rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              margin: "0 0 0.25rem",
            }}
          >
            Men's Team
          </p>
          <div
            style={{
              width: "2rem",
              height: "2px",
              background: "#f75a0b",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
          }}
        >
          {[
            {
              label: "‹",
              action: () => setIndex((i) => i - 1),
              enabled: canPrev,
            },
            {
              label: "›",
              action: () => setIndex((i) => i + 1),
              enabled: canNext,
            },
          ].map(({ label, action, enabled }) => (
            <button
              key={label}
              onClick={action}
              disabled={!enabled}
              aria-label={label === "‹" ? "Previous" : "Next"}
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                border: `1px solid ${
                  enabled ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.12)"
                }`,
                background: enabled ? "rgba(255,255,255,0.08)" : "transparent",
                color: enabled ? "white" : "rgba(255,255,255,0.22)",
                cursor: enabled ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
                lineHeight: 1,
                transition: "all 0.2s",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Sliding cards */}
      <div style={{ overflow: "hidden", position: "relative", zIndex: 1, padding: "0 1rem" }}>
        <div
          style={{
            display: "flex",
            transform: `translateX(calc(-${index} * (100% / ${SHOW})))`,
            transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}
        >
          {players.map((player, i) => (
            <div
              key={i}
              style={{
                flex: `0 0 calc(100% / ${SHOW})`,
                padding: "0 0.4rem",
              }}
            >
              <PlayerCard player={player} />
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators + See More */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "1rem 2rem 0",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
          {Array.from({ length: players.length - SHOW + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to set ${i + 1}`}
              style={{
                width: i === index ? "1.5rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "9999px",
                padding: 0,
                border: "none",
                cursor: "pointer",
                background: i === index ? "#f75a0b" : "rgba(255,255,255,0.28)",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* See More divider */}
      <div style={{ position: "relative", zIndex: 1, padding: "0 2rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.15)" }} />
          <Link
            to="/teams"
            style={{
              background: "#f75a0b",
              color: "white",
              fontSize: "0.7rem",
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.6rem 1.75rem",
              borderRadius: "9999px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s",
            }}
          >
            Men's Team — See More
          </Link>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.15)" }} />
        </div>
      </div>
    </section>
  );
}

/* ── Fixtures & Results ── */
const fixtures = [
  {
    id: 1,
    type: "result",
    result: "W",
    competition: "GFF Regional League",
    matchday: "Round 12",
    team1: { name: "MUFA U23", short: "MU" },
    team2: { name: "Yundum Athletic", short: "YA" },
    score: "3–1",
    date: "Sat, 15 Feb 2026",
    time: "3:30 PM",
    venue: "FIFA Goal Project, Yundum",
  },
  {
    id: 2,
    type: "result",
    result: "D",
    competition: "GFF Academy League",
    matchday: "Round 7",
    team1: { name: "Brikama FC", short: "BF" },
    team2: { name: "MUFA U15", short: "MU" },
    score: "1–1",
    date: "Sun, 9 Feb 2026",
    time: "10:00 AM",
    venue: "Brikama Mini Stadium",
  },
  {
    id: 3,
    type: "upcoming",
    competition: "GFF Youth Cup",
    matchday: "Quarter-Final",
    team1: { name: "MUFA U15", short: "MU" },
    team2: { name: "Kombo Youth FC", short: "KY" },
    date: "Sat, 22 Feb 2026",
    time: "4:00 PM",
    venue: "Independence Stadium, Bakau",
  },
  {
    id: 4,
    type: "upcoming",
    competition: "GFF Regional League",
    matchday: "Round 13",
    team1: { name: "MUFA U23", short: "MU" },
    team2: { name: "Lamin FC", short: "LF" },
    date: "Sat, 1 Mar 2026",
    time: "3:30 PM",
    venue: "FIFA Goal Project, Yundum",
  },
  {
    id: 5,
    type: "upcoming",
    competition: "GFF Academy League",
    matchday: "Round 8",
    team1: { name: "Brikama FC", short: "BF" },
    team2: { name: "MUFA U12", short: "MU" },
    date: "Sun, 8 Mar 2026",
    time: "10:00 AM",
    venue: "Brikama Mini Stadium",
  },
];

const resultMeta = {
  W: { bg: "#15803d", label: "WIN" },
  D: { bg: "#b45309", label: "DRAW" },
  L: { bg: "#dc2626", label: "LOSS" },
};

function FixtureCard({ fixture }) {
  const isResult = fixture.type === "result";
  const rm = isResult ? resultMeta[fixture.result] : null;
  return (
    <div
      style={{
        flex: "0 0 300px",
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        background: "white",
        border: "1px solid rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Coloured top */}
      <div
        style={{
          background: "linear-gradient(135deg, #035672 0%, #0588b1 100%)",
          padding: "1.25rem 1rem 1.5rem",
          position: "relative",
          minHeight: "148px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Badge */}
        <div
          style={{
            position: "absolute",
            top: "0.65rem",
            right: "0.65rem",
            background: isResult ? rm.bg : "#f75a0b",
            color: "white",
            fontSize: "0.58rem",
            fontWeight: 900,
            letterSpacing: "0.1em",
            padding: "0.2rem 0.55rem",
            borderRadius: "9999px",
            textTransform: "uppercase",
          }}
        >
          {isResult ? rm.label : "UPCOMING"}
        </div>

        {/* Matchup */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            gap: "0.5rem",
          }}
        >
          {[fixture.team1, fixture.team2]
            .map((team, ti) => (
              <div key={ti} style={{ textAlign: "center", flex: 1 }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    margin: "0 auto 0.4rem",
                    background: ti === 0 ? "#f75a0b" : "rgba(255,255,255,0.12)",
                    border:
                      ti === 1 ? "2px solid rgba(255,255,255,0.25)" : "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "0.7rem",
                    fontWeight: 900,
                    letterSpacing: "0.05em",
                  }}
                >
                  {team.short}
                </div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.82)",
                    fontSize: "0.6rem",
                    margin: 0,
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  {team.name}
                </p>
              </div>
            ))
            .reduce(
              (acc, el, i) => [
                ...acc,
                el,
                i === 0 && (
                  <div key="mid" style={{ textAlign: "center", flexShrink: 0 }}>
                    {isResult ? (
                      <p
                        style={{
                          color: "white",
                          fontSize: "1.6rem",
                          fontWeight: 900,
                          margin: 0,
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {fixture.score}
                      </p>
                    ) : (
                      <p
                        style={{
                          color: "rgba(255,255,255,0.35)",
                          fontSize: "1rem",
                          fontWeight: 900,
                          margin: 0,
                        }}
                      >
                        VS
                      </p>
                    )}
                  </div>
                ),
              ],
              []
            )}
        </div>
      </div>

      {/* White bottom */}
      <div
        style={{
          padding: "1rem 1.1rem 1.1rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            color: "#6b7280",
            fontSize: "0.6rem",
            margin: "0 0 0.2rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 700,
          }}
        >
          {fixture.competition}
        </p>
        <p
          style={{
            color: "#111827",
            fontSize: "1rem",
            fontWeight: 900,
            margin: "0 0 0.75rem",
            lineHeight: 1.2,
          }}
        >
          {fixture.matchday}
        </p>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "0.35rem",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span style={{ color: "#4b5563", fontSize: "0.72rem" }}>
              {fixture.date}
              {fixture.time ? ` · ${fixture.time}` : ""}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.45rem",
            }}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginTop: "2px", flexShrink: 0 }}
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span
              style={{
                color: "#4b5563",
                fontSize: "0.72rem",
                lineHeight: 1.35,
              }}
            >
              {fixture.venue}
            </span>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #f3f4f6",
            marginTop: "0.75rem",
            paddingTop: "0.65rem",
          }}
        >
          <Link
            to="/contact"
            style={{
              color: "#f75a0b",
              fontSize: "0.72rem",
              fontWeight: 700,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            <span style={{ fontSize: "1rem", lineHeight: 1 }}>⋮</span> More
          </Link>
        </div>
      </div>
    </div>
  );
}

function FixturesSection() {
  const scrollRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function slide(dir) {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 316, behavior: "smooth" });
  }

  function onScroll() {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      style={{
        background: "#fafafa",
        borderTop: "1px solid #f3f4f6",
        borderBottom: "1px solid #f3f4f6",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "3rem 2rem 2.5rem",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "1.75rem",
          }}
        >
          <div>
            <h2
              style={{
                color: "#111827",
                fontSize: "2rem",
                fontWeight: 900,
                margin: "0 0 0.4rem",
              }}
            >
              Fixtures & Results
            </h2>
            <div style={{ display: "flex", gap: "1.25rem" }}>
              <Link
                to="/teams"
                style={{
                  color: "#f75a0b",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  textDecoration: "none",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                All Teams
              </Link>
              <Link
                to="/contact"
                style={{
                  color: "#f75a0b",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  textDecoration: "none",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Subscribe
              </Link>
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.4rem" }}>
            {[
              { dir: -1, disabled: atStart, label: "‹" },
              { dir: 1, disabled: atEnd, label: "›" },
            ].map(({ dir, disabled, label }) => (
              <button
                key={label}
                onClick={() => slide(dir)}
                disabled={disabled}
                aria-label={dir === -1 ? "Previous" : "Next"}
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "50%",
                  border: "1px solid",
                  borderColor: disabled ? "#e5e7eb" : "#d1d5db",
                  background: disabled ? "#f9fafb" : "white",
                  color: disabled ? "#d1d5db" : "#374151",
                  cursor: disabled ? "default" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  lineHeight: 1,
                  transition: "all 0.2s",
                  boxShadow: disabled ? "none" : "0 1px 4px rgba(0,0,0,0.08)",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "1rem",
            overflowX: "auto",
            scrollbarWidth: "none",
            paddingBottom: "0.5rem",
          }}
        >
          <style>{`.fixtures-scroll::-webkit-scrollbar{display:none}`}</style>
          {fixtures.map((f) => (
            <FixtureCard key={f.id} fixture={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-4xl font-black text-sky-300">{value}</p>
      <p className="text-orange-100 text-sm mt-1 font-medium">{label}</p>
    </div>
  );
}

function NewsCard({ item }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col group">
      {/* Photo */}
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        <img
          src={item.photo}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span
          className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-widest text-white px-2.5 py-1 rounded-full"
          style={{ background: "#0588b1" }}
        >
          {item.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">
          {item.excerpt}
        </p>
        <Link
          to="/news"
          className="mt-4 text-sm font-semibold hover:opacity-80 transition flex items-center gap-1"
          style={{ color: "#f75a0b" }}
        >
          Read more &rarr;
        </Link>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative bg-orange-700 text-white overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top right, #c2410c 0%, #f75a0b 40%, #9a3412 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-500 opacity-20 translate-x-32 -translate-y-16 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-sky-600 opacity-10 -translate-x-16 translate-y-12 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
          {/* LEFT — text */}
          <div>
            <span className="inline-block bg-sky-700 text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Free Youth Football Training — The Gambia
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
              ROAD TO
              <span className="block text-sky-300">SUCCESS</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-orange-200 uppercase tracking-wide">
              Passion &bull; Hard Work &bull; Discipline
            </p>
            <p className="mt-5 text-base md:text-lg text-orange-100 max-w-xl leading-relaxed">
              Medina United Football Academy provides free professional football
              training to youth aged 6–25 in Yundum, The Gambia. Jerseys, boots,
              equipment and coaching — all at no cost.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/join"
                className="rounded-xl bg-sky-700 px-7 py-3 text-sm font-black text-white hover:bg-sky-600 transition shadow-lg"
              >
                Join the Academy — It's Free
              </Link>
              <Link
                to="/about"
                className="rounded-xl border-2 border-orange-300 px-7 py-3 text-sm font-bold text-orange-100 hover:bg-orange-600 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* RIGHT — auto-sliding photo carousel */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-xl" style={{ height: "660px" }}>
              <HeroSlider />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-orange-900">
        <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
              About MUFA
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              Gambia's Premier Free Youth Football Academy
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Medina United Football Academy (MUFA) is one of Gambia's finest
              professionally organised training academies for competitive youth
              football. Located in Yundum Airport, West Coast Region, The
              Gambia, our curriculum develops fundamental technical skills and
              tactical awareness.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              We currently have over 450 registered youth aged 6–25, and the
              academy is completely open and free to all within that age range.
              Players receive jerseys, boots, equipment and full coaching at no
              cost.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="rounded-xl bg-orange-600 px-6 py-3 text-sm font-bold text-white hover:bg-orange-700 transition"
              >
                Our Story
              </Link>
              <Link
                to="/teams"
                className="rounded-xl border-2 border-orange-600 px-6 py-3 text-sm font-bold text-orange-600 hover:bg-orange-50 transition"
              >
                View Teams
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "⚽",
                title: "Free Jerseys & Boots",
                desc: "Every registered player receives full kit at no charge.",
              },
              {
                icon: "🏆",
                title: "Competitive Teams",
                desc: "U9, U12, U15, and U23 squads competing at national level.",
              },
              {
                icon: "👨‍🏫",
                title: "Expert Coaches",
                desc: "Former Gambian internationals and experienced coaches.",
              },
              {
                icon: "🌍",
                title: "International Links",
                desc: "Partnerships with clubs in Senegal, Spain and beyond.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-gray-50 rounded-2xl p-5 border border-gray-100"
              >
                <p className="text-2xl mb-2">{f.icon}</p>
                <h4 className="font-bold text-gray-900 text-sm">{f.title}</h4>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIXTURES & RESULTS */}
      <FixturesSection />

      {/* PLAYERS CAROUSEL */}
      <PlayersSection />

      {/* LATEST NEWS */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-700">
                Latest Updates
              </span>
              <h2 className="mt-1 text-3xl font-black text-gray-900">
                Academy News
              </h2>
            </div>
            <Link
              to="/news"
              className="text-sm font-bold text-orange-600 hover:text-orange-800 transition"
            >
              All News &rarr;
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* BECOME A SPONSOR CTA */}
      <section
        className="bg-sky-800 text-white"
        style={{
          backgroundImage: "linear-gradient(135deg, #035672 0%, #0588b1 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <span className="inline-block bg-orange-600 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Partner With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Become a Sponsor
          </h2>
          <p className="text-sky-200 max-w-2xl mx-auto text-base leading-relaxed mb-8">
            Help us develop the next generation of Gambian football talent. Your
            support funds free jerseys, boots, coaching and tournament entry for
            450+ registered youth — completely free of charge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/sponsors"
              className="rounded-xl bg-orange-600 px-8 py-3.5 text-sm font-black text-white hover:bg-orange-500 transition shadow-lg"
            >
              View Sponsorship Tiers
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border-2 border-sky-400 px-8 py-3.5 text-sm font-bold text-white hover:bg-sky-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
