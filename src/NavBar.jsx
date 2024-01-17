import { Link, Outlet } from "react-router-dom";
const NavBar = () => {
  return ( 
    <div>
    <nav className="flex place-content-between pt-4 pb-4  pl-7 pr-7 mb-3 bg-gray-900">
      <div className="logo font-abc text-white" >AmineLocation</div>
      <div className="links">
        <ul className="linksList flex place-content-between ">
        <li className="mr-7"><Link to={"/"} className="text-gray-200 font-Roboto inline-block hover:text-cyan-600"  >Home</Link></li>
      <li className=" mr-7"><Link className=" text-gray-200 font-Roboto inline-block hover:text-cyan-600" href="#about">About</Link></li>
      <li className=" mr-7"><Link className=" text-gray-200 font-Roboto inline-block hover:text-cyan-600" href="#services">Services</Link></li>
      <li className=" mr-7 "><Link to={"/contact"} className=" items-center font-Roboto text-gray-200 rounded-full flex justify-center  bg-cyan-500 hover:bg-cyan-600 w-32" href="#contact">Contact</Link></li>
        </ul>
      </div>
      
    </nav>
    <Outlet />
    </div>
    
    
   );
}
 
export default NavBar;