/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Faq from "../../../components/resuableComponent/Faq";
import { PolinkWalletFaq } from "../../../components/data/faqsData";
import BlockchainImg from "../../../assets/blockchainImg.png";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import Offerings from "../../../components/CommonComponent/Offerings";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import andriodImg from "../../../assets/android.png";
import appleImg from "../../../assets/apple.png";
import chromeImg from "../../../assets/chrome.png";
import wallet1Img from "../../../assets/wallet1.png";
import wallet2Img from "../../../assets/wallet2.png";
import securityImg from "../../../assets/secure.png";
import evmLogo from "../../../assets/evmLogo.png";
import poxLogo from "../../../assets/poxLogo.png";
import walletImg from "../../../assets/wallet (2).png";
import managementImg from "../../../assets/manage.png";
import energyConserveImg from "../../../assets/energyconserve.png";
import { motion } from "framer-motion";

const PolinkWallet = () => {
  const [totalAccountData, setTotalAccountData] = useState(0);

  const getTotalAccountStatusData = async () => {
    try {
      const response = await axios.get("https://node.poxscan.io/api/status");
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalAccountData = await getTotalAccountStatusData();
        setTotalAccountData(totalAccountData?.message?.totaladdr);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-6 md:pt-12 mb-20">
      {/* POLINK WALLET-Banner Image content */}
      <BannerContent
        img={BlockchainImg}
        title1="POLINK WALLET"
        title2=""
        desc="Polink Wallet – Your Gateway to the Web3 Ecosystem. Connect, build, and grow with Polink as you explore decentralized networking, innovative blockchain solutions, and exciting digital opportunities."
      />

      {/* Trusted By Over Users Worldwide */}
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-12 xl:px-32 2xl:px-32 3xl:px-60 pt-10 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h3
            className="text-white text-2xl lg:text-3xl 2xl:text-5xl font-semibold animate-blurToVisible"
            style={{ lineHeight: "1.3" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Trusted By Over{" "}
            <span className="text-transparent bg-clip-text bg-green-gradient">
              {totalAccountData ? totalAccountData.toLocaleString() : "0"}
            </span>{" "}
            <br />
            Users Worldwide
          </motion.h3>

          <motion.p
            className="text-white text-opacity-70 text-sm md:text-[16px] font-normal pt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            A decentralized self-custody wallet offering :
          </motion.p>

          <ul className="pt-4">
            <motion.li
              className="text-white text-sm md:text-[16px] font-normal"
              style={{ lineHeight: "1.7" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.4 }}
            >
              <span className="w-2 h-2 bg-green mr-2 inline-block"></span>
              Security :{" "}
              <span className="text-white text-opacity-70 text-sm md:text-[16px] font-normal">
                Protect your assets with robust, transparent, and stable <br />
                architecture.
              </span>
            </motion.li>

            <motion.li
              className="text-white pt-4 text-sm md:text-[16px] font-normal"
              style={{ lineHeight: "1.7" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.5 }}
            >
              <span className="w-2 h-2 bg-green mr-2 inline-block"></span>
              Ecosystem Support :{" "}
              <span className="text-white text-opacity-70 text-sm md:text-[16px] font-normal">
                Fully integrated with PolluxChain and deeply <br />
                supporting its staking mechanisms.
              </span>
            </motion.li>

            <motion.li
              className="text-white pt-4 text-sm md:text-[16px] font-normal"
              style={{ lineHeight: "1.7" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.6 }}
            >
              <span className="w-2 h-2 bg-green mr-2 inline-block"></span>
              DApp Accessibility :{" "}
              <span className="text-white text-opacity-70 text-sm md:text-[16px] font-normal">
                Effortlessly connect with Web3 DApps for <br />
                seamless on-chain operations.
              </span>
            </motion.li>
          </ul>

          <motion.div
            className="flex flex-row items-center space-x-6 pt-4 md:pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="https://play.google.com/store/apps/details?id=com.app.polink_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit to App Store"
              title="Visit to App Store"
            >
              <img
                src={andriodImg}
                alt="ANDROID STORE ICON"
                className="w-10 cursor-pointer transform transition-transform duration-300 hover:scale-110"
              />
            </Link>

            <Link
              to="https://testflight.apple.com/join/xgFsCggS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit to App Store"
              title="Visit to App Store"
            >
              <img
                src={appleImg}
                alt="APPLE STORE ICON"
                className="w-10 cursor-pointer transform transition-transform duration-300 hover:scale-110"
              />
            </Link>

            <Link
              to="https://chromewebstore.google.com/detail/polink/afeibjjgfjfphjedhdjgbgbhpomolbjm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit to Google Play Store"
              title="Visit to Google Play Store"
            >
              <img
                src={chromeImg}
                alt="GOOGLE PLAY STORE ICON"
                className="w-10 cursor-pointer transform transition-transform duration-300 hover:scale-110"
              />
            </Link>
          </motion.div>
        </motion.div>

        <div className="hidden md:flex relative mr-52 md:mr-24 lg:mr-48 2xl:mr-56 shadow-container">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.img
              src={wallet1Img}
              alt="Wallet 1"
              className="md:w-[200px] lg:w-[250px] xl:w-[290px] h-[400px] lg:h-[450px] xl:h-[560px] z-10 relative"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src={wallet2Img}
              alt="Wallet 2"
              className="absolute left-60 -top-3 w-[230px] lg:w-[260px] xl:w-[300px] h-[420px] lg:h-[470px] xl:h-[580px] z-20"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Polink: Advanced Wallet Security Protection */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-12 xl:px-32 2xl:px-32 3xl:px-60 relative overflow-hidden mt-12 md:mt-40">
      
      {/* Text Content Animation */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-white text-xs md:text-xl font-medium pb-0 lg:pb-2">
          Polink: Advanced Wallet Security Protection
        </p>
        <span
          className="text-transparent bg-clip-text bg-green-gradient text-2xl md:text-[30px] lg:text-4xl xl:text-5xl font-bold font-poppins block mt-2"
          style={{ lineHeight: "1.2" }}
        >
          Your Digital Assets, <br />
          Secured at Every Level
        </span>

        <p className="text-white pt-5 text-sm md:text-[16px] font-normal w-full md:w-[60%]">
          Polink ensures a comprehensive security shield for your digital
          assets, safeguarding everything from the environment to transaction
          data.
        </p>

        <ul className="hidden xl:block pt-4">
          <li
            className="text-white text-md md:text-[16px] font-normal"
            style={{ lineHeight: "1.7" }}
          >
            <span className="w-2 h-2 bg-green mr-2 inline-block"></span>
            Environment Security:{" "}
            <span className="text-white text-opacity-70">
              Polink conducts multidimensional tests on the running <br />
              environment to ensure optimal system security.
            </span>
          </li>
          <li
            className="text-white pt-4 text-md md:text-[16px] font-normal"
            style={{ lineHeight: "1.7" }}
          >
            <span className="w-2 h-2 bg-green mr-2 inline-block"></span>
            Advanced Encryption:{" "}
            <span className="text-white text-opacity-70">
              Your private keys are dual-encrypted with state-of-the-art <br />
              security technologies, keeping your assets secure at all times.
            </span>
          </li>
          <li
            className="text-white pt-4 text-md md:text-[16px] font-normal"
            style={{ lineHeight: "1.7" }}
          >
            <span className="w-2 h-2 bg-green mr-2 inline-block"></span>
            Comprehensive Protection:{" "}
            <span className="text-white text-opacity-70">
              Every transaction is monitored and protected, delivering <br />
              unmatched reliability and peace of mind.
            </span>
          </li>
        </ul>
      </motion.div>

      {/* Image Animation */}
      <motion.div
        className="flex flex-row items-center justify-center md:justify-end relative mt-6 md:mt-0"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        <img
          src={securityImg}
          alt="Security Image"
          className="w-[60%] md:w-[90%] lg:w-[70%] 2xl:w-[75%] z-20 rotating-image"
        />
      </motion.div>
    </div>

      {/*  Polink: Inclusive and Expansive Network Coverage */}
      <div className="px-4 md:px-8 lg:px-12 xl:px-32 2xl:px-32 3xl:px-52 bg-black text-start md:text-center flex flex-col justify-center items-center mt-20 md:mt-40">
      <p className="text-white text-xs md:text-xl font-medium pb-2">
        Polink: Inclusive and Expansive Network Coverage
      </p>

      {/* Slide-in from top */}
      <motion.span
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-transparent bg-clip-text bg-green-gradient text-2xl md:text-4xl lg:text-5xl font-semibold font-poppins"
        style={{ lineHeight: "1.2" }}
      >
        Seamless Integration with <br/>PolluxChain and Beyond
      </motion.span>

      {/* Boxes */}
      <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 lg:space-x-10 2xl:space-x-10 space-y-4 md:space-y-0 items-center w-full 3xl:w-[70%] h-auto pt-6 md:pt-10">
        
        {/* Box 1 */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="flex flex-col items-center w-full md:w-[33%] py-8 bg-[#37DD00] bg-opacity-5 border-2 border-white border-opacity-20 rounded-[56px] cursor-pointer"
        >
          <img src={poxLogo} alt="Pox Logo" className="w-12 md:w-16" />
          <p className="text-white pt-6 text-sm lg:text-md xl:text-[16px] font-medium font-poppins text-center leading-snug">
            Deep PolluxChain Support
            <br />
            <span className="text-sm text-white text-opacity-70 block pt-3">
              Fully compatible with POX, USDX, and <br />
              Uvi tokens, Polink supports unique s<br />
              taking mechanisms, allowing you to <br /> earn rewards or
              delegate resources <br />
              effortlessly.
            </span>
          </p>
        </motion.div>

        {/* Box 2 */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          className="flex flex-col items-center w-full md:w-[33%] py-10 bg-[#37DD00] bg-opacity-5 border-2 border-white border-opacity-20 rounded-[56px] cursor-pointer"
        >
          <img src={evmLogo} alt="EVM Logo" className="w-12 md:w-16 h-20" />
          <p className="text-white pt-6 text-sm lg:text-md xl:text-[16px] font-medium font-poppins text-center leading-snug">
            Heterogeneous EVM Network <br />
            <span className="text-sm text-white text-opacity-70 block pt-3">
              Polink extends its reach to support <br />
              other EVM-compatible networks, <br />
              enabling seamless interaction with Ethereum, BSC, and more.
            </span>
          </p>
        </motion.div>

        {/* Box 3 */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false }}
          className="flex flex-col items-center w-full md:w-[33%] py-11 bg-[#37DD00] bg-opacity-5 border-2 border-white border-opacity-20 rounded-[56px] cursor-pointer"
        >
          <img src={walletImg} alt="Polink Wallet Logo" className="w-12 md:w-16" />
          <p className="text-white pt-8 text-sm lg:text-md xl:text-[16px] font-medium font-poppins text-center leading-snug">
            Multichain HD Wallet Structure
            <br />
            <span className="text-sm text-white text-opacity-70 block pt-3">
              Manage assets across PolluxChain, <br />
              Ethereum, BSC, and other supported networks with a single
              mnemonic, <br />
              ensuring efficiency and simplicity.
            </span>
          </p>
        </motion.div>
      </div>
    </div>

      {/* Polink: Enhanced Security for Asset Management*/}
      <div className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-x-32 px-4 md:px-8 lg:px-12 xl:px-32 2xl:px-32 3xl:px-60 w-full mt-20 md:mt-40">
        <div className="w-full md:w-[40%] relative ml-0 md:ml-6 xl:ml-0">
          <img
            src={managementImg}
            alt="asset management image"
            className="w-[60%] md:w-[80%] lg:w-[50%] ml-12 md:ml-0 z-20 "
          />
        </div>
        <div className="w-full md:w-[60%] animate-slideInFromBottom">
          <p className="text-white text-xs md:text-xl font-medium pt-4 md:pt-0 pb-0 md:pb-2">
            Polink: Enhanced Security for Asset Management
          </p>
          <span className="block text-transparent bg-clip-text bg-green-gradient text-2xl md:text-4xl xl:text-5xl font-semibold font-poppins">
            Uncompromising Protection for Your Digital Assets
          </span>
          <ul className="pt-8 ">
            <li
              className="text-white text-sm md:text-[16px]"
              style={{ lineHeight: "1.6" }}
            >
              <span className="w-2 h-2 bg-green mr-2  inline-block"></span>
              Decentralized Wallet Security :{" "}
              <span className="text-white text-opacity-70  text-sm md:text-[16px]">
                Polink ensures complete data security by storing private keys
                locally and encrypting them with multi-layer algorithms, giving
                you full control over your assets.
              </span>
            </li>
            <li
              className="text-white pt-6 text-sm md:text-[16px]"
              style={{ lineHeight: "1.6" }}
            >
              <span className="w-2 h-2 bg-green mr-2 inline-block"></span>
              Hot and Cold Wallet Integration :{" "}
              <span className="text-white text-opacity-70  text-sm md:text-[16px]">
                Enjoy double protection with seamless hot wallet access for
                transactions and cold wallet storage for physical isolation and
                added security.
              </span>
            </li>
            <li
              className="text-white pt-6 text-sm md:text-[16px]"
              style={{ lineHeight: "1.6" }}
            >
              <span className="w-2 h-2 bg-green mr-2 inline-block"></span>
              Node Stability and Reliability :{" "}
              <span className="text-white text-opacity-70  text-sm md:text-[16px]">
                Polink supports free node switching and automatic reconnection,
                ensuring uninterrupted and reliable operations. With Polink,
                your assets are managed with advanced security measures,
                safeguarding them in every scenario.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Polink: Convenience Redefined for a Superior User Experience */}
      <div className="flex flex-col md:flex-row justify-between items-center space-x-0 md:space-x-32 px-4 md:px-8 lg:px-12 xl:px-32 2xl:px-32 3xl:px-60 mt-20 ">
        <div className="w-full md:w-[60%] animate-slideInFromBottom">
          <p className="text-white text-xs md:text-xl font-medium pb-2">
            Polink: Convenience Redefined for a Superior User Experience
          </p>
          <span className="text-transparent bg-clip-text bg-green-gradient text-2xl md:text-4xl xl:text-5xl font-semibold font-poppins block mt-2">
            Effortless and Intuitive Wallet Management
          </span>
          <ul className="pt-4 md:pt-6">
            <li
              className="text-white pt-5 text-sm md:text-[16px]"
              style={{ lineHeight: "1.6" }}
            >
              <span className="w-2 h-2 bg-green mr-2 inline-block"></span>
              One-Click Wallet Setup :{" "}
              <span className="text-sm md:text-[16px] text-white text-opacity-70">
                Easily create or import wallets with a single click. Polink
                supports HD wallets, multiple wallet accounts, and seamless
                integration with Ledger wallets via Bluetooth.
              </span>
            </li>
            <li className="text-white pt-5 text-sm md:text-[16px]">
              <span className="w-2 h-2 bg-green mr-2 inline-block"></span>
              Multisignature Support :{" "}
              <span
                className="text-sm md:text-[16px] text-white text-opacity-70"
                style={{ lineHeight: "1.6" }}
              >
                Experience enhanced security and collaboration with
                multisignature functionality, allowing multiple accounts to
                manage a single set of assets across various use cases.
              </span>
            </li>
            <li className="text-white pt-5 text-sm md:text-[16px]">
              <span className="w-2 h-2 bg-green mr-2 inline-block"></span>
              Integrated Web3 Browser :{" "}
              <span
                className="text-sm md:text-[16px] text-white text-opacity-70"
                style={{ lineHeight: "1.6" }}
              >
                Access the latest Web3 DApps in DeFi, social media, and gaming
                effortlessly. Add your favorite DApps to your personalized list
                for quick access.
              </span>{" "}
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[40%] flex justify-center md:justify-end items-center relative md:pt-0 mr-0 md:mr-16 lg:mr-12 mt-6 md:mt-0">
          <img
            src={energyConserveImg}
            alt="Energy conservation image"
            className="w-[70%]"
          />
        </div>
      </div>

      {/* web3 crypto  wallet offerings */}
      <Offerings data="Reach Giichi and discuss your requirements with our Wallet experts TODAY!" />

      {/* FAQ SECTION */}
      <div>
        <Faq data={PolinkWalletFaq} />
      </div>
    </div>
  );
};

export default PolinkWallet;
