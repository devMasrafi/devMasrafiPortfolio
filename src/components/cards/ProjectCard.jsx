import React from "react";
import { NavLink } from "react-router";

const ProjectCard = ({ className, title, para, image, link }) => {
  return (
    <NavLink to={link}>
      <main className="border rounded-xl cursor-pointer hover:scale-105 duration-500 ease-out overflow-hidden">
        <div className="p-4">
          <div className="w-full h-60 bg-white text-black border rounded-t-lg ">
            {image ? image : `image`}{" "}
          </div>
          <div>
            <h2 className="text-2xl capitalize py-3">
              {title ? title : `project title will be here`}
            </h2>
            <p className="text-sm italic py-2">
              {para
                ? para
                : `project summery will here: Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. In iure, suscipit ducimus ipsam itaque vel.`}
            </p>
          </div>
        </div>
        <button
          className="px-3 py-2 capitalize w-full border-t dark:border-t-white cursor-pointer "
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          view project
        </button>
      </main>
    </NavLink>
  );
};

export default ProjectCard;
