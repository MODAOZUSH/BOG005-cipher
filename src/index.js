import cipher from './cipher.js';

const cifrar= document.getElementById("continuar")
cifrar.addEventListener("click", cifrarmensaje)

function cifrarmensaje(){
    const mensaje= document.getElementById("message");
    mensaje.value= mensaje.value.toUpperCase();
    const keycode= document.getElementById("key");
    const cifrado=  cipher.encode(keycode.value, mensaje.value);
    const textoCifrado = document.getElementById("codeMessage");
    textoCifrado.value= cifrado; 
}

const descifrar= document.getElementById("continuar1")
descifrar.addEventListener("click", descifrarmensaje)

function descifrarmensaje(){
    const message= document.getElementById("message");
    message.value= message.value.toUpperCase();
    const keydecode= document.getElementById("key");
    const descifrado=  cipher.decode(keydecode.value, message.value);
    const textoDescifrado = document.getElementById("codeMessage");
    textoDescifrado.value= descifrado; 
}