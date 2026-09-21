import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router";

const navigationLinks = [
  { label: "home", path: "/" },
  { label: "projects", path: "/projects" },
  { label: "about", path: "/about" },
  { label: "contact", path: "/contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/devMasrafi",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/masrafi-mondol/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:masrafisw@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/8801577371777",
    icon: FaWhatsapp,
  },
];

const Footer = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full ${className}`}>
      <div className="border-b px-5 py-10 md:px-8 md:py-14 lg:px-10 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:gap-8">
          {/* Brand */}
          <div>
            <NavLink to="/" className="inline-block">
              <h2 className="text-3xl font-bold tracking-wider md:text-4xl">
                devMasrafi
              </h2>
            </NavLink>

            <p className="mt-3 max-w-xs leading-6 opacity-60">
              MERN stack developer building practical and responsive web
              experiences.
            </p>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-blue-400">
              Open to opportunities
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="text-lg font-semibold">Explore</h3>

            <ul className="mt-4 space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className="capitalize opacity-70 transition hover:text-blue-400 hover:opacity-100"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>

            <ul className="mt-4 space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-3 opacity-70 transition hover:text-blue-400 hover:opacity-100"
                    >
                      <Icon aria-hidden="true" />
                      <span>{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="flex flex-col items-center justify-between gap-3 px-5 py-6 text-center text-sm opacity-60 md:flex-row md:px-8 lg:px-10">
        <p>
          &copy; {currentYear} Masrafi Mondol. All rights reserved.
        </p>

        <p>Built with React and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;