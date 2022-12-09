function load(){
    fetch("/Data/E&D.json")
    .then(function (res) {
      if (!res.ok) {
        throw Error("Http Error: ", res.status);
      }
      return res.json();
    })
    .then(function (data) {
    for(let i = 0; i<= data.length; i++){
        // descr ============//
         document.getElementsByClassName("card__content--title")[i + 5].innerHTML = data[i].Description;
         //content ========//
        let desc = data[i].content;
        desc = desc.substring(0, 45) + "...";
        document.getElementsByClassName("card__content--desc")[i+5].innerHTML = desc;
        // hashtag =====///
     let add = data[i].address.split(",");
     console.log(add[add.length-1]);
     document.getElementsByClassName("card__content--add")[i+5].innerHTML ="#"+ add[add.length-1];
     // img==================//
        document.getElementsByClassName("card__image--detail")[i+5].src = "/assets/E&D/"+ data[i].img;
      //Author 
      document.getElementsByClassName("author-avatar-detail")[i].src = "/assets/admin/"+data[i].Author_avt;
      document.getElementsByClassName("author-name")[i+5].innerHTML = data[i].Author_user;
      document.getElementsByClassName("time-create")[i+5].innerHTML = data[i].Author_timeUpdate;
      //rating
      document.getElementsByClassName("Stars")[i+5].style = "--rating: "+data[i].rate+";";
    }
    })

}
// var user = getUrl().get("email");
//   var pass = getUrl().get("password");
//   if ( getUrl().get("email")==null){
//     user = localStorage.getItem("user");
//     pass = localStorage.getItem("pass")
//   }
//   var img = "/assets/";
// function load(){
//     fetch("/Data/user.json")
//     .then(function (res) {
//       if (!res.ok) {
//         throw Error("Http Error: ", res.status);
//       }
//       return res.json();
//     })
//     .then(function (data) {
//       var check = false;
//       var temp;
//       for (let u of data) {
//        if ((user == u.userName) && (pass = u.passWord)) {
//           check = true;
//           img += u.avatar;
//           temp = u.userName;
//           break;
//        }
//       }
//       if (check == true){
//          document.getElementById("Login").style.display = "none";
//          document.getElementById("signUp").style.display = "none";
//          document.getElementById("account").style.display = "block";
//          document.getElementById("accImg").src = img;
//         //  document.getElementById("account__user").innerHTML = temp;
//         //  --------------SAVE data to locationstorage------------------
        
//         localStorage.setItem("user", user);
//         localStorage.setItem("pass", pass);
//         var hide = ['email','password'];
// 	      for(var h in hide) {
// 		      if(getURLParameter(h)) {
// 			      history.replaceState(null, document.getElementsByTagName("title")[0].innerHTML, window.location.pathname);
// 		      }
// 	      }
//       } else{
//       } 
//     })

// }