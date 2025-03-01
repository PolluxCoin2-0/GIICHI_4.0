import { BrowserRouter as Router , Routes,  Route} from "react-router-dom";
import Navbar from "./layout/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./layout/Footer";
import BlockchainDevelopment from "./pages/Blockchain/Blockchain/BlockchainDevelopment";
import BlockchainIdentity from "./pages/Blockchain/Blockchain/BlockchainIdentity";
import BlockchainDepin from "./pages/Blockchain/Blockchain/BlockchainDepin";
import SupplyChain from "./pages/Blockchain/Enterprise/SupplyChain";
import TransportAndLogistics from "./pages/Blockchain/Enterprise/TransportAndLogistics";
import Entertainment from "./pages/Blockchain/Enterprise/Entertainment";
import Education from "./pages/Blockchain/Enterprise/Education";
import RealEstate from "./pages/Blockchain/Enterprise/RealEstate";
import Maas from "./pages/Consulting/Maas";
import Finance from "./pages/Blockchain/Enterprise/Finance";
import Healthcare from "./pages/Blockchain/Enterprise/Healthcare";
import ScDevelopment from "./pages/Blockchain/SmartContract/ScDevelopment";
import ScAudit from "./pages/Blockchain/SmartContract/ScAudit";
import AssetManagement from "./pages/Blockchain/Tokenization/AssetManagement";
import AssetToken from "./pages/Blockchain/Tokenization/AssetToken";
import RealEstateToken from "./pages/Blockchain/Tokenization/RealEstateToken";
import WhitepaperDev from "./pages/Blockchain/Whitepaper/WhitepaperDev";
import AiSolutions from "./pages/Ai/AiSolutions";
import GenerativeAi from "./pages/Ai/GenerativeAi";
import ContactForm from "./components/resuableComponent/ContactForm";
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
           <Route path="/blockchain-in-supply-chain" element={<SupplyChain/>}/>
           <Route path="/blockchain-in-transport-and-logistics" element={<TransportAndLogistics/>}/>
           <Route path="/blockchain-in-entertainment" element={<Entertainment/>}/>
           <Route path="/blockchain-in-education" element={<Education/>}/>
           <Route path="/blockchain-in-real-estate" element={<RealEstate/>}/>
           <Route path="/blockchain-in-Marketing" element={<Maas/>}/>
           <Route path="/blockchain-in-finance" element={<Finance/>}/>
           <Route path="/blockchain-in-healthcare" element={<Healthcare/>} />
           <Route path="/smart-contract-development" element={<ScDevelopment/>}/>
           <Route path="/smart-contract-audit" element={<ScAudit/>}/>
           <Route path="/asset-tokenization" element={<AssetToken/>}/>
           <Route path="/asset-management" element={<AssetManagement/>}/>
           <Route path="/real-estate-tokenization" element={<RealEstateToken/>}/>
           <Route path="/whitepaper-development" element={<WhitepaperDev/>}/>
           <Route path="/ai-ml-solution" element={<AiSolutions/>}/>
           <Route path="/generative-ai" element={<GenerativeAi/>}/>
           <Route path="/contact-us" element={<ContactForm/>}/>
           <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>
        <Footer/>
     </Router>
  )
}

export default App
