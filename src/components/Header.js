  import { Link } from 'react-router-dom';

function Header() {
    return (
      <div className="text-blue-500">
        <nav className="grid grid-cols-2">
            <div>
            <h2 className="text-4xl mx-5 my-4 inline-block font-bold">Online Documents</h2>
            <a className="mx-3 text-xl font-medium">Profile</a>
            <a className="mx-3 text-xl font-medium">New Document</a>
            <a className="mx-3 text-xl font-medium">Browse</a>
            </div>   
            <div className="text-right my-6">
            <Link to="/login" className="border border-blue-600 rounded-lg px-5 py-3 text-xl font-semibold bg-white mx-8 my-4">Log In</Link>
            <Link to="/signup" className="border border-blue-600 rounded-lg px-5 py-3 text-xl font-semibold bg-blue-400 mx-8 my-4 text-white">Sign Up</Link>
            </div>
        </nav>
      </div>
    );
  }

export default Header;