import './UnderFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react'

function UnderFooter() {
  return (




<section className="underfooter" >    
<div className="container">






<div className="underbackground">





<div className="borderline"></div>



<div className="underunder">


  

<div className="undertext">

<p>2023 Crito - Consulting Company Inc. All Rights Reserved.</p>

</div>







  <div className="socialone">
  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} style={{ color: '#FFFFFF' }} />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} style={{ color: '#FFFFFF' }} />
    </a>
    
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} style={{ color: '#FFFFFF' }} />
    </a>
    
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} style={{ color: '#FFFFFF' }} />
    </a>
    
    </div>



</div>


</div>
</div>






</section>


  )
}

export default UnderFooter