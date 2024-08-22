function encriptar() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = texto
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    document.getElementById("resultado").innerText = textoEncriptado;
  }

  function desencriptar() {
    
    let texto = document.getElementById("texto").value;
    
    let textoDesencriptado = texto
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    
    document.getElementById("resultado").innerText = textoDesencriptado;
  }
  
  function copiar() {
    let resultado = document.getElementById("resultado").innerText;
    navigator.clipboard
      .writeText(resultado)
      .then(() => {
        alert("Texto copiado al portapapeles");
      })
      .catch((error) => {
        console.error("Error al copiar el texto: ", error);
      });
  }