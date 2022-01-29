var Name=document.getElementById("Name").value;
var Email=document.getElementById("email").value;
var Password=document.getElementById("pd").value;
var Confirmpassword=document.getElementById("npd").value;
var Username=document.getElementById("uname").value;
var lpassword=document.getElementById("psw").value;
  //email id expression code
  var Password_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  var letters = /^[A-Za-z]+$/;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(Name=='')
  {
      alert('Please enter your name');
  }
  else if(!letters.test(Name))
  {
      alert('Name field required only alphabet characters');
  }
  else if(Email=='')
  {
      alert('Please enter your user email id');
  }
  else if (!filter.test(Email))
  {
      alert('Invalid email');
  }
  else if(Username=='')
  {
      alert('Please enter the user name.');
  }
  else if(!letters.test(Username))
  {
      alert('User name field required only alphabet characters');
  }
  else if(Password=='')
  {
      alert('Please enter Password');
  }
  else if(Confirmpassword=='')
  {
      alert('Enter Confirm Password');
  }
  else if(!Password_expression.test(Password))
  {
      alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
  }
  else if(Password != Confirmpassword)
  {
      alert ('Password not Matched');
  }
  else if(document.getElementById("npd").value.length < 6)
  {
      alert ('Password minimum length is 6');
  }
  else if(document.getElementById("npd").value.length > 12)
  {
      alert ('Password max length is 12');
  }
  else
  {                                           
         alert('Thank You for Registration & You are Redirecting to Website');  //email id expression code
       