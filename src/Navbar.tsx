import "./styles/NavbarStyles.css"; // Importing the CSS styles for the Navbar

//Importing the Link functionality from react router to replace anchor tags, so that when a navigation
//bar button is pressed, it swaps pages without automatically refreshing the website.
import { Link, useMatch, useResolvedPath } from "react-router-dom";

//This is importing the react-icons to be used in the navigation bar.
import { MdLogout, MdSettings } from "react-icons/md";

import React, { useState } from "react";

export default function Navbar() {
  //State to manage the toggle of the dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  //To toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <Link to="/home">
          <img src="/src/images/Logo.png" alt="UniFeed Logo" className="logo" />
        </Link>
        <h1 className="title">UniFeed</h1>
      </div>
      <div className="middle-section">
        <ul className="nav-links">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/groups">Groups</NavLink>
          <NavLink to="/mygroups">My Groups</NavLink>
          <NavLink to="/messages">Messages</NavLink>
        </ul>
      </div>
      <div className="right-section">
        <div className="profile" onClick={toggleDropdown}>
          <img src="/src/images/Profile-Picture.jpg" alt="Profile" />
          <h2>Profile</h2>
          <div className={`drop-down-wrap ${isOpen ? "open-menu" : ""}`}>
            <div className="drop-down">
              <div className="user-info">
                <img src="/src/images/Profile-Picture.jpg" alt="Profile" />
                <h2>Anant Shah</h2>
              </div>
              <hr />
              <Link to="/profile" className="drop-down-link">
                <MdSettings className="icon" />
                <p>Profile</p>
                <span>{">"}</span>
              </Link>
              <Link to="/login" className="drop-down-link">
                <MdLogout className="icon" />
                <p>Logout</p>
                <span>{">"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

//This function creates a custom Link function, to re-use code so that each link in the
//navigation bar is only 1 line in the Navbar function.

//It also dynamically updates the className of the link so that if a link is pressed, it will
//update the className, changing the colour of the text on the Navbar for that link to highlight
//the current page that the user is on.
export function NavLink({ to, children, ...props }: Props) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li>
      <Link to={to} className={isActive ? "active" : ""} {...props}>
        {children}
      </Link>
    </li>
  );
}

//Defines the interface for Props that are used in the NavLink function above
interface Props {
  to: string;
  children: React.ReactNode;
}
