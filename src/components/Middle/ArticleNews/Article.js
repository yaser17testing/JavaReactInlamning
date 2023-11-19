import React from 'react'
import './Article.css'
import women from './ArticleImg/Image (1).png'
import page from './ArticleImg/Image.png'
import books from './ArticleImg/Image (5).png'
import ArticlePropps from './ArticlePropps'
import ButtonArrow from '../../Funktioner/ButtonArrow'

function Article() {
  return (
    
<section className="GetEvery">

<div className="container">


<div className="parentmothernews">


<div className="knappennu"><a className="btn-everyarticle"href="#">Browse Team <i className="fa-solid fa-arrow-up-right-from-square"><ButtonArrow /></i></a></div>


  <div className="rubrikp"><p>Article & News</p></div>

<div className="rubriken"><h5>Get Every Single Article & News</h5></div>







<div className="Newsparent">

 

<div>

<ArticlePropps className1="newsone" srcImg={women} date="25" titel="How to use digitalization In The Classrom" />

</div>




<div>

<ArticlePropps className1="newstwo" srcImg={page} date="17" titel="How To Implement Chat GPT In Your Projects" />

</div>


  

  
<div>

<ArticlePropps className1="newstwo" srcImg={books} date="13" titel="The Guide To Support Modern CSS Design" />

</div>
  






</div>

</div>

</div>

</section>
  )
}

export default Article