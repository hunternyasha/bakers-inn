import logo from "../assets/images/logo.png";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Recipes from "./Recipes";
import KidsCorner from "./KidsCorner";
import ContactUs from "./ContactUs";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {


  return (
    <>
      <div className="backgroungColor">


        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid innerNav">
   
          <NavLink to="/" className="navbar-brand mx-3">
            <img src={logo} alt="logo" className="img-fluid" />
          </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon">
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav   ">
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
