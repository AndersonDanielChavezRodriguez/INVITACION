const sobre = document.getElementById("carta");
const mensaje = document.getElementById("mensaje");

document.getElementById('carta').addEventListener("click",function(){
    sobre.style.opacity = "0";
    mensaje.style.opacity = "1";
    sobre.style.transform = "translatey(400px)"
    mensaje.style.transform = "translatey(-200px)"
})

document.getElementById('mensaje').addEventListener("click", function(){
    mensaje.style.transform = "translatey(200px)"
    sobre.style.transform = "translatey(0px)"
    sobre.style.opacity = "1";
    mensaje.style.opacity = "0";
})