    var btnencriptar = document.getElementById("encriptador");
    var btndesencriptar = document.getElementById("desencriptador")
    var entrada = document.getElementById("entradatexto");
    var salida = document.getElementById("salidatexto");
    var btncopiar = document.getElementById("copiar")
    var muneco = document.getElementById("muneco")
    var texto1 = document.getElementById("mensajenoencotrado")
    var texto2 = document.getElementById("ingresetexto")


function encriptar(){
        salida.innerText = entrada.value.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        return
    }

function desencriptar(){
        salida.innerText = entrada.value.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        entrada.value = ""
        return
}

function copiar(){
    salida.select()
    document.execCommand("copy")
}

function ocultar(){
    muneco.style.display = "none"
    texto1.style.display = "none"
    texto2.style.display = "none"
}
btnencriptar.addEventListener("click", ocultar)
btncopiar.addEventListener("click", copiar);
btnencriptar.addEventListener("click", encriptar);
btndesencriptar.addEventListener("click", desencriptar);