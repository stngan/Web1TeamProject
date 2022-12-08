function load(){
    fetch("/Data/place.json")
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
    }
    })

}