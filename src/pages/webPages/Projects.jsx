import ProjectCard from "../../components/cards/ProjectCard";
import todoImage from "../../assets/images/todoApp.png";
import weatherImage from "../../assets/images/weatherAPp.png";
import apiImage from "../../assets/images/APiCall.png";

const Projects = () => {
  const projectData = [
    {
      image: todoImage,
      title: "Todo App with react js and tailwindCSS",
      para: "made with react js and TailwindCSS instant dom and CRUD system build in. local storage set so that it will not be lost. and filter system.",
      projectLink: "/todoApp",
    },
    {
      image: weatherImage,
      title: "Weather App. getting live data and information",
      para: "Live weather application made with react js and TailwindCSS. every part is used from live server response and dynamic system.",
      projectLink: "/weather",
    },
    // {
    //   image: "src/assets/images/weatherAPp.png",
    //   title: "Recipie Book modal style easy to follow",
    //   para: "easy to use recipie book for different cuisines and detailed explanation on how to make each and every one of them. what to use and what to do on each of the step",
    //   projectLink: "/recipiebook",
    // },
    {
      image: apiImage,
      title: "fetching APIdata from JsonPlace holder",
      para: "made with react js and TailwindCSS, getting data and setting up all of the jundamental work so its easy to view and manage it after",
      projectLink: "/apiData",
    },
  ];

  return (
    <main className="mx-auto w-full max-w-7xl">
      <div className="border-x">
        {/* project page hero */}
        <div className="border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-3xl text-center capitalize font-semibold md:text-4xl">
              projects that have been worked on
            </h2>

            <p className="my-3 text-center text-base tracking-wide italic opacity-60 md:text-lg">
              Every project in this web/site is made my{" "}
              <span className="text-blue-400 font-semibold">
                Masrafi Mondol (devMasrafi)
              </span>
              . On click it will take you to the project so you can check it and
              interact with it.
            </p>
          </div>
        </div>

        {/* projects */}
        <div className="flex flex-wrap items-center justify-center gap-8 px-5 py-10 md:gap-10 md:px-10 lg:gap-12 lg:px-12">
          {projectData.map((item, index) => {
            return (
              <div key={index} className="w-full md:w-[45%] lg:w-[30%]">
                <ProjectCard
                  image={item.image}
                  title={item.title}
                  para={item.para}
                  link={item.projectLink}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Projects;
