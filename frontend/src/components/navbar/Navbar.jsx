import React from "react";
import NavbarTop from "./navbarParts/NavbarTop";
import NavbarMiddle from "./navbarParts/NavbarMiddle";
import NavbarBottom from "./navbarParts/NavbarBottom";
import NavbarPhoto from "./navbarParts/NavbarPhoto";

import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isProductPage = /^\/products\/\d+$/.test(location.pathname);
  const isProductsByCategoryPatch = /^\/categories\/[^/]+\/?$/.test(location.pathname);


  return (
    <div className="flex-col">
      <div>
        <NavbarTop />
      </div>
      <div>
        <NavbarMiddle />
      </div>
      <div>
        <NavbarBottom />
      </div>
     
      {location.pathname !== "/cart" && !isProductPage && !isProductsByCategoryPatch ? (
        <div>
          <NavbarPhoto />
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
