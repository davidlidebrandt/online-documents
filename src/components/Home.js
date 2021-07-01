import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <div className="col-span-8 col-start-3 md:col-start-5 md:col-span-4 text-center">
        <h3 className="my-3 font-bold text-5xl bg-white bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text gradient-color">Online Docs</h3>
        </div>
        
        <div className="col-span-8 col-start-3 md:col-start-5 md:col-span-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300  mg-auto my-12 inline-block border text-center rounded border-blue-600 text-white text-xl font-medium">
  
          <p className="py-12 px-4 mx-8 my-8 text-blue-400  bg-blue-50 rounded-lg transform -rotate-2">Welcome to Online Docs, here you can create, save and access text documents online from any device.</p>
          <div className="py-8 my-8">
          <Link className="m-0 border border-white rounded-lg px-6 py-3 text-xl font-semibold bg-blue-400 mx-8 my-5 text-white">Log In</Link>
          <Link className="m-0 border border-white rounded-lg px-6 py-3 text-xl font-semibold bg-white mx-8 my-5 text-blue-400">Sign Up</Link>
          </div>
          <div className="my-8 p-4">
              <Link className="underline">Help</Link>
          </div>
        </div>
        </>
    );
}

export default Home;