function getUrl() {
    const temp = new URLSearchParams(window.location.search);
    return temp;
}
function getURLParameter(name) {
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
}
  var user = getUrl().get("email");
  var pass = getUrl().get("password")
  var img = "/assets/";
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
      
      for (let u of data) {
       if ((user == u.userName) && (pass = u.passWord)) {
          check = true;
          img += u.avatar;
          break;
       }
      }
      if (check == true){
         document.getElementById("Login").style.display = "none";
         document.getElementById("signUp").style.display = "none";
         document.getElementById("account").style.display = "block";
         document.getElementById("accImg").src = img;
        //  --------------------------------
        var hide = ['email','password'];
	      for(var h in hide) {
		      if(getURLParameter(h)) {
			      history.replaceState(null, document.getElementsByTagName("title")[0].innerHTML, window.location.pathname);
		      }
	      }
      } else{
      } 
    })

}