import { BrowserRouter as Router , Routes,  Route} from "react-router-dom";
import Navbar from "./layout/Navbar";
import Dashboard from "./pages/Dashboard";
import Footer from "./layout/Footer";
import BlockchainDevelopment from "./pages/Blockchain/BlockchainDevelopment/BlockchainDevelopment";
import BlockchainIdentity from "./pages/Blockchain/BlockchainIdentity/BlockchainIdentity";
import BlockchainDepin from "./pages/Blockchain/BlockchainDepin/BlockchainDepin";
import SupplyChain from "./pages/Enterprise/SupplyChain";
import TransportAndLogistics from "./pages/Enterprise/TransportAndLogistics";
import Entertainment from "./pages/Enterprise/Entertainment";
import Education from "./pages/Enterprise/Education";
import RealEstate from "./pages/Enterprise/RealEstate";
import Maas from "./pages/Consulting/Maas";
import Finance from "./pages/Enterprise/Finance";
import Healthcare from "./pages/Enterprise/Healthcare";
import ScDevelopment from "./pages/SmartContract/ScDevelopment";
import ScAudit from "./pages/SmartContract/ScAudit";
import AssetManagement from "./pages/Tokenization/AssetManagement";
import AssetToken from "./pages/Tokenization/AssetToken";
import RealEstateToken from "./pages/Tokenization/RealEstateToken";
import WhitepaperDev from "./pages/WhitepaperDev";
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
           <Route path="/contact-us" element={<ContactForm/>}/>
           <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>
        <Footer/>
     </Router>
  )
}

export default App
