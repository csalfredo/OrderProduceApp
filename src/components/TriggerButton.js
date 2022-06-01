import React from 'react';
import '../App.css';

const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
  <div className = "triggerBtn">

      <button
        className="btn btn-lg btn-danger center modal-button"
        ref={buttonRef}
        onClick={showModal}
      >
        {triggerText}
      </button>
    </div>
  );
};
export default Trigger;
