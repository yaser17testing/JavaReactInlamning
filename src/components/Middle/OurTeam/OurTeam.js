import React from 'react'
import './OurTeam.css'
import frank from './OurImg/frank.png'
import kimberly from './OurImg/kimberly.png'
import kvinna from './OurImg/kvinna.png'
import mark from './OurImg/Mark.png'
import Ourteam from './Ourteampropps'
import ButtonArrow from '../../Funktioner/ButtonArrow'



function OurTeam() {
  return (
    

  <section class="Title-Title">
  <div class="container">
  
  <div class="frifrifri">
  
  
      <div class="orangei"> <p> Meet Our Team</p></div>
  
   <div class="rubrik">   <h2>Experience Team Members</h2></div>
  
  
  <div class="knappe">
    <a class="btn-testi" href="#">Browse Team <i class="fa-solid fa-arrow-up-right-from-square"><ButtonArrow /></i></a>
  
  </div>
  
  
  
  
  
  <div class="parent"> 
  
  
  
  <div>
<Ourteam className1="bild-ett" imgClass="kvinna" src={kvinna} alt="kvinna" name="Kristine palmer" subTitle="Chef operation officer" />
</div>
  
  
<div>
<Ourteam className1="bild-två" imgClass="mark" src={mark} alt="Mark" name="Mark Aubri" subTitle="Senior Consultant" />
</div>
  
  
  
<div>
<Ourteam className1="bild-tre" imgClass="kimberly" src={kimberly} alt="kimberly" name=" Kimberly Hansen" subTitle="Senior Consultant" />
</div>
  
  
  
  
  
<div>
<Ourteam className1="bild-fyra" imgClass="frank" src={frank} alt="frank" name=" Justin Willoman" subTitle="Senior Tech Consultant" />
</div>
  
  
  
  
  
  
  </div>
  
  
  </div>
  
  </div>
  
  </section>
  



  )
}

export default OurTeam