import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navig = ({to,name}) => {
    const navigering = useNavigate();
  
    const handleClick = () => {
      // Navigera till den önskade sidan när länken klickas
      navigering(to);
    };
  
    return (
      <a href="#" onClick={handleClick}>
        {name}
      </a>
    );
  };
  
  export default Navig;
