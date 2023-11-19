import React from 'react'

function ArticlePropps({className1,srcImg,date,titel}) {
  return (
    <div className={className1}>

  <img className="kols" src={srcImg} alt="fri" />

<div className="yellowboxing"><p className="over">{date}</p> <p className="under">Mar</p></div>

<p className="one">Business </p>


<h6>{titel}</h6>


<p className="two">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>


</div>
  )
}

export default ArticlePropps