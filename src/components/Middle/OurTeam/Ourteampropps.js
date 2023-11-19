import React from "react";




function Ourteam({className1,imgClass,src,alt,name,subTitle}){


return(


    <div className={className1}>
      
      
      
    <img class={imgClass} src={src} alt={alt}/>
  
  
  <h6 class="paretext"> {name}</h6>
  <p class="ppptext">{subTitle} </p>

  </div>





);




}

export default Ourteam;
