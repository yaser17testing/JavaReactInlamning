import React from 'react'
import './service.css'
import BoxingComponent from './servicepropps'
import ButtonArrow from '../../Funktioner/ButtonArrow'



function Service() {
  return (
    
<section className="Services">

<div className="container">

<div className="grandma">


<div className="boxingrubrik"> 

<p>Our Services</p>

<h4>We Provide The Best Service For Consluting</h4>


</div>




<div>
      <BoxingComponent title="Business Advice" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." customClassName="boxing1" />
     
    </div>


    <div>
      <BoxingComponent title="Business Advice" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." customClassName="boxing2" />
     
    </div>



    <div>
      <BoxingComponent title="Business Advice" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." customClassName="boxing3" />
     
    </div>


    <div>
      <BoxingComponent title="Business Advice" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." customClassName="boxing4" />
     
    </div>






<div className="knappenkn"><a className="btn-provide" href="#">Browse Service <i className="fa-solid fa-arrow-up-right-from-square"><ButtonArrow /></i></a> </div>




</div>










</div>



</section>
  )
}

export default Service