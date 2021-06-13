function Header() {
    return (
      <div className="bg-blue-800 text-white">
        <nav>
            <h2 className="text-2xl mx-3 my-4 inline-block">Online Documents</h2>
            <a className="mx-1 text-lg">Profile</a>
            <a className="mx-1 text-lg">New Document</a>
            <a className="mx-1 text-lg">Browse</a>
        </nav>
      </div>
    );
  }

export default Header;