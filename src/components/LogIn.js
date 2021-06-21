
function LogIn(props) {
    return (
    
      <div className="min-h-screen "> 
      <div className="grid grid-cols-12">
      <form onSubmit={props.handleSubmit} className="col-start-5 col-span-4 bg-white border-4 border-blue-400 rounded text-center my-12">
          <div><h3 className="text-2xl text-blue-600 font-bold my-5">Log In</h3></div>
          <div className="my-10 text-left mx-5 text-blue-600">
              <label className="block font-bold">Email</label>
              <input ref={props.email} className="rounded shadow-lg w-full focus:outline-none focus:bg-blue-500 focus:text-white" type="email"></input>
              </div>
          <div className="my-10 text-left mx-5 text-blue-600">
              <label className="block font-bold">Password</label>
              <input ref={props.password} className="rounded shadow-lg w-full focus:outline-none focus:bg-blue-500 focus:text-white" type="password"></input>
              </div>
            <div>
                <button className="border border-blue-600 rounded-lg px-5 py-3 text-xl font-semibold bg-blue-400 mx-8 my-5 text-white" type="submit">Log In</button>
            </div>    
      </form>
      </div> 
      </div>
    );
  }

export default LogIn;