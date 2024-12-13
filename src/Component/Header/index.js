import React from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";

const Header = ({ isMediumScreen, toggleDrawer }) => {
  return (
    <div className="d-flex flex-wrap justify-content-between bg-white align-items-center">
      {isMediumScreen && (
        <div
          style={{ marginTop: "3rem", marginRight: "3rem" }}
          onClick={toggleDrawer}
        >
          <FaBars />
        </div>
      )}
      <form className="mt-5">
        <button type="button" className="border-0 rounded-pill d-none d-sm-none d-md-block ">
          <span className="input-group">
            <img
              src="https://demo.dashboardpack.com/hospital-html/img/icon/icon_search.svg"
              alt="Search Icon"
              className="me-3"
            />
            <div className="search_field w-100">
              <input type="text" placeholder="Search here..." />
            </div>
          </span>
        </button>
      </form>

      <div className="mt-5 d-flex justify-content-center align-item-center">
        <ul className="list-unstyled d-flex mt-3">
          <li className="me-4">
            <a href="/">
              <img
                src="https://demo.dashboardpack.com/hospital-html/img/icon/bell.svg"
                className="me-3"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src="https://demo.dashboardpack.com/hospital-html/img/icon/msg.svg"
                className="me-4"
              />
            </a>
          </li>
        </ul>
        <span className="mb-4">
          <img
            src="https://demo.dashboardpack.com/hospital-html/img/client_img.png"
            className="me-3"
          />
        </span>
      </div>
    </div>
  );
};

export default Header;
