import React, { useState } from "react";
import { NavLink } from "react-router";
import Button from "../../components/btn/Button";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import Footer from "../../components/navigation/Footer";
import Subcription from "../../components/contactSections/Subcription";

const Home = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const qnaData = [
    {
      question: "Who are you?",
      answer:
        "I'm a web developer focused on building responsive and interactive web apps using React Nextjs MeterialUi, mondobd, express ",
    },
    {
      question: "Want to hire me?",
      answer:
        "Yes, I am curently looking for work in any invironment office remote or project contract.",
    },
    {
      question: "What framework or library used",
      answer:
        "This site is made using reactjs and react router for multipage work. for styling used TailwindCSS might use other UI library if its too much to handle with pure react or JavaScript alone.",
    },
    {
      question: "Website Ui design",
      answer:
        "This UI is made by Masrafi Mondol (devMasrafi) every compoent and details design is made by him.",
    },
    {
      question: "What tech stack do you work with?",
      answer:
        "HTML, CSS, JavaScript, React, NextJS, tailwindCSS, ScSS, Node.js, MaterialUI, REST APIs",
    },
    {
      question: "How do you approach building a project?",
      answer:
        "planing, Ui design, coding, testing, making adjustment, deployment",
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

            <h3 className="my-3 text-xl capitalize opacity-50 md:my-4 md:text-2xl lg:text-3xl">
              all project in one place
            </h3>
          </div>

          <div className="my-8 w-full max-w-3xl md:my-10 lg:my-15">
            <p className="text-base italic md:text-lg">
              all type of project and test that can be done in react is done in
              this single project. All have been properly arranged and made
              navigate through react router. The peojct is done in pure
              JavaScript so it easy to understand. This peojcts can be viwed
              live here or on git repo or netlify or render
            </p>

            <div className="my-5 flex flex-wrap items-center justify-center gap-2">
              <NavLink to="https://github.com/devMasrafi" target="_blank">
                <Button className="bg-black text-white border-2 border-dark-green">
                  github
                </Button>
              </NavLink>

              <NavLink to="/contact">
                <Button className="border-2 border-dark-green">
                  contact
                </Button>
              </NavLink>
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