import React from "react";
import Footer from "../../components/navigation/Footer";
import Button from "../../components/btn/Button";
import { Link, NavLink } from "react-router";

const About = () => {
  return (
    <main className="w-7xl mx-auto border-x">
      <div className="p-20 flex  justify-around">
        <div>
          <h2 className="text-3xl text-nowrap font-semibold tracking-wider underline underline-offset-8 ">
            About me
          </h2>
          <p className="pt-3 italic tracking-wide opacity-50">small intro</p>
        </div>
        <div className="w-140 tracking-wider italic opacity-80">
          <p className="">
            A dedicated and detail-oriented Web Developer with a strong
            foundation in JavaScript, TypeScript, and modern frameworks
            including Angular, React, and Next.js. Combines a background in
            graphic and UI/UX design with robust coding skills to build
            intuitive, user-centric web applications. Completed a professional
            MERN Stack diploma and has hands-on freelance experience delivering
            component development and technical solutions for real clients.
            Adept at transforming complex requirements into clean, scalable
            code. Eager to leverage technical expertise and a passion for
            continuous learning in a collaborative development team.
          </p>

          <a
            href="src/assets/Masrafi_Mondol_CV.pdf"
            download="Masrafi_Mondol_CV"
          >
            <Button
              className={`capitalize mt-3 border shadow-lg hover:scale-110 cursor-pointer dark:bg-white dark:text-black`}
            >
              Download Cv
            </Button>
          </a>
        </div>
      </div>

      {/* what i do current condition */}
      <div className="py-20 border-y mb-10 px-30 flex justify-around">
        <h2 className="flex w-60 capitalize font-semibold text-xl">
          what i do!? current condtion
        </h2>
        <div>
          <p className="w-160 tracking-wide ">
            I'm a student and partime jobholder. previously did graphics desing
            and manipulation. Have a little bit of video edditing skill (not
            that good) have familarity with almost evey time of software and
            pick up everything fast even though not best at any of them except
            code and ui/ux. <br />
          </p>
          <p className="mt-4 capitalize text-lg italic font-semibold text-blue-400 text-shadow-md">
            jack of all trades master of none, but oftentimes better than a
            master of one
          </p>

          <p className="text-sm italic opacity-40 tracking-wider">
            looking for job and in tech industry
          </p>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
};

export default About;
