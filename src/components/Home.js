import { Link } from 'react-router-dom';

function Home() {
    return (

        <div className="col-span-8 col-start-3 md:col-start-5 md:col-span-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300  mg-auto my-12 inline-block border h-64 text-center rounded border-blue-600 text-white text-xl font-medium">
          <h3>Online Documents</h3>
          <p className="m-6 text-left"><Link className="">Log in</Link> or <Link>sign up</Link> to start creating and managing your own text documents</p>
          <p>Help</p>
        </div>
    );
}

export default Home;