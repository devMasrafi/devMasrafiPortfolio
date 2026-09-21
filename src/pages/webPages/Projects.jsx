import ProjectCard from "../../components/cards/ProjectCard";
import Footer from "../../components/navigation/Footer";
import todoImage from "../../assets/images/todoApp.png";
import weatherImage from "../../assets/images/weatherAPp.png";
import apiImage from "../../assets/images/APiCall.png";

const professionalWork = [
  {
    period: "OCT 2024 - FEB 2025",
    company: "All Star IT Sollution",
    role: "Frontend UI Developer",
    description:
      "Worked on frontend UI development for web projects, focusing on responsive layouts, reusable interface patterns, and practical user experiences.",
    responsibilities: [
      "Built and maintained responsive frontend interfaces.",
      "Implemented reusable UI components and page sections.",
      "Worked with WordPress, HTML, CSS, JavaScript, and PHP.",
    ],
    technologies: ["WordPress", "Figma", "Ae", "Canva", "Illustrator"],
    link: "",
  },
  {
    period: "AUG 2026 - ONGOING",
    company: "Pixel Boost IT",
    role: "Web Developer",
    description:
      "Working on WordPress-based web projects, including theme and plugin integration, responsive implementation, maintenance, and bug fixing.",
    responsibilities: [
      "Build and maintain responsive WordPress websites.",
      "Integrate themes and plugins to extend website functionality.",
      "Fix bugs and improve existing website experiences.",
    ],
    technologies: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
    link: "https://pixelboostit.com/",
  },
];

const starterProjects = [
  {
    image: todoImage,
    title: "Task Management Application",
    para: "A beginner-friendly React application with task creation, completion, deletion, filtering, and component-based UI structure.",
    projectLink: "/todoApp",
  },
  {
    image: weatherImage,
    title: "Live Weather Dashboard",
    para: "A weather application that consumes live API data, searches locations, displays current conditions, and handles invalid searches.",
    projectLink: "/weather",
  },
  {
    image: apiImage,
    title: "API Search and Pagination",
    para: "A practical API data interface with client-side search, pagination, reusable result cards, and dynamic data rendering.",
    projectLink: "/apiData",
  },
];

const Projects = () => {
  return (
    <main className="mx-auto w-full max-w-7xl">
      {/* Page introduction */}
      <section className="border-x border-b px-5 py-14 md:px-10 md:py-20 lg:px-20 lg:py-24">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Portfolio work
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Work that shows how I have grown.
            </h1>
          </div>

          <p className="max-w-2xl text-base leading-7 opacity-70 md:text-lg">
            This page separates my professional experience from my starter
            projects. Both matter: professional work shows how I contribute to
            real projects, while earlier applications show the foundation I
            built through practice.
          </p>
        </div>
      </section>

      {/* Professional work */}
      <section className="border-x border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Professional experience
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Real work and client-facing experience.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 opacity-70">
            My professional experience includes frontend UI development,
            WordPress implementation, theme and plugin integration, responsive
            layouts, maintenance, and bug fixing.
          </p>
        </div>

        <div className="space-y-6">
          {professionalWork.map((work) => (
            <article
              key={`${work.company}-${work.period}`}
              className="border-l-2 border-blue-400 pl-5 md:grid md:grid-cols-[190px_1fr] md:gap-8 md:border-l-0 md:border-t md:pl-0 md:pt-6 lg:grid-cols-[230px_1fr] lg:gap-12"
            >
              <div className="mb-4 md:mb-0">
                <p className="text-sm font-semibold text-blue-400">
                  {work.period}
                </p>

                <p className="mt-1 text-sm opacity-60">{work.company}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">{work.role}</h3>

                <p className="mt-3 max-w-3xl leading-7 opacity-70">
                  {work.description}
                </p>

                <ul className="mt-4 max-w-3xl list-inside list-disc space-y-2 text-sm leading-6 opacity-70">
                  {work.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {work.technologies.map((technology) => (
                    <span key={technology} className="border px-3 py-1 text-xs">
                      {technology}
                    </span>
                  ))}
                </div>

                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block border px-4 py-2 text-sm font-semibold transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                  >
                    View work
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Starter projects */}
      <section className="border-x border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Starting points
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            The projects that built my foundation.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 opacity-70">
            These are some of my earlier applications. They may be starter
            projects, but they represent important steps in learning React,
            state management, API integration, responsive design, and reusable
            components. I keep them here because they show the progress behind
            my current work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {starterProjects.map((project) => (
            <ProjectCard
              key={project.projectLink}
              image={project.image}
              title={project.title}
              para={project.para}
              link={project.projectLink}
            />
          ))}
        </div>
      </section>

      {/* Growth statement */}
      <section className="border-x border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Continuous growth
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              From starter projects to professional work.
            </h2>
          </div>

          <p className="max-w-2xl leading-7 opacity-70">
            My earlier projects helped me understand the fundamentals of
            frontend development. My professional work has helped me apply those
            fundamentals to real users, real requirements, and existing systems.
            My next focus is continuing to grow as a MERN stack developer.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
