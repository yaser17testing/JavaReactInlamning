import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function BoxingComponent({ title, description, customClassName }) {
  return (
    <div className={`boxing1 ${customClassName}`}>
      <div className="streck"></div>
      <h6>{title}</h6>
      <p>{description}</p>
      <div className="svartknapp">
        <a className="btn-arrow" href="#"><i className="right"><FontAwesomeIcon icon={faArrowRight} style={{ color: "#f5f5f5" }} className="arrow" /></i></a>
      </div>
    </div>
  );
}

export default BoxingComponent;