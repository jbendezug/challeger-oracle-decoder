// script.js

function encriptarTexto() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    
    var textoEncriptado = encriptar(input);
    output.value = textoEncriptado;
  }
  
  function desencriptarTexto() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    
    var textoDesencriptado = desencriptar(input);
    output.value = textoDesencriptado;
  }

  function limpiar() {
    var input = document.getElementById("input");
    input.value = "";
    var output = document.getElementById("output");
    output.value = "";
  }
  
  
  function encriptar(texto) {
    var resultado = "";
    
    for (var i = 0; i < texto.length; i++) {
      var letra = texto[i];
      
      switch (letra) {
        case "e":
          resultado += "enter";
          break;
        case "i":
          resultado += "imes";
          break;
        case "a":
          resultado += "ai";
          break;
        case "o":
          resultado += "ober";
          break;
        case "u":
          resultado += "ufat";
          break;
        default:
          resultado += letra;
      }
    }
    
    return resultado;
  }
  
  function desencriptar(texto) {
    var resultado = "";
    
    for (var i = 0; i < texto.length; i++) {
      var letra = texto[i];
      
      if (letra === "e" && texto.substr(i, 5) === "enter") {
        resultado += "e";
        i += 4;
      } else if (letra === "i" && texto.substr(i, 4) === "imes") {
        resultado += "i";
        i += 3;
      } else if (letra === "a" && texto.substr(i, 2) === "ai") {
        resultado += "a";
        i += 1;
      } else if (letra === "o" && texto.substr(i, 4) === "ober") {
        resultado += "o";
        i += 3;
      } else if (letra === "u" && texto.substr(i, 4) === "ufat") {
        resultado += "u";
        i += 3;
      } else {
        resultado += letra;
      }
    }
    
    return resultado;
  }

  function copiarTexto() {
    var output = document.getElementById("output");
    output.select();
    document.execCommand("copy");
    
    var mensajeCopiado = document.getElementById("mensaje-copiado");
    mensajeCopiado.style.display = "block";
    
    setTimeout(function() {
      mensajeCopiado.style.display = "none";
    }, 2000);
  }
  
  