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
import Maas from "./pages/Consulting/Maas/Maas";
import BlockchainConsulting from "./pages/Consulting/Consulting/BlockchainConsulting";
import Web3Consulting from "./pages/Consulting/Consulting/Web3Consulting";
import MetaverseConsulting from "./pages/Consulting/Consulting/MetaverseConsulting";
import DefiConsulting from "./pages/Consulting/Consulting/DefiConsulting";
import Custom from "./pages/Solutions/Exchange/Custom";
import WhiteLabel from "./pages/Solutions/Exchange/WhiteLabel";
import MarginTrading from "./pages/Solutions/Exchange/MarginTrading";
import Decentralized from "./pages/Solutions/Exchange/Decentralized";
import Derivatives from "./pages/Solutions/Exchange/Derivatives";
import Centralized from "./pages/Solutions/Exchange/Centralized";
import P2P from "./pages/Solutions/Exchange/P2P";
import MarketMaking from "./pages/Solutions/Exchange/MarketMaking";
import DefiWallet from "./pages/Solutions/Wallet/DefiWallet";
import DigitalWallet from "./pages/Solutions/Wallet/DigitalWallet";
import MpcCryptoWallet from "./pages/Solutions/Wallet/MpcCryptoWallet";
import MulticurrencyWallet from "./pages/Solutions/Wallet/MulticurrencyWallet";
import NftWallet from "./pages/Solutions/Wallet/NftWallet";
import TronWallet from "./pages/Solutions/Wallet/TronWallet";
import Web3Wallet from "./pages/Solutions/Wallet/Web3Wallet";
import WhiteLabelWallet from "./pages/Solutions/Wallet/WhiteLabelWallet";
import NftDev from "./pages/Solutions/NFT/NftDev";
import NftMarketplace from "./pages/Solutions/NFT/NftMarketplace";
import SemiFungibleToken from "./pages/Solutions/NFT/SemiFungibleToken";
import WhiteLabelNftDev from "./pages/Solutions/NFT/WhiteLabelNftDev";
import DaoBlockchain from "./pages/Solutions/Defi/DaoBlockchain";
import DappDevelopment from "./pages/Solutions/Defi/DappDevelopment";
import DefiDevelopment from "./pages/Solutions/Defi/DefiDevelopment";
import DefiStaking from "./pages/Solutions/Defi/DefiStaking";
import Web3Development from "./pages/Solutions/Web3/Web3Development";
import DigitalBanking from "./pages/Solutions/DigitalBanking/DigitalBanking";
import WhiteLabelBanking from "./pages/Solutions/DigitalBanking/WhiteLabelBanking";
import PaymentGateway from "./pages/Solutions/DigitalBanking/PaymentGateway";
import P2pLending from "./pages/Solutions/DigitalBanking/P2pLending";
import Launchpad from "./pages/Solutions/CoinDevelopment/Launchpad";
import ICO from "./pages/Solutions/CoinDevelopment/ICO";
import IDO from "./pages/Solutions/CoinDevelopment/IDO";
import Memecoin from "./pages/Solutions/CoinDevelopment/Memecoin";
import Stablecoin from "./pages/Solutions/CoinDevelopment/Stablecoin";
import Token from "./pages/Solutions/CoinDevelopment/Token";
import TradingBots from "./pages/Solutions/TradingBots/TradingBots";
import ArbitrageBots from "./pages/Solutions/TradingBots/ArbitrageBots";
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
           <Route path="/marketing-as-a-service" element={<Maas/>}/>
           <Route path="/blockchain-consulting-company" element={<BlockchainConsulting/>}/>
           <Route path="/web3-consulting-company" element={<Web3Consulting/>}/>
           <Route path="/metaverse-consulting-company" element={<MetaverseConsulting/>}/>
           <Route path="/defi-consulting-company" element={<DefiConsulting/>}/>
           <Route path="/defi-consulting-com" element={<DefiConsulting/>}/>
           <Route path="/custom-exchange" element={<Custom/>}/>
           <Route path="/white-label-exchange" element={<WhiteLabel/>}/>
           <Route path="/margin-trading-exchange" element={<MarginTrading/>}/>
           <Route path="/decentralized-exchange" element={<Decentralized/>}/>
           <Route path="/derivatives-exchange" element={<Derivatives/>}/>
           <Route path="/centralized-exchange" element={<Centralized/>}/>
           <Route path="/p2p-exchange" element={<P2P/>}/>
           <Route path="/market-making-exchange" element={<MarketMaking/>}/>
           <Route path="/defi-wallet" element={<DefiWallet/>}/>
           <Route path="/digital-wallet" element={<DigitalWallet/>}/>
           <Route path="/mpc-crypto-wallet" element={<MpcCryptoWallet/>}/>
           <Route path="/multi-currency-wallet" element={<MulticurrencyWallet/>}/>
           <Route path="/non-fungible-token-wallet" element={<NftWallet/>}/>
           <Route path="/polink-wallet" element={<TronWallet/>}/>
           <Route path="/web3-wallet" element={<Web3Wallet/>}/>
           <Route path="/white-label-wallet" element={<WhiteLabelWallet/>}/>
           <Route path="/nft-development" element={<NftDev/>}/>
           <Route path="/nft-marketplace" element={<NftMarketplace/>}/>
           <Route path="/semi-fungible-token-development" element={<SemiFungibleToken/>}/>
           <Route path="/white-label-nft-development" element={<WhiteLabelNftDev/>}/>
           <Route path="/defi-decentralized-finance-development" element={<DefiDevelopment/>}/>
           <Route path="/dao-blockchain-development" element={<DaoBlockchain/>}/>
           <Route path="/dapp-development" element={<DappDevelopment/>}/>
           <Route path="/defi-staking-development" element={<DefiStaking/>}/>
           <Route path="/web3-development" element={<Web3Development/>}/>
           <Route path="/digital-banking-solution" element={<DigitalBanking/>}/>
           <Route path="/white-label-banking-solution" element={<WhiteLabelBanking/>}/>
           <Route path="/payment-gateway-banking-solution" element={<PaymentGateway/>}/>
            <Route path="/p2p-lending-solution" element={<P2pLending/>}/>
           <Route path="/launchpad-coin-development" element={<Launchpad/>}/>
           <Route path="/ico-coin-development" element={<ICO/>}/>
           <Route path="/ido-coin-development" element={<IDO/>}/>
           <Route path="/meme-coin-development" element={<Memecoin/>}/>
           <Route path="/stable-coin-development" element={<Stablecoin/>}/>
           <Route path="/token-coin-development" element={<Token/>}/>
           <Route path="/trading-bot-development" element={<TradingBots/>}/>
           <Route path="/arbitrage-bot-development" element={<ArbitrageBots/>}/>
           <Route path="/contact-us" element={<ContactForm/>}/>
           <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>
        <Footer/>
     </Router>
  )
}

export default App
