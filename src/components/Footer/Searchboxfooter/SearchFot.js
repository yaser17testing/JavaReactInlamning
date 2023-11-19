import React from 'react'
import './SearchFot.css'
import ButtonArrow from '../../Funktioner/ButtonArrow'


function SearchFot() {
  return (
    

<section class="searchbox">

<div class="container">




<div class="fathersearch">

<div class="leftleft">

<h2>Get News Updates By Signup</h2>

</div>


<div class="rightright">

<form class="searchingbox">


<input type="text" placeholder="username@domain.com" /> 


</form>




<div class="knappsubscribe"><a class="btn-subscribe" href="#">Subscribe <i class="fa-solid fa-arrow-up-right-from-square"><ButtonArrow /></i></a></div>



</div>




</div>

</div>
</section>

  )
}

export default SearchFot