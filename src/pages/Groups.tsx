import "../styles/Groups.css";
import { useState } from "react";
import Modal from "../Modal";

export default function Groups() {
  const [isSportsActive, setIsSportsActive] = useState<boolean>(false);
  const toggleSportsActive = () => {
    setIsSportsActive(!isSportsActive); // Toggle the state from true to false or vice versa
  };

  const [isSocietiesActive, setIsSocietiesActive] = useState<boolean>(false);
  const toggleSocietiesActive = () => {
    setIsSocietiesActive(!isSocietiesActive); // Toggle the state from true to false or vice versa
  };

  const [isCustomActive, setIsCustomActive] = useState<boolean>(false);
  const toggleCustomActive = () => {
    setIsCustomActive(!isCustomActive); // Toggle the state from true to false or vice versa
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const DisplayGroup = () => {
    setIsModalOpen(true); // This function will open the modal
  };

  return (
    <div className="groupspage">
      <div className="title-banner">
        <h1 className="title">Groups</h1>
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
          <div className="groups-row">
            <div className="group" onClick={DisplayGroup}>
              <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
                <p>This is your group's information displayed in a modal.</p>
              </Modal>
            </div>
            <div className="group"></div>
            <div className="group"></div>
            <div className="group"></div>
          </div>
          <div className="groups-row">
            <div className="group"></div>
            <div className="group"></div>
            <div className="group"></div>
            <div className="group"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
function Group({
  Logo,
  GroupName,
  GroupType,
  isModalOpen,
  GroupDescription,
}: GroupProps) {
  var isClosed = !{ isOpen };
  return (
    <div className="group">
      <Modal isOpen={isModalOpen} close={() => setIsModalOpen(true)}>
        <img src={Logo} className="logo" />
        <h2>{GroupName}</h2>
        <p>{GroupType}</p>
      </Modal>
      <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
        <p>{GroupDescription}</p>
        <button onClick={JoinGroup}></button>
      </Modal>
    </div>
  );
}

interface GroupProps {
  Logo: string;
  GroupName: string;
  GroupType: string;
  isModalOpen: boolean;
  GroupDescription: string;
}
*/
