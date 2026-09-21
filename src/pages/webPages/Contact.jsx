import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Footer from "../../components/navigation/Footer";

const contactLinks = [
  {
    title: "Email",
    value: "masrafisw@gmail.com",
    description: "For job opportunities, freelance work, and collaborations.",
    href: "mailto:masrafisw@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "LinkedIn",
    value: "@devMasrafi",
    description: "Connect with me professionally and view my experience.",
    href: "https://www.linkedin.com/in/devmasrafi/",
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    value: "@devMasrafi",
    description: "Explore my code, experiments, and completed projects.",
    href: "https://github.com/devMasrafi",
    icon: FaGithub,
  },
  {
    title: "WhatsApp",
    value: "+880 1577 371777",
    description: "Use WhatsApp for a direct conversation.",
    href: "https://wa.me/8801577371777",
    icon: FaWhatsapp,
  },
];

const Contact = () => {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl border-x">
      {/* Hero */}
      <section className="border-b px-5 py-14 md:px-10 md:py-20 lg:px-20 lg:py-28">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Get in touch
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Let&apos;s start a conversation.
            </h1>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-7 opacity-70 md:text-lg">
              I am open to junior MERN stack, frontend developer, internship,
              freelance, and collaborative product opportunities.
            </p>

            <p className="mt-4 leading-7 opacity-70">
              If you have an opportunity, project idea, or question, you can
              reach me directly through email or one of the social platforms
              below.
            </p>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="border-b px-5 py-6 md:px-10 lg:px-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Current availability
            </p>

            <p className="mt-2 leading-7 opacity-70">
              Currently open to relevant development opportunities and
              professional conversations.
            </p>
          </div>

          <span className="w-fit rounded-full border border-green-600 bg-green-100 px-4 py-2 text-sm font-semibold text-green-800 dark:border-green-400 dark:bg-green-900/40 dark:text-green-200">
            Available for opportunities
          </span>
        </div>
      </section>

      {/* Direct email */}
      <section className="border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Direct contact
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Prefer email?
            </h2>
          </div>

          <div>
            <p className="leading-7 opacity-70">
              Email is the best way to reach me about a job opportunity,
              collaboration, or project discussion.
            </p>

            <a
              href="mailto:masrafisw@gmail.com"
              className="mt-6 inline-flex items-center gap-3 border px-5 py-3 font-medium transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <FaEnvelope aria-hidden="true" />
              masrafisw@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Contact links */}
      <section className="border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Find me online
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Connect through your preferred platform.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.title}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noreferrer"
                    : undefined
                }
                className="group border p-5 transition hover:-translate-y-1 hover:border-blue-400"
              >
                <Icon
                  className="text-2xl text-blue-400"
                  aria-hidden="true"
                />

                <h3 className="mt-5 text-xl font-semibold">
                  {contact.title}
                </h3>

                <p className="mt-2 wrap-break-words font-medium">
                  {contact.value}
                </p>

                <p className="mt-3 text-sm leading-6 opacity-60">
                  {contact.description}
                </p>

                <span className="mt-5 inline-block text-sm font-semibold text-blue-400 group-hover:underline">
                  Open link
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Start a project
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Have an opportunity in mind?
            </h2>
          </div>

          <div>
            <p className="leading-7 opacity-70">
              Send me a message with a little information about the role,
              project, or collaboration. I will get back to you as soon as I
              can.
            </p>

            <a
              href="mailto:masrafisw@gmail.com"
              className="mt-6 inline-block border bg-black px-5 py-3 font-medium text-white transition hover:opacity-80 dark:bg-white dark:text-black"
            >
              Send an email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;