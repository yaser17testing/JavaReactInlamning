import React from 'react'
import './chooseUs.css'
import choose from './chooseimg/Why choose us.png'
import thumup from './chooseimg/motivation.png'
import hexagon from './chooseimg/hexagon.png'
import vector from './chooseimg/vector (3).png'
import intelligence from './chooseimg/intelligence (1).png'
function chooseUs() {
  return (
    <section class="album">
 
  <div class="container">

<div class="Father">

<div class="son1">
  
 
<p class="testrubrik" >Why choose us</p>
<h4>Why We Are The Best Business Consulting Agency</h4>

<ul><div  class="list">
  <div class="fontbild"><img className='fri1' src={thumup} alt="thumup" /></div>
<p class="ett"> Process Excellence</p>
<p class="tva">Lorum, ipsum dolor sit amet consectetur</p>

</div></ul>


<ul><div id="listv" class="list">
  <div class="fontbild"><img className='fri1' src={hexagon} alt="hexagon" /></div>
<p class="ett">Strategic Planning</p>
<p class="tva">Lorum, ipsum dolor sit amet consectetur</p>





</div></ul>

<ul><div id="listr" class="list">
  <div class="fontbild"><img className='fri1' src={vector} alt="hexagon" /></div>
<p class="ett"> Experience Design</p>
<p class="tva">Lorum, ipsum dolor sit amet consectetur</p>

</div> </ul>
<ul><div id="lisfyr" class="list">
  <div class="fontbild"><img className='fri1' src={intelligence} alt="hexagon" /></div>
<p class="ett">Artificial Intelligence</p>
<p class="tva">Lorum, ipsum dolor sit amet consectetur</p>

</div></ul>







</div>



<div class="son2">

<img class="Whyus" src={choose} alt="Two women talking" />




</div>



<div class="boxeni"></div>



  










</div>





</div>

</section>
  )
}

export default chooseUs