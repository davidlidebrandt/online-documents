function Footer() {
    return (
      <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white text-center text-xl font-semibold">
        <nav>
            <div className="pt-6">
                <a href="https://github.com/davidlidebrandt" className="text-4xl mx-4 hover:text-blue-200 cursor-pointer"><i className="fab fa-github-square"></i> </a>
                <a href="https://www.linkedin.com/in/david-lidebrandt-5842411b6/" className="text-4xl mx-4 hover:text-blue-200 cursor-pointer"><i className="fab fa-linkedin"></i></a>
                <button className="text-4xl mx-4 hover:text-blue-200"> <i className="fas fa-envelope-square"></i></button>
                     
            </div>
            <div className="py-6 italic">Application created by David Lidebrandt</div>
            <div className="py-3">
                <a href='https://www.freepik.com/free-photos-vectors/background'>Background vector created by starline - www.freepik.com</a>
            </div>
        </nav>
      </div>
    );
  }

export default Footer;