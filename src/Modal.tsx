import React from "react";

interface ModalProps {
  isOpen: boolean;
  close: () => void; // Function to close the modal
  children: React.ReactNode; // Content inside the modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, close, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
