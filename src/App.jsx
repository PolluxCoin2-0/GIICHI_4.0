import { BrowserRouter as Router , Routes,  Route} from "react-router-dom";
import Navbar from "./layout/Navbar";
import Dashboard from "./pages/Dashboard";
import Footer from "./layout/Footer";
import BlockchainDevelopment from "./pages/Blockchain/BlockchainDevelopment/BlockchainDevelopment";
import BlockchainIdentity from "./pages/Blockchain/BlockchainIdentity/BlockchainIdentity";
import BlockchainDepin from "./pages/Blockchain/BlockchainDepin/BlockchainDepin";
import ContactForm from "./components/resuableComp/ContactForm";
import AboutUs from "./pages/About/AboutUs";
import { ToastContainer } from "react-toastify";
function App() {

  return (
     <Router>
      <Navbar/>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        newestOnTop={true}
        pauseOnFocusLoss
        toastClassName="custom-toast"
      />
        <Routes>
           <Route path="/" element={<Dashboard/>}/>
           <Route path="/dashboard" element={<Dashboard/>}/>
           <Route path="/blockchain-development" element={<BlockchainDevelopment/>}/>
           <Route path="/blockchain-identity" element={<BlockchainIdentity/>}/>
           <Route path="/blockchain-depin" element={<BlockchainDepin/>}/>
           <Route path="/contact-us" element={<ContactForm/>}/>
           <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>
        <Footer/>
     </Router>
  )
}

export default App
