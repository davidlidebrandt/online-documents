import { Link } from 'react-router-dom';


function LogIn(props) {

    
    return (
    
      
      <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3 xl:col-start-5 xl:col-span-4">
      <form onSubmit={props.handleSubmit} className="bg-white rounded-md text-center my-12 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300">
          <div><h3 className="text-2xl text-white font-extrabold py-8 uppercase">Log In</h3></div>
          <div className="my-10 text-left mx-5 text-white">
              <label className="block font-bold text-lg">Email</label>
              <input ref={props.email} className="text-xl font-bold bg-blue-100 rounded w-full focus:outline-none focus:bg-white focus:text-black" type="email"></input>
              </div>
          <div className="my-10 text-left mx-5 text-white">
              <label className="block font-bold text-lg">Password</label>
              <input ref={props.password} className="text-xl font-bold bg-blue-100 rounded w-full focus:outline-none focus:bg-white focus:text-black" type="password"></input>
              </div>
            <div>
                <button className="w-4/5 m-0 border border-white rounded-lg px-6 py-3 text-xl font-semibold bg-blue-400 mx-8 my-5 text-white hover:bg-blue-100 hover:text-blue-400 hover:border-transparent" type="submit">Log In</button>
            </div>
            <div>
                <p className="text-white py-8 text-lg">Don't have an account? <Link className="underline text- hover:text-blue-500" to="/signup" >Sign up</Link></p>
            </div>    
      </form>
      </div> 

    );
  }

export default LogIn;