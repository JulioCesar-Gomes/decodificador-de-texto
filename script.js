//Combinação de normalize e replace - Resumindo decompõe os caracteres com acentos, separa-os e retira-os e substitui por "vazio"
function retirarAcentuacao(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function criptografar() {
    let inputText = document.getElementById("inputText").value;
    inputText = retirarAcentuacao(inputText);

    //Replace - substitui elementos/partes de uma string por outra. 
    let outputText = inputText.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober")
        .replace(/u/g, "ufat").replace(/[^a-z]/g, "");
    document.getElementById("outputText").value = outputText;
}

function descriptografar() {
    let inputText = document.getElementById("inputText").value;
    inputText = retirarAcentuacao(inputText);
    let outputText = inputText.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o")
        .replace(/ufat/g, "u").replace(/[^a-z]/g, "");// A letra g indica que todas as ocorrencias serão substituidas, (globalmente).

    //Seleciona Campo do HTML e retorna com novo valor atribuido (criptografado).
    document.getElementById("outputText").value = outputText;
}

const botaoCopiador = document.getElementById("botaoCopiador");
botaoCopiador.addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById("outputText").value)
        .then(() => {
            alert("Copiado para área de transferência");
        });
});

//Remove automaticamentes elementos indesejados do inputText especificados na funcao retirarAcentuacao()
document.getElementById("inputText").addEventListener("input", function () {
    this.value = retirarAcentuacao(this.value)
});
document.getElementById("outputText").addEventListener("input", function () {
    this.value = retirarAcentuacao(this.value)
});
