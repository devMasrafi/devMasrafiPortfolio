import React from "react";
import { NavLink } from "react-router";
import Button from "../../components/btn/Button";

const Home = () => {
  return (
    <main className="w-7xl mx-auto">
      {/* hero banner */}
      <div className="border-x border-b h-135 ">
        <div className="flex flex-col items-center p-10">
          <div className="mt-20">
            <h1 className="text-4xl font-bold tracking-wide italic ">
              devMasraf
            </h1>
            <h3 className="text-3xl opacity-50 capitalize my-4">
              all project in one place
            </h3>
          </div>
          <div className="w-200 my-15">
            <p className="text-lg italic  ">
              all type of project and test that can be done in react is done in
              this single project. All have been properly arranged and made
              navigate through react router. The peojct is done in pure
              JavaScript so it easy to understand. This peojcts can be viwed
              live here or on git repo or netlify or render
            </p>
            <div className="flex justify-center items-center gap-2 my-5 ">
              <NavLink to="https://github.com/devMasrafi" target="_blank">
                <Button className="bg-black text-white border-2 border-dark-green  ">
                  github
                </Button>
              </NavLink>
              <NavLink to="/contact">
                <Button className="border-2 border-dark-green ">contact</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* question and answers. */}
    </main>
  );
};

export default Home;
