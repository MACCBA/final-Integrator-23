function login () {
    var user, password

    user = document.getElementById("userL").value;
    password = document.getElementById("passwordL").value;
   
    if ( user =="Admin" && password == "123456"){
        window.open  ("http://127.0.0.1:5500/index.html");
    } else {
        alert ("Datos inccorrectos, favor de inentar nuevamente")
    }
};

