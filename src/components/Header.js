import { Link, Redirect } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"
import svg from "../images/svg.svg"

function Header(props) {
    const { currentUser } = useAuth();

    return (
        
        <>
      <div className="w-full hidden xl:block text-blue-400 absolute top-0 left-0">
        <nav className="grid grid-cols-2">
          <div>
            <Link to="/">
              <h2 className="text-3xl mx-5 my-4 inline-block font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text gradient-color">
                Online Docs
              </h2>
            </Link>
            <a href="#" className="mx-3 text-lg font-medium">
              Profile
            </a>
           <Link className="mx-3 text-lg font-medium" to="/docs">New Document</Link>
            <a href="#" className="mx-3 text-lg font-medium">
              Browse
            </a>
          </div>
          <div className="float-right text-right my-6">
            {currentUser === null ? (
              <Link
                to="/login"
                className="border border-blue-600 rounded-lg px-6 py-2 text-xl font-semibold bg-white mx-8 my-4"
              >
                Log In
              </Link>
            ) : (
              <Redirect to="/" />
            )}

            {currentUser === null ? (
              <Link
                to="/signup"
                className="rounded-lg px-6 py-2 text-xl font-semibold bg-blue-400 mx-8 my-4 text-white"
              >
                Sign Up
              </Link>
            ) : (
              <Redirect to="/" />
            )}
            {currentUser ? (
              <button
                onClick={props.logout}
                className="border border-blue-600 rounded-lg px-5 py-3 text-xl font-semibold bg-blue-400 mx-8 my-4 text-white"
              >
                Log out
              </button>
            ) : null}
          </div>
        </nav>
      </div>
      

      <div className="w-full xl:hidden text-blue-500 absolute top-0 left-0">
      <Link to="/">
              <h2 className="text-3xl mx-5 my-4 inline-block font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text gradient-color">
                Online Docs
              </h2>
            </Link>
            <button className="float-right my-4 mx-5">  <img className="h-16 w-16" src={ svg } alt="Hamburger icon"></img>  </button>   
              
      </div>
      </>
    );
  }

export default Header;