import { FiGithub, FiLinkedin } from "react-icons/fi"
import {HiOutlineMail } from "react-icons/hi"

function Footer() {
    return (
      <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white text-center text-xl font-semibold">
        <nav>
            <div className="py-10">
                <a href="https://github.com/davidlidebrandt" className="cursor-pointer mx-8"><FiGithub size="40" className="inline"/> </a>
                <a href="https://www.linkedin.com/in/david-lidebrandt-5842411b6/" className="cursor-pointer mx-8"><FiLinkedin size="40" className="inline"/></a>
                <button className="m-0 mx-8"> <HiOutlineMail size="40" className="inline"/> </button>
                     
            </div>
            <div className="py-1">Application created by David Lidebrandt</div>
            <div className="py-1 pb-10">
                <a href='https://www.freepik.com/free-photos-vectors/background'>Background vector created by starline - www.freepik.com</a>
            </div>
        </nav>
      </div>
    );
  }

export default Footer;