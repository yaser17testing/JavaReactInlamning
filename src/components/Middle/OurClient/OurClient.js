import React from 'react'
import './OurClient.css'
import CustomBox from './Ourclientpropps'

import Amand from './Clientimg/Amanda.png'
import Ellipse from './Clientimg/Ellipse 1.png'
import Jack from './Clientimg/jack.png'
import ButtonArrow from '../../Funktioner/ButtonArrow'
import star from './Clientimg/Star.png'

function OurClient() {
  return (
    
    <section class="test">

      <div class="container">
  <div class="backgroundtestimonal">
  <div class="Mamma" >
  
  <div class="Rubriktest">
  
  <p>Testimonal</p>
  
  <h4>What our client says</h4>
  
  
  </div>
  
  
  
  <div>
      <CustomBox className1="barn1" className2="hec2" title="Amanda Tulling" subtitle="Senior Developer, Square" imageSrc={Amand} />
      
    </div>
          
  
    <div>
      <CustomBox className1="barn2" className2="hec" title="Jack McDouglas" subtitle="Key Account Manager, Gobona" imageSrc={Jack} />
      
    </div>
  
  
  
  
    <div>
      <CustomBox className1="barn3" className2="hec" title="Cassandra Warren" subtitle="Business Manager, Dorfus" imageSrc={Ellipse} />
      
    </div>
  
  

  
  
  
  </div>
  
  <div class="knappemork">

    <a class="btn-client"href="#">All Reviews<i class="fa-solid fa-arrow-up-right-from-square"><ButtonArrow /></i></a>
  </div>
  
  </div>
  </div>
  
  
  
  
  </section>
  )
}

export default OurClient