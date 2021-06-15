import Header from "./Header.js"
import Footer from "./Footer.js"
import image from "../images/19366.jpg"


function App() {
  return (
    <div className="min-h-screen bg-main-bg bg-cover bg-center">
      <Header/>
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white mg-auto inline-block border w-1/2 h-3/6 text-center rounded border-blue-600 text-blue-600 text-xl font-medium p-4">
            <p>Create new document</p>
            <p>Help</p>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
