document.getElementById("boton").addEventListener("click", function(){
    let myNav = document.getElementById("myNavbar");
    if(myNav.className === "navegacion"){
        myNav.className += " responsive"
    }else{
        myNav.className = "navegacion"
    }
})