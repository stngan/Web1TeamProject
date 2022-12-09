function load(){
    fetch("/Data/A&Cul.json")
    .then(function (res) {
      if (!res.ok) {
        throw Error("Http Error: ", res.status);
      }
      return res.json();
    })
    .then(function (data) {
      console.log(data[0].Author_user);
      let html="";
    for(let i = 0; i<= data.length-1; i++){
        
        // descr ============//
        html+= " <div class='card swiper-slide'>";
           html+="<div class='card__author'> " ;
             html+= " <div class='author-avatar'>" + "<img class='author-avatar-detail'"+ " src='"+ "/assets/admin/"+data[i].Author_avt+ "' alt=''>"
             html+=    
            "</div>";
            html +=
            "<div>" ;
               html+= "<div class='author-name'>" + data[i].   Author_user;html+="</div>" ;
                html+= "<div class='time-create'>";
                  html+= data[i].Author_timeUpdate 
                html+=  "</div>";
              html+= "</div>" ;
              html+="</div>" ;
                  html+= "<div class='card__image'>";
                          html+="<img class='card__image--detail' src='/assets/A&Cul/"+ data[i].img+ "' alt='anh hư'>"
              html+= "</div>"
              let des = data[i].Description;
              des = des.substring(0,30)+"...";
             html+="<div class='card__content'>";
             html+=" <p class='card__content--title'>"+ des+ "</p>";
             let temp = data[i].content;
             temp = temp.substring(0,45)+"..."
             html+=" <p class='card__content--desc'>"+temp+"</p>"
              html+= "<div class='card__content--hashtag'>"
              html+= "<span>#Tour</span>";
              let add = data[i].address.split(",");
              let tg = add[add.length-1];
              html+=  "<span class='card__content--add'>#"+tg+"</span>"
              html+="</div>"
              html+="<div class='author-rating'>"
                  html+="<span class='Stars' style='--rating:"+data[i].rate+"'>"
                html+=  "</span>"
              html+= "</div>"  
         html+= "</div>"

        html+= "</div>";
       
    }
    console.log(html);
    document.getElementById("card-wrapper swiper-wrapper").innerHTML=html;
    })

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