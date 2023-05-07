const criptografarTexto = () => {
    let texto = document.getElementById("texto").value.toLowerCase();
    let resultado = "";
  
    for (let i = 0; i < texto.length; i++) {
      switch (texto[i]) {
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
          resultado += texto[i];
      }
    }
  
    document.getElementById("resultado").value = resultado;
  };
  
  const descriptografarTexto = () => {
    let texto = document.getElementById("texto").value.toLowerCase();
    let resultado = "";
  
    for (let i = 0; i < texto.length; i++) {
      if (
        texto[i] === "e" &&
        texto[i + 1] === "n" &&
        texto[i + 2] === "t" &&
        texto[i + 3] === "e" &&
        texto[i + 4] === "r"
      ) {
        resultado += "e";
        i += 4;
      } else if (
        texto[i] === "i" &&
        texto[i + 1] === "m" &&
        texto[i + 2] === "e" &&
        texto[i + 3] === "s"
      ) {
        resultado += "i";
        i += 3;
      } else if (texto[i] === "a" && texto[i + 1] === "i") {
        resultado += "a";
        i += 1;
      } else if (
        texto[i] === "o" &&
        texto[i + 1] === "b" &&
        texto[i + 2] === "e" &&
        texto[i + 3] === "r"
      ) {
        resultado += "o";
        i += 3;
      } else if (
        texto[i] === "u" &&
        texto[i + 1] === "f" &&
        texto[i + 2] === "a" &&
        texto[i + 3] === "t"
      ) {
        resultado += "u";
        i += 3;
      } else {
        resultado += texto[i];
      }
    }
  
    document.getElementById("resultado").value = resultado;
  };
  
  const copiarResultado = () => {
    const resultado = document.getElementById("resultado");
    resultado.select();
    navigator.clipboard.writeText(resultado.value);
    alert("Resultado copiado para a área de transferência!");
  };
  
  const botaoCopiar = document.getElementById("botao-copiar");
  botaoCopiar.addEventListener("click", copiarResultado);
  
  