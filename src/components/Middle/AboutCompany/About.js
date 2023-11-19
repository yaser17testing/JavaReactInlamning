import React from 'react'
import './About.css'

import imgkvinna from './aboutimg/Image (1).png'
import blixtlogo from './aboutimg/EWlement.png'
import ButtonArrow from '../../Funktioner/ButtonArrow'

function About() {
  return (
    <section className="AboutAbout">


<div className="container">
<div className="grandpa">


<div className="aboutus">
<img className="kvinna" src={imgkvinna} alt="kvinna" />

<div className="boxenibild">

  <div className="textiboxi"></div>
 <p className="namn"><span className="black">Samantha Brown,</span><span className="orange">Founder</span> </p>



 <p className="litentext">"Lorem ipsum dolor sit amet consectetur adipisicing elit" </p>

</div>





</div>


<div className="Textbox">

<p className="rubrik"> About Company</p>
<h4>We are Business Consulting & Credit Repair Experts</h4>

<p className="undertext"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
</p>

<p className="undertext2">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.
</p>





<div className="knapp1"><a className="btn-about" href="#">Learn More <i className="fa-solid fa-arrow-up-right-from-square"><ButtonArrow/></i></a></div>
<div className="knapp2"><a className="btn-abtwo" href="#"><i className="fa-regular fa-circle-play"></i></a> <p>Intro video</p></div>


</div>


<div className="blixtimg"> <img src={blixtlogo} alt="blixt" />




</div>







</div>















</div>


</section> 
  )
}

export default About