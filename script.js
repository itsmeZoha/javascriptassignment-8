let userName = prompt("Please Enter your name to visit our website? ") 
window.onload = function(){
   let message ="Good Day"
//    let firstName = prompt("Please Enter Your First Name?")
//    let lastName = prompt("Please Enter Your Last Name?")
//    let fullName = firstName +" "+ lastName
   let banger ="!"
   document.getElementById("userName").innerHTML = message + " " + userName+ banger
}
//---------------------if else Statement---------------------//
function checkAddress(){
    event.preventDefault()
   // var email = email_field.value   //2nu line l ,mtlb same ha is sy nichy wali line k or is ka//
   var email = document.getElementById('email_field').value
   console.log( email)
   if (!email){
      
      alert('Email address required.')
   }else{
      document.getElementById('output').innerHTML = email
   }
}
//---------------------Switch Statements---------------------//

//show output
function result(name){
   return document.getElementById('output').innerHTML += name + "<br>"
}
//Clear output
function clearOutputButton(){
   document.getElementById('output').innerHTML = ""
}