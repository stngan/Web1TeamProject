function Login() {
    // <--lấy từ web/-->
    fetch("/Data/user.json")
      .then(function (res) {
        if (!res.ok) {
          throw Error("Http Error: ", res.status);
        }
        return res.json();
      })
      .then(function (data) {
        var user = document.getElementById("email").value;
        var pass = document.getElementById("password").value;
        var check = false;
        for (let u of data) {
         if ((user == u.userName) && (pass = u.passWord)) {
            check = true;
            break;
         }
        }
        if (check == true){
           document.getElementById("formLogin").submit();
      
        } else{
            alert("Tài khoản hoặc mật khẩu không chính xác");
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        } 
      })
      .catch(function (err) {
        alert(err.message);
      });
  }

  const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
let passwordsMatch = false;

// Check to see if passwords match
if (password1El.value === password2El.value) {
  passwordsMatch = true;
  password1El.style.borderColor = 'green';
  password2El.style.borderColor = 'green';
} else {
  passwordsMatch = false;
  password1El.style.borderColor = 'red';
  password2El.style.borderColor = 'red';
  return;
}
 