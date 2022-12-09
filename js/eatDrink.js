// function load(){
//     fetch("/Data/E&D.json")
//     .then(function (res) {
//       if (!res.ok) {
//         throw Error("Http Error: ", res.status);
//       }
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     // for(let i = 0; i<= data.length; i++){
//     //     let html="";
//     //     // descr ============//
//     //     html+= " <div class='card swiper-slide'>";
//     //      html+="<div class='card__author'> " ;
//     //      html+= " <div class='author-avatar'>" + "<img class='author-avatar-detail'"+ " src='"+ "/assets/admin/"+ "' alt=''>"
//     //     html+=    
//     //      "</div>";
//     //    html +=
//     //     "<div>" ;
//     //     html+= "<div class='author-name'>" + data[i].Author_user+"</div>" ;
//     //     html+= "<div class='time-create'>";
//     //     html+= data[i].Author_timeUpdate 
//     //     html+=  "</div>";
//     //     html+= "</div>" ;
//     //     html+="</div>" ;
//     //     html+= "</div>";
//     //     console.log(html);
//     // }
//     })

// }


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
      console.log(data)
    })

}