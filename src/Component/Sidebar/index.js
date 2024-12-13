import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

import "./Style.css";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleLinkClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  return (
    <div className="container">
      <div className=" col-lg-3 flex-shrink-0 position-fixed top-0 bottom-0 start-0 bg-light  overflow-auto sidebar ">
      <h3 className="py-5 text-center" style={{ color: "#2DAAB8" }}>
        <img
          src="https://demo.dashboardpack.com/hospital-html/img/logo.png"
          alt="logo"
        />
      </h3>

      <ul className="list-unstyled ps-0 py-2">
        {/* Dashboard Section */}
        <li className="side_menu_title fs-5 fw-bold mx-4">
          <span style={{ color: "#2DAAB8" }}>Dashboard</span>
        </li>
        <li className="nav-item my-4">
          <a
            className="nav-link has-arrow"
            href="/"
            data-bs-toggle="collapse"
            data-bs-target="#dashboardMenu"
            aria-expanded={activeMenu === "dashboard" ? "true" : "false"}
            onClick={() => handleLinkClick("dashboard")}
          >
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/menu-icon/1.svg"
              alt="not"
              className="ms-4"
            />
            <span className="flex-grow-1 mx-5">Dashboard</span>
            {/* <SlArrowRight /> */}

          </a>

          <ul
          style={{marginLeft:'25%'}}
            className={`collapse list-unstyled  my-3 ${
              activeMenu === "dashboard" ? "show" : ""
            }`}
            id="dashboardMenu"
          >
            <li>
              <Link to="/" className="active text-decoration-none">
                Dashboard 1
              </Link>
            </li>
            <li className="my-3">
              <Link to="dashboard" className="text-decoration-none">
                Dashboard 2
              </Link>
            </li>
          </ul>
        </li>

        {/* Applications Section */}
        <li className="side_menu_title fs-5 fw-bold mx-4 mt-5">
          <span style={{ color: "#2DAAB8" }}>Applications</span>
        </li>
        <li className="mm-active my-4">
          <a
            className="nav-link has-arrow"
            href="/"
            data-bs-toggle="collapse"
            data-bs-target="#pagesMenu"
            aria-expanded={activeMenu === "pages" ? "true" : "false"}
            onClick={() => handleLinkClick("pages")}
          >
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/menu-icon/2.svg"
              alt=""
              className="ms-4"
            />
            <span className="mx-5 flex-grow-1">Pages</span>
          </a>
          <ul
          style={{marginLeft:'25%'}}
            className={`collapse list-unstyled  mt-3 ${
              activeMenu === "pages" ? "show" : ""
            }`}
            id="pagesMenu"
          >
            <li>
              <a href="/">Login</a>
            </li>
            <li className="mt-2">
              <a href="/">Register</a>
            </li>
            <li className="mt-2">
              <a href="/">Forgot Password</a>
            </li>
          </ul>
        </li>

        {/* Application Section */}
        <li className="active my-4 ">
          <a
            className="nav-link has-arrow"
            href="/"
            data-bs-toggle="collapse"
            data-bs-target="#applicationMenu"
            aria-expanded={activeMenu === "application" ? "true" : "false"}
            onClick={() => handleLinkClick("application")}
          >
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/menu-icon/3.svg"
              alt=""
              className="ms-4"
            />
            <span className="mx-5 flex-grow-1">Application</span>
          </a>
          <ul 
          style={{marginLeft:'25%'}}
            className={`collapse list-unstyled   mt-3 ${
              activeMenu === "application" ? "show" : ""
            }`}
            id="applicationMenu"
          >
            <li>
              <a href="/">Mail Box</a>
            </li>
            <li className="mt-2">
              <a href="/">Chat</a>
            </li>
            <li className="mt-2">
              <a href="/">FAQ</a>
            </li>
          </ul>
        </li>

        {/* Components Section */}
        <li className="side_menu_title fs-5 fw-bold mx-4 mt-5">
          <span style={{ color: "#2DAAB8" }}>Components</span>
        </li>
        <li className="mm-active my-3">
          <a
            className="nav-link has-arrow"
            href="/"
            data-bs-toggle="collapse"
            data-bs-target="#componentMenu"
            aria-expanded={activeMenu === "component" ? "true" : "false"}
            onClick={() => handleLinkClick("component")}
          >
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/menu-icon/5.svg"
              alt=""
              className="ms-4"
            />
            <span className="mx-4 flex-grow-1">UI components</span>
          </a>
          <ul
           style={{marginLeft:'25%'}}
            className={`collapse list-unstyled  mt-3 ${
              activeMenu === "component" ? "show" : ""
            }`}
            id="componentMenu"
          >
            <li>
              <a href="/">Elements</a>
            </li>
            <li className="mt-2">
              <a href="/">Widgets</a>
            </li>
          </ul>
        </li>

        {/* Widgets Section */}
        <li className="mm-active my-4">
          <a
            className="nav-link has-arrow"
            href="/"
            data-bs-toggle="collapse"
            data-bs-target="#widgetsMenu"
            aria-expanded={activeMenu === "widgets" ? "true" : "false"}
            onClick={() => handleLinkClick("widgets")}
          >
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/menu-icon/5.svg"
              alt=""
              className="ms-4"
            />
            <span className="mx-5 flex-grow-1">Widgets</span>
          </a>
          <ul
          style={{marginLeft:'25%'}}
            className={`collapse list-unstyled  mt-3 ${
              activeMenu === "widgets" ? "show" : ""
            }`}
            id="widgetsMenu"
          >
            <li>
              <a href="/">Charts Boxes 1</a>
            </li>
            <li className="mt-2">
              <a href="/">Profile Box</a>
            </li>
          </ul>
        </li>

        {/* Forms Section */}
        <li className="mm-active my-4">
          <a
            className="nav-link has-arrow"
            href="/"
            data-bs-toggle="collapse"
            data-bs-target="#formMenu"
            aria-expanded={activeMenu === "form" ? "true" : "false"}
            onClick={() => handleLinkClick("form")}
          >
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/menu-icon/6.svg"
              alt=""
              className="ms-4"
            />
            <span className="mx-5 flex-grow-1">Forms</span>
          </a>
          <ul
          style={{marginLeft:'25%'}}
            className={`collapse list-unstyled  mt-3 ${
              activeMenu === "form" ? "show" : ""
            }`}
            id="formMenu"
          >
            <li>
              <a href="/">Elements</a>
            </li>
            <li className="mt-2">
              <a href="/">Widgets</a>
            </li>
          </ul>
        </li>

        {/* Charts Section */}
        <li className="mm-active my-3">
          <a
            className="nav-link has-arrow"
            href="/"
            data-bs-toggle="collapse"
            data-bs-target="#chartMenu"
            aria-expanded={activeMenu === "charts" ? "true" : "false"}
            onClick={() => handleLinkClick("charts")}
          >
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/menu-icon/7.svg"
              alt=""
              className="ms-4"
            />
            <span className="mx-5 flex-grow-1">Charts</span>
          </a>
          <ul
          style={{marginLeft:'25%'}}
            className={`collapse list-unstyled mt-3 ${
              activeMenu === "charts" ? "show" : ""
            }`}
            id="chartMenu"
          >
            <li>
              <a href="/">Charts js</a>
            </li>
            <li className="mt-2">
              <a href="/">Apex charts</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
