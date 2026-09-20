import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import Button from "../../components/btn/Button";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import Footer from "../../components/navigation/Footer";
import Subcription from "../../components/contactSections/Subcription";

const Home = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const qnaData = [
    {
      question: "What do you build?",
      answer:
        "I focused on building responsive and interactive web apps using my Primary stack and additional experience & with working knowledge of other frameworks and libraries.",
    },
    {
      question: "What experience do you have?",
      answer:
        "I have done 2 jobs as a junior frontend developer. I have also done some freelance work and personal projects.",
    },
    {
      question: "What roles are you looking for?",
      answer:
        "I am looking for a role as a junior frontend developer or MERN stack developer. I am open to working in a team or independently, and I am eager to contribute my skills and learn from experienced professionals.",
    },
  ];

  const toggleQuestion = (index) => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null);
    } else {
      setOpenQuestionIndex(index);
    }
  };

  return (
    <main className="mx-auto w-full max-w-7xl">
      {/* hero banner */}
      <div className="border-x border-b">
        <div className="flex flex-col items-center px-5 py-10 md:px-8 md:py-16 lg:px-10 lg:py-20">
          <div className="mt-5 text-center md:mt-10 lg:mt-20">
            <h1 className="text-3xl font-bold tracking-wide italic md:text-4xl lg:text-5xl">
              devMasrafi
            </h1>

            <h3 className="my-3 text-xl capitalize opacity-50 md:my-4 md:text-2xl lg:text-xl">
              Full stack - MERN Stack developer
            </h3>
          </div>

          <div className="my-8 w-full max-w-3xl md:my-10 lg:my-15">
            <p className="text-base text-center italic md:text-lg ">
              I build responsive web applications with MongoDB, Express, React,
              and Node.js. I also bring previous WordPress experience and
              working knowledge of Angular.
            </p>

            <div className="my-5 flex flex-wrap items-center justify-center gap-2">
              <NavLink to="https://github.com/devMasrafi" target="_blank">
                <Button className="bg-black text-white border-2 border-dark-green">
                  github
                </Button>
              </NavLink>

              <NavLink to="/contact">
                <Button className="border-2 border-dark-green">contact</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* CTA of my current position */}
      <div className="border-x border-b py-5 md:py-15">
        <div className="mx-3 md:flex md:items-center md:justify-between md:px-10 lg:px-20">
          <p className="text-lg md:text-md w-[90%] md:w-[70%] tracking-wider">
            Looking for a{" "}
            <span className="text-blue-400 font-bold">
              junior MERN stack and frontend developer opportunities.
            </span>{" "}
            Where I can own UI architecture, not just implement tickets.
          </p>
          <NavLink
            to="/contact"
            className="px-4 py-1  rounded-full my-4 bg-black/10 text-black  md:text-nowrap dark:bg-white/10 dark:text-white"
          >
            Open to work
          </NavLink>
        </div>
      </div>

      {/* Project section */}
      <div className="border-x border-b py-5 md:px-15">
        <div className="mx-3 ">
          {/* header */}
          <div>
            <h2 className="text-4xl font-semibold underline underline-offset-8 pb-5 capitalize ">
              selected Work:{" "}
              <span className="text-lg font-normal">03 works listed</span>
            </h2>
          </div>
          <div>
            {/* project 1 */}
            <div className="p-5 border mt-10 rounded-md md:flex md:justify-between ">
              <div className="md:w-[60%] md:flex md:flex-col md:justify-between md:gap-5">
                <div>
                  <h2 className="text-3xl">
                    Project concept: Medicinal Center Dashboard
                  </h2>
                  <p className="text-md tracking-wider py-3">
                    Thank you for visiting the project section. The current
                    project is still under development, and I am actively
                    working on it. I appreciate your patience and understanding
                    as I continue to enhance and refine the project to deliver a
                    high-quality experience. Please stay tuned for updates, and
                    I look forward to sharing the completed version with you
                    soon.
                  </p>
                </div>

                <div className=" flex flex-wrap gap-2 md:max-w-[70%]">
                  <Button>Reactjs</Button>
                  <Button>Firebase</Button>
                  <Button>TailwindCSS</Button>
                  <Button>Rest API</Button>
                </div>
              </div>
              <div className="flex mt-10 md:mt-0 gap-2 md:flex-col">
                <Link
                  to="/projects"
                  className=" hover:underline px-3 py-1 border my-2"
                >
                  View Project
                </Link>
                <Link to="#" className=" hover:underline px-3 py-1 border my-2">
                  Source Code
                </Link>
              </div>
            </div>
            {/* project 2 */}

            <div className="p-5 border mt-10 rounded-md md:flex md:justify-between ">
              <div className="md:w-[60%] md:flex md:flex-col md:justify-between md:gap-5">
                <div>
                  <h2 className="text-3xl">
                    Planned MERN application: Blogging Platform
                  </h2>
                  <p className="text-md tracking-wider py-3">
                    A bloggers web application that allows users to create,
                    publish, and manage their own blogs. It provides a
                    user-friendly interface for writing and formatting blog
                    posts, as well as features for organizing content, adding
                    images and multimedia, and engaging with readers through
                    comments and social sharing.
                  </p>
                </div>

                <div className=" flex flex-wrap gap-2 md:max-w-[70%]">
                  <Button>Nextjs</Button>
                  <Button>MongoDb</Button>
                  <Button>TailwindCSS</Button>
                  <Button>Express</Button>
                  <Button>Rest API</Button>
                </div>
              </div>
              <div className="flex mt-10 md:mt-0 gap-2 md:flex-col">
                <Link
                  to="/projects"
                  className=" hover:underline px-3 py-1 border my-2"
                >
                  View Project
                </Link>
                <Link
                  to="/projects"
                  className=" hover:underline px-3 py-1 border my-2"
                >
                  Source Code
                </Link>
              </div>
            </div>
            {/* project 3 */}
            <div className="p-5 border mt-10 rounded-md md:flex md:justify-between ">
              <div className="md:w-[60%] md:flex md:flex-col md:justify-between md:gap-5">
                <div>
                  <h2 className="text-3xl">
                    Planned product interface: Losho Shop
                  </h2>
                  <p className="text-md tracking-wider py-3">
                    A modern e-commerce platform designed for selling organic
                    and natural products. It offers a seamless shopping
                    experience with features for product browsing, cart
                    management, secure checkout, and customer account
                    management.
                  </p>
                </div>

                <div className=" flex flex-wrap gap-2 md:max-w-[70%]">
                  <Button>Nextjs</Button>
                  <Button>Firebase</Button>
                  <Button>TailwindCSS</Button>
                  <Button>Rest API</Button>
                </div>
              </div>
              <div className="flex mt-10 md:mt-0 gap-2 md:flex-col">
                <Link
                  to="/projects"
                  className=" hover:underline px-3 py-1 border my-2"
                >
                  View Project
                </Link>
                <Link
                  to="/projects"
                  className=" hover:underline px-3 py-1 border my-2"
                >
                  Source Code
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <NavLink to="/projects" className="rounded-md py-2 px-6 border ">
              Explore current projects
            </NavLink>
          </div>
        </div>
      </div>

      {/* Skill Secntion */}
      <div className="border-x border-b py-5 md:py-15">
        <div className="mx-3 md:px-10 lg:px-20">
          <div>
            <h2 className="text-4xl font-semibold underline underline-offset-8 pb-5">
              Skills
            </h2>
          </div>

          <div className="md:flex md:justify-between md:gap-4">
            <div>
              <h2 className="text-xl py-5">Primary stack</h2>
              <div className="flex flex-wrap gap-2">
                <Button>JavaScript (Es6+)</Button>
                <Button>TypeScript</Button>
                <Button>ReactJS</Button>
                <Button>NextJS</Button>
                <Button>Angular JS</Button>
                <Button>TailwindCSS</Button>
                <Button>Node.js</Button>
                <Button>REST APIs</Button>
              </div>
            </div>
            <div>
              <h2 className="text-xl py-5">Additional experience</h2>
              <div className="flex flex-wrap gap-2">
                <Button>WordPress</Button>
                <Button>Angular</Button>
                <Button>Next.js</Button>
                <Button>Tailwind CSS</Button>
                <Button>Firebase</Button>
                <Button>Git</Button>
              </div>
            </div>
            <div>
              <h2 className="text-xl py-5">Design background</h2>
              <div className="flex flex-wrap gap-2">
                <Button>Figma</Button>
                <Button>Photoshop</Button>
                <Button>Canva</Button>
                <Button>Eraser.IO</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* question and answers */}
      <div className="border-x p-5 md:p-10 lg:p-20">
        <h2 className="my-4 text-xl capitalize font-semibold md:text-2xl">
          Web Question and Answers
        </h2>

        <div>
          {qnaData.map((item, index) => (
            <div key={index} className="py-2">
              <div className="flex items-center text-base md:text-lg lg:text-xl">
                {openQuestionIndex === index ? <FiMinus /> : <IoMdAdd />}

                <h2
                  className="cursor-pointer pl-2"
                  onClick={() => toggleQuestion(index)}
                >
                  {item.question}
                </h2>
              </div>

              {/* answer */}
              {openQuestionIndex === index && (
                <p className="mt-2 ml-5 rounded-xl bg-black/20 px-2 py-1 pl-5 text-base italic md:text-lg">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* leave a mail to contact later */}
      <div className="border-x border-y p-5 md:p-10 lg:p-20">
        <Subcription />
      </div>

      {/* footer component */}
      <Footer className="mt-10 md:mt-15 lg:mt-20" />
    </main>
  );
};

export default Home;
