import Giichi_Logo_Img from "../assets/Giichi_Logo.png";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-32 py-4 ">
      {/* Logo */}
       <div>
        <img src={Giichi_Logo_Img} alt="" className=""/>
       </div>
       
       {/* nav menu */}
       <div>
        <ul className="flex flex-row justify-between space-x-10">
          <li className="text-white text-lg font-semibold">Services</li>
          <li className="text-white text-lg font-semibold">Technologies</li>
          <li className="text-white text-lg font-semibold">Industries</li>
          <li className="text-white text-lg font-semibold">Clients</li>
          <li className="text-white text-lg font-semibold">Clone</li>
          <li className="text-white text-lg font-semibold">Company</li>
          <li className="text-white text-lg font-semibold">Company Us</li>
        </ul>
       </div>

       {/* Get in Touch button */}
       <div>
        <button 
        type="button"
        className="bg-white px-5 py-3 rounded-full text-md font-semibold">
          Get In Touch
        </button>
       </div>
    </div>
  )
}

export default Navbar
