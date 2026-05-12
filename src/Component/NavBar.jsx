

import nav from "../Asset/group-2-nav.png";
import logo from "../Asset/group-35-logo.png";

import bagIcon from "../Asset/bag-icon.png";
import searchIcon from "../Asset/search-icon.png";

import line1 from "../Asset/Line 1.png";
import line2 from "../Asset/Line 2.png";

function Navbar() {

  return (

    <nav className="relative z-20">

      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-5 sm:px-6 md:px-10 md:py-8 lg:px-16">

        <img
          src={logo}
          alt="flora"
          className="h-10 w-auto object-contain transition-transform duration-500 hover:scale-105 sm:h-14 md:h-16 lg:h-20"
        />

        <img
          src={nav}
          alt="navigation"
          className="hidden h-5 w-auto object-contain transition-transform duration-500 hover:scale-105 md:block lg:h-6"
        />

        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">

          <img
            src={searchIcon}
            alt="search"
            className="w-4 cursor-pointer object-contain transition-transform duration-300 hover:scale-110 sm:w-5"
          />

          <img
            src={bagIcon}
            alt="bag"
            className="w-4 cursor-pointer object-contain transition-transform duration-500 hover:scale-110 sm:w-5"
          />

          <div className="flex cursor-pointer flex-col gap-1">

            <img
              src={line1}
              alt="line1"
              className="w-4 object-contain transition-transform duration-500 hover:scale-105 sm:w-5"
            />

            <img
              src={line2}
              alt="line2"
              className="ml-auto w-2 object-contain transition-transform duration-500 hover:scale-105 sm:w-3"
            />

          </div>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;