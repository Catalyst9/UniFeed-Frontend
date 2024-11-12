import "../styles/MyGroups.css";
import { useState } from "react";

export default function MyGroups() {
  const [isSportsActive, setIsSportsActive] = useState<boolean>(false);
  const toggleSportsActive = () => {
    setIsSportsActive(!isSportsActive); // Toggle the state from true to false or vice versa
  };

  const [isSocietiesActive, setIsSocietiesActive] = useState<boolean>(false);
  const toggleSocietiesActive = () => {
    setIsSocietiesActive(!isSocietiesActive); // Toggle the state from true to false or vice versa
  };

  const [isHallsActive, setIsHallsActive] = useState<boolean>(false);
  const toggleHallsActive = () => {
    setIsHallsActive(!isHallsActive); // Toggle the state from true to false or vice versa
  };

  const [isCourseActive, setIsCourseActive] = useState<boolean>(false);
  const toggleCourseActive = () => {
    setIsCourseActive(!isCourseActive); // Toggle the state from true to false or vice versa
  };

  const [isCustomActive, setIsCustomActive] = useState<boolean>(false);
  const toggleCustomActive = () => {
    setIsCustomActive(!isCustomActive); // Toggle the state from true to false or vice versa
  };

  return (
    <div className="mygroupspage">
      <div className="title-banner">
        <h1 className="title">My Groups</h1>
      </div>
      <div className="row">
        <div className="column">
          <button
            className={`textbox ${isSportsActive ? "active" : ""}`}
            onClick={toggleSportsActive}
          >
            Sports
          </button>
        </div>
        <div className="column">
          <button
            className={`textbox ${isSocietiesActive ? "active" : ""}`}
            onClick={toggleSocietiesActive}
          >
            Societies
          </button>
        </div>
        <div className="column">
          <button
            className={`textbox ${isHallsActive ? "active" : ""}`}
            onClick={toggleHallsActive}
          >
            Sports
          </button>
        </div>
        <div className="column">
          <button
            className={`textbox ${isCourseActive ? "active" : ""}`}
            onClick={toggleCourseActive}
          >
            Societies
          </button>
        </div>
        <div className="column">
          <button
            className={`textbox ${isCustomActive ? "active" : ""}`}
            onClick={toggleCustomActive}
          >
            Custom
          </button>
        </div>
      </div>
      <div className="row">
        <div className="bar"></div>
      </div>
      <div className="row">
        <div className="groups-container">
          {GroupsArray.map((post, index) => (
            <Group
              className={ActiveFilter === { GroupType } ? "visible" : "hidden"}
              onClick={OpenGroup}
              key={index}
              Logo={post.Logo}
              GroupName={post.GroupName}
              GroupType={post.GroupType}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Group({ Logo, GroupName, GroupType }: GroupProps) {
  return (
    <div className="group">
      <img src={Logo} className="logo" />
      <h2>{GroupName}</h2>
      <p>{GroupType}</p>
    </div>
  );
}

interface GroupProps {
  Logo: string;
  GroupName: string;
  GroupType: string;
}
