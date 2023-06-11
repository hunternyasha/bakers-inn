import logo from "../assets/images/logo.png";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Recipes from "./Recipes";
import KidsCorner from "./KidsCorner";
import ContactUs from "./ContactUs";
import { useState,useEffect } from "react";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(()=> {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth)
  },[])

  return (
    <>
      <div className="backgroungColor">
        <nav className="navbar ">
        <NavLink to="/" className="navbar-brand mx-3">
                <img src={logo} alt="logo" className="img-fluid" />
          </NavLink>
          {(toggleMenu || screenWidth > 768) && (
            <div className="innerNav">

              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <NavLink to="/AboutUs" className="nav-link">
                    About Us
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/products" className="nav-link">
                    Products
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/recipes" className="nav-link">
                    Recipes
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/kidscorner" className="nav-link">
                    Kid's Corner
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/contactUs" className="nav-link">
                    CONTACT US
                  </NavLink>
                </li>
              </ul>
            </div>
          )}

          <div className="btn" onClick={toggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </nav>
      </div>
      <Outlet />

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/kidsCorner" element={<KidsCorner />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default Navbar;
