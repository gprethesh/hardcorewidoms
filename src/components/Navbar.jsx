import { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Logo from "../assets/logo.png";

function Navbar() {
  const location = useLocation();
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (click) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [click]);

  useEffect(() => {
    setClick(false);
    document.body.style.overflow = "unset";
  }, [location]);

  return (
    <header className="w-full bg-white/40 backdrop-blur-md shadow-lg relative z-[9999]">
      <nav className="w-full px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="logo">
            <Link to="/" onClick={() => setClick(false)}>
              <img
                src={Logo}
                alt="hardcore-wisdoms"
                className="w-[100px] md:w-[170px] pl-0 md:pl-5"
              />
            </Link>
          </span>

          <div className="md:hidden">
            <button
              onClick={() => setClick(!click)}
              className="text-2xl p-3 hover:bg-white/20 rounded-lg transition-colors"
            >
              {click ? <IoClose /> : <IoMenu />}
            </button>
          </div>

          <ul
            className={`${
              click ? "flex" : "hidden"
            } md:flex flex-col md:flex-row fixed md:relative top-[72px] md:top-0 left-0 right-0 
            bg-[#EFEEEE] md:bg-transparent backdrop-blur-lg md:backdrop-blur-none
            border-t md:border-0 border-white/20
            py-6 md:py-0 px-4 md:px-0 space-y-3 md:space-y-0 md:space-x-6 
            items-start md:items-center
            shadow-lg md:shadow-none
            min-h-[calc(100vh-72px)] md:min-h-0
            z-50 overflow-y-auto md:overflow-visible`}
          >
            <li className="w-full md:w-auto">
              <Link
                to="/"
                className={`block w-full md:w-auto px-4 py-2.5 
                  ${
                    location.pathname === "/"
                      ? "bg-gradient-to-r from-[#121212] to-[#670404] text-white"
                      : ""
                  } 
                  hover:bg-gradient-to-r hover:from-[#121212] hover:to-[#670404] hover:text-white
                  rounded-lg transition-colors`}
                onClick={() => setClick(false)}
              >
                INTRODUCTION
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                to="/research"
                className={`block w-full md:w-auto px-4 py-2.5 
                  ${
                    location.pathname === "/research"
                      ? "bg-gradient-to-r from-[#121212] to-[#670404] text-white"
                      : ""
                  } 
                  hover:bg-gradient-to-r hover:from-[#121212] hover:to-[#670404] hover:text-white
                  rounded-lg transition-colors`}
                onClick={() => setClick(false)}
              >
                RESEARCH
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                to="/mastery"
                className={`block w-full md:w-auto px-4 py-2.5 
                  ${
                    location.pathname === "/mastery"
                      ? "bg-gradient-to-r from-[#121212] to-[#670404] text-white"
                      : ""
                  } 
                  hover:bg-gradient-to-r hover:from-[#121212] hover:to-[#670404] hover:text-white
                  rounded-lg transition-colors`}
                onClick={() => setClick(false)}
              >
                WOMAN MASTERY
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                to="/affiliate"
                className={`block w-full md:w-auto px-4 py-2.5 
                  ${
                    location.pathname === "/affiliate"
                      ? "bg-gradient-to-r from-[#121212] to-[#670404] text-white"
                      : ""
                  } 
                  hover:bg-gradient-to-r hover:from-[#121212] hover:to-[#670404] hover:text-white
                  rounded-lg transition-colors`}
                onClick={() => setClick(false)}
              >
                BECOME AFFILIATE
              </Link>
            </li>
            <li className="w-full md:w-auto md:ml-6">
              <Link to="/login" className="block w-full md:w-auto">
                <Button
                  variant="default"
                  size="sm"
                  className="text-xs sm:text-sm border-2 border-[#121212] bg-white hover:bg-gradient-to-r from-[#121212] to-[#670404] text-[#121212] hover:text-white transition-colors duration-300"
                >
                  LOGIN
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
