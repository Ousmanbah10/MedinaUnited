import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const mainNav = [
  { to: "/", label: "Home" },
  { to: "/teams", label: "Teams" },
  { to: "/youth", label: "Youth" },
  { to: "/news", label: "News" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/faq", label: "FAQ & Contact" },
  { to: "/about", label: "About" },
  { to: "/join", label: "Join Free" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    facebook: true,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    instagram: true,
    icon: (
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
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    youtube: true,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white" />
      </svg>
    ),
  },
];

function socialBg(s) {
  if (s.youtube)   return { background: "#FF0000" };
  if (s.facebook)  return { background: "#1877F2" };
  if (s.instagram) return { background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" };
  return { background: "rgba(0,0,0,0.25)" };
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* MAIN NAV */}
      <div style={{ background: "#0588b1" }}>
        <div className="mx-auto max-w-7xl px-4 py-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0"
            onClick={() => setOpen(false)}
          >
            <img
              src="/logo.png"
              alt="Medina United Football Academy"
              className="h-12 w-12 rounded-full object-cover border-2 border-white shadow"
            />
            <div className="leading-tight">
              <p className="font-extrabold text-white text-base tracking-wide uppercase">
                Medina United Football Academy
              </p>
            </div>
          </Link>

          {/* Desktop nav + socials */}
          <div className="hidden lg:flex items-center gap-3">
            <nav className="flex items-center gap-0.5">
              {mainNav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-bold uppercase tracking-wide rounded transition ${
                      isActive
                        ? "text-white"
                        : "text-sky-100 hover:text-white"
                    }`
                  }
                  style={({ isActive }) => isActive ? { background: "rgba(0,0,0,0.25)" } : {}}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Social icons */}
            <div className="flex items-center gap-1.5 pl-3" style={{ borderLeft: "1px solid rgba(255,255,255,0.3)" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="h-7 w-7 rounded-full text-white flex items-center justify-center transition hover:opacity-80"
                  style={socialBg(s)}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded text-white transition"
            style={{ background: "transparent" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.15)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="lg:hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.2)", background: "rgba(0,0,0,0.2)" }}>
            <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
              {mainNav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded text-sm font-bold uppercase tracking-wide transition text-white`
                  }
                  style={({ isActive: a }) => a ? { background: "rgba(0,0,0,0.3)" } : {}}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="flex gap-2 mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="h-8 w-8 rounded-full text-white flex items-center justify-center transition hover:opacity-80"
                    style={socialBg(s)}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
