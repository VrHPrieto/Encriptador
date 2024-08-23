const findCharacters = /[^a-z\s]/;

function encriptar() {
  let texto = document.getElementById("texto").value;
  console.log(findCharacters.test(texto));
  if (findCharacters.test(texto)) {
    alert("Solo letras minusculas y sin caracteres especiales");
  } else {
    let textoEncriptado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    document.getElementById("resultado").innerText = textoEncriptado;
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  if (findCharacters.test(texto)) {
    alert("Solo letras minusculas y sin caracteres especiales");
  } else {
    let textoDesencriptado = texto
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    document.getElementById("resultado").innerText = textoDesencriptado;
  }
}

function copiar() {
  let resultado = document.getElementById("resultado").value;
  console.log(resultado);
  navigator.clipboard
    .writeText(resultado)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
}
