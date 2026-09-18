import { Link } from "react-router";
import Button from "../../components/btn/Button";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="mx-auto w-full max-w-7xl md:border-x min-h-screen">
      <div>
        <div className="text-center pt-15 pb-20 border-b">
          <Button className={`border-b rounded-2xl px-2 py-1 mb-5 `}>
            Contact Page
          </Button>
          <h2 className="text-3xl font-semibold">
            I would love to hear from you!
          </h2>
        </div>

        <div className="text-center pt-10">
          <h3 className="font-medium text-lg py-2">Want to send a mail to me directly?</h3>
          <Button className={`border rounded-2xl px-2 py-1`}>
            <Link to="mailto:masrafisw@gmail.com" target="_blank">
              masrafisw@gmail.com
            </Link>
          </Button>
        </div>

        {/* contact information and links */}
        <div className="flex flex-col items-center mt-20">
          <h3 className="text-xl font-medium mb-4 capitalize">
            want to check social and get into contact!?
          </h3>
          <Button
            className={`border rounded-2xl px-2 py-1 flex items-center gap-2`}
          >
            <Link
              to="https://wa.me/+8801577371777"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaWhatsapp /> +880 1577 371777
            </Link>
          </Button>
          {/* Social Media Links */}
          <div className="flex justify-around items-center mt-3 gap-2">
            <Button className={`border rounded-2xl px-2 py-1 `}>
              <Link
                to="https://linkedin.com/in/devmasrafi"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaLinkedin /> @devMasrafi
              </Link>
            </Button>
            <Button
              className={`border rounded-2xl px-2 py-1 flex items-center gap-2`}
            >
              <Link
                to="https://github.com/devMasrafi"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaGithub /> @devMasrafi
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
