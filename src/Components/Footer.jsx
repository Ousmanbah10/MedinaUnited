import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png"
              alt="Medina United Football Academy"
              className="h-10 w-10 rounded-full object-cover border-2 border-gray-600"
            />
            <div>
              <p className="font-extrabold text-white text-sm uppercase tracking-wide">Medina United</p>
              <p className="text-orange-400 text-xs">Football Academy</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            One of Gambia's finest professionally organised free youth football academies.
            Developing talent, building character.
          </p>
          <div className="mt-4 text-sm text-gray-400 space-y-1">
            <p>Yundum Airport, Western Region</p>
            <p>The Gambia, West Africa</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/about", label: "About MUFA" },
              { to: "/teams", label: "Our Teams" },
              { to: "/news", label: "Latest News" },
              { to: "/faq", label: "FAQ" },
              { to: "/join", label: "Join the Academy" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-orange-400 transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support Us</h3>
          <ul className="space-y-2 text-sm mb-6">
            {[
              { to: "/sponsors", label: "Become a Sponsor" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-orange-400 transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Get In Touch</h3>
          <a
            href="mailto:medinaunitedacademy@gmail.com"
            className="block text-sm hover:text-orange-400 transition break-all"
          >
            medinaunitedacademy@gmail.com
          </a>
          <a href="tel:+2205025813" className="block text-sm mt-1 hover:text-orange-400 transition">
            +220 502 5813
          </a>
          <a href="tel:+2203891423" className="block text-sm hover:text-orange-400 transition">
            +220 389 1423
          </a>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-4">
            Get trials, fixtures and academy news delivered to your inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We'll be in touch soon.");
            }}
            className="flex flex-col gap-2"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-400"
            />
            <button
              type="submit"
              className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-bold text-white hover:bg-orange-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Medina United Football Academy. All rights reserved.</p>
          {/* Social icons */}
          <div className="flex items-center gap-2">
            {[
              { label: "Facebook", href: "#", icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
              { label: "X", href: "#", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
              { label: "Instagram", href: "#", icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
              { label: "YouTube", href: "#", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white"/></svg> },
              { label: "Pinterest", href: "#", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="h-7 w-7 rounded-full bg-gray-700 hover:bg-orange-600 text-gray-300 hover:text-white flex items-center justify-center transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
