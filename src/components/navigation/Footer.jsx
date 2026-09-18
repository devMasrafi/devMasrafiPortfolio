import { NavLink } from "react-router";

const Footer = ({ className }) => {
  const socialLinks = [
    {
      name: "github",
      link: "https://github.com/devMasrafi",
    },
    {
      name: "Linked In",
      link: "https://www.linkedin.com/in/masrafi-mondol/",
    },
    {
      name: "facebook",
      link: "https://www.facebook.com",
    },
    {
      name: "x ( twitter )",
      link: "https://www.x.com",
    },
  ];

  return (
    <div className={`w-full ${className}`}>
      {/* upper Footer */}
      <div className="flex flex-col items-center gap-10 border-b px-5 pb-10 md:flex-row md:justify-around md:items-center md:px-8 md:pb-15 lg:px-10">
        <NavLink to="/" className="text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-wider italic md:text-4xl">
            devMasrafi
          </h1>

          <p className="text-sm italic tracking-wider opacity-60">
            simple, faster, reliable
          </p>
        </NavLink>

        <div className="w-full md:w-auto">
          <div>
            <h2 className="text-center text-2xl capitalize md:text-3xl">
              socials
            </h2>
          </div>

          <div className="my-3 flex flex-wrap justify-center border-y">
            {socialLinks.map((items, index) => {
              return (
                <NavLink
                  key={index}
                  to={items.link}
                  target="_blank"
                  className="border-x p-3 capitalize md:p-4"
                >
                  {items.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      {/* copyright stuff */}
      <div className="flex flex-col items-center justify-center gap-4 px-5 py-8 text-center capitalize font-semibold italic opacity-40 md:flex-row md:gap-8 md:py-10">
        <li>@2026 all rights reserve</li>

        <li>privacy</li>

        <li>terms and conditions</li>
      </div>
    </div>
  );
};

export default Footer;