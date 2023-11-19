import React from 'react'

import './Testimonal.css'

import { FeaturesPropsOver,FeaturesPropsUnder } from './FeaturesProps'
import ButtonArrow from '../../Funktioner/ButtonArrow'

import HandShake from './FeatureImg/Icon (1).png'
import Idea from './FeatureImg/Idea (2).png'
import Bars from './FeatureImg/bars (2).png'
import Frame from './FeatureImg/Frame 5 (1).png'
function Testmin() {
  return (
    

<section className="feutares">

<div className="container">

  <div className="mommy">

<div className="main-div">

  <div className="rubrikmaintext">

<p>Features</p>

<h4> Our Accounting is trusted by thousand of companies</h4>


  </div>



  


<div className="knappeni"><a className="btn-second" href="#">Learn More <i className="fa-solid fa-arrow-up-right-from-square"><ButtonArrow/></i></a></div>


</div>

<div>

<FeaturesPropsOver titel="Business Advice" img={HandShake} alt="hej" />

</div>



<div>

<FeaturesPropsOver img={Idea} alt="idea"  titel="Startup Business"  />

</div>


<div>

<FeaturesPropsUnder img={Bars} alt="Bars" idName = "underett" titel="Financial Advice" />

</div>

<div>

<FeaturesPropsUnder img={Frame} alt="Bars" idName = "undertva" titel="Risk Managment" />

</div>



















</div>

</div>
</section>








  )
}

export default Testmin