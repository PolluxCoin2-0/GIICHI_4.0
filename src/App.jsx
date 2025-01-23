import { BrowserRouter as Router , Routes,  Route} from "react-router-dom";
import Navbar from "./layout/Navbar";
import Dashboard from "./pages/Dashboard";
import Footer from "./layout/Footer";
import BlockchainDevelopment from "./pages/Blockchain/BlockchainDevelopment/BlockchainDevelopment";
import BlockchainIdentity from "./pages/Blockchain/BlockchainIdentity/BlockchainIdentity";
function App() {

  return (
     <Router>
      <Navbar/>
        <Routes>
           <Route path="/" element={<Dashboard/>}/>
           <Route path="/dashboard" element={<Dashboard/>}/>
           <Route path="/blockchain-development" element={<BlockchainDevelopment/>}/>
           <Route path="/blockchain-identity" element={<BlockchainIdentity/>}/>
        </Routes>
        <Footer/>
     </Router>
  )
}

export default App
