function Header() {
    return (
      <div className="text-blue-500">
        <nav>
            <h2 className="text-4xl mx-5 my-4 inline-block font-bold">Online Documents</h2>
            <a className="mx-3 text-xl font-medium">Profile</a>
            <a className="mx-3 text-xl font-medium">New Document</a>
            <a className="mx-3 text-xl font-medium">Browse</a>
            <div className="inline-block">
            <button className="border border-blue-600 rounded-lg px-5 py-3 text-xl font-semibold bg-white mx-8 my-4">Log In</button>
            <button className="border border-blue-600 rounded-lg px-5 py-3 text-xl font-semibold bg-blue-400 mx-8 my-4 text-white">Sign Up</button>
            </div>
        </nav>
      </div>
    );
  }

export default Header;