import React from 'react'
import './Header.css'
import logo1 from '../../assets/image/logomarken/Logo.svg'
import logo2 from '../../assets/image/logomarken/Logo2.svg'
import logo3 from '../../assets/image/logomarken/Logo3.svg'
import logo4 from '../../assets/image/logomarken/Logo4.svg'
import logo5 from '../../assets/image/logomarken/Logo5.svg'
const Logo = () => {
  return (

<section className='Logosection'>
    <div className="container">

<div class ="Grejer">

  <div className="paket ett">   

<img className="jek" src={logo1} alt="log" />

  </div>


 <div className="paket tva">

  <img className="jik" src={logo2} alt="log" />

 </div>
 
 <div className="paket tre">

  <img className="fri" src={logo3} alt="log" />
  
 </div>
 
 <div className="paket fyra">

  <img className="yes" src={logo4} alt="log"/>
  
 </div>
 
 <div className="paket fem">

  <img className="no" src={logo5} alt="log"/>
  
 </div>




 </div>


</div>
</section>
  )
}

export default Logo