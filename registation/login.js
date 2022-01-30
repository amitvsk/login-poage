

function index1(){
var Name=document.getElementById("Name").value;
var Email=document.getElementById("email").value;
var Password=document.getElementById("pd").value;
var Confirmpassword=document.getElementById("npd").value;
if(Confirmpassword == Password){
    alert("saved password");
}
else{
    alert("unmatch password");
}
console.log('about to fetch a formdata');
        fetch('http://saranshapi.herokuapp.com/auth/?user=&pass=')
            .then(Response => {
               alert(Response['status']);
            })

alert("Name");
}
function index2(){    
var Username=document.getElementById("uname").value;
var lpassword=document.getElementById("psw").value;
alert("Username");
}


