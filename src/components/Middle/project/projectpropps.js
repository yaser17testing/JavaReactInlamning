import React from 'react'
import ButtonArrow from '../../Funktioner/ButtonArrow';








const Artikel = ({ title, imageUrl, link }) => {
    return (
      <div className="artikel">
        <img src={imageUrl} alt="readingnewspaper" />
        <h3>{title}</h3>
        <div className="strecking"></div>
        <a href={link}>Read More<i className="fa-solid fa-arrow-up-right-from-square"><ButtonArrow /></i></a>
      </div>
    );
  };
  
  export default Artikel;