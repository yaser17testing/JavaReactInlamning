import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CustomBox({className1,className2,title,subtitle,imageSrc}){

return(

    <div class={className1}>
  
    <div class="stjarna"> <FontAwesomeIcon icon={faStar} style={{color: "#f94d1c",}}  /><FontAwesomeIcon icon={faStar} style={{color: "#f94d1c",}}  /><FontAwesomeIcon icon={faStar} style={{color: "#f94d1c",}}  /><FontAwesomeIcon icon={faStar} style={{color: "#f94d1c",}}  /><FontAwesomeIcon icon={faStar} style={{color: "#f94d1c",}}  /></div>
  
            <div class="rubriktext"><p>Content
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p> </div>
            
            
            
                <img class="grejer" src={imageSrc} alt="elipse" />
                
                <div class={className2}>
            
            
            
                <h5 class="hejs">{title}</h5>
            
                <p>{subtitle}</p>
            </div>
            
                </div>





);



}

export default CustomBox;