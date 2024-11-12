import "./styles/SidebarStyles.css";
import { NavLink } from "./Navbar";

/*
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { MdHome } from "react-icons/md";*/

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="top-container">
        <h1 className="title">Groups</h1>
        <ul className="nav-links">
          {/*<li>
            <MdHome size="20" vertical-align="center" />
            <SidebarLink to="/home">Home</SidebarLink>
          </li> */}
          <NavLink to="/groups/sports">Sports</NavLink>
          <NavLink to="/groups/societies">Societies</NavLink>
          <NavLink to="/groups/halls">Halls</NavLink>
          <NavLink to="/groups/courses">Course</NavLink>
        </ul>
      </div>
      <div className="middle-container"></div>
      <div className="bottom-container"></div>
    </nav>
  );
}
