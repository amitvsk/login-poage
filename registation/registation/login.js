function index1() {
  var Name = document.getElementById("Name").value;
  var Email = document.getElementById("email").value;
  var Password = document.getElementById("pd").value;
  var Confirmpassword = document.getElementById("npd").value;

  API =
    "https://saranshapi.herokuapp.com/auth/?user=" +
    Email +
    "&pass=" +
    Password;

  fetch(API).then((Response) => {
    alert(Response["status"]);
  });
}
