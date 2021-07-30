import React from "react";
import "../sidebar/Sidebar.css";
import { LineStyle,Group ,Assignment } from "@material-ui/icons";
import { BrowserRouter as Router , NavLink } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle ">DASHBOARD</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem" >
              <LineStyle />
              <div className="itemTitle "><NavLink className="itemTitle"   to = '/finance/'>HOME</NavLink></div>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">QUICK MENU</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Group />
              <div className="itemTitle">TOTAL EMPLOYEES</div>
            </li>
            <li className="sidebarListItem">
              <Assignment />
              <div className="itemTitle">TOTAL PROJECTS</div>
            </li>
            <li className="sidebarListItem ">
              <Group />
              <div className="itemTitle">ACTIVE EMPLOYEES</div>
            </li>
            <li className="sidebarListItem ">
              <Assignment />
              <div className="itemTitle">ACTIVE PROJECTS</div>
            </li>
            <li className="sidebarListItem ">
              <Group />
              <div className="itemTitle">ON-BENCH EMPLOYEES</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
