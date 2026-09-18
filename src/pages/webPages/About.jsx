import React, { useState } from "react";
import Footer from "../../components/navigation/Footer";
import Button from "../../components/btn/Button";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <main className="mx-auto w-full max-w-7xl border-x">
      {/* About me */}
      <div className="flex flex-col justify-around gap-8 p-5 md:flex-row md:items-start md:gap-10 md:p-10 lg:p-20">
        <div>
          <h2 className="text-3xl font-semibold tracking-wider underline underline-offset-8">
            About me
          </h2>

          <p className="pt-3 italic tracking-wide opacity-50">small intro</p>
        </div>

        <div className="w-full tracking-wider italic opacity-80 md:w-[55%]">
          <p>
            A dedicated and detail-oriented Web Developer with a strong
            foundation in JavaScript, TypeScript, and modern frameworks
            including Angular, React, and Next.js. Combines a background in
            graphic and UI/UX design with robust coding skills to build
            intuitive, user-centric web applications.
            <span className="md:inline">
              {showMore
                ? "Completed a professional MERN Stack diploma and has hands-on freelance experience delivering component development and technical solutions for real clients. Adept at transforming complex requirements into clean, scalable code. Eager to leverage technical expertise and a passion for continuous learning in a collaborative development team."
                : null}
            </span>
          </p>

          {/* Read more button - mobile only */}
          <div className="mt-3 md:hidden">
            <Button
              onClick={() => setShowMore(!showMore)}
              className="cursor-pointer border shadow-lg"
            >
              {showMore ? "Read less" : "Read more"}
            </Button>
          </div>

          {/* Full text is always visible on tablet/desktop */}
          <p className="hidden md:block">
            Completed a professional MERN Stack diploma and has hands-on
            freelance experience delivering component development and technical
            solutions for real clients. Adept at transforming complex
            requirements into clean, scalable code. Eager to leverage technical
            expertise and a passion for continuous learning in a collaborative
            development team.
          </p>

          <a
            href="src/assets/Masrafi_Mondol_CV.pdf"
            download="Masrafi_Mondol_CV"
          >
            <Button className="mt-3 cursor-pointer border shadow-lg hover:scale-110 dark:bg-white dark:text-black">
              Download Cv
            </Button>
          </a>
        </div>
      </div>

      {/* What I do / current condition */}
      <div className="mb-10 flex flex-col gap-8 border-y px-5 py-10 md:flex-row md:justify-around md:gap-10 md:px-10 md:py-16 lg:px-30 lg:py-20">
        <h2 className="flex w-full capitalize font-semibold text-xl md:w-60">
          what i do!? current condtion
        </h2>

        <div className="w-full md:w-[60%]">
          <p className="tracking-wide">
            I'm a student and partime jobholder. previously did graphics desing
            and manipulation. Have a little bit of video edditing skill (not
            that good) have familarity with almost evey time of software and
            pick up everything fast even though not best at any of them except
            code and ui/ux. <br />
          </p>

          <p className="mt-4 text-lg capitalize font-semibold italic text-blue-400 ">
            jack of all trades master of none, but oftentimes better than a
            master of one
          </p>

          <p className="text-sm tracking-wider italic opacity-40">
            looking for a job or internship in web development, ui/ux design, graphics design,
          </p>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default About;
