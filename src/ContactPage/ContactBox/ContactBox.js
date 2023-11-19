import React from 'react'
import './ContactBox.css'
import BoxPropps from './BoxPropps'
import visit from './Boximage/IconVisit.png'
import phone from './Boximage/telefon.png'
import mail from './Boximage/Mail.png'
function ContactBox() {
  return (
    
    <section className="boxar">
<div className="container">

<div className="fatherS">
<div className="gridcontainer">


<BoxPropps name="Visit us" subTitle="+46 (8) 121 470 50" underTitle="+46 (8) 121 470 51" src={visit} alt="visit" />


<BoxPropps name="Call us" subTitle="+46 (8) 121 470 50" underTitle="+46 (8) 121 470 51" src={phone} alt="phone" />



<BoxPropps name="Email us" subTitle="info@crito.com" underTitle="support@crito.com" src={mail} alt="Mail" />







</div>


</div>

</div>
    </section>
    


  )
}

export default ContactBox