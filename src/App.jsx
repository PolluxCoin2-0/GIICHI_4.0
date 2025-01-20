import { BrowserRouter as Router , Routes,  Route} from "react-router-dom";
import Navbar from "./layout/Navbar";
import Dashboard from "./pages/Dashboard";
import Footer from "./layout/Footer";

function App() {

  return (
     <Router>
      <Navbar/>
        <Routes>
           <Route path="/" element={<Dashboard/>}/>
           <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        <Footer/>
     </Router>
  )
}

export default App
