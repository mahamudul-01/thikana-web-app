import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/Thikana (3) 1.png";
const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-10 ">
      <nav>
        <div className="flex justify-between items-center font-semibold">
          <div className="flex justify-between items-center space-x-6">
            <div>
              <NavLink to='/'>
                <img src={logo} alt="Thikana" />
                </NavLink>
            </div>
            <ul className="flex justify-between items-center space-x-4 text-base text-gray-600 font-semibold">
              <li>
                <NavLink to='/rent'>RENT</NavLink>
              </li>
              <li>
                <NavLink to='/buy'>BUY</NavLink>
              </li>
              <li>
                <NavLink to='/sell'>SELL</NavLink>
              </li>
              <li>
              <NavLink to='/agent'>AGENT</NavLink>

              </li>
              <li>
                <NavLink to='/services'>SERVICES</NavLink>
              </li>
              <li>
              <NavLink to='/more'>MORE</NavLink>

              </li>
            </ul>
          </div>
          <div className="space-x-4">
            <button className="bg-[#055611] px-6 py-2 rounded-full text-white">
              Post Property <span className="text-black bg-white text-sm px-2 py-1 rounded-sm">Free</span>
            </button>
            <button className="text-[#055611]">Sign Up / Register</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
