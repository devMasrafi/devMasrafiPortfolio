import { useState } from "react";
import { NavLink } from "react-router";
import Footer from "../../components/navigation/Footer";
import Subcription from "../../components/contactSections/Subcription";

const projects = [
  {
    title: "Medicinal Center Dashboard",
    status: "Project concept",
    description:
      "A dashboard concept for organizing operational data, workflows, and day-to-day management in one interface.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Blogging Platform",
    status: "Planned MERN application",
    description:
      "A publishing platform for creating, managing, and presenting written content through a clear user experience.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Losho Shop",
    status: "Planned product interface",
    description:
      "An e-commerce interface focused on product browsing, cart management, and a simple customer journey.",
    stack: ["React", "Firebase", "Tailwind CSS", "REST API"],
  },
];

const primaryStack = [
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "JavaScript",
  "REST APIs",
];

const additionalExperience = [
  "WordPress",
  "Angular",
  "Next.js",
  "Tailwind CSS",
  "Firebase",
  "Git",
];

const questions = [
  {
    question: "What do you build?",
    answer:
      "I build responsive and practical web applications with the MERN stack, including React interfaces, API integrations, dashboards, and content-driven experiences.",
  },
  {
    question: "What experience do you have?",
    answer:
      "I have previous junior frontend development experience, freelance and personal project experience, previous WordPress work, and working knowledge of Angular.",
  },
  {
    question: "What roles are you looking for?",
    answer:
      "I am looking for junior MERN stack, frontend developer, internship, freelance, or collaborative product opportunities.",
  },
];

const Home = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  };

  return (
    <main className="mx-auto w-full max-w-7xl">
      {/* Hero */}
      <section className="border-x border-b px-5 py-14 md:px-10 md:py-20 lg:px-20 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            MERN stack developer
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Building practical web experiences from idea to interface.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 opacity-70 md:text-lg">
            Hi, I am Masrafi Mondol. I build responsive web applications with
            MongoDB, Express, React, and Node.js. I also bring previous
            WordPress experience and working knowledge of Angular.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <NavLink
              to="/projects"
              className="border bg-black px-6 py-3 font-medium capitalize tracking-wide text-white transition hover:opacity-80 dark:bg-white dark:text-black"
            >
              view projects
            </NavLink>

            <NavLink
              to="/contact"
              className="border px-6 py-3 font-medium capitalize tracking-wide transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              contact me
            </NavLink>

            <a
              href="https://github.com/devMasrafi"
              target="_blank"
              rel="noreferrer"
              className="border px-6 py-3 font-medium capitalize tracking-wide transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              github
            </a>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="border-x border-b px-5 py-6 md:px-10 lg:px-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Current availability
            </p>

            <p className="mt-2 max-w-2xl leading-7">
              Open to junior MERN stack, frontend developer, internship,
              freelance, and collaborative product opportunities.
            </p>
          </div>

          <NavLink
            to="/contact"
            className="w-fit rounded-full border border-green-600 bg-green-100 px-4 py-2 text-sm font-semibold text-green-800 transition hover:opacity-80 dark:border-green-400 dark:bg-green-900/40 dark:text-green-200"
          >
            Open to work
          </NavLink>
        </div>
      </section>

      {/* Selected work */}
      <section className="border-x border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Work in progress
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Selected work
            </h2>
          </div>

          <p className="max-w-md leading-7 opacity-70">
            These projects represent the direction of my work. Detailed case
            studies and live links will be added as each project is completed.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col border p-5 transition hover:-translate-y-1"
            >
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {project.status}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-6 opacity-70">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span key={technology} className="border px-2 py-1 text-xs">
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <NavLink
            to="/projects"
            className="inline-block border px-5 py-2 font-medium transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Explore current projects
          </NavLink>
        </div>
      </section>

      {/* Primary stack */}
      <section className="border-x border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Primary stack
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Technologies I use to build.
            </h2>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {primaryStack.map((skill) => (
              <span key={skill} className="border px-4 py-2 text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Additional experience */}
      <section className="border-x border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Additional experience
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Broader frontend experience.
            </h2>
          </div>

          <div>
            <p className="leading-7 opacity-70">
              My main direction is MERN development. My previous WordPress
              experience and working knowledge of Angular help me understand
              different frontend environments and project requirements.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {additionalExperience.map((skill) => (
                <span key={skill} className="border px-4 py-2 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-x border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Quick answers
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            A little more about my direction.
          </h2>
        </div>

        <div className="divide-y border-y">
          {questions.map((item, index) => {
            const isOpen = openQuestionIndex === index;

            return (
              <div key={item.question} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left text-lg font-medium"
                >
                  <span>{item.question}</span>
                  <span className="text-2xl" aria-hidden="true">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 max-w-3xl leading-7 opacity-70">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-x border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Start a conversation
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Have a project or opportunity in mind?
            </h2>
          </div>

          <div>
            <p className="leading-7 opacity-70">
              I am open to discussing frontend development, MERN stack work,
              freelance projects, and opportunities to grow with a team.
            </p>

            <NavLink
              to="/contact"
              className="mt-6 inline-block border px-5 py-2 font-medium transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              Get in touch
            </NavLink>
          </div>
        </div>
      </section>

      <Footer className="mt-10 md:mt-15 lg:mt-20" />
    </main>
  );
};

export default Home;