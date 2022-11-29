import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AiOutlineMenu } from "react-icons/ai";
// import "./"

function Header() {
  return (
    <nav>
      <h1>Amrita_Padhy</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
      </main>
      <div className="menuIcon" hidden>
        <AiOutlineMenu />
      </div>
    </nav>
  );
}

export default Header;
