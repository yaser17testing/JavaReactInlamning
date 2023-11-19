import React, { Component } from 'react'







class FeaturesPropsOver extends Component {render()
 { 

    const{img,alt,titel} = this.props;

return( 
    
    <div className="small-div">


    <div className="tecken"> <img class="overimg" src={img} alt={alt} /> </div>
  
  <div className="buseinssadvice">
  
    <h5>{titel}</h5>
  
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </p>
  
  
  
  </div>
  
  
  </div>
  );
}

}




class FeaturesPropsUnder extends Component {render()
    { 
   
       const {idName,titel,img,alt} = this.props;
   
   return( 
       
    <div id={idName} className="small-div">
    <div className="tecken"> <img class="underimg" src={img} alt={alt} /> </div>
    
    <div className="buseinssadvice">
  
    <h5>{titel}</h5>
  
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </p>
  
  
  
  </div></div>
     );
   }
   
}


   export { FeaturesPropsOver, FeaturesPropsUnder };