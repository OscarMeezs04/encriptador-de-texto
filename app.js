const clave= {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

//Mostrar instrucciones

function Display(){
    var lis = document.getElementById('ReglasEncriptador');

    if (lis.style.display === "block"){
        lis.style.display = "none";
    } else{
        lis.style.display = "block";
    }

}

// Funciones para encriptar

function Encriptar(){
    var mensaje = document.getElementById('mensaje').value;
    var resultado = '';
    var resultadoElement = document.getElementById('resultado');

    // Revisa si existe una imagen de fondo en "Resultado"
    var hasBackgroundImage = window.getComputedStyle(resultadoElement).getPropertyValue('background-image') !== 'none';

    for (var i = 0; i < mensaje.length; i++) {
        var char = mensaje[i];

        if (char === 'e' || char === 'i' || char === 'a' || char === 'o' || char === 'u') {
            resultado += clave[char];
        } else {
            resultado += char;
        }
    }

    //Quita el fondo sólamente si 'mensaje' no está vacío
    if (mensaje.trim() !== '' && hasBackgroundImage) {
        resultadoElement.style.backgroundImage = 'none';
    }

    // Muestra el texto encriptado
    resultadoElement.innerText = resultado;
} 

function Desencriptar(){
    var msj = document.getElementById('mensaje').value;
    var res = '';
    const RegExp = /(enter|imes|ai|ober|ufat)/g;
    res = msj.replace(RegExp, (match) => {
        return {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        }[match];
    });

    var resultadoElement = document.getElementById('resultado');
    var hasBackgroundImage = window.getComputedStyle(resultadoElement).getPropertyValue('background-image') !== 'none';

    // Quita el fondo sólo si hay un mensaje para encriptar
    if (msj.trim() !== '' && hasBackgroundImage) {
        resultadoElement.style.backgroundImage = 'none';
    }

    resultadoElement.innerText = res;

}

// Copiar en el portapapeles 
async function copiarAlPortapapeles(resultado) {
    var copy = document.getElementById('resultado');

    try {
        await navigator.clipboard.writeText(copy.value);
        console.log('Text copied to clipboard successfully!');
    } catch (err) {
        console.error('Error copying text to clipboard:', err);
    }
}
   
  
