var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }


    user = localStorage.getItem("user");
    pass = localStorage.getItem("pass");
    var img = "/assets/";
    function loadUser(){
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