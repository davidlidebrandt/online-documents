function Footer() {
    return (
      <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white text-center text-xl font-semibold">
        <nav>
            <div className="pt-6">
                <a className="text-4xl mx-4"><i class="far fa-envelope"></i></a>
                <a className="text-4xl mx-4"><i class="fab fa-linkedin"></i></a>
                <button className="text-4xl mx-4"> <i class="fab fa-github-square"></i> </button>
                     
            </div>
            <div className="py-6 italic">Site created by David Lidebrandt</div>
            <div className="py-3">
                <a href='https://www.freepik.com/free-photos-vectors/background'>Background vector created by starline - www.freepik.com</a>
            </div>
        </nav>
      </div>
    );
  }

export default Footer;