import React from 'react'
import './Footmenu.css'
import crito from './FootImg/Logocrito.png'
import wave from './FootImg/Rectangle 116.png'

function Footmenu() {
  return (
    
<section class="footer">

<div class="container">

<div class="backgroundfot">
  <div class="fatherfooter">



<div class="fot-one">

  <img class="cri" src={crito} alt="critologo"/>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>

</div>


<div class="fot-two">

<p>Company</p>

<ul>about</ul>
<ul>Features</ul>
<ul>Works</ul>
<ul>Career</ul>


  
</div>


<div class="fot-three">
  <p>Help</p>

  <ul>Customer Support</ul>
  <ul>Delivery Details</ul>
  <ul>Terms & Conditions</ul>
  <ul>Privacy Policy</ul>
  
  


  
</div>


<div class="fot-four">

  <p>Resources</p>

  <ul>Free eBooks</ul>
  <ul>Development Tutorial</ul>
  <ul>How to - Blog</ul>
  <ul>Youtube Playlist</ul>
  
  

  
</div>


<div class="fot-five">

  <p>Link</p>

  <ul>Free eBooks</ul>
  <ul>Development Tutorial</ul>
  <ul>How to - Blog</ul>
  <ul>Youtube Playlist</ul>
  
  





  
</div>





<div class="waves">

<img class="rectangle" src={wave} alt="rectangle"/>
  
</div>






</div>
</div>
</div>
</section>
  )
}

export default Footmenu