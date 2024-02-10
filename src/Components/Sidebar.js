// Import statements (Make sure to import the necessary dependencies)
import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { SidebarData } from "./SidebarData";
import "./Main.css";

export default function SideBar() {
  const navigate = useNavigate();
  const [isExpanded, setExpandedState] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <div className="sideBarBackGround">
        <div className={isExpanded ? "sidebar" : "sidebar sidebar-NX"}>
          {/* Hamburger icon button */}
          <button
            className="hamburger"
            onClick={() => setExpandedState(!isExpanded)}
          >
            <span className="fs-5 d-flex justify-content-center">
              {isExpanded ? <AiOutlineClose /> : <FaBars />}
            </span>
          </button>
          {/* Sidebar navigation list */}
          <ul className="sidebarList">
            {SidebarData.map((val, key) => (
              <li
                key={key}
                className="row"
                onClick={() => {
                  navigate(val.link);
                }}
              >
                <div
                  className="title"
                  // Add "active" class to the selected item
                  id={window.location.pathname === val.link ? "active" : ""}
                >
                  <div className="icons">{val.icon}</div>
                  <div className="text">{val.title}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content section */}
      <section className={`home-section pt-2 ${isExpanded ? "content-active" : ""}`}>
        <div className="content">
          {/* Outlet to render the content of the selected route */}
          <Outlet />
        </div>
      </section>
    </>
  );
}
