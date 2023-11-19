import React, { useState } from 'react'
import './FormularBox.css'

import Formtestprop from './testprop'






const FormularBox=()=> {


    const [name,setName] = useState('')
    const [firstNameError,setfirstNameError] = useState(false)

    const[email,setEmail]= useState('')
    const [emailError,setEmailNameError] = useState(false)

    const [message,setMessage]=useState('')
    const [messageError,setMessageError] = useState(false)


const handleChange = (e) => {


console.log(e.currentTarget.id)

switch (e.currentTarget.id){
case 'name':
    setName(e.currentTarget.value)
   setfirstNameError(validateLength(e.currentTarget.value, 1))
break
case 'email':
    setEmail(e.currentTarget.value)
   setEmailNameError(validateLength(e.currentTarget.value))
break 
case 'message':
setMessage(e.currentTarget.value)
setMessageError(validateLength(e.currentTarget.value))
break


}



}


const validateLength =(value,minLength=1) => {

if(value.length < minLength)

return true

return false


}

const handleSubmit = async (e) => {


e.preventDefault()
console.log('testar')

for(let element of e.target){

    switch (element.id){
        case 'name':
            setName(element.value)
           setfirstNameError(validateLength(element.value, 1))
        break
        case 'email':
            setEmail(e.target.value)
           setEmailNameError(validateLength(element.value,))
        break 
        case 'message':
        setMessage(element.value)
        setMessageError(validateLength(element.value))
        break
default:
    break;
}

}



if(!firstNameError && !emailError && !messageError){
    console.log('Data to send:', { name, email, message });
const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform',{

method: 'post',
headers: {

'content-type': 'application/json'

},

body: JSON.stringify({


name, email, message

}),


})

if(result.status === 200 || result.status === 201)

alert('Meddelande skickades');

}else{

alert('Fel');







}



}



  return (
    
<section className="formular">
    <form onSubmit={handleSubmit}>
<div className="container">


<div className="search1">



<div className="inner">



<div className="text">

<h3>Leave us a message for any information.</h3>


</div>


<Formtestprop
      containerClassName="searchboxen1"
      formClassName="searchingbox1"
      inputName="name"
      inputValue={name}
      handleChange={handleChange}
      placeholder={`Name* ${firstNameError ? 'måste anges ' : ''}`}
      
    />



<Formtestprop
      containerClassName="searchboxen2"
      formClassName="searchingbox2"
      inputName="email"
      inputValue={email}
      handleChange={handleChange}
      placeholder={`Email* ${emailError ? 'måste anges ' : ''}`}
      
    />



<Formtestprop
      containerClassName="searchboxen3"
      formClassName="searchingbox3"
      inputName="message"
      inputValue={message}
      handleChange={handleChange}
      placeholder={`Message* ${messageError ? 'måste anges ' : ''}`}
      
    />








<button type="submit" className="btn-yellow1" href="#"  >Send Message</button>



</div>





</div>











</div>



</form>


</section>

  )
}

export default FormularBox