
import React from "react";



function BoxPropps({name,subTitle,underTitle,src,alt}){


    return(
    
    
        <div className = "box">
          
          
          
        
      
      
      <h6 class="htext"> {name}</h6>
      <p class="p1">{subTitle} </p>
      <p class="p2">{underTitle} </p>


<img src={src} alt={alt}/>

      </div>
    
    
    
    
    
    );
}


export default BoxPropps;