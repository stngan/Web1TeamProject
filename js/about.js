var user = localStorage.getItem("user");
var pass = localStorage.getItem("pass");
var img = "/assets/";
console.log(user);
function load(){
fetch("/Data/user.json")
.then(function (res) {
  if (!res.ok) {
    throw Error("Http Error: ", res.status);
  }
  return res.json();
})
.then(function (data) {
  var check = false;
  var temp;
  console.log(check);
  for (let u of data) {
   if ((user == u.userName) && (pass = u.passWord)) {
      check = true;
      img += u.avatar;
      temp = u.userName;
      break;
   }
  }
  if (check == true){
     document.getElementById("Login").style.display = "none";
     document.getElementById("signUp").style.display = "none";
     document.getElementById("account").style.display = "block";
     document.getElementById("accImg").src = img;
    //  document.getElementById("account__user").innerHTML = temp;
  } else{
  } 
})

}
function dieu_huong(){
  location.assign("/includes/acount.html");
}
function logOut() {
  if (typeof Storage !== "undefined") {
    localStorage.removeItem("user");
    localStorage.removeItem("pass");
    location.reload();
  }
}