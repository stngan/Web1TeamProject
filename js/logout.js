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