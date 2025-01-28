import Giichi_Logo_Img from "../assets/Giichi_Logo.png";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center 3xl:px-60 py-4 ">
      {/* Logo */}
      <a href="/dashboard">
       <div>
        <img src={Giichi_Logo_Img} alt="" className="cursor-pointer"/>
       </div>
       </a>
       
       {/* nav menu */}
       <div>
        <ul className="flex flex-row justify-between space-x-10">
          <a href="/blockchain-development">
          <li className="text-white text-lg font-semibold cursor-pointer">Blockchain</li>
          </a>
          <li className="text-white text-lg font-semibold">AI</li>
          <li className="text-white text-lg font-semibold">Gaming</li>
          <li className="text-white text-lg font-semibold">Counsulting</li>
          <li className="text-white text-lg font-semibold">Solutions</li>
          <li className="text-white text-lg font-semibold">Industries</li>
          <li className="text-white text-lg font-semibold">About Us</li>
        </ul>
       </div>

       {/* Get in Touch button */}
       <div>
        <button 
        type="button"
        className="bg-green-gradient px-5 py-3 rounded-full text-md font-semibold">
          Get In Touch
        </button>
       </div>
    </div>
  )
}

export default Navbar;
