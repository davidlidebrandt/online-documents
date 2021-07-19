import { Link } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"

function Home(props) {
    const {currentUser } = useAuth();

    return (
        <>
        <div className="col-span-8 col-start-3 md:col-start-5 md:col-span-4 text-center">
        <h3 className="my-3 font-bold text-5xl bg-white bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text gradient-color">Online Docs</h3>
        </div>
        
        <div className="col-span-10 col-start-2 md:col-start-4 md:col-span-6 xl:col-start-5 xl:col-span-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300  mg-auto my-12 inline-block border text-center rounded text-white text-xl font-medium">
  
          <p className="py-12 px-4 mx-8 my-8 text-blue-400  bg-blue-50 rounded-lg transform -rotate-2">Welcome to Online Docs, here you can create, save and access text documents online from any device.</p>
          
            
          {currentUser === null ? (
                <div className="py-8 my-8">
                <Link to="/login" className="m-0 border border-white rounded-lg px-6 py-3 text-xl font-semibold bg-blue-400 mx-8 my-5 text-white hover:bg-blue-100 hover:text-blue-400 hover:border-transparent">Log In</Link>
                <Link to="/signup" className="m-0 border border-white rounded-lg px-6 py-3 text-xl font-semibold bg-white mx-8 my-5 text-blue-400 hover:bg-blue-100 hover:text-blue-400 hover:border-transparent">Sign Up</Link>
                </div>
            ) : (
                <div className="py-8 my-8">
                <button
                onClick={props.logout}
                className="m-0 border border-white rounded-lg px-6 py-3 text-xl font-semibold bg-white mx-8 my-5 text-blue-400 hover:bg-blue-100 hover:text-blue-400 hover:border-transparent"
              >
                Log out
              </button>
                </div>
            )}
          
    
          
     
          
          <div className="my-8 p-4">
              <button className="underline hover:text-blue-500">Help</button>
          </div>
        </div>
        </>
    );
}

export default Home;