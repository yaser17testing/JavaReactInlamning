import React from 'react'

import Image from '../../assets/image/Image.png'
import blixt from '../../assets/image/blixtgroup.png'
import './Header.css'
import ButtonArrow from '../Funktioner/ButtonArrow'


const Showcase = () => {
  return (
    <section class ="features">

    <div className="container">
      <div className="herograndpa">
      
  
  <div className="lefting">
  
  <h1>We provide The Best Business Solutions</h1>
  
  <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
  
  
  
  <div className="knappconsulting"><a className="btn-consult" href="javascript:void(0)">Get Consulting <i className="fa-solid fa-arrow-up-right-from-square"><ButtonArrow/></i></a></div>
  <div className="knapplearn"><a className="btn-Learn" href="javascript:void(0)">Learn More <i className="fa-solid fa-arrow-up-right-from-square"><ButtonArrow/></i></a></div>
  
  
  <div className="blix"><img className="vager" src={blixt} alt="waves"/> </div>
  
  </div>
  
  
  
  
  
  
  <div className="righting">
  
  <img className="hero" src={Image} alt="Man"/>
  
  
  
  
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </div>
  
  </div>
  
  
  
  </section>
  )
}

export default Showcase