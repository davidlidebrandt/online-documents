
function LogIn(props) {
    return (
    
      
      <div className="col-span-3">
      <form onSubmit={props.handleSubmit} className="bg-white border-4 border-blue-300 rounded-md text-center my-12">
          <div><h3 className="text-2xl text-blue-500 font-bold my-5">Log In</h3></div>
          <div className="my-10 text-left mx-5 text-blue-500">
              <label className="block font-bold">Email</label>
              <input ref={props.email} className="rounded shadow-lg w-full focus:outline-none focus:bg-blue-400 focus:text-white" type="email"></input>
              </div>
          <div className="my-10 text-left mx-5 text-blue-500">
              <label className="block font-bold">Password</label>
              <input ref={props.password} className="rounded shadow-lg w-full focus:outline-none focus:bg-blue-400 focus:text-white" type="password"></input>
              </div>
            <div>
                <button className="border border-blue-600 rounded-lg px-5 py-3 text-xl font-semibold bg-blue-400 mx-8 my-5 text-white" type="submit">Log In</button>
            </div>    
      </form>
      </div> 

    );
  }

export default LogIn;