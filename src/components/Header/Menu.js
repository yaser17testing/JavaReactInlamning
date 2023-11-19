import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import ButtonArrow from '../Funktioner/ButtonArrow';
import logo from '../../assets/image/Logo.svg'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneVolume, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Navig from './RouterButton';
library.add(faPhoneVolume, faEnvelope, faLocationDot);








const Menu = () => {
  return (
    <header className="hejheader">
      <div id="cont" className="container">
        <img src={logo}alt="critologo" />
        <div className="menu">
          <div className="top-menu">
            <div className="contact">
              <div className="content-box">
                <i className="fa-solid fa-phone-volume"></i>
                +46 (8) 121 470 50
              </div>
              <div className="content-box">
                <i className="fa-solid fa-envelope"></i>
                info@crito.com
              </div>
              <div className="content-box last">
                <i className="fa-solid fa-location-dot"></i>
                Sveavägen 31, 111 34 STOCKHOLM
              </div>
            </div>
            <div className="social">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} style={{ color: '#111212' }} />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} style={{ color: '#111212' }} />
    </a>
    
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} style={{ color: '#1f2123;' }} />
    </a>
    
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} style={{ color: '#131415;' }} />
    </a>
            </div>
          </div>
          <div className="undermenu">
            <nav>
            <Navig to ="/" name="Home" />
              <a href="#">service</a>
              <a href="#">news</a>
              <Navig to ="/Contact" name="contact" />
            </nav>
            <a id="knappmenu" className="btn-yellow" href="#">
              Login <ButtonArrow />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Menu;