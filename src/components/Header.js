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
              <h2 className="text-5xl mx-5 my-4 inline-block font-black transition-all duration-700">
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text gradient-color">Online </span><span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text gradient-color">Docs</span>
              </h2>
            </Link>
       
           {currentUser === null ? (
               null
            ) : (
                <>
                <Link to="/" className="mx-3 text-lg font-bold hover:text-blue-300 transition-all duration-700">
                Profile
              </Link>
             <Link className="mx-3 text-lg font-bold hover:text-blue-300 transition-all duration-700" to="/docs">New Document</Link>
                <Link className="mx-3 text-lg font-bold hover:text-blue-300 transition-all duration-700" to="/browsedocs">
                Browse
              </Link>
              </>
            )}
          
          </div>
          <div className="float-right text-right my-6">
            {currentUser === null ? (
              <Link
                to="/login"
                className="border-4 border-blue-300 rounded-xl px-10 py-2 text-xl text-blue-300 font-bold bg-white mx-8 my-4 hover:bg-blue-100 hover:text-blue-400 hover:border-transparent transition-all duration-700"
              >
                Log In
              </Link>
            ) : (
              <Redirect to="/" />
            )}

            {currentUser === null ? (
              <Link
                to="/signup"
                className="border-4 border-blue-400 rounded-xl px-10 py-2 text-xl font-bold bg-blue-400 mx-8 my-4 text-white hover:bg-blue-100 hover:text-blue-400 hover:border-transparent transition-all duration-700"
              >
                Sign Up
              </Link>
            ) : (
              <Redirect to="/" />
            )}
            {currentUser ? (
              <button
                onClick={props.logout}
                className="rounded-lg px-6 py-2 text-xl font-bold bg-blue-400 mx-8 text-white hover:bg-blue-100 hover:text-blue-400 hover:border-transparent transition-all duration-700"
              >
                Log out
              </button>
            ) : null}
          </div>
        </nav>
      </div>
      

      <div className="w-full xl:hidden text-blue-500 absolute top-0 left-0">
      <Link to="/">
              <h2 className="text-4xl mx-5 my-4 inline-block font-black bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text gradient-color transition-all duration-700">
                Online Docs
              </h2>
            </Link>
            <button className="float-right my-4 mx-5">  <img className="h-16 w-16" src={ svg } alt="Hamburger icon"></img>  </button>   
              
      </div>
      </>
    );
  }

export default Header;