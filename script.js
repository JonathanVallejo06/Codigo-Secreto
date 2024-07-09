function verificarTexto(accion) {
    const inputText = document.getElementById('inputText').value;
    if (inputText.trim() === '') {
        document.getElementById('noMessageSection').style.display = 'block';
        document.getElementById('outputText').value = ''; // Limpiar el área de salida
        document.querySelector('.respuesta').style.display = 'none'; // Ocultar área de respuesta
    } else {
        if (accion === 'encriptar') {
            encriptar();
        } else {
            desencriptar();
        }
    }
}

function encriptar() {
    const inputText = document.getElementById('inputText').value;
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('outputText').value = encryptedText;
    mostrarResultado();
}

function desencriptar() {
    const inputText = document.getElementById('inputText').value;
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('outputText').value = decryptedText;
    mostrarResultado();
}

function mostrarResultado() {
    document.querySelector('.respuesta').style.display = 'block';
    document.getElementById('noMessageSection').style.display = 'none';
}

function copiarTexto() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
