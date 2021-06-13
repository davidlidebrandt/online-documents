import Header from "./Header.js"
import Footer from "./Footer.js"

function App() {
  return (
    <div className="bg-blue-500 min-h-screen">
      <Header/>
      <div className="min-h-screen">
        <div className="bg-blue-400 m-auto my-5 py-5 text-lg rounded-md text-white container min-h-screen"></div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
