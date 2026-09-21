import Footer from "../../components/navigation/Footer";
import cvFile from "../../assets/Masrafi_Mondol_CV.pdf";

const experience = [
  {
    period: "OCT 2024 - FEB 2025",
    company: "All Star IT Sollution",
    role: "Frontend UI Developer",
    description:
      "Worked on frontend development for a web application, focusing on building responsive interfaces and reusable components.",
    responsibilities: [
      "Built and maintained responsive frontend interfaces.",
      "Implemented reusable components for consistent UI.",
      "Collaborated with team members to improve user experiences.",
    ],
    technologies: ["WordPress", "Figma", "Ae", "Canva", "Illustrator"],
  },
  {
    period: "AUG 2026 -ONGOING",
    company: "Pixel Boost IT",
    role: "WEB Developer",
    description:
      "Building practical applications to strengthen the Agency core and user Experince, including themes and plugins integration, responsive interfaces.",
    responsibilities: [
      "Build responsive applications with Wordpress",
      "Integrate themes and plugins to enhance functionality.",
      "Collaborate with team members to improve user experiences.",
      "maintain and fix bugs in existing applications.",
    ],
    technologies: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
  },
];

const strengths = [
  {
    title: "MERN stack development",
    description:
      "Building full-stack JavaScript applications with MongoDB, Express, React, and Node.js.",
  },
  {
    title: "Responsive frontend interfaces",
    description:
      "Creating layouts that remain usable and readable across mobile, tablet, and desktop screens.",
  },
  {
    title: "WordPress experience",
    description:
      "Previous experience working with WordPress websites and content-driven web projects.",
  },
  {
    title: "Angular working knowledge",
    description:
      "Some experience with Angular and understanding of component-based frontend architecture.",
  },
];

const skills = {
  "Primary stack": [
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "JavaScript",
    "REST APIs",
  ],
  "Additional experience": [
    "WordPress",
    "Angular",
    "Next.js",
    "Tailwind CSS",
    "Firebase",
    "Git",
  ],
  "Design background": [
    "Figma",
    "Photoshop",
    "Canva",
    "Eraser.io",
    "UI/UX principles",
  ],
};

const About = () => {
  return (
    <main className="mx-auto w-full max-w-7xl border-x">
      {/* Introduction */}
      <section className="border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-24">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              About me
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              MERN stack developer building practical web experiences.
            </h1>
          </div>

          <div className="max-w-3xl">
            <p className="text-base leading-7 opacity-80 md:text-lg">
              I am a MERN stack developer focused on building responsive and
              practical web applications with MongoDB, Express, React, and
              Node.js.
            </p>

            <p className="mt-5 text-base leading-7 opacity-70 md:text-lg">
              I also have previous experience working with WordPress and working
              knowledge of Angular. My background in visual design helps me pay
              attention to layout, hierarchy, usability, and the details that
              make an interface easier to use.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={cvFile}
                download="Masrafi_Mondol_CV.pdf"
                className="border bg-black px-6 py-3 font-medium capitalize tracking-wide text-white transition hover:opacity-80 dark:bg-white dark:text-black"
              >
                Download CV
              </a>

              <a
                href="/contact"
                className="border px-6 py-3 font-medium capitalize tracking-wide transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Professional focus */}
      <section className="border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Professional focus
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Focused on useful, maintainable products.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="leading-7 opacity-80">
              My primary direction is full-stack JavaScript development with the
              MERN stack. I enjoy turning requirements into clear interfaces,
              reusable components, and practical user flows.
            </p>

            <p className="mt-4 leading-7 opacity-70">
              I am currently looking for junior MERN stack, frontend developer,
              internship, freelance, or collaborative product opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            What I bring
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Practical skills for real projects.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((strength) => (
            <article key={strength.title} className="border p-5">
              <h3 className="text-lg font-semibold">{strength.title}</h3>

              <p className="mt-3 text-sm leading-6 opacity-70">
                {strength.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Professional experience
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Experience that shaped how I build.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 opacity-70">
            My experience includes junior frontend development, WordPress work,
            freelance work, and ongoing MERN stack projects.
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}-${item.period}`}
              className="border-l-2 border-blue-400 pl-5 md:grid md:grid-cols-[180px_1fr] md:gap-8 md:border-l-0 md:border-t md:pl-0 md:pt-6 lg:grid-cols-[220px_1fr] lg:gap-12"
            >
              <div className="mb-4 md:mb-0">
                <p className="text-sm font-semibold text-blue-400">
                  {item.period}
                </p>

                <p className="mt-1 text-sm opacity-60">{item.company}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">{item.role}</h3>

                <p className="mt-3 leading-7 opacity-70">{item.description}</p>

                <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-6 opacity-70">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span key={technology} className="border px-3 py-1 text-xs">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Technical toolkit
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Technologies I work with.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold">{category}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span key={skill} className="border px-3 py-2 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Education
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Continuing to grow through practice.
            </h2>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-400">
              Professional certification
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              Professional MERN Stack Diploma
            </h3>

            <p className="mt-3 leading-7 opacity-70">
              Creative IT Institute, Dhaka, Bangladesh. A comprehensive program
              covering MongoDB, Express, React, Node.js, and related
              technologies.
            </p>

            <a
              href="https://certificate.citsmp.com/?certificate_id=MERN-23070513"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center border px-4 py-2 text-sm font-semibold transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              View certificate
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
