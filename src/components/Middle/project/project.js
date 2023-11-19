import React from 'react'
import './project.css'
import newspaper from './projimg/newspaper.png'
import glasses from './projimg/glasses.png'
import block from './projimg/block.png' 
import laptop from './projimg/laptop.png'
import Artikel from './projectpropps'
import ButtonArrow from '../../Funktioner/ButtonArrow'

function project() {
  return (
    


<section className="projectandcase">
  <div className="container">
  
      
  <div className="Fatherproject">
          <div className="section-title">
          
          <p>Project & Case studies</p>
          <h2>Let's Looks Our Global Projects</h2>
          
          </div>
  
          
          <div className="project-cases"> 
          

          <Artikel title="Grow your business" imageUrl={newspaper} link="#" />
    

          <Artikel title="Grow your business" imageUrl={glasses} link="#" />




          <Artikel title="Grow your business" imageUrl={block} link="#" />


          <Artikel title="Grow your business" imageUrl={laptop} link="#" />
          
          
          </div>
  
  <div className="testknappen"><a className="btn-project"href="#">All Recent Project<i className="fa-solid fa-arrow-up-right-from-square"><ButtonArrow /></i></a></div>
  
  



  </div>
  </div>
  
  </section>


  )
}

export default project