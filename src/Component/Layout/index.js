import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa"; 
import Header from "../Header";
import Sidebar from "../Sidebar";
import Drawer from "../drawer/Drawer"; 

const MainLayout = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false); 
  const [isSidebarVisible, setSidebarVisible] = useState(true); 
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth < 992); 

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
    setSidebarVisible(false); 
  };

  return (
    <div className="container-fluid ">
      <div className="row">
        {/* Sidebar for large screens */}
        <div className={`col-lg-3 ${isMediumScreen ? "d-none" : "d-lg-block"}`}>
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="col-lg-9">
        
            <Header
              isMediumScreen={isMediumScreen}
              toggleDrawer={toggleDrawer}
            />

            

          {/* Drawer visible only when isDrawerOpen is true and it's a medium screen */}
          {isDrawerOpen && isMediumScreen && (
            <div className="drawer-container">
              <Drawer toggleDrawer={toggleDrawer} className="drawer-330px" />
            </div>
          )}

          {/* Outlet for page content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
