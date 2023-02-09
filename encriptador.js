
function encriptarTexto(){
    let res="";
    let encriptar=document.getElementById('encriptar-Texto');
    let texto = document.getElementById("text-encriptar").value;
    for (let i = 0; i< texto.length; i++) {
        if (esVocal(texto.charAt(i))) {
          res=res+encriptacion(texto.charAt(i));
        } else {
          res=res+texto.charAt(i);
        }
      }
      document.getElementById("conteiner-encriptador").style.display="none";
      document.getElementById("text-desencriptar").value = res;
      document.getElementById("text-desencriptar").style.display = "block";
      document.getElementById("button-copy").style.display= "block";
      return res;
    
}
function desencriptarTexto(){
    let res="";
    let desencriptar=document.getElementById('desencriptar-Texto');
    let texto = document.getElementById("text-encriptar").value;
    for (let i = 0; i< texto.length; i++) {
        if (esVocal(texto.charAt(i))) {
            res=res+texto.charAt(i);
            i=desencriptacion(texto.charAt(i)) +i;
        } else {
          res=res+texto.charAt(i);
        }
      }
      document.getElementById("text-desencriptar").value = res;
      return res;
    
}
function desencriptacion(vocal){
    if(vocal=="a"){
        return 1;
    }
    if(vocal=="e"){
        return 4;
    }
    if(vocal=="i" || vocal=="o" || vocal=="u"){
        return 3;
    }
}
function encriptacion(vocal){
    if(vocal=="a"){
        return "ai";
    }
    if(vocal=="e"){
        return "enter";
    }
    if(vocal=="i"){
        return "imes";
    }
    if(vocal=="o"){
        return "ober";
    }
    if(vocal=="u"){
        return "ufet";
    }

}
function esVocal(vocal) {
    return vocal=="a" || vocal=="e" || vocal=="i" || vocal=="o" || vocal=="u"
}
function copy() {
    let copyText = document.querySelector("#text-desencriptar");
    copyText.select();
    document.execCommand("button-copy");
  }
  function copyToClipBoard() {
    let copyText = document.getElementById("text-desencriptar");
    copyText.select();
    document.execCommand('copy');
    
    alert(" copiado")
  }

document.getElementById("text-desencriptar").style.display = "none";
document.getElementById("button-copy").style.display = "none";
