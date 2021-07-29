import { Link } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"

function Home(props) {
    const {currentUser } = useAuth();

    return (
        <>
        
        <div className="col-span-8 col-start-3 md:col-start-5 md:col-span-4 text-center">
        
        </div>
        
        <div className="col-span-10 col-start-2 md:col-start-4 md:col-span-6 xl:col-start-5 xl:col-span-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300  mg-auto my-12 inline-block border text-center rounded-xl text-white text-xl font-medium">
        <h3 className="my-8 font-black text-5xl">Online Docs</h3>
          <p className="text-white px-10 font-bold">Welcome to Online Docs, here you can create, save and access text documents online from any device.</p>
          
            
          {currentUser === null ? (
                <div className="px-20 my-16">
                <Link to="/login" className="block m-0 border-2 border-white rounded-2xl px-6 py-4 text-xl font-bold bg-blue-400 mx-8 my-5 text-white hover:bg-blue-100 hover:text-blue-400 hover:border-transparent">Log In</Link>
                <Link to="/signup" className="block m-0 border border-white rounded-2xl px-6 py-4 text-xl font-bold bg-white mx-8 my-5 text-blue-400 hover:bg-blue-100 hover:text-blue-400 hover:border-transparent">Sign Up</Link>
                </div>
            ) : (
                <div className="px-20 my-16">
                <button
                onClick={props.logout}
                className="m-0 border border-white rounded-lg px-6 py-3 text-xl font-bold bg-white mx-8 my-5 text-blue-400 hover:bg-blue-100 hover:text-blue-400 hover:border-transparent"
              >
                Log out
              </button>
                </div>
            )}
          
    
          
     
          
          <div className="my-4 p-4">
              <button className="underline text-xl font-bold hover:text-blue-500">Help</button>
          </div>
        </div>
        </>
    );
}

export default Home;