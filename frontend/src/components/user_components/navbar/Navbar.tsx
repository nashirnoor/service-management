import { NavLink } from "react-router-dom";
import SocialMedia from "../common/SocialMedia";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="z-50 bg-white sticky top-0 left-0 right-0 shadow-md">
      <header className="flex cursor-pointer text-black items-center mx-auto max-w-screen-xl container justify-between h-[5rem] px-4">
        <div className="w-[56px] h-[63px]">
          <NavLink to="/">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=112,fit=crop,q=95/m7V8PnDoX2ur9GvK/whatsapp-image-2023-10-15-at-22.21.49_prev_ui-dOqlV8w8rnUPzopk.png"
              alt=""
            />
          </NavLink>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static w-full md:w-auto top-full md:top-0 left-0 md:left-auto`}>
          <ul className="md:flex md:gap-7 bg-white md:bg-transparent flex-col md:flex-row items-center py-4 md:py-0 pl-6 md:pl-0 font-bold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 md:py-0 px-4 border-b-2 ${
                    isActive ? 'border-black text-black font-semibold' : 'border-transparent text-gray-600'
                  } hover:border-black hover:text-black transition-all duration-300 mr-5`
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `block py-2 md:py-0 px-4 border-b-2 ${
                    isActive ? 'border-black text-black font-semibold' : 'border-transparent text-gray-600'
                  } hover:border-black hover:text-black transition-all duration-300 mr-5`
                }
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `block py-2 md:py-0 px-4 border-b-2 ${
                    isActive ? 'border-black text-black font-semibold' : 'border-transparent text-gray-600'
                  } hover:border-black hover:text-black transition-all duration-300 mr-5`
                }
                onClick={closeMenu}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 md:py-0 px-4 border-b-2 ${
                    isActive ? 'border-black text-black font-semibold' : 'border-transparent text-gray-600'
                  } hover:border-black hover:text-black transition-all duration-300 mr-5`
                }
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 md:py-0 px-4 border-b-2 ${
                    isActive ? 'border-black text-black font-semibold' : 'border-transparent text-gray-600'
                  } hover:border-black hover:text-black transition-all duration-300 mr-5`
                }
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li className="md:hidden pt-4">
              <SocialMedia />
            </li>
          </ul>
        </nav>

        <SocialMedia className="hidden md:flex" />
      </header>
    </div>
  );
};

export default Navbar;
